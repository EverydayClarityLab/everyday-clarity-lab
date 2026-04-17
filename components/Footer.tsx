function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-current"
    >
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.82 2.67 4.82 6.14V21h-4v-5.54c0-1.32-.02-3.02-1.84-3.02-1.85 0-2.13 1.44-2.13 2.92V21h-4Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-6 pt-8 pb-10">
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="space-y-3 text-sm text-white/45">
          <p>
            Prototypes and product concepts for learning and demonstration
            purposes. Not professional, legal, or medical advice.
          </p>
          <p>&copy; 2026 Everyday Clarity Lab. All rights reserved.</p>
        </div>

        <a
          href="https://www.linkedin.com/in/analicial-0q7e6/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-medium text-white/88 transition hover:border-[#2ED9C7]/45 hover:text-white"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
