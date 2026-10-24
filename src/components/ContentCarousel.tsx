import React, { useState } from 'react';
import {
  Pause,
  Play,
  Maximize2,
  X,
  Sparkles,
  CheckCircle2,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { BOOK_CONTENT_PAGES, BookContentPage } from '../data/landingData';
import { CtaButton } from './CtaButton';

export const ContentCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState<'normal' | 'fast'>('normal');
  const [selectedZoomPage, setSelectedZoomPage] = useState<BookContentPage | null>(null);

  // Duplicate items twice to achieve seamless infinite looping
  const infinitePages = [...BOOK_CONTENT_PAGES, ...BOOK_CONTENT_PAGES];

  const animationDuration = speed === 'fast' ? '22s' : '38s';

  return (
    <section
      id="contenido-interior"
      className="py-18 md:py-26 bg-gradient-to-b from-[#101115] via-[#14161C] to-[#101115] relative overflow-hidden border-b border-white/5"
    >
      {/* Background glow ambiance */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-[#F4B735]/8 rounded-full blur-[170px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header styled after the user's reference */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#191B20] border border-[#F4B735]/40 text-xs md:text-sm font-bold text-[#F4B735] uppercase tracking-wider mb-5 shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VISTA REAL DEL CONTENIDO EN FLUJO INFINITO</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase mb-4 tracking-tight">
            Así se ve Código Fuerza 28 por dentro
          </h2>

          {/* Subtitle */}
          <p className="text-[#B8BBC2] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Más claridad, instrucciones anatómicas precisas y rutinas estructuradas que se sienten profesionales desde el primer vistazo.
          </p>
        </div>

        {/* Interactive Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-2 sm:px-4">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <BookOpen className="w-4 h-4 text-[#F4B735]" />
            <span>Recorrido visual continuo · 8 páginas oficiales</span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Speed Toggle */}
            <button
              onClick={() => setSpeed((prev) => (prev === 'normal' ? 'fast' : 'normal'))}
              aria-label="Cambiar velocidad de desplazamiento"
              className="px-3 py-1.5 rounded-xl bg-[#191B20] border border-white/10 hover:border-[#F4B735] text-xs font-bold text-gray-300 hover:text-white transition-all cursor-pointer"
            >
              Velocidad: <span className="text-[#F4B735] uppercase">{speed === 'normal' ? 'Normal' : 'Rápida'}</span>
            </button>

            {/* Pause / Play button */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#191B20] border border-white/10 hover:border-[#F4B735] text-xs font-bold text-white transition-all cursor-pointer shadow-md active:scale-95"
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                  <span>Reanudar</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#F4B735] fill-current" />
                  <span>Pausar</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Track with side fade gradients */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left edge shadow gradient */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 md:w-40 z-20 bg-gradient-to-r from-[#101115] via-[#101115]/80 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Right edge shadow gradient */}
        <div
          className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 md:w-40 z-20 bg-gradient-to-l from-[#101115] via-[#101115]/80 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Moving Track */}
        <div
          className={`animate-infinite-marquee flex gap-5 sm:gap-6 ${isPaused ? 'paused' : ''}`}
          style={{ animationDuration }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {infinitePages.map((page, index) => (
            <div
              key={`${page.id}-${index}`}
              className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 group select-none"
            >
              <div className="h-full rounded-2xl sm:rounded-3xl bg-[#191B20] border border-white/10 hover:border-[#F4B735] transition-all duration-300 p-3.5 sm:p-4 flex flex-col justify-between shadow-xl group-hover:shadow-[#F4B735]/15 group-hover:-translate-y-1">
                {/* Image Container with zoom click */}
                <div
                  onClick={() => setSelectedZoomPage(page)}
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#101115] border border-white/5 cursor-pointer aspect-[3/4] flex items-center justify-center mb-4 group/img"
                  title="Haz clic para ampliar la página"
                >
                  <img
                    src={page.imageUrl}
                    alt={`Página del libro Código Fuerza 28: ${page.title}`}
                    loading="lazy"
                    className="w-full h-full object-contain transform group-hover/img:scale-103 transition-transform duration-300"
                  />

                  {/* Zoom indicator overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold backdrop-blur-[2px]">
                    <div className="px-3 py-1.5 rounded-lg bg-[#101115]/95 border border-[#F4B735] flex items-center gap-1.5 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-[#F4B735]" />
                      <span>Ampliar página</span>
                    </div>
                  </div>

                  {/* Tag badge */}
                  <div className="absolute top-2.5 left-2.5 z-10 px-2.5 py-1 rounded-md bg-[#101115]/90 backdrop-blur-sm border border-white/10 text-[10px] font-black text-[#F4B735] uppercase tracking-wider">
                    {page.tag}
                  </div>

                  {/* Page number */}
                  <div className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-md bg-[#101115]/90 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-gray-300 font-bold">
                    0{page.id}
                  </div>
                </div>

                {/* Content description */}
                <div className="flex flex-col justify-between flex-1 pt-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white uppercase mb-1.5 leading-snug group-hover:text-[#F4B735] transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B8BBC2] leading-relaxed">
                      {page.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Página real del ebook
                    </span>
                    <button
                      onClick={() => setSelectedZoomPage(page)}
                      className="text-[#F4B735] hover:underline font-bold cursor-pointer"
                    >
                      Ver detalle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 text-center relative z-10">
        <p className="text-xs text-gray-400 mb-6">
          Pasa el cursor por encima o toca una página para detener el desplazamiento y ampliar su lectura.
        </p>

        {/* CTA for quick conversion */}
        <CtaButton
          text="QUIERO ACCEDER A TODO EL LIBRO POR $12 USD"
          location="infinite_content_carousel_section"
          size="large"
          showSubtext={true}
          subtext="Pago único · Incluye ebook completo y los 4 bonos digitales"
        />
      </div>

      {/* Lightbox Modal for Full View */}
      {selectedZoomPage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="zoom-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedZoomPage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] bg-[#14161C] border border-[#F4B735]/40 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-[#F4B735] text-[#101115] text-xs font-black uppercase">
                  Página 0{selectedZoomPage.id}
                </span>
                <h4 id="zoom-modal-title" className="text-base sm:text-lg font-black text-white uppercase">
                  {selectedZoomPage.title}
                </h4>
              </div>

              <button
                onClick={() => setSelectedZoomPage(null)}
                aria-label="Cerrar vista ampliada"
                className="p-2 rounded-xl bg-[#191B20] text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="flex-1 overflow-auto flex items-center justify-center p-2 rounded-2xl bg-[#101115]">
              <img
                src={selectedZoomPage.imageUrl}
                alt={selectedZoomPage.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#B8BBC2]">
              <p className="leading-relaxed text-center sm:text-left">
                {selectedZoomPage.description}
              </p>
              <div className="shrink-0">
                <CtaButton
                  text="EMPEZAR HOY POR $12"
                  location="infinite_carousel_modal"
                  size="mobile-bar"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
