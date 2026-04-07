// app/notes/page.tsx
import Footer from "@/components/Footer";

export default function NotesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="space-y-4">
        <p className="micro-label">Lab Notes</p>

        <p className="max-w-3xl text-lg leading-8 text-white/72">
          Short, practical writing on building useful workflows, learning in
          public, and designing for clarity.
        </p>
      </header>

      <section className="mt-10 max-w-4xl card p-8">
        <h2 className="text-2xl font-medium text-white">Coming soon</h2>
        <p className="mt-4 leading-8 text-white/72">
          Expect short guides, build notes, and templates that make complex
          tasks feel manageable.
        </p>

        <div className="mt-6">
          <a className="btn-secondary" href="#">
            Subscribe
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}