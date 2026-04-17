"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type LightboxImageProps = {
  src: string;
  alt: string;
  aspectRatioClassName: string;
  wrapperClassName?: string;
  imageClassName?: string;
};

export default function LightboxImage({
  src,
  alt,
  aspectRatioClassName,
  wrapperClassName,
  imageClassName,
}: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const canUseDOM = typeof window !== "undefined";

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label="Open image in full view"
        onClick={() => setIsOpen(true)}
        className={`block w-full text-left ${wrapperClassName ?? ""}`}
      >
        <div className={`relative w-full ${aspectRatioClassName}`}>
          <Image
            src={src}
            alt={alt}
            fill
            className={imageClassName ?? "object-contain"}
          />
        </div>
      </button>

      {isOpen && canUseDOM
        ? createPortal(
        <div
          className="fixed inset-0 z-[100]"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image view"
        >
          <button
            type="button"
            aria-label="Close expanded image view"
            className="absolute inset-0 bg-black/72"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="relative z-10 flex min-h-full items-center justify-center p-4 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative inline-flex max-w-[min(94vw,980px)]">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 z-20 inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-slate-200/90 bg-white/92 px-3 text-sm font-medium text-slate-700 shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:bg-white sm:top-3 sm:right-3"
              >
                Close
              </button>
              <div className="overflow-hidden rounded-[22px] bg-[#f8fafc] p-1.5 shadow-[0_28px_60px_rgba(0,0,0,0.36)] ring-1 ring-black/8 sm:rounded-[24px] sm:p-2">
                <Image
                  src={src}
                  alt={alt}
                  width={1024}
                  height={1331}
                  unoptimized
                  className="block h-auto max-h-[calc(100dvh-3.5rem)] w-auto max-w-full rounded-[18px] object-contain sm:max-h-[calc(100dvh-5rem)]"
                />
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )
        : null}
    </>
  );
}
