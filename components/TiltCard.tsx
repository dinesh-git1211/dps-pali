"use client";

import { useState, useRef, useEffect, type ReactNode, type MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // max tilt angle in degrees, default 7
  scale?: number; // scale factor on hover, default 1.02
  glare?: boolean; // whether to show dynamic light reflection, default true
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 7,
  scale = 1.02,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDesktopHover, setIsDesktopHover] = useState(false);
  const [style, setStyle] = useState({});
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  /* ── Only enable 3D tilt on devices with hover + fine pointer (mouse) ── */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateCapability = () => {
      setIsDesktopHover(mediaQuery.matches && !motionQuery.matches);
    };

    updateCapability();

    mediaQuery.addEventListener("change", updateCapability);
    motionQuery.addEventListener("change", updateCapability);

    return () => {
      mediaQuery.removeEventListener("change", updateCapability);
      motionQuery.removeEventListener("change", updateCapability);
    };
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDesktopHover || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`,
      transition: "transform 100ms ease-out",
    });

    if (glare) {
      setGlarePosition({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.18,
      });
    }
  };

  const handleMouseEnter = () => {
    if (!isDesktopHover) return;
    if (glare) {
      setGlarePosition((prev) => ({ ...prev, opacity: 0.18 }));
    }
  };

  const handleMouseLeave = () => {
    if (!isDesktopHover) return;
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)",
    });
    if (glare) {
      setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  /* ── Mobile / Touch: Render clean container without tilt listeners ── */
  if (!isDesktopHover) {
    return (
      <div className={`transition-all duration-300 hover:shadow-md ${className}`}>
        {children}
      </div>
    );
  }

  /* ── Desktop: Render 3D Perspective Tilt Card with Glare ── */
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative will-change-transform ${className}`}
    >
      {children}

      {/* Dynamic light reflection sheen on desktop hover */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden transition-opacity duration-300"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle 240px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.45), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
