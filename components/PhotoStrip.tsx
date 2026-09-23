"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type PhotoStripItem = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  tall?: boolean;
};

const AUTO_SCROLL_SPEED = 28; // pixels per second
const RESUME_DELAY = 1200; // ms of inactivity before auto-scroll resumes

export default function PhotoStrip({ items }: { items: PhotoStripItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const directionRef = useRef<1 | -1>(1);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId: number;
    let lastTime: number | null = null;
    let position = track.scrollLeft;

    function step(timestamp: number) {
      if (track) {
        // Scroll-snap fights any programmatic scrollLeft assignment (it snaps straight
        // back to the nearest point), so it must stay off whenever JS is driving the
        // scroll position itself — during auto-play and during mouse-drag. Native touch
        // and wheel scrolling drive scrollLeft themselves, so snap stays on for those.
        track.style.scrollSnapType = !pausedRef.current || draggingRef.current ? "none" : "";
      }
      if (lastTime !== null && track) {
        const dt = timestamp - lastTime;
        if (!pausedRef.current && !draggingRef.current) {
          const maxScroll = track.scrollWidth - track.clientWidth;
          if (maxScroll > 1) {
            position += directionRef.current * AUTO_SCROLL_SPEED * (dt / 1000);
            if (directionRef.current === 1 && position >= maxScroll) {
              position = maxScroll;
              directionRef.current = -1;
            } else if (directionRef.current === -1 && position <= 0) {
              position = 0;
              directionRef.current = 1;
            }
            track.scrollLeft = position;
          }
        } else {
          // Stay in sync with manual scrolling/dragging so resuming continues smoothly.
          position = track.scrollLeft;
        }
      }
      lastTime = timestamp;
      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  function scheduleResume(delay: number) {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  }

  function handlePointerEnter(e: React.PointerEvent) {
    if (e.pointerType === "mouse") pausedRef.current = true;
  }

  function handlePointerLeave(e: React.PointerEvent) {
    if (e.pointerType === "mouse" && !draggingRef.current) pausedRef.current = false;
  }

  function handlePointerDown(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    const track = trackRef.current;
    if (!track) return;
    draggingRef.current = true;
    pausedRef.current = true;
    track.setPointerCapture(e.pointerId);
    track.dataset.startX = String(e.clientX);
    track.dataset.startScroll = String(track.scrollLeft);
    track.classList.add("dragging");
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!draggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    const startX = Number(track.dataset.startX || 0);
    const startScroll = Number(track.dataset.startScroll || 0);
    track.scrollLeft = startScroll - (e.clientX - startX);
  }

  function endDrag() {
    const track = trackRef.current;
    draggingRef.current = false;
    track?.classList.remove("dragging");
    scheduleResume(600);
  }

  function handleTouchStart() {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    pausedRef.current = true;
  }

  function handleTouchEnd() {
    scheduleResume(RESUME_DELAY);
  }

  function handleWheel() {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    pausedRef.current = true;
    scheduleResume(RESUME_DELAY);
  }

  return (
    <div
      ref={trackRef}
      className="photo-strip"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
    >
      {items.map((job) => (
        <div className="work-card" key={job.src}>
          <div className={`work-photo${job.tall ? " tall" : ""}`}>
            <Image
              src={job.src}
              alt={job.alt}
              fill
              loading="eager"
              draggable={false}
              sizes="(max-width: 560px) 80vw, (max-width: 860px) 45vw, 320px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="work-caption">
            <h3>{job.title}</h3>
            <p>{job.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
