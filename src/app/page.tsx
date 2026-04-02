"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is it free?",
      a: "Yes. Broaden is free with 13 topics, streak tracking, badges, and a friends leaderboard. Pro unlocks all 20 topics, unlimited saves, and notes for £4.99/month.",
    },
    {
      q: "Where do the articles come from?",
      a: "We curate from trusted publications like The Guardian, Aeon, Ars Technica, and Wired. No clickbait sources, no content farms.",
    },
    {
      q: "Do I have to read all 5 articles?",
      a: "Not at all. Even one article a day keeps your streak alive and counts toward your reading goals. Five is a menu, not a minimum.",
    },
    {
      q: "How is this different from Apple News or Flipboard?",
      a: "Those apps give you hundreds of articles and an infinite feed. Broaden gives you exactly 5 — chosen for you, from quality sources. The constraint is the feature: no overwhelm, no doomscrolling, just a daily reading habit.",
    },
    {
      q: "What topics can I choose from?",
      a: "Currently we cover Science, Psychology, Technology, Philosophy, Architecture, History, Neuroscience, Climate, Space, Arts, Culture, Economics, Business, Health, Environment, Law, Lifestyle, Music, Sport, and Current Affairs. If you want more topics, don't hesitate to request them in the feedback function in your settings page!",
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --terracotta: #D84315;
          --terracotta-light: #E8714A;
          --off-white: #FFF8F0;
          --card-bg: #FFF3ED;
          --dark: #1A1A1A;
          --mid-grey: #666666;
          --light-grey: #F5F0EB;
          --font-display: 'Playfair Display', Georgia, serif;
          --font-body: 'DM Sans', -apple-system, sans-serif;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: var(--font-body);
          color: var(--dark);
          background: var(--off-white);
          -webkit-font-smoothing: antialiased;
        }

        /* ===== NAV ===== */
        .site-nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 100;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 248, 240, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(216, 67, 21, 0.08);
        }

        .nav-logo {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--dark);
          text-decoration: none;
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--terracotta);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s;
        }
        .nav-cta:hover { background: var(--terracotta-light); }

        /* ===== HERO ===== */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 2rem 4rem;
          position: relative;
          overflow: hidden;
          background: var(--off-white);
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 60%;
          height: 140%;
          background: radial-gradient(ellipse at center, rgba(216, 67, 21, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }

        .hero-content { position: relative; z-index: 2; }

        .hero h1 {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 700;
          line-height: 1.15;
          color: var(--dark);
          margin-bottom: 1.2rem;
        }
        .hero h1 span { color: var(--terracotta); }

        .hero-sub {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--mid-grey);
          max-width: 480px;
          margin-bottom: 2rem;
        }

        .badge-row {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          align-items: center;
        }
        .badge-row a img { height: 48px; transition: opacity 0.2s; }
        .badge-row a:hover img { opacity: 0.8; }

        .hero-note {
          margin-top: 1rem;
          font-size: 0.85rem;
          color: var(--mid-grey);
        }

        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .phone-frame {
          width: 280px;
          height: 580px;
          background: var(--dark);
          border-radius: 36px;
          padding: 12px;
          box-shadow:
            0 40px 80px rgba(26, 26, 26, 0.18),
            0 16px 32px rgba(26, 26, 26, 0.1),
            inset 0 1px 0 rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          background: var(--off-white);
          border-radius: 26px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .phone-status-bar {
          height: 44px;
          background: var(--off-white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--dark);
        }

        .phone-header { padding: 0.8rem 1rem 0.6rem; }

        .phone-header h3 {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--dark);
        }

        .phone-header .streak-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: var(--card-bg);
          border-radius: 12px;
          padding: 0.2rem 0.6rem;
          font-size: 0.65rem;
          font-weight: 500;
          color: var(--terracotta);
          margin-top: 0.4rem;
        }

        .article-card {
          margin: 0 0.6rem 0.5rem;
          padding: 0.7rem 0.8rem;
          background: white;
          border-radius: 12px;
          border-left: 3px solid var(--terracotta);
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .article-card .source {
          font-size: 0.55rem;
          font-weight: 500;
          color: var(--terracotta);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.2rem;
        }
        .article-card .title {
          font-family: var(--font-display);
          font-size: 0.72rem;
          font-weight: 700;
          line-height: 1.3;
          color: var(--dark);
        }
        .article-card .meta {
          font-size: 0.52rem;
          color: var(--mid-grey);
          margin-top: 0.25rem;
        }
        .article-card.card-2 { border-left-color: #5C6BC0; }
        .article-card.card-3 { border-left-color: #00897B; }
        .article-card.card-4 { border-left-color: #0288D1; opacity: 0.6; }

        .floating-badge {
          position: absolute;
          top: 2rem;
          right: -1rem;
          background: white;
          border-radius: 16px;
          padding: 0.6rem 1rem;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 500;
          animation: float 3s ease-in-out infinite;
        }
        .floating-badge .emoji { font-size: 1.2rem; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* ===== SECTIONS ===== */
        .page-section { padding: 5rem 2rem; }

        .section-inner { max-width: 1100px; margin: 0 auto; }

        .section-label {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--terracotta);
          margin-bottom: 0.75rem;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .section-sub {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--mid-grey);
          max-width: 640px;
        }

        /* ===== HOW IT WORKS ===== */
        .how-it-works { background: white; }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .step-number {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--card-bg);
          color: var(--terracotta);
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
        }

        .step h3 {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
        }

        .step p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--mid-grey);
        }

        .beaver-note {
          margin-top: 0.8rem;
          font-size: 0.85rem;
          color: var(--terracotta);
          font-weight: 500;
        }

        /* ===== REFRAME ===== */
        .reframe {
          background: var(--dark);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .reframe::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(ellipse at 20% 50%, rgba(216, 67, 21, 0.12) 0%, transparent 60%);
        }
        .reframe .section-inner { position: relative; z-index: 2; }
        .reframe .section-label { color: var(--terracotta-light); }
        .reframe .section-title { color: white; }
        .reframe .section-sub { color: rgba(255,255,255,0.7); }

        .reframe-body {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.75);
          max-width: 640px;
          margin-top: 1.5rem;
        }
        .reframe-body strong { color: white; font-weight: 500; }

        .reframe-punchline {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--terracotta-light);
          margin-top: 2rem;
        }

        /* ===== FEATURES ===== */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid rgba(0,0,0,0.04);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .feature-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.06);
        }

        .feature-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }
        .feature-icon-1 { background: #E8F5E9; }
        .feature-icon-2 { background: #FFF3E0; }
        .feature-icon-3 { background: #E3F2FD; }
        .feature-icon-4 { background: #FCE4EC; }

        .feature-card h3 {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .feature-card p { font-size: 0.92rem; line-height: 1.65; color: var(--mid-grey); }

        /* ===== FAQ ===== */
        .faq-section { background: white; }

        .faq-list { margin-top: 2.5rem; max-width: 720px; }

        .faq-item { border-bottom: 1px solid var(--light-grey); }

        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 1.4rem 0;
          font-family: var(--font-body);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--dark);
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .faq-chevron {
          font-size: 1.4rem;
          font-weight: 400;
          color: var(--terracotta);
          flex-shrink: 0;
          transition: transform 0.3s;
          line-height: 1;
        }
        .faq-chevron.open { transform: rotate(45deg); }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }
        .faq-answer.open { max-height: 300px; padding-bottom: 1.4rem; }

        .faq-answer p { font-size: 0.95rem; line-height: 1.7; color: var(--mid-grey); }

        /* ===== FINAL CTA ===== */
        .final-cta {
          text-align: center;
          background: var(--off-white);
          padding: 5rem 2rem 3rem;
        }
        .final-cta .section-title { margin: 0 auto 0.8rem; }
        .final-cta .section-sub { margin: 0 auto 2rem; text-align: center; max-width: 500px; }
        .final-cta .badge-row { justify-content: center; margin-bottom: 1rem; }
        .final-cta .friction-note { font-size: 0.85rem; color: var(--mid-grey); margin-top: 0.8rem; }

        /* ===== FOOTER ===== */
        .site-footer {
          text-align: center;
          padding: 2rem;
          font-size: 0.85rem;
          color: var(--mid-grey);
          border-top: 1px solid var(--light-grey);
        }
        .site-footer a { color: var(--mid-grey); text-decoration: none; margin: 0 0.8rem; }
        .site-footer a:hover { color: var(--terracotta); }
        .footer-links { margin-top: 0.5rem; }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .site-nav { padding: 0.8rem 1.2rem; }
          .nav-logo { font-size: 1.2rem; }
          .nav-cta { padding: 0.5rem 1rem; font-size: 0.82rem; }

          .hero { padding: 6rem 1.5rem 3rem; min-height: auto; }
          .hero-inner { grid-template-columns: 1fr; gap: 2.5rem; text-align: center; }
          .hero-sub { margin: 0 auto 2rem; }
          .badge-row { justify-content: center; }
          .hero-note { text-align: center; }
          .hero-visual { order: -1; }
          .phone-frame { width: 220px; height: 460px; border-radius: 28px; }
          .phone-header h3 { font-size: 0.9rem; }
          .article-card .title { font-size: 0.65rem; }
          .floating-badge { top: 0; right: -0.5rem; font-size: 0.7rem; padding: 0.4rem 0.8rem; }

          .steps-grid { grid-template-columns: 1fr; gap: 2rem; }
          .features-grid { grid-template-columns: 1fr; }

          .page-section { padding: 3.5rem 1.5rem; }
        }
      `}</style>

      {/* NAV */}
      <nav className="site-nav">
        <a href="/" className="nav-logo">Broaden</a>
        <a href="#download" className="nav-cta">
          Download Free
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Five articles.<br />Every day.<br /><span>No noise.</span></h1>
            <p className="hero-sub">
              Broaden picks 5 thought-provoking articles for you each day, from sources you can trust. Read one, read all five — either way, you&apos;re building a reading habit that sticks.
            </p>
            <div className="badge-row">
              <a href="https://apps.apple.com/app/id6760425984">
                <Image src="/app-store-badge.svg" alt="Download on the App Store" width={144} height={48} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.dg1008.Broaden">
                <Image src="/google-play-badge.svg" alt="Get it on Google Play" width={162} height={48} />
              </a>
            </div>
            <p className="hero-note">Free to download. Set up in 30 seconds.</p>
          </div>

          <div className="hero-visual">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="phone-status-bar">9:41</div>
                <div className="phone-header">
                  <h3>Today&apos;s Articles</h3>
                  <div className="streak-badge">🔥 14-day streak</div>
                </div>
                <div className="article-card">
                  <div className="source">The Guardian</div>
                  <div className="title">The city designed to make you lonely</div>
                  <div className="meta">6 min read · Architecture</div>
                </div>
                <div className="article-card card-2">
                  <div className="source">Aeon</div>
                  <div className="title">Why your brain lies about time</div>
                  <div className="meta">8 min read · Neuroscience</div>
                </div>
                <div className="article-card card-3">
                  <div className="source">Wired</div>
                  <div className="title">The science of habit stacking</div>
                  <div className="meta">5 min read · Psychology</div>
                </div>
                <div className="article-card card-4">
                  <div className="source">Ars Technica</div>
                  <div className="title">How octopuses taste with their arms</div>
                  <div className="meta">4 min read · Science</div>
                </div>
              </div>
            </div>
            <div className="floating-badge">
              <span className="emoji">🦫</span>
              <span>14 days! Keep going!</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="page-section how-it-works">
        <div className="section-inner">
          <p className="section-label">How it works</p>
          <h2 className="section-title">Three steps. One new habit.</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Pick what you&apos;re curious about</h3>
              <p>Choose from 20 topics — science, psychology, architecture, history, technology, and more. Broaden learns what you love.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Wake up to 5 great articles</h3>
              <p>Every morning, your articles are ready. Curated from trusted sources like The Guardian, Aeon, and Wired. No clickbait, no filler.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Read one. That&apos;s enough.</h3>
              <p>Even one article a day builds a streak, earns badges, and teaches you something new.</p>
              <p className="beaver-note">A beaver mascot cheers you on. (Yes, really.)</p>
            </div>
          </div>
        </div>
      </section>

      {/* REFRAME */}
      <section className="page-section reframe">
        <div className="section-inner">
          <p className="section-label">A better use of your screen time</p>
          <h2 className="section-title">Your phone, but better.</h2>
          <p className="section-sub">You&apos;re already spending 30 minutes a day scrolling. What if 5 of those minutes went on something genuinely worth reading?</p>
          <p className="reframe-body">
            Broaden isn&apos;t another news app with 500 articles and an infinite feed. It&apos;s <strong>5 articles, chosen for you</strong>, and then you&apos;re done. No guilt, no overwhelm, no algorithm trying to keep you hooked.
          </p>
          <p className="reframe-punchline">Just one good read a day. That&apos;s the whole idea.</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="page-section features">
        <div className="section-inner">
          <p className="section-label">What&apos;s inside</p>
          <h2 className="section-title">Built for people who want to read more<br />(and finally can)</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon feature-icon-1">🧠</div>
              <h3>AI curation that actually works</h3>
              <p>Tell us what you&apos;re into. Our AI finds the best articles from quality sources — and gets smarter with every thumbs up.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon-2">🔥</div>
              <h3>A streak that keeps you going</h3>
              <p>Read one article and your streak counts. Miss a day? Streak freezes have you covered.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon-3">📚</div>
              <h3>A library that&apos;s yours</h3>
              <p>Save articles, add notes, and build a personal collection of the best things you&apos;ve read.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon-4">🏆</div>
              <h3>Friends who keep you honest</h3>
              <p>Compare streaks on the leaderboard. Share articles. Turn reading into something you do together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section faq-section">
        <div className="section-inner">
          <p className="section-label">Questions</p>
          <h2 className="section-title">Everything you need to know</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <span className={`faq-chevron${openFaq === i ? " open" : ""}`}>+</span>
                </button>
                <div className={`faq-answer${openFaq === i ? " open" : ""}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="download">
        <div className="section-inner">
          <p className="section-label">Get started</p>
          <h2 className="section-title">Download now. Read tonight.</h2>
          <p className="section-sub">Download Broaden, pick 3 topics, and your first 5 articles will be ready within minutes.</p>
          <div className="badge-row">
            <a href="https://apps.apple.com/app/id6760425984">
              <Image src="/app-store-badge.svg" alt="Download on the App Store" width={144} height={48} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.dg1008.Broaden">
              <Image src="/google-play-badge.svg" alt="Get it on Google Play" width={162} height={48} />
            </a>
          </div>
          <p className="friction-note">Free. No credit card. Just great articles.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div>© 2026 Broaden</div>
        <div className="footer-links">
          <a href="/legal/privacy">Privacy Policy</a>
          <a href="/legal/terms">Terms of Service</a>
          <a href="mailto:hello@broadendaily.com">Get in touch</a>
        </div>
      </footer>

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}
