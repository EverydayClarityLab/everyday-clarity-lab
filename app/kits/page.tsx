// app/kits/page.tsx
import { kitLabs } from "./catalog";

export default function KitsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="space-y-4">
        <p className="micro-label">Kits</p>

        <p className="max-w-3xl text-lg leading-8 text-white/72">
          Kits are the implementation layer. Choose the depth you want, from a
          concept-level Tour to MVP and CVP paths that go deeper into system
          decisions, architecture, and code handoff.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="card p-6">
          <h2 className="text-2xl font-medium text-white">Tour</h2>
          <p className="mt-3 leading-8 text-white/72">
            A medium-fidelity walkthrough to understand the concept, flow, and
            value before building.
          </p>

          <div className="mt-6 grid gap-3">
            {kitLabs.map((lab) => (
              <a key={lab.slug} className="btn-secondary" href={`/labs/${lab.slug}`}>
                {lab.title}
              </a>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-2xl font-medium text-white">MVP</h2>
          <p className="mt-3 leading-8 text-white/72">
            The first practical build with core tools, setup, and system
            decisions.
          </p>

          <div className="mt-6 grid gap-3">
            {kitLabs.map((lab) => (
              <a
                key={lab.slug}
                className="btn-secondary"
                href={`/kits/mvp/${lab.slug}`}
              >
                {lab.title}
              </a>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-2xl font-medium text-white">CVP</h2>
          <p className="mt-3 leading-8 text-white/72">
            A more complete build path with stronger architecture, governance,
            and code depth.
          </p>

          <div className="mt-6 grid gap-3">
            {kitLabs.map((lab) => (
              <a
                key={lab.slug}
                className="btn-secondary"
                href={`/kits/cvp/${lab.slug}`}
              >
                {lab.title}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
