"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    title: "Data for Good Volunteer",
    description:
      "Partnered with a local nonprofit to clean community survey data and visualize trends for funding proposals.",
    image: "/extracurricular/data-for-good.svg",
    alt: "Dashboard illustration for data volunteering",
  },
  {
    title: "Hackathon Mentor",
    description:
      "Coached student teams on problem framing, rapid prototyping, and storytelling for their final demos.",
    image: "/extracurricular/hackathon-mentor.svg",
    alt: "Mentoring illustration with light bulbs",
  },
  {
    title: "Analytics Speaker Series",
    description:
      "Hosted monthly talks for peers on BI best practices, from dashboard design to stakeholder communication.",
    image: "/extracurricular/speaker-series.svg",
    alt: "Presentation illustration with charts",
  },
  {
    title: "Outdoor Leadership",
    description:
      "Planned weekend hikes and wellness meetups to help classmates recharge and build community.",
    image: "/extracurricular/outdoor-leadership.svg",
    alt: "Outdoor leadership illustration with mountains",
  },
];

const TRANSITION_MS = 1400;
const ROTATION_MS = 7000;

export function ExtracurricularSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, ROTATION_MS);

    return () => window.clearInterval(intervalId);
  }, [autoPlay]);

  const handlePrev = () => {
    setAutoPlay(false);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <section className="mt-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="lg:max-w-sm">
          <h2 className="text-2xl font-semibold">Extra-curricular</h2>
          <p className="mt-3 text-zinc-600">
            Outside of coursework, I stay active in the community through mentoring, speaking, and wellness activities.
            Here are a few highlights.
          </p>
        </div>

        <div className="relative h-[360px] w-full max-w-xl">
          {items.map((item, index) => {
            const position = (index - activeIndex + items.length) % items.length;
            if (position > 2) return null;

            const translateX = position * 24;
            const translateY = position * 18;
            const scale = 1 - position * 0.05;
            const opacity = position === 0 ? 1 : 0.75;
            const zIndex = 20 - position;

            return (
              <article
                key={item.title}
                className="absolute left-0 top-0 w-full rounded-2xl border border-blue-400/40 bg-gradient-to-br from-blue-950/80 via-blue-900/60 to-slate-900/80 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-blue-300/60"
                style={{
                  transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity ${TRANSITION_MS}ms ease, border-color 300ms ease`,
                  boxShadow: position === 0 
                    ? "0 0 40px rgba(59, 130, 246, 0.4), 0 8px 32px -8px rgba(0, 0, 0, 0.4)" 
                    : "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="relative h-48 w-full overflow-hidden rounded-xl ring-1 ring-blue-400/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent z-10" />
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 520px"
                    priority={position === 0}
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-blue-50">{item.title}</h3>
                  <p className="mt-2 text-sm text-blue-100/70">{item.description}</p>
                </div>
              </article>
            );
          })}

          {/* Navigation Buttons */}
          <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-3">
            <button
              onClick={handlePrev}
              className="group relative p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-blue-500/50 hover:shadow-2xl transition-all duration-300 hover:from-blue-400 hover:to-blue-500 active:scale-95"
              aria-label="Previous item"
            >
              <ChevronLeft size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="group relative p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-blue-500/50 hover:shadow-2xl transition-all duration-300 hover:from-blue-400 hover:to-blue-500 active:scale-95"
              aria-label="Next item"
            >
              <ChevronRight size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoPlay(false);
                  setActiveIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 bg-blue-500"
                    : "w-2 bg-blue-300/40 hover:bg-blue-300/70"
                }`}
                aria-label={`Go to item ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

