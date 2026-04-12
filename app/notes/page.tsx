import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { buildNotesDigest, notePosts } from "./posts";

export const metadata: Metadata = {
  title: "Notes on Practical AI Building | Everyday Clarity Lab",
  description:
    "Short, practical writing on AI strategy, product thinking, and building useful systems in public.",
  alternates: {
    canonical: "https://everyday-clarity-lab.vercel.app/notes",
  },
  openGraph: {
    title: "Notes on Practical AI Building | Everyday Clarity Lab",
    description:
      "Short, practical writing on AI strategy, product thinking, and building useful systems in public.",
    url: "https://everyday-clarity-lab.vercel.app/notes",
    siteName: "Everyday Clarity Lab",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Notes on Practical AI Building | Everyday Clarity Lab",
    description:
      "Short, practical writing on AI strategy, product thinking, and building useful systems in public.",
  },
};

export default function NotesPage() {
  const digest = buildNotesDigest(notePosts);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="max-w-4xl space-y-4">
        <p className="micro-label">Lab Notes</p>
        <h1 className="text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-tight text-white">
          Notes on practical AI building
        </h1>
        <p className="text-lg leading-8 text-white/72">
          Short, practical writing on AI strategy, product thinking, and
          building useful systems in public.
        </p>
      </header>

      <section className="mt-10 card p-6">
        <h2 className="text-2xl font-medium text-white">
          AI Summary of Most Recent Post
        </h2>
        <p className="mt-3 max-w-4xl leading-8 text-white/72">{digest.overview}</p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {notePosts.map((post) => (
          <Link
            key={post.slug}
            href={`/notes/${post.slug}`}
            className="group card card-hover overflow-hidden transition duration-200"
          >
            <div className="p-4 pb-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={post.imageSrc}
                  alt={post.imageAlt}
                  fill
                  className="object-cover object-[50%_28%] transition-transform duration-200 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 ring-1 ring-white/0 transition group-hover:ring-white/18" />
              </div>
            </div>

            <div className="space-y-4 p-6">
              <div className="space-y-2">
                <p className="text-sm text-white/55">{post.publishedLabel}</p>
                <h2 className="text-2xl font-medium leading-tight text-white">
                  {post.title}
                </h2>
              </div>

              <p className="leading-8 text-white/72">{post.summary}</p>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </main>
  );
}
