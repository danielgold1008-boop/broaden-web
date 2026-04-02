import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Broaden",
  description: "Privacy Policy for the Broaden daily reading habit app.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#3A3530]">
      <div className="max-w-2xl mx-auto px-5 py-12 pb-20">
        <h1 className="text-3xl font-semibold text-[#1A1714] mb-1">Privacy Policy</h1>
        <p className="text-sm text-[#9E9890] mb-10">Broaden — Daily Reading Habit App · Last updated: 10 March 2026</p>

        <Section title="1. Who We Are">
          <p>Broaden is operated by DG Development ("we", "us", "our"). We are based in the United Kingdom. If you have any questions about this privacy policy or how we handle your data, please contact us at <a href="mailto:hello@broadendaily.com" className="text-[#D84315]">hello@broadendaily.com</a>.</p>
        </Section>

        <Section title="2. What Data We Collect">
          <Subsection title="Account Information">
            <ul className="list-disc pl-6 space-y-1">
              <li>Email address (when you sign up with email)</li>
              <li>Name (if you choose to add one)</li>
              <li>Google or Apple account identifier (if you sign in that way)</li>
              <li>Avatar selection</li>
            </ul>
          </Subsection>
          <Subsection title="Reading Activity">
            <ul className="list-disc pl-6 space-y-1">
              <li>Topics you select as interests</li>
              <li>Articles you open, read, save, and mark as read</li>
              <li>Article feedback (thumbs up/down ratings)</li>
              <li>Reading streak data (streak count, last read date)</li>
              <li>Articles read log (timestamps of reading activity)</li>
            </ul>
          </Subsection>
          <Subsection title="App Usage">
            <ul className="list-disc pl-6 space-y-1">
              <li>Badge and achievement progress</li>
              <li>Streak freeze usage</li>
              <li>Friends and leaderboard data</li>
              <li>Referral activity</li>
              <li>Notification preferences</li>
              <li>Tutorial completion status</li>
            </ul>
          </Subsection>
          <Subsection title="Analytics Data">
            <ul className="list-disc pl-6 space-y-1">
              <li>App usage events (screens viewed, features used, buttons tapped)</li>
              <li>Device type and operating system</li>
              <li>General engagement patterns</li>
            </ul>
          </Subsection>
          <Subsection title="Subscription Data">
            <ul className="list-disc pl-6 space-y-1">
              <li>Subscription status (free or Pro)</li>
              <li>Purchase history (processed by Google Play / Apple App Store)</li>
            </ul>
          </Subsection>
        </Section>

        <Section title="3. How We Use Your Data">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>To provide the service:</strong> Curating your daily articles based on your topic preferences and feedback, tracking your reading streak, managing your saved articles and notes, and operating the friends leaderboard.</li>
            <li><strong>To improve article curation:</strong> Your thumbs up/down feedback and reading patterns are used to personalise future article recommendations via our AI curation system.</li>
            <li><strong>To manage your account:</strong> Authentication, subscription management, and syncing your data across devices.</li>
            <li><strong>To analyse and improve the app:</strong> Understanding how features are used so we can make Broaden better. We use Mixpanel for analytics.</li>
            <li><strong>To send notifications:</strong> Daily reading reminders, if you choose to enable them.</li>
          </ul>
        </Section>

        <Section title="4. AI-Powered Article Curation">
          <p>Broaden uses artificial intelligence (Anthropic&apos;s Claude API) to select your daily articles. The AI receives your selected topics and a summary of your recent feedback (articles you liked or disliked) to personalise recommendations. The AI does not receive your email address, name, or other identifying information — only your topic preferences and anonymised feedback patterns.</p>
        </Section>

        <Section title="5. Legal Basis for Processing">
          <p>Under UK GDPR, we process your data on the following legal bases:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Contract:</strong> Processing necessary to provide the Broaden service you signed up for.</li>
            <li><strong>Legitimate interests:</strong> Analytics to improve the app, provided this does not override your rights and freedoms.</li>
            <li><strong>Consent:</strong> Push notifications (you can enable or disable these at any time).</li>
          </ul>
        </Section>

        <Section title="6. Who We Share Your Data With">
          <p className="mb-4">We share your data with the following third-party service providers who help us operate Broaden:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0EDE8]">
                  <th className="text-left p-3 border border-[#E8E4DF] font-semibold text-[#1A1714]">Provider</th>
                  <th className="text-left p-3 border border-[#E8E4DF] font-semibold text-[#1A1714]">Purpose</th>
                  <th className="text-left p-3 border border-[#E8E4DF] font-semibold text-[#1A1714]">Data Shared</th>
                  <th className="text-left p-3 border border-[#E8E4DF] font-semibold text-[#1A1714]">Location</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Supabase", "Database & authentication", "Account data, reading activity, saved articles", "EU/US"],
                  ["Anthropic", "AI article curation", "Topic preferences, anonymised feedback", "US"],
                  ["Mixpanel", "Analytics", "Anonymous usage events", "US"],
                  ["RevenueCat", "Subscription management", "User ID, subscription status", "US"],
                  ["Google Play / Apple", "App distribution & payments", "Purchase data", "US"],
                ].map(([provider, purpose, data, location]) => (
                  <tr key={provider}>
                    <td className="p-3 border border-[#E8E4DF]">{provider}</td>
                    <td className="p-3 border border-[#E8E4DF]">{purpose}</td>
                    <td className="p-3 border border-[#E8E4DF]">{data}</td>
                    <td className="p-3 border border-[#E8E4DF]">{location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4">We do not sell your personal data to anyone. We do not share your data with advertisers for targeting purposes.</p>
        </Section>

        <Section title="7. International Data Transfers">
          <p>Some of our service providers are based outside the UK. When we transfer your data internationally, we ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by the UK Information Commissioner&apos;s Office (ICO).</p>
        </Section>

        <Section title="8. How Long We Keep Your Data">
          <p>We retain your data for as long as your account is active. If you delete your account:</p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li>Your account data, reading history, and saved articles are deleted within 30 days.</li>
            <li>Anonymised analytics data may be retained for up to 12 months.</li>
            <li>Backup copies may persist for up to 90 days before being permanently deleted.</li>
          </ul>
        </Section>

        <Section title="9. Your Rights">
          <p>Under UK GDPR, you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Rectification:</strong> Ask us to correct inaccurate data.</li>
            <li><strong>Erasure:</strong> Ask us to delete your data ("right to be forgotten").</li>
            <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</li>
            <li><strong>Restriction:</strong> Ask us to limit how we process your data.</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interests.</li>
            <li><strong>Withdraw consent:</strong> Where we rely on consent, you can withdraw it at any time.</li>
          </ul>
          <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:hello@broadendaily.com" className="text-[#D84315]">hello@broadendaily.com</a>. We will respond within 30 days.</p>
        </Section>

        <Section title="10. Children's Privacy">
          <p>Broaden is not directed at children under the age of 13. We do not knowingly collect personal data from children under 13. If you are a parent or guardian and believe your child has provided us with personal data, please contact us and we will delete it.</p>
        </Section>

        <Section title="11. Data Security">
          <p>We take reasonable technical and organisational measures to protect your data, including encrypted data transmission (HTTPS/TLS), secure authentication, and access controls on our database. However, no method of electronic storage is 100% secure.</p>
        </Section>

        <Section title="12. Changes to This Policy">
          <p>We may update this privacy policy from time to time. We will notify you of significant changes through the app or by email. The &quot;last updated&quot; date at the top indicates when it was last revised.</p>
        </Section>

        <Section title="13. Contact and Complaints">
          <p>If you have any questions or concerns, please contact us at <a href="mailto:hello@broadendaily.com" className="text-[#D84315]">hello@broadendaily.com</a>.</p>
          <p className="mt-3">If you are not satisfied with our response, you have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" className="text-[#D84315]" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>
        </Section>

        <div className="mt-12 pt-8 border-t border-[#E8E4DF] text-sm text-[#9E9890] flex gap-6">
          <Link href="/" className="text-[#D84315]">← Back to Broaden</Link>
          <Link href="/legal/terms" className="text-[#D84315]">Terms of Service</Link>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-[#1A1714] mb-3">{title}</h2>
      <div className="space-y-3 text-[15px] leading-relaxed">{children}</div>
    </section>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-base font-semibold text-[#1A1714] mb-2">{title}</h3>
      {children}
    </div>
  );
}
