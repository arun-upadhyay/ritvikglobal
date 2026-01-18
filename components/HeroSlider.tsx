"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "./cn";

type Slide = {
    src: string;
    alt: string;
    eyebrow?: string;
    title: string;
    desc: string;
};

export default function HeroSlider({
                                       slides,
                                       intervalMs = 2500,
                                       className,
                                   }: {
    slides: Slide[];
    intervalMs?: number;
    className?: string;
}) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef<number | null>(null);

    const safeSlides = useMemo(() => (slides?.length ? slides : []), [slides]);

    const goTo = (i: number) => {
        if (!safeSlides.length) return;
        const next = (i + safeSlides.length) % safeSlides.length;
        setIndex(next);
    };

    useEffect(() => {
        if (!safeSlides.length) return;

        if (timerRef.current) window.clearInterval(timerRef.current);

        if (!paused) {
            timerRef.current = window.setInterval(() => {
                setIndex((prev) => (prev + 1) % safeSlides.length);
            }, intervalMs);
        }

        return () => {
            if (timerRef.current) window.clearInterval(timerRef.current);
        };
    }, [paused, intervalMs, safeSlides.length]);

    if (!safeSlides.length) return null;

    return (
        <section
            className={cn("relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900", className)}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="relative h-[420px] sm:h-[460px] lg:h-[520px]">
                {safeSlides.map((s, i) => (
                    <div
                        key={s.src}
                        className={cn(
                            "absolute inset-0 transition-opacity duration-700",
                            i === index ? "opacity-100" : "opacity-0"
                        )}
                        aria-hidden={i !== index}
                    >
                        <Image
                            src={s.src}
                            alt={s.alt}
                            fill
                            priority={i === 0}
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-slate-950/10" />
                    </div>
                ))}

                {/* Text */}
                <div className="relative z-10 flex h-full items-center">
                    <div className="container flex h-full items-center px-6 sm:px-10 lg:px-12">
                        <div className="max-w-2xl">
                            {safeSlides[index].eyebrow && (
                                <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                                    {safeSlides[index].eyebrow}
                                </p>
                            )}

                            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                {safeSlides[index].title}
                            </h1>

                            <p className="mt-4 text-base leading-7 text-white/80">
                                {safeSlides[index].desc}
                            </p>

                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                                >
                                    Get a consultation
                                </a>
                                <a
                                    href="/services"
                                    className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                                >
                                    View services
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Controls */}
                <div className="absolute bottom-5 left-0 right-0 z-20 flex items-center justify-center gap-2">
                    {safeSlides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={cn(
                                "h-2.5 w-2.5 rounded-full ring-1 ring-white/40 transition",
                                i === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
                            )}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => goTo(index - 1)}
                    className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-xl bg-white/10 p-2 text-white ring-1 ring-white/20 hover:bg-white/15 sm:inline-flex"
                    aria-label="Previous slide"
                >
                    ‹
                </button>
                <button
                    type="button"
                    onClick={() => goTo(index + 1)}
                    className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-xl bg-white/10 p-2 text-white ring-1 ring-white/20 hover:bg-white/15 sm:inline-flex"
                    aria-label="Next slide"
                >
                    ›
                </button>
            </div>
        </section>
    );
}
