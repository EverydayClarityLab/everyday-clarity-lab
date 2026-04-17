// app/labs/business-starter-copilot/page.tsx
import Breadcrumbs from "@/components/Breadcrumbs";

export default function BusinessStarterCopilotPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Labs", href: "/labs" },
          { label: "Business Starter Copilot for City Limits" },
        ]}
      />

      <header className="space-y-4">
        <p className="micro-label">Lab</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Business Starter Copilot for City Limits
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-white/72">
          Plain-language guidance with citations to ordinances, permits, and
          forms, plus a next-best-step checklist for people starting a business
          inside city limits.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            className="btn-secondary"
            href="/kits/getting-started/business-starter-copilot"
          >
            Getting Started Kit
          </a>
          <a
            className="btn-secondary"
            href="/kits/intermediate/business-starter-copilot"
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
