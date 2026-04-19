// app/labs/property-tax-appeal-prep-pack/page.tsx
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export default function PropertyTaxAppealPrepPackPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Labs", href: "/labs" },
          { label: "Property Tax Increase Appeal Prep Pack" },
        ]}
      />

      <header className="space-y-4">
        <p className="micro-label">Lab</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Property Tax Increase Appeal Prep Pack
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-white/72">
          An evidence-based preparation pack that organizes property facts,
          comparable data, questions to ask, and a clean exhibit list for an
          assessor meeting.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            className="btn-secondary"
            href="/kits/mvp/property-tax-appeal-prep-pack"
          >
            View MVP
          </Link>
          <Link
            className="btn-secondary"
            href="/kits/cvp/property-tax-appeal-prep-pack"
          >
            View CVP
          </Link>
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
