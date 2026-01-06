// src/data/fitData.ts

export type FitCategoryId =
  | "web-structure"
  | "messaging"
  | "seo"
  | "local"
  | "content"
  | "assets"
  | "decision-ownership"
  | "standards-stewardship";

export type IntroCard = {
  title: string;
  body: string;
  leftBoxTitle: string;
  leftBoxBody: string;
  rightBoxTitle: string;
  rightBoxBody: string;
};

export type FitCategory = {
  id: FitCategoryId;
  title: string;
  teaser: string; // left list helper line

  intro: string; // right panel intro paragraph (teacher mode)
  problemOutcomes: string[]; // must be 5 (bulleted)
  approach: string; // your sell line / correction paragraph

  fitNot: string[]; // 4-ish, box 1
  fitStrong: string[]; // 4-ish, box 2

  positiveOutcomes: string[]; // must be 5 (chips at bottom)
};

export const INTRO_CARD: IntroCard = {
  title: "How engagement takes shape.",
  body:
    "Most clients come to us after clarity has already been challenged – competing priorities, blurred ownership, or standards that don’t survive real tradeoffs. \n\nThe categories on the left reflect the points where expectations, authority, and standards are most often tested – and where the outcome of the work tends to change as a result.",
  leftBoxTitle: "Defined Scope",
  leftBoxBody:
    "Work proceeds when scope, authority, and standards are clearly owned.",
  rightBoxTitle: "Sustainable Engagement",
  rightBoxBody:
    "Alignment is designed to hold as decisions compound, not unravel as complexity increases.",
};

export const FIT_CATEGORIES: FitCategory[] = [
  {
    id: "web-structure",
    title: "Web & Structural Design",
    teaser: "Structure first. A site people can navigate with confidence.",

    intro:
      "Most websites don’t fail because the design is “bad.” They fail because structure was treated as layout instead of decision logic. Navigation, hierarchy, and page relationships dictate how customers interpret scope, credibility, and competence. When structure is unclear, even strong messaging gets misread.",
    problemOutcomes: [
      "Visitors miss core services or misunderstand scope",
      "Navigation becomes messy as offerings expand",
      "Pages feel redundant or inconsistent across sections",
      "Updates trigger restructuring instead of clean iteration",
      "The site becomes harder to maintain than it should be",
    ],
    approach:
      "Structural design is how expectations become stable. We build a durable information framework – what belongs where, what matters most, and how customers move through decisions – so your site can expand without rework, drift, or repeated reinterpretation.",

    fitNot: [
      "You want layout changes without defining information priorities",
      "You expect new pages to “just fit” without structural decisions",
      "You prefer aesthetics over clarity when tradeoffs appear",
      "You want speed now, even if it creates rework later",
    ],
    fitStrong: [
      "You want customers to understand scope without explanation",
      "You value structure that holds up as services expand",
      "You prefer clean hierarchy over clever layout tricks",
      "You treat the site as operational infrastructure, not a campaign",
    ],

    positiveOutcomes: [
      "Clear navigation logic",
      "Faster comprehension",
      "Expandable structure",
      "Lower maintenance load",
      "Cleaner decision paths",
    ],
  },

  {
    id: "messaging",
    title: "Messaging & Narrative Clarity",
    teaser: "Reduce ambiguity. Tighten interpretation across touchpoints.",

    intro:
      "Messaging problems are rarely about words – they’re about unresolved decisions. When teams aren’t aligned on scope, priority, or positioning, language becomes vague by necessity. The result is copy that sounds fine but explains nothing clearly enough to anchor expectation.",
    problemOutcomes: [
      "Service descriptions that feel broad or interchangeable",
      "Different pages describe the same thing in different ways",
      "Customers misunderstand scope and request the wrong work",
      "Internal teams debate phrasing instead of resolving decisions",
      "Messaging drifts as more people contribute over time",
    ],
    approach:
      "Narrative clarity is operational, not creative. We define the language that holds the business together – service definitions, positioning, and page-level messaging – so customers and internal teams arrive at the same understanding without being told twice.",

    fitNot: [
      "You want messaging to stay flexible so teams interpret it their own way",
      "You’re looking for phrasing without resolving underlying decisions",
      "You prefer improvisation over shared language standards",
      "You expect clarity to emerge after launch instead of before it",
    ],
    fitStrong: [
      "You want the business explained the same way no matter who’s speaking",
      "You value definitions over persuasion",
      "You expect messaging to reduce friction, not create debate",
      "You treat clarity as an operational asset, not a creative exercise",
    ],

    positiveOutcomes: [
      "Clear service definitions",
      "Consistent interpretation",
      "Less internal debate",
      "Fewer misaligned inquiries",
      "Tighter scope language",
    ],
  },

  {
    id: "seo",
    title: "SEO & Visibility Foundations",
    teaser: "Discoverability that reflects what you actually offer.",

    intro:
      "Visibility issues are rarely caused by a lack of effort – they’re caused by unclear signals being amplified. Many businesses invest in SEO before they’ve decided what they actually want to be known for, which leads to pages ranking for the wrong things or competing against each other.",
    problemOutcomes: [
      "Traffic increases without matching intent",
      "Pages compete against each other in search",
      "Visibility improves without revenue impact",
      "SEO work feels disconnected from operations",
      "Ongoing “fixes” that don’t compound",
    ],
    approach:
      "SEO foundations align discoverability with reality. The goal isn’t traffic for its own sake, but visibility that reinforces accurate expectations before a customer ever clicks. When search signals reflect how the business actually operates, inbound demand becomes easier to qualify and easier to convert.",

    fitNot: [
      "You want visibility without defining service priorities",
      "You expect traffic to clarify positioning for you",
      "You prefer flexibility over signal consistency",
      "You treat SEO as a tactic, not a durable asset",
    ],
    fitStrong: [
      "You want search visibility to reflect operational reality",
      "You care which services attract demand",
      "You expect signals to compound over time",
      "You treat discoverability as expectation-setting, not vanity metrics",
    ],

    positiveOutcomes: [
      "Higher-intent traffic",
      "Compounding rankings",
      "Cleaner page ownership",
      "Search that supports revenue",
      "Less corrective SEO work",
    ],
  },

  {
    id: "local",
    title: "Local Presence & Listings",
    teaser: "Own the map. Control what customers see before they click.",

    intro:
      "Local presence is not a checklist – it’s a first-contact decision system. Before customers reach your site, they form expectations based on maps, profiles, and summaries. If those signals are inconsistent, your team pays for it in clarification, friction, and misaligned calls.",
    problemOutcomes: [
      "Customers arrive with incorrect assumptions",
      "Repeated clarification calls about basics",
      "Inconsistent descriptions across platforms",
      "Map visibility that doesn’t match service reality",
      "Reviews reference expectations you didn’t intend to set",
    ],
    approach:
      "We treat local presence as expectation control. Listings, categories, summaries, and linked assets are aligned so what customers see before they click matches what they’ll experience after they do – reducing friction and improving fit on the front end.",

    fitNot: [
      "You want to set it and forget it while the business changes",
      "You don’t want to standardize how the business is described",
      "You prefer loosely managed profiles across platforms",
      "You treat local visibility as separate from operations",
    ],
    fitStrong: [
      "You want fewer misaligned calls and walk-ins",
      "You care what customers assume before they contact you",
      "You want consistent representation across platforms",
      "You treat local presence as a front-line operational lever",
    ],

    positiveOutcomes: [
      "Cleaner first contact",
      "Less clarification load",
      "More accurate inquiries",
      "Stronger map trust",
      "Fewer wrong-fit leads",
    ],
  },

  {
    id: "content",
    title: "Content Systems & Publishing",
    teaser: "Content as structure – not volume. Built to support services.",

    intro:
      "Content fails when it’s produced without a system. Publishing without structure leads to duplication, drift, and decision fatigue – especially as teams grow or responsibilities shift. Over time, “more content” starts working against clarity.",
    problemOutcomes: [
      "Too much content, not enough clarity",
      "Outdated pages linger because nobody owns updates",
      "Contradictory explanations across similar pages",
      "Publishing slows due to uncertainty and rework",
      "Teams stop trusting what’s already published",
    ],
    approach:
      "We build content systems that reduce drift: what gets published, why it exists, who owns updates, and how pages stay consistent over time. The point is compounding clarity – content that supports services instead of obscuring them.",

    fitNot: [
      "You want output volume without governance",
      "You prefer teams publishing independently without standards",
      "You don’t want to define ownership for updates",
      "You treat content as activity instead of operational clarity",
    ],
    fitStrong: [
      "You want content to reinforce service understanding",
      "You’re willing to define rules for publishing and updates",
      "You want less duplication and contradiction over time",
      "You care about compounding clarity, not constant output",
    ],

    positiveOutcomes: [
      "Clean publishing rules",
      "Lower drift risk",
      "Faster updates",
      "More trusted pages",
      "Less duplication",
    ],
  },

  {
    id: "assets",
    title: "Brand & Operational Assets",
    teaser: "Materials that help customers choose – quickly and correctly.",

    intro:
      "Assets fail when they’re designed in isolation from how the business actually runs. Sales decks, one-pagers, proposals, and internal materials only work when they reflect real decision paths – not aspirational narratives. If they aren’t grounded, teams stop using them.",
    problemOutcomes: [
      "Custom explanations required every time",
      "Inconsistent sales materials across reps or locations",
      "Assets feel outdated quickly as the business evolves",
      "Teams avoid existing tools because they don’t trust them",
      "Prospects misunderstand what they’re buying until late-stage",
    ],
    approach:
      "We build assets as decision tools. Materials are structured to reduce interpretation, reinforce accurate expectations, and stay usable as the business changes – so your team can communicate consistently without rewriting the story every week.",

    fitNot: [
      "You want polished materials without operational grounding",
      "You expect assets to compensate for unclear scope",
      "You prefer style over decision clarity",
      "You don’t want to standardize how the business is explained",
    ],
    fitStrong: [
      "You want materials that reduce interpretation and debate",
      "You care about consistent expectations before commitment",
      "You want tools teams actually use in the real world",
      "You treat assets as operational infrastructure",
    ],

    positiveOutcomes: [
      "Faster decisions",
      "Less explanation debt",
      "More consistent sales flow",
      "Assets that stay useful",
      "Cleaner scope alignment",
    ],
  },

  {
  id: "decision-ownership",
  title: "Decision Ownership & Authority",
  teaser: "Clear ownership prevents drift and rework.",

  intro:
    "Most breakdowns don’t come from bad ideas – they come from unclear authority. When decision rights are fragmented or informal, standards erode quietly. Clarity holds when ownership is explicit and decisions can be made – and defended – without delay.",
  problemOutcomes: [
    "Projects stall while decisions wait for consensus",
    "Revisions override prior agreements",
    "Standards weaken under time pressure",
    "Responsibility diffuses across teams",
    "Work degrades after handoff",
  ],
  approach:
    "We establish clear decision ownership and escalation paths so standards survive real-world pressure. Alignment holds when authority is visible, respected, and exercised consistently.",
  fitNot: [
    "You avoid naming a final decision-maker",
    "You rely on consensus to resolve conflicts",
    "You override decisions after work begins",
    "You expect vendors to manage internal politics",
  ],
  fitStrong: [
    "You can name who owns final decisions",
    "You value speed with accountability",
    "You protect agreed standards under pressure",
    "You expect decisions to stick once made",
  ],
  positiveOutcomes: [
    "Faster decisions",
    "Reduced rework",
    "Clear accountability",
    "Standards that hold",
    "Predictable execution",
  ],
},

{
  id: "standards-stewardship",
  title: "Standards Enforcement & Stewardship",
  teaser: "Clarity only survives when it’s protected.",

  intro:
    "Defining standards is easy. Maintaining them is not. Most organizations lose clarity because no one is accountable for protecting it once the work exists. Without stewardship, erosion is inevitable.",
  problemOutcomes: [
    "Inconsistent updates across teams",
    "Short-term fixes override long-term structure",
    "New work ignores established standards",
    "Quality varies by contributor",
    "The system decays over time",
  ],
  approach:
    "We design systems that assume change – and assign responsibility for protecting clarity as the business evolves. Standards hold when someone owns their enforcement.",
  fitNot: [
    "You treat standards as optional guidelines",
    "You expect quality to self-regulate",
    "You prioritize speed over consistency",
    "You don’t enforce alignment once work ships",
  ],
  fitStrong: [
    "You expect standards to be upheld",
    "You assign ownership for maintaining clarity",
    "You protect structure during growth",
    "You treat quality as operational, not aesthetic",
  ],
  positiveOutcomes: [
    "Consistent execution",
    "Lower maintenance burden",
    "Durable systems",
    "Predictable quality",
    "Reduced erosion over time",
  ],
}
];
