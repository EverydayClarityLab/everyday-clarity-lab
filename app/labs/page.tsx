// app/labs/page.tsx
import { kitLabs } from "../kits/catalog";

export default function LabsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="space-y-4">
        <p className="micro-label">Lab</p>

        <p className="max-w-3xl text-lg leading-8 text-white/72">
          Labs help visitors understand the idea, problem framing, and
          user-facing experience. Kits go deeper into how each concept is
          built.
        </p>
      </header>

      <section className="mt-10 grid gap-5">
        {kitLabs.map((lab) => (
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
                  href={`/kits/mvp/${lab.slug}`}
                >
                  View MVP
                </a>
                <a
                  className="btn-secondary"
                  href={`/kits/cvp/${lab.slug}`}
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
