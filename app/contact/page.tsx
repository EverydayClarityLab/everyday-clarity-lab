// app/contact/page.tsx

export default function ContactPage() {
  const linkedInUrl = "https://www.linkedin.com/in/analicial-0q7e6/";

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="space-y-6">
        <div className="space-y-4">
          <p className="micro-label">Contact</p>

          <p className="max-w-2xl text-lg leading-8 text-white/72">
            The best way to reach me is LinkedIn. Send a message and I will
            respond there.
          </p>
        </div>

        <div className="card max-w-4xl p-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-medium text-white">
              Message me on LinkedIn
            </h2>

            <p className="max-w-2xl leading-8 text-white/72">
              Please do not include sensitive personal details in your message.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                className="btn-primary"
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
              >
                Message me on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
