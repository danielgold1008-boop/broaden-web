import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Newspaper backdrop */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-newspapers.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Broaden
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-body)] font-medium mb-10">
            5 minutes. 1 great article. A smarter you.
          </p>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/app/id6760425984"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={180}
                height={54}
                className="h-[54px] w-auto"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.dg1008.Broaden"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                width={180}
                height={54}
                className="h-[54px] w-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make the most of your screen time
          </h2>
          <p className="text-lg leading-relaxed text-muted font-[family-name:var(--font-body)]">
            Broaden is a daily reading habit app that delivers 5 curated,
            thought-provoking articles every day &mdash; helping you spend
            purposeful time on your phone. You don&apos;t need to read all five;
            even one great article a day is enough to learn something new, keep
            your streak alive, and share your new knowledge with friends.
          </p>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                icon: "🧠",
                title: "Curated for you",
                desc: "Pick your topics and we'll find the best articles from trusted sources, every single day.",
              },
              {
                icon: "🔥",
                title: "Build your streak",
                desc: "Read at least one article a day to keep your streak alive. Miss a day and it resets.",
              },
              {
                icon: "👥",
                title: "Share with friends",
                desc: "Compare streaks on the leaderboard and share your favourite reads.",
              },
            ].map((f) => (
              <div key={f.title}>
                <span className="text-5xl block mb-4">{f.icon}</span>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted font-[family-name:var(--font-body)]">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start reading today
        </h2>
        <p className="text-muted text-lg mb-8 font-[family-name:var(--font-body)]">
          Free to download. Your daily reading habit starts now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com/app/id6760425984"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              width={180}
              height={54}
              className="h-[54px] w-auto"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.dg1008.Broaden"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/google-play-badge.svg"
              alt="Get it on Google Play"
              width={180}
              height={54}
              className="h-[54px] w-auto"
            />
          </a>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="py-8 px-6 border-t border-card-border">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted font-[family-name:var(--font-body)]">
          <span>&copy; {new Date().getFullYear()} Broaden</span>
          <div className="flex gap-6">
            <a
              href="https://danielgold1008-boop.github.io/broaden-legal/privacy.html"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://danielgold1008-boop.github.io/broaden-legal/terms.html"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="mailto:hello@broaden.app"
              className="hover:text-foreground transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
