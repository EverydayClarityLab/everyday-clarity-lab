// app/kits/[track]/[lab]/page.tsx
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

const labMap: Record<string, { title: string }> = {
  "city-relocation-school-finder": {
    title: "City Relocation and School Finder",
  },
  "business-starter-copilot": {
    title: "Business Starter Copilot for City Limits",
  },
  "property-tax-appeal-prep-pack": {
    title: "Property Tax Increase Appeal Prep Pack",
  },
  "park-district-registration-agent": {
    title: "Park District Registration Agent for Parents",
  },
};

export default async function KitPage({
  params,
}: {
  params: Promise<{ track: string; lab: string }>;
}) {
  const { track, lab } = await params;

  const labTitle = labMap[lab]?.title ?? "Lab";
  const trackTitle =
    track === "getting-started"
      ? "MVP"
      : track === "intermediate"
        ? "CVP"
        : "Kit";

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Kits", href: "/kits" },
          { label: trackTitle },
          { label: labTitle },
        ]}
      />

      <header className="space-y-4">
        <p className="micro-label">Kit</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          {trackTitle} Kit
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-white/72">{labTitle}</p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link className="btn-secondary" href={`/labs/${lab}`}>
            Back to Lab
          </Link>
          <Link className="btn-secondary" href="/kits">
            All Kits
          </Link>
        </div>
      </header>

      <section className="mt-10 card p-8 space-y-4">
        <h2 className="text-2xl font-medium text-white">Status</h2>
        <p className="leading-8 text-white/72">
          This kit will include prerequisites, milestone steps, data source
          guidance, and troubleshooting.
        </p>
        <p className="leading-8 text-white/72">
          CVP kits will also link to GitHub for example data and a
          reference implementation pattern.
        </p>
      </section>

    </main>
  );
}
