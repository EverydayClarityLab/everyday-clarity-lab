import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import LightboxImage from "@/components/LightboxImage";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNoteBySlug, notePosts } from "../posts";

const SITE_URL = "https://everyday-clarity-lab.vercel.app";

export function generateStaticParams() {
  return notePosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getNoteBySlug(slug);

  if (!post) {
    return {
      title: "Note Not Found | Everyday Clarity Lab",
    };
  }

  const canonical = `${SITE_URL}/notes/${post.slug}`;
  const title = `${post.title} | Everyday Clarity Lab`;

  return {
    title,
    description: post.summary,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description: post.summary,
      siteName: "Everyday Clarity Lab",
      images: [
        {
          url: `${SITE_URL}${post.imageSrc}`,
          alt: post.imageAlt,
        },
      ],
      publishedTime: new Date(post.publishedAt).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.summary,
      images: [`${SITE_URL}${post.imageSrc}`],
    },
  };
}

export default async function NotePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getNoteBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Breadcrumbs
        items={[
          { label: "Notes", href: "/notes" },
          { label: post.title },
        ]}
      />

      <article className="card p-8 sm:p-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/58">
          <span>{post.publishedLabel}</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="mt-5 text-[clamp(2.4rem,5vw,4rem)] font-light leading-tight text-white">
          {post.title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
          {post.summary}
        </p>

        <figure className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/6">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={post.imageSrc}
              alt={post.imageAlt}
              fill
              className="object-cover object-[50%_18%]"
            />
          </div>
        </figure>

        <div className="mt-8 space-y-6 text-base leading-8 text-white/80 sm:text-lg">
          {post.body.map((block) => {
            if (block.type === "paragraph") {
              return <p key={block.content}>{block.content}</p>;
            }

            if (block.type === "subheading") {
              return (
                <h2 key={block.title} className="text-2xl font-medium text-white">
                  {block.title}
                </h2>
              );
            }

            if (block.type === "image") {
              return (
                <figure
                  key={block.src}
                  className="mt-3 mb-12 mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-[#2ED9C7]/16 bg-[linear-gradient(180deg,#143b82,#103472)] p-3 shadow-[0_16px_32px_rgba(0,0,0,0.2)] ring-1 ring-white/10"
                >
                  <LightboxImage
                    src={block.src}
                    alt={block.alt}
                    aspectRatioClassName="aspect-[1024/1331] overflow-hidden rounded-[22px] bg-[#102d6a]"
                    imageClassName="object-contain"
                  />
                </figure>
              );
            }

            if (block.type === "linkCallout") {
              return (
                <div
                  key={block.href}
                  className="-mx-4 rounded-none border-y border-[#2ED9C7]/30 bg-[linear-gradient(180deg,rgba(46,217,199,0.18),rgba(46,217,199,0.1))] px-4 py-5 text-sm leading-7 text-white shadow-[0_14px_28px_rgba(0,0,0,0.16)] sm:mx-0 sm:rounded-2xl sm:border sm:px-6 sm:py-6 sm:text-base sm:leading-8 sm:shadow-[0_18px_36px_rgba(0,0,0,0.18)]"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#2ED9C7]/35 bg-[#0b2d70] text-[#2ED9C7] sm:h-11 sm:w-11"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current"
                        aria-hidden="true"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.36 22.7c.58.1.79-.25.79-.56v-2.17c-3.18.69-3.85-1.35-3.85-1.35-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.73.39-1.24.7-1.53-2.54-.29-5.21-1.27-5.21-5.65 0-1.25.45-2.27 1.17-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.73.8 1.17 1.82 1.17 3.07 0 4.39-2.67 5.35-5.22 5.64.4.35.76 1.03.76 2.09v3.09c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                      </svg>
                    </span>
                    <div>
                      <p>{block.text}</p>
                      <Link
                        href={block.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white underline underline-offset-4"
                      >
                        {block.label}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4"
                          aria-hidden="true"
                        >
                          <path
                            d="M7 17 17 7M9 7h8v8"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <section className="mt-10 border-t border-white/10 pt-8">
          <p className="micro-label">Tags</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="surface-teal rounded-full px-4 py-2 text-sm text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
