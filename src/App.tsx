/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { RoadmapTimeline } from './components/RoadmapTimeline';
import { WhatYouWillLearn } from './components/WhatYouWillLearn';
import { ContentCarousel } from './components/ContentCarousel';
import { InsideLookSection } from './components/InsideLookSection';
import { BonusesSection } from './components/BonusesSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { TrustSection } from './components/TrustSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ExitIntentModal } from './components/ExitIntentModal';
import { SocialProofToast } from './components/SocialProofToast';
import { trackEvent } from './utils/analytics';

export default function App() {
  useEffect(() => {
    // 1. Fire PageView on load
    trackEvent('PageView', { path: window.location.pathname });

    // 2. Fire ViewContent after 3 seconds or when user reads past hero
    const timer = setTimeout(() => {
      trackEvent('ViewContent', { content_id: 'codigo_fuerza_28_main' });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#101115] text-[#B8BBC2] selection:bg-[#F4B735] selection:text-[#101115] flex flex-col antialiased">
      {/* Top Reassurance Header */}
      <Header />

      <main className="flex-1">
        {/* SECCIÓN 1 — HERO PRINCIPAL */}
        <HeroSection />

        {/* SECCIÓN 2 — CONEXIÓN CON EL PROBLEMA */}
        <ProblemSection />

        {/* SECCIÓN 3 — PRESENTACIÓN DE LA SOLUCIÓN */}
        <SolutionSection />

        {/* SECCIÓN 4 — CÓMO FUNCIONA EL PROGRAMA */}
        <RoadmapTimeline />

        {/* SECCIÓN 5 — QUÉ APRENDERÁS */}
        <WhatYouWillLearn />

        {/* SECCIÓN ESTRATÉGICA — CARRUSEL DE CONTENIDO REAL DEL LIBRO */}
        <ContentCarousel />

        {/* SECCIÓN 6 — VISTA INTERIOR DEL EBOOK */}
        <InsideLookSection />

        {/* SECCIÓN 7 — PRESENTACIÓN DE LOS CUATRO BONOS */}
        <BonusesSection />

        {/* SECCIÓN 8 — PARA QUIÉN ES EL PROGRAMA */}
        <TargetAudienceSection />

        {/* SECCIÓN 9 — CONFIANZA */}
        <TrustSection />

        {/* SECCIÓN 10 — OFERTA ESPECIAL */}
        <OfferSection />

        {/* SECCIÓN 11 — GARANTÍA DE 7 DÍAS */}
        <GuaranteeSection />

        {/* SECCIÓN 12 — PREGUNTAS FRECUENTES */}
        <FaqSection />

        {/* SECCIÓN 13 — CIERRE FINAL */}
        <FinalCtaSection />
      </main>

      {/* SECCIÓN 14 — FOOTER */}
      <Footer />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyBar />

      {/* Exit Intent Retention Modal */}
      <ExitIntentModal />

      {/* Social Proof Live Sales Notifications */}
      <SocialProofToast />
    </div>
  );
}
