import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { LandingPage } from "./components/LandingPage";

import { Signal } from "./components/Signal";
import { Services } from "./components/Services";
import { Solutions } from "./components/Solutions";
import { Branding } from "./components/Branding";
import { Philosophy } from "./components/Philosophy";
import { NextSteps } from "./components/NextSteps";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

import { Privacy } from "./components/legal/Privacy";
import { Terms } from "./components/legal/Terms";
import { AcceptableUse } from "./components/legal/AcceptableUse";

//import Seo from "./components/Seo";
import ScrollToTop from "./components/ui/ScrollToTop";

import { ROUTES } from "./types";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 selection:bg-slate-200 selection:text-slate-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      {/*<Seo />*/}
      <AppLayout>
        <Routes>
          <Route path={ROUTES.HOME} element={<LandingPage />} />

          <Route path={ROUTES.SIGNAL} element={<Signal />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.SOLUTIONS} element={<Solutions />} />
          <Route path={ROUTES.BRANDQO} element={<Branding />} />
          <Route path={ROUTES.PHILOSOPHY} element={<Philosophy />} />
          <Route path={ROUTES.NEXT_STEPS} element={<NextSteps />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />

          <Route path={ROUTES.PRIVACY} element={<Privacy />} />
          <Route path={ROUTES.TERMS} element={<Terms />} />
          <Route path={ROUTES.ACCEPTABLEUSE} element={<AcceptableUse />} />

          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </AppLayout>
    </>
  );
}
