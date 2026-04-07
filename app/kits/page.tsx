// app/kits/page.tsx
import Footer from "@/components/Footer";

const labs = [
  { title: "City Relocation and School Finder", slug: "city-relocation-school-finder" },
  { title: "Business Starter Copilot for City Limits", slug: "business-starter-copilot" },
  { title: "Property Tax Increase Appeal Prep Pack", slug: "property-tax-appeal-prep-pack" },
  { title: "Park District Registration Agent for Parents", slug: "park-district-registration-agent" },
];

export default function KitsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="space-y-4">
        <p className="micro-label">Kits</p>

        <p className="max-w-3xl text-lg leading-8 text-white/72">
          Lightweight guides to replicate the work. Start simple, then move to
          intermediate with data and GitHub.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-2xl font-medium text-white">Getting Started</h2>
          <p className="mt-3 leading-8 text-white/72">
            A calm, practical entry point with minimal setup.
          </p>

          <div className="mt-6 grid gap-3">
            {labs.map((lab) => (
              <a
                key={lab.slug}
                className="btn-secondary"
                href={`/kits/getting-started/${lab.slug}`}
              >
                {lab.title}
              </a>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-2xl font-medium text-white">Intermediate</h2>
          <p className="mt-3 leading-8 text-white/72">
            A deeper build path that will connect to GitHub and structured data.
          </p>

          <div className="mt-6 grid gap-3">
            {labs.map((lab) => (
              <a
                key={lab.slug}
                className="btn-secondary"
                href={`/kits/intermediate/${lab.slug}`}
              >
                {lab.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}