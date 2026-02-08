"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, ROTATION_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="mt-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="lg:max-w-sm">
          <h2 className="text-2xl font-semibold">Extra-curricular</h2>
          <p className="mt-3 text-zinc-600">
            Outside of coursework, I stay active in the community through mentoring, speaking, and wellness activities.
            Here are a few highlights that rotate every few seconds.
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
                className="absolute left-0 top-0 w-full rounded-3xl border bg-white/90 p-4 shadow-lg backdrop-blur"
                style={{
                  transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: `transform ${TRANSITION_MS}ms ease, opacity ${TRANSITION_MS}ms ease`,
                }}
              >
                <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 520px"
                    priority={position === 0}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
