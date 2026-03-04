"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const items = [
  {
    title: "DATA FOR GOOD",
    description:
      "Partnered with a local nonprofit to clean community survey data and visualize trends for funding proposals.",
    image: "/extracurricular/data-for-good.svg",
    alt: "Dashboard illustration for data volunteering",
  },
  {
    title: "HACKATHON MENTOR",
    description:
      "Coached student teams on problem framing, rapid prototyping, and storytelling for their final demos.",
    image: "/extracurricular/hackathon-mentor.svg",
    alt: "Mentoring illustration with light bulbs",
  },
  {
    title: "ANALYTICS SPEAKER",
    description:
      "Hosted monthly talks for peers on BI best practices, from dashboard design to stakeholder communication.",
    image: "/extracurricular/speaker-series.svg",
    alt: "Presentation illustration with charts",
  },
  {
    title: "OUTDOOR LEADER",
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
    <section>
      <h2 className="retro-section-title mb-8">SIDE_QUESTS</h2>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        {/* Left — description + controls */}
        <div className="lg:max-w-xs space-y-5">
          <p style={{ color: "var(--foreground)", opacity: 0.7, fontSize: "20px", lineHeight: 1.7 }}>
            Outside of coursework, I stay active in the community through mentoring, speaking, and
            wellness activities.
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button onClick={handlePrev} className="pixel-btn" aria-label="Previous">
              ◄ PREV
            </button>
            <button onClick={handleNext} className="pixel-btn pixel-btn-pink" aria-label="Next">
              NEXT ►
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-3">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoPlay(false);
                  setActiveIndex(index);
                }}
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "14px",
                  color: index === activeIndex ? "var(--primary)" : "var(--dim)",
                  textShadow: index === activeIndex ? "0 0 8px var(--primary)" : "none",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "2px",
                  lineHeight: 1,
                }}
                aria-label={`Go to item ${index + 1}`}
              >
                {index === activeIndex ? "■" : "□"}
              </button>
            ))}
          </div>
        </div>

        {/* Right — card stack */}
        <div className="relative h-[400px] w-full max-w-xl">
          {items.map((item, index) => {
            const position = (index - activeIndex + items.length) % items.length;
            if (position > 2) return null;

            const translateX = position * 20;
            const translateY = position * 16;
            const scale = 1 - position * 0.05;
            const opacity = position === 0 ? 1 : 0.55;
            const zIndex = 20 - position;

            return (
              <article
                key={item.title}
                className="absolute left-0 top-0 w-full p-5"
                style={{
                  background: "var(--card-bg)",
                  border: `2px solid ${
                    position === 0 ? "var(--primary)" : "rgba(0,255,65,0.2)"
                  }`,
                  boxShadow:
                    position === 0
                      ? "4px 4px 0 rgba(0,255,65,0.35), 0 0 20px rgba(0,255,65,0.12)"
                      : "2px 2px 0 rgba(0,255,65,0.08)",
                  transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity ${TRANSITION_MS}ms ease`,
                }}
              >
                <div
                  className="relative h-40 w-full overflow-hidden mb-4"
                  style={{ border: "1px solid rgba(0,255,65,0.2)" }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 520px"
                    priority={position === 0}
                  />
                </div>

                <p
                  className="glow-pink mb-2"
                  style={{ fontFamily: "var(--font-pixel)", fontSize: "7px" }}
                >
                  ◆ SIDE QUEST
                </p>
                <h3
                  className="glow-green mb-3"
                  style={{ fontFamily: "var(--font-pixel)", fontSize: "10px", lineHeight: 1.6 }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--foreground)", opacity: 0.75, fontSize: "17px", lineHeight: 1.55 }}>
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
