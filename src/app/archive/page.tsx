export default function ArchivePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="text-6xl mb-6">📚</span>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Archive</h1>
      <p className="text-lg text-muted font-[family-name:var(--font-body)] max-w-md mb-8">
        Coming soon! A place to revisit all the amazing articles you&apos;ve
        read. Available exclusively for Broaden Pro members.
      </p>
      <a
        href="/"
        className="inline-block bg-accent text-white font-[family-name:var(--font-body)] font-semibold px-8 py-3 rounded-xl hover:bg-accent-hover transition-colors"
      >
        Back to home
      </a>
    </div>
  );
}
