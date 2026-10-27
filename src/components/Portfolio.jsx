import React from "react";

export default function Portfolio({ t }) {
  return (
    <section
      className="scroll-mt-20 w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-24 bg-[#07080b]/70 border-y border-white/5"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="px-space-md py-1 rounded-full bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/25 font-label-md text-label-md uppercase tracking-wider mb-space-sm font-semibold">
            {t.tag}
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-space-xs">
            {t.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {t.subtitle}
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-space-xl">
          {t.projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#16181e]/90 border border-white/10 backdrop-blur-xl p-space-md lg:p-space-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center"
            >
              {/* Mockup Display Area */}
              <a
                className={`block lg:col-span-7 rounded-2xl overflow-hidden bg-surface-container relative group border border-white/10 hover:border-[#ccff00]/50 transition-all shadow-xl ${
                  project.reverse ? "lg:order-2" : ""
                }`}
                href={project.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="aspect-[16/10] w-full relative bg-[#07080b]">
                  <img
                    alt={project.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    src={project.image}
                    width="800"
                    height="500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  <div className="absolute top-4 left-4 inline-flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-[#090a0f]/90 border border-white/10 backdrop-blur-md shadow-md">
                    <span className="font-label-sm text-label-sm text-[#ccff00] font-semibold flex items-center gap-1">
                      {project.domain}{" "}
                      <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                        north_east
                      </span>
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-space-sm rounded-xl bg-[#090a0f]/90 border border-white/10 backdrop-blur-md flex items-center justify-between gap-2">
                    <div className="flex items-center gap-space-xs min-w-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-pulse shrink-0"></span>
                      <span className="font-label-sm text-label-sm text-white font-semibold truncate">
                        {project.liveStatus}
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-[#ccff00] shrink-0">
                      {project.location}
                    </span>
                  </div>
                </div>
              </a>

              {/* Project Details */}
              <div
                className={`lg:col-span-5 flex flex-col justify-center ${
                  project.reverse ? "lg:order-1" : ""
                }`}
              >
                <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/25 font-label-sm text-label-sm uppercase tracking-wider w-fit mb-space-xs font-semibold">
                  {project.category}
                </div>
                <h3 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-white mb-space-xs">
                  {project.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-space-xs mb-space-md">
                  {project.tech.map((techItem, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-space-sm py-1 rounded-full bg-[#0d0e13] border border-white/10 text-on-surface font-label-sm text-label-sm"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Metric Highlight */}
                <div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/25 mb-space-lg">
                  <span className="material-symbols-outlined text-[#ccff00] text-[24px]" aria-hidden="true">
                    {project.metricIcon}
                  </span>
                  <span className="font-body-sm text-body-sm font-semibold text-[#ccff00]">
                    {project.metricText}
                  </span>
                </div>

                {/* Project Link Button */}
                <a
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-full bg-[#ccff00] text-black font-bold font-label-md text-label-md hover:bg-[#bbf436] transition-all duration-300 w-fit shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_28px_rgba(204,255,0,0.5)]"
                  href={project.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{t.viewProject}</span>
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
