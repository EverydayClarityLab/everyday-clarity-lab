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
        <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Expanded image view">
          <button
            type="button"
            aria-label="Close expanded image view"
            className="absolute inset-0 bg-black/72"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-4 right-4 z-20 sm:top-6 sm:right-6">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-white/18 bg-[#06173f]/78 px-4 text-sm font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.24)] transition hover:border-white/28 hover:bg-[#0a235b]/88"
            >
              Close
            </button>
          </div>
          <div
            className="relative z-10 flex min-h-full items-center justify-center px-4 py-5 sm:px-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-full max-w-[820px] sm:max-w-[860px]">
              <div className="overflow-hidden rounded-[24px] bg-[#f3f5f9] p-2 shadow-[0_28px_60px_rgba(0,0,0,0.36)] ring-1 ring-black/8 sm:rounded-[26px] sm:p-3">
                <Image
                  src={src}
                  alt={alt}
                  width={1024}
                  height={1331}
                  unoptimized
                  className="mx-auto block h-auto max-h-[calc(100dvh-6.5rem)] w-full rounded-[18px] object-contain sm:rounded-[20px]"
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
