import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Broaden",
  description: "Terms of Service for the Broaden daily reading habit app.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#3A3530]">
      <div className="max-w-2xl mx-auto px-5 py-12 pb-20">
        <h1 className="text-3xl font-semibold text-[#1A1714] mb-1">Terms of Service</h1>
        <p className="text-sm text-[#9E9890] mb-10">Broaden — Daily Reading Habit App · Last updated: 10 March 2026</p>

        <Section title="1. Introduction">
          <p>These Terms of Service (&quot;Terms&quot;) govern your use of the Broaden mobile application (&quot;the App&quot;), operated by DG Development (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By creating an account or using the App, you agree to these Terms. If you do not agree, please do not use the App.</p>
        </Section>

        <Section title="2. The Service">
          <p>Broaden is a daily reading habit app that uses artificial intelligence to curate articles from third-party publications based on your topic preferences. The App provides five AI-curated articles per day, reading streak tracking, a personal article library with notes, a friends leaderboard, achievement badges, and optional premium features via a paid subscription (&quot;Broaden Pro&quot;).</p>
        </Section>

        <Section title="3. Eligibility">
          <p>You must be at least 13 years old to use Broaden. If you are under 18, you confirm that you have your parent or guardian&apos;s permission to use the App. By using the App, you represent that you meet these requirements.</p>
        </Section>

        <Section title="4. Your Account">
          <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information when creating your account and to notify us promptly if you become aware of any unauthorised use of your account. We reserve the right to suspend or terminate accounts that violate these Terms.</p>
        </Section>

        <Section title="5. Article Content">
          <Subsection title="5.1 Third-Party Content">
            <p>The articles presented in Broaden are sourced from third-party publications and websites. We do not create, own, or control this content. The views expressed in articles do not represent our views.</p>
          </Subsection>
          <Subsection title="5.2 No Endorsement">
            <p>The inclusion of an article in your daily recommendations does not constitute our endorsement of the article&apos;s content, the publication, or any products or services mentioned within it.</p>
          </Subsection>
          <Subsection title="5.3 Content Accuracy">
            <p>We do not guarantee the accuracy, completeness, or reliability of any third-party article content. You should independently verify any information before relying on it, particularly regarding health, financial, or legal matters.</p>
          </Subsection>
          <Subsection title="5.4 AI Curation">
            <p>Articles are selected by an AI system based on your topic preferences and feedback. The AI aims to surface thoughtful, educational content but may occasionally recommend articles that are not relevant to your interests or that contain errors.</p>
          </Subsection>
        </Section>

        <Section title="6. Your Content">
          <Subsection title="6.1 Notes and Feedback">
            <p>When you add notes to saved articles or provide feedback (thumbs up/down), you retain ownership of that content. By using the App, you grant us a licence to use your feedback data to improve article curation for you and other users.</p>
          </Subsection>
          <Subsection title="6.2 Acceptable Use">
            <p>You agree not to use the App to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Attempt to gain unauthorised access to the App&apos;s systems or other users&apos; accounts</li>
              <li>Interfere with or disrupt the App&apos;s operation</li>
              <li>Use the App for any commercial purpose other than as intended</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the App</li>
            </ul>
          </Subsection>
        </Section>

        <Section title="7. Broaden Pro Subscription">
          <Subsection title="7.1 Subscription Plans">
            <p>Broaden Pro is available as a monthly or yearly auto-renewing subscription. Prices are displayed in the App and may vary by region.</p>
          </Subsection>
          <Subsection title="7.2 Payment">
            <p>Payments are processed through the Google Play Store or Apple App Store. By subscribing, you agree to the payment terms of the relevant app store.</p>
          </Subsection>
          <Subsection title="7.3 Auto-Renewal">
            <p>Your subscription will automatically renew at the end of each billing period unless you cancel at least 24 hours before the end of the current period. You can manage or cancel your subscription through your device&apos;s app store settings.</p>
          </Subsection>
          <Subsection title="7.4 Cancellation and Refunds">
            <p>When you cancel, you will continue to have access to Broaden Pro features until the end of your current billing period. Refund requests are handled by the relevant app store in accordance with their refund policies.</p>
          </Subsection>
          <Subsection title="7.5 Right of Withdrawal (UK)">
            <p>Under the Consumer Contracts Regulations 2013, you have a 14-day right to cancel a digital subscription from the date of purchase. By making a purchase and beginning to use the digital content immediately, you acknowledge that you may lose this right of withdrawal once the content has been fully provided. If you cancel within the 14-day period and have not used the service, you are entitled to a full refund.</p>
          </Subsection>
          <Subsection title="7.6 Free Tier">
            <p>You may use Broaden without a subscription, subject to the limitations of the free tier. These limitations are described within the App and may change from time to time.</p>
          </Subsection>
        </Section>

        <Section title="8. Intellectual Property">
          <Subsection title="8.1 Our IP">
            <p>The Broaden app, including its design, code, branding, beaver mascot, and original content, is protected by copyright and other intellectual property laws. You may not copy, modify, distribute, or create derivative works from any part of the App without our prior written consent.</p>
          </Subsection>
          <Subsection title="8.2 Trademarks">
            <p>&quot;Broaden&quot; and the Broaden logo are trademarks of DG Development. You may not use our trademarks without our prior written permission.</p>
          </Subsection>
          <Subsection title="8.3 Third-Party IP">
            <p>Articles displayed within the App remain the intellectual property of their respective authors and publications. Your use of article content is subject to the terms of the original publisher.</p>
          </Subsection>
        </Section>

        <Section title="9. Disclaimer of Warranties">
          <p>The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied. We do not warrant that the App will be uninterrupted, error-free, or secure; that article recommendations will meet your expectations; that any information obtained through the App will be accurate or reliable; or that defects will be corrected in a timely manner.</p>
          <p className="mt-3">Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded under applicable law.</p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p>To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App. Our total liability for any claim arising from these Terms or your use of the App shall not exceed the amount you have paid us in the 12 months preceding the claim. We are not responsible for any loss or damage arising from your reliance on article content provided through the App.</p>
          <p className="mt-3">These limitations apply to the fullest extent permitted by English law. Nothing in these Terms affects your statutory rights as a consumer under the Consumer Rights Act 2015.</p>
        </Section>

        <Section title="11. Indemnification">
          <p>You agree to indemnify and hold us harmless from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your breach of these Terms or your misuse of the App.</p>
        </Section>

        <Section title="12. Changes to These Terms">
          <p>We may update these Terms from time to time. If we make material changes, we will notify you through the App or by email. Your continued use of the App after such changes constitutes your acceptance of the updated Terms. If you do not agree to the changes, you should stop using the App and delete your account.</p>
        </Section>

        <Section title="13. Termination">
          <p>We may suspend or terminate your access to the App at any time, with or without cause, and with or without notice. Upon termination, your right to use the App ceases immediately. Any active subscription will not be renewed, but you will retain access until the end of the current billing period. We may delete your data in accordance with our Privacy Policy.</p>
          <p className="mt-3">You may terminate your account at any time by signing out and contacting us to request deletion.</p>
        </Section>

        <Section title="14. General">
          <Subsection title="14.1 Governing Law">
            <p>These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </Subsection>
          <Subsection title="14.2 Entire Agreement">
            <p>These Terms, together with our <Link href="/legal/privacy" className="text-[#D84315]">Privacy Policy</Link>, constitute the entire agreement between you and us regarding your use of the App.</p>
          </Subsection>
          <Subsection title="14.3 Severability">
            <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
          </Subsection>
          <Subsection title="14.4 No Waiver">
            <p>Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision.</p>
          </Subsection>
        </Section>

        <Section title="15. Contact Us">
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:hello@broadendaily.com" className="text-[#D84315]">hello@broadendaily.com</a>.</p>
        </Section>

        <div className="mt-12 pt-8 border-t border-[#E8E4DF] text-sm text-[#9E9890] flex gap-6">
          <Link href="/" className="text-[#D84315]">← Back to Broaden</Link>
          <Link href="/legal/privacy" className="text-[#D84315]">Privacy Policy</Link>
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
