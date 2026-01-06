type CFPagesContext<Env> = {
  request: Request;
  env: Env;
};

type Env = {
  RESEND_API_KEY: string;
  TURNSTILE_SECRET_KEY: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
};

type ContactBody = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  phone?: unknown;
  message?: unknown;
  turnstileToken?: unknown;

  needs?: unknown;
  websiteStatus?: unknown;

  // New fields
  primaryGoal?: unknown;
  timing?: unknown;
  websiteUrl?: unknown;
  preferredContact?: unknown;
};

export const onRequestPost = async (
  context: CFPagesContext<Env>
): Promise<Response> => {
  const { request, env } = context;

  const origin = request.headers.get("Origin") || "*";
  const corsHeaders: Record<string, string> = {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (!env.RESEND_API_KEY || !env.TURNSTILE_SECRET_KEY) {
    return json({ ok: false, error: "Server not configured." }, 500, corsHeaders);
  }

  const ALLOWED_NEEDS = new Set<string>([
    "Brand + positioning (BrandQo)",
    "Website (new build / rebuild)",
    "Website updates (existing site)",
    "SEO + indexing",
    "Content + copy",
    "Customer media (photo / video)",
    "Social profiles + presence",
    "Domain + email setup",
    "Reputation (reviews / listings)",
    "Other / not sure",
  ]);

  const ALLOWED_WEBSITE_STATUS = new Set<string>([
    "No website yet",
    "Website exists, needs a rebuild",
    "Website exists, needs updates",
    "Website exists, performing well (sanity check)",
    "Not sure",
  ]);

  const ALLOWED_PRIMARY_GOALS = new Set<string>([
    "Clarify positioning / messaging",
    "Increase qualified leads",
    "Improve credibility / trust",
    "Fix inconsistency across channels",
    "Prepare for growth or launch",
    "Not sure yet",
  ]);

  const ALLOWED_TIMING = new Set<string>([
    "Exploring / no rush",
    "Within 30 days",
    "30–90 days",
    "Time-sensitive",
  ]);

  const ALLOWED_CONTACT_METHOD = new Set<string>(["Email", "Phone", "Text"]);

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return json({ ok: false, error: "Invalid JSON body." }, 400, corsHeaders);
  }

  const name = safeStr(body.name, 120);
  const email = safeStr(body.email, 180);
  const company = safeStr(body.company, 180);
  const phone = safeStr(body.phone, 40);
  const message = safeStr(body.message, 4000);
  const token = safeStr(body.turnstileToken, 2048);

  const needs = normalizeNeeds(body.needs, ALLOWED_NEEDS);

  const websiteStatusRaw = safeStr(body.websiteStatus, 120);
  const websiteStatus = ALLOWED_WEBSITE_STATUS.has(websiteStatusRaw)
    ? websiteStatusRaw
    : "Not sure";

  const primaryGoalRaw = safeStr(body.primaryGoal, 180);
  const primaryGoal = ALLOWED_PRIMARY_GOALS.has(primaryGoalRaw)
    ? primaryGoalRaw
    : "Not sure yet";

  const timingRaw = safeStr(body.timing, 120);
  const timing = ALLOWED_TIMING.has(timingRaw) ? timingRaw : "Exploring / no rush";

  const preferredContactRaw = safeStr(body.preferredContact, 40);
  const preferredContact = ALLOWED_CONTACT_METHOD.has(preferredContactRaw)
    ? preferredContactRaw
    : "Email";

  const websiteUrl = safeStr(body.websiteUrl, 500);

  const phoneRequired = preferredContact !== "Email";

  if (!name || !email || !message || !token || needs.length < 1) {
    return json({ ok: false, error: "Missing required fields." }, 400, corsHeaders);
  }

  if (phoneRequired && !phone) {
    return json(
      { ok: false, error: "Phone is required for your preferred contact method." },
      400,
      corsHeaders
    );
  }

  const verify = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, token);
  if (!verify) {
    return json({ ok: false, error: "Verification failed." }, 403, corsHeaders);
  }

  const to = env.CONTACT_TO_EMAIL || "support@indexqo.com";
  const from = env.CONTACT_FROM_EMAIL || "IndexQo Support <support@indexqo.com>";

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    `Preferred contact: ${preferredContact}`,
    `Phone: ${phone || "-"}`,
    ``,
    `Primary goal: ${primaryGoal}`,
    `Timing: ${timing}`,
    `Needs: ${needs.join(", ")}`,
    `Website status: ${websiteStatus}`,
    `Website: ${websiteUrl || "-"}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const resendResp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `IndexQo Contact — ${name}`,
      text,
    }),
  });

  if (!resendResp.ok) {
    return json({ ok: false, error: "Email delivery failed." }, 502, corsHeaders);
  }

  return json({ ok: true }, 200, corsHeaders);
};

function json(data: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...headers,
    },
  });
}

function safeStr(v: unknown, maxLen: number) {
  if (typeof v !== "string") return "";
  const s = v.trim();
  return s.length > maxLen ? s.slice(0, maxLen) : s;
}

function normalizeNeeds(v: unknown, allowed: Set<string>) {
  if (!Array.isArray(v)) return [];
  return v
    .filter((x): x is string => typeof x === "string" && allowed.has(x))
    .filter((x, i, arr) => arr.indexOf(x) === i);
}

async function verifyTurnstile(secret: string, token: string) {
  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);

  const resp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });

  const data = (await resp.json().catch(() => null)) as { success?: boolean } | null;
  return Boolean(data?.success);
}
