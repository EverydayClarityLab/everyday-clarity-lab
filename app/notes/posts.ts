export type NotePost = {
  slug: string;
  title: string;
  publishedAt: string;
  publishedLabel: string;
  readTime: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  body: Array<
    | {
        type: "paragraph";
        content: string;
      }
    | {
        type: "subheading";
        title: string;
      }
    | {
        type: "image";
        src: string;
        alt: string;
      }
    | {
        type: "linkCallout";
        text: string;
        href: string;
        label: string;
      }
  >;
};

export const notePosts: NotePost[] = [
  {
    slug: "from-ai-strategy-to-shipping-my-first-practical-build",
    title: "From AI Strategy to Shipping My First Practical Build",
    publishedAt: "2026-04-11",
    publishedLabel: "April 11, 2026",
    readTime: "4 min read",
    summary:
      "From AI Strategy to Shipping My First Practical Build traces how I moved from applied AI strategy into hands-on execution, and why practical AI building is now central to how I think about product leadership.",
    imageSrc: "/images/profile-photo.jpeg",
    imageAlt:
      "Portrait of Ana, author of the Notes page and builder of Everyday Clarity Lab.",
    tags: [
      "AI Strategy",
      "AI Enablement",
      "Product Management",
      "Systems Thinking",
    ],
    body: [
      {
        type: "paragraph",
        content:
          "Seven months ago, I barely knew what GitHub was. I understood applied AI from a product and business perspective, but I had not yet spent meaningful time inside the flow of building software myself. What changed was not a sudden desire to become an engineer in title. What changed was my sense that if I wanted to direct practical AI work well, I needed a closer understanding of how ideas move from concept to code, from structure to shipped experience.",
      },
      {
        type: "paragraph",
        content:
          "Language models made that path feel reachable. They gave me a working guide while I deepened Python, learned the rhythm of development environments, and began translating product thinking into actual build steps. For me, that was the unlock. AI stopped being only something I evaluated from the outside and became something I could use inside the process itself: to clarify a system, test a direction, harden a decision, and keep momentum without losing judgment.",
      },
      {
        type: "subheading",
        title: "Why This Work Matters",
      },
      {
        type: "paragraph",
        content:
          "The reason From AI Strategy to Shipping My First Practical Build matters to me is that I have never been interested in technology for novelty alone. I care about practical systems that help people move through real decisions, real services, and real community problems with more clarity. That is the vision underneath this site. I want to build tools that feel useful, legible, and grounded in how people actually live, rather than tools that exist only to demonstrate technical possibility.",
      },
      {
        type: "paragraph",
        content:
          "This site is one expression of that shift. It is where I am learning in public, shaping product ideas, and turning curiosity into working structure. As I built it, I also built my own environment for the first time: VS Code on my desktop, GitHub for version control, Vercel for deployment, and a disciplined workflow that let me move from blank page to visible system. Those first foundational commits mattered because they were not only technical milestones. They marked a change in how I see my role.",
      },
      {
        type: "linkCallout",
        text: "If you want to see how that shift looks in practice, the GitHub repository shows the working build trail: early structure, foundational commits, and the progression from concept into a live web experience.",
        href: "https://github.com/EverydayClarityLab/everyday-clarity-lab",
        label: "View the GitHub repository",
      },
      {
        type: "subheading",
        title: "How I Built the Foundation",
      },
      {
        type: "paragraph",
        content:
          "I still think of myself as the intent architect first. My strength is in identifying where AI creates real value, translating ambiguity into direction, and shaping solutions that are technically credible and genuinely useful. But building this first site taught me that strategy becomes stronger when it stays close to execution. I used LLMs as a strategic and execution partner, but I also applied governance, PQD, UAT, compliance, security thinking, and repeated revision so the work would hold together under more than inspiration alone.",
      },
      {
        type: "subheading",
        title: "What Built the Foundation",
      },
      {
        type: "paragraph",
        content:
          "This process captures how applied AI has already reshaped how I think about product strategy and where we can go next.",
      },
      {
        type: "image",
        src: "/images/applied-ai-foundation-infographic-v2.png",
        alt: "Infographic showing what shaped Ana's foundation in applied AI for frontier product strategy across eight stages.",
      },
      {
        type: "paragraph",
        content:
          "That is why I see From AI Strategy to Shipping My First Practical Build not as a one-off post, but as the beginning of a larger body of work. I want to keep operating at the strategic layer of AI solutions while staying close enough to the build to make sharper decisions, frame better opportunities, and lead practical execution with credibility. This is the beginning of a longer conversation between curiosity, structure, and building, and I am glad you are here for it.",
      },
    ],
  },
];

export function getNoteBySlug(slug: string) {
  return notePosts.find((post) => post.slug === slug);
}

export function buildNotesDigest(posts: NotePost[]) {
  const tagCounts = new Map<string, number>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    });
  });

  const leadingThemes = [...tagCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([tag]) => tag);

  return {
    overview:
      posts.length === 0
        ? "Ana has not published a note yet. This section is ready to summarize her writing as new posts appear."
        : `Ana's latest note captures a fast shift from AI curiosity into real building practice. As the archive grows, this author summary will continue surfacing the themes that define her work, including ${leadingThemes.join(", ").toLowerCase()}.`,
  };
}
