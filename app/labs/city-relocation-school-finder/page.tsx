// app/labs/city-relocation-school-finder/page.tsx
import Breadcrumbs from "@/components/Breadcrumbs";

export default function CityRelocationSchoolFinderPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Labs", href: "/labs" },
          { label: "City Relocation and School Finder" },
        ]}
      />

      <header className="space-y-4">
        <p className="micro-label">Lab</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          City Relocation and School Finder
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-white/72">
          A guided decision flow to help families understand assigned schools,
          enrollment steps, and key contacts without hunting across multiple
          pages.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            className="btn-secondary"
            href="/kits/getting-started/city-relocation-school-finder"
          >
            Getting Started Kit
          </a>
          <a
            className="btn-secondary"
            href="/kits/intermediate/city-relocation-school-finder"
          >
            Intermediate Kit
          </a>
        </div>
      </header>

      <section className="mt-10 card p-8">
        <h2 className="text-2xl font-medium text-white">Status</h2>
        <p className="mt-4 leading-8 text-white/72">
          Tour and workflows are being built. This page will include the full
          product narrative, a guided tour, governance model, and build kits.
        </p>
      </section>

    </main>
  );
}
