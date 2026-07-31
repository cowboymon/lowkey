"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type CoverRect = { sx: number; sy: number; sw: number; sh: number };

/**
 * Cursor-reveal hero: the base layer is the full-colour photo; a canvas on
 * top paints a grayscale copy of it. Hovering erodes the grayscale layer in
 * a soft, trailing blob so the colour underneath shows through — holding
 * still over one spot for 3s fades the whole frame to colour.
 */
export default function HeroReveal({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children?: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dot, setDot] = useState({ x: -100, y: -100, opacity: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!container || !img || !canvas) return;
    const ctxOrNull = canvas.getContext("2d");
    if (!ctxOrNull) return;
    const ctx = ctxOrNull;

    const maskCanvas = document.createElement("canvas");
    const maskCtxOrNull = maskCanvas.getContext("2d");
    if (!maskCtxOrNull) return;
    const maskCtx = maskCtxOrNull;

    let cw = 0;
    let ch = 0;
    let dpr = 1;
    let coverRect: CoverRect | null = null;

    function resize() {
      if (!container || !canvas || !img) return;
      const rect = container.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cw = rect.width;
      ch = rect.height;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      maskCanvas.width = canvas.width;
      maskCanvas.height = canvas.height;

      if (img.naturalWidth) {
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const containerRatio = cw / ch;
        const imgRatio = iw / ih;
        let sw: number, sh: number, sx: number, sy: number;
        if (imgRatio > containerRatio) {
          sh = ih;
          sw = ih * containerRatio;
          sx = (iw - sw) / 2;
          sy = 0;
        } else {
          sw = iw;
          sh = iw / containerRatio;
          sx = 0;
          sy = (ih - sh) / 2;
        }
        coverRect = { sx, sy, sw, sh };
      }
    }

    if (img.complete) resize();
    else img.onload = resize;

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const pointer = { x: -9999, y: -9999, active: false, fade: 0 };
    let hoverStart: number | null = null;
    let fullReveal = 0;
    let raf = 0;

    function drawWobblyBlob(c: CanvasRenderingContext2D, cx: number, cy: number, baseRadius: number, alpha: number) {
      const grad = c.createRadialGradient(cx, cy, 0, cx, cy, baseRadius);
      grad.addColorStop(0, `rgba(0,0,0,${alpha})`);
      grad.addColorStop(0.55, `rgba(0,0,0,${alpha * 0.85})`);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      c.fillStyle = grad;
      c.beginPath();
      c.arc(cx, cy, baseRadius, 0, Math.PI * 2);
      c.fill();
    }

    function loop() {
      raf = requestAnimationFrame(loop);
      if (!img || !img.complete || !coverRect) return;
      const now = performance.now();

      pointer.fade = pointer.active
        ? Math.min(1, pointer.fade + 0.08)
        : Math.max(0, pointer.fade - 0.03);

      const targetFull = pointer.active && hoverStart !== null && now - hoverStart > 3000 ? 1 : 0;
      const fullEase = targetFull ? 0.045 : 0.02;
      fullReveal += (targetFull - fullReveal) * fullEase;

      maskCtx.save();
      maskCtx.globalCompositeOperation = "destination-out";
      maskCtx.fillStyle = "rgba(0,0,0,0.055)";
      maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
      maskCtx.restore();

      if (pointer.fade > 0.001) {
        maskCtx.save();
        maskCtx.scale(dpr, dpr);
        maskCtx.globalCompositeOperation = "source-over";
        drawWobblyBlob(maskCtx, pointer.x, pointer.y, 130, pointer.fade);
        maskCtx.restore();
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, cw, ch);
      ctx.filter = "grayscale(1) contrast(1.03) brightness(1.01)";
      ctx.globalAlpha = 1 - fullReveal;
      const { sx, sy, sw, sh } = coverRect;
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
      ctx.filter = "none";
      ctx.globalAlpha = 1;

      ctx.globalCompositeOperation = "destination-out";
      ctx.filter = "blur(6px)";
      ctx.drawImage(maskCanvas, 0, 0, cw, ch);
      ctx.filter = "none";
      ctx.globalCompositeOperation = "source-over";
      ctx.restore();
    }
    raf = requestAnimationFrame(loop);

    function handleMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pointer.x = x;
      pointer.y = y;
      pointer.active = true;
      if (hoverStart === null) hoverStart = performance.now();
      setDot({ x, y, opacity: 1 });
    }

    function handleMouseLeave() {
      pointer.active = false;
      hoverStart = null;
      setDot((d) => ({ ...d, opacity: 0 }));
    }

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative cursor-none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_20%]"
      />
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 h-full w-full" />
      <div
        aria-hidden
        className="pointer-events-none absolute z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-butter shadow-[0_0_12px_rgba(243,230,196,0.7)]"
        style={{ left: dot.x, top: dot.y, opacity: dot.opacity }}
      />
      {children}
    </div>
  );
}
