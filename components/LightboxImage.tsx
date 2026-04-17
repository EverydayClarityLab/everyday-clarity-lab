"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] bg-[#02154A]/92 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image view"
        >
          <div className="mx-auto flex h-full max-w-6xl flex-col">
            <div className="flex justify-end pb-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-12 min-w-12 items-center justify-center rounded-full border border-white/16 bg-white/8 px-4 text-sm font-medium text-white transition hover:border-white/24 hover:bg-white/12"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-auto rounded-2xl border border-white/10 bg-[#08245f] p-3 shadow-[0_20px_40px_rgba(0,0,0,0.28)] sm:p-4">
              <div className="flex min-h-full items-start justify-center sm:items-center">
                <Image
                  src={src}
                  alt={alt}
                  width={1024}
                  height={1331}
                  unoptimized
                  className="block h-auto max-h-[calc(100dvh-9rem)] w-auto max-w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
