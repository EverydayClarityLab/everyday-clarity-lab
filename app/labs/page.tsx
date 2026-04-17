// app/labs/page.tsx

const labs = [
  {
    title: "City Relocation and School Finder",
    slug: "city-relocation-school-finder",
    description:
      "A guided decision flow to help families understand assigned schools, enrollment steps, and key contacts without hunting across pages.",
  },
  {
    title: "Business Starter Copilot for City Limits",
    slug: "business-starter-copilot",
    description:
      "Plain-language business startup guidance with citations to permits, ordinances, and forms, plus a next-best-step checklist.",
  },
  {
    title: "Property Tax Increase Appeal Prep Pack",
    slug: "property-tax-appeal-prep-pack",
    description:
      "An evidence-based preparation pack that organizes property facts, comparable data, and questions for an assessor meeting.",
  },
  {
    title: "Park District Registration Agent for Parents",
    slug: "park-district-registration-agent",
    description:
      "A parent-friendly workflow to find programs, handle constraints, and complete registration steps without handling payments.",
  },
];

export default function LabsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="space-y-4">
        <p className="micro-label">Lab</p>

        <p className="max-w-3xl text-lg leading-8 text-white/72">
          Product concepts with guided tours and practical build paths across
          Tour, MVP, and CVP.
        </p>
      </header>

      <section className="mt-10 grid gap-5">
        {labs.map((lab) => (
          <div key={lab.slug} className="card p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl space-y-2">
                <h2 className="text-xl font-medium text-white">{lab.title}</h2>
                <p className="leading-8 text-white/72">{lab.description}</p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <a className="btn-primary" href={`/labs/${lab.slug}`}>
                  Take the Tour
                </a>
                <a
                  className="btn-secondary"
                  href={`/kits/getting-started/${lab.slug}`}
                >
                  View MVP
                </a>
                <a
                  className="btn-secondary"
                  href={`/kits/intermediate/${lab.slug}`}
                >
                  View CVP
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
