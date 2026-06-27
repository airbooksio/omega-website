import type { Metadata } from "next";
import { SiteNav } from "@/components/home/site-nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "OMEGA Markets is operated by Airbooks Inc. We collect limited technical information to operate and protect the site.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteNav />
      <article className="mx-auto w-full max-w-3xl flex-1 px-6 pt-40 pb-24 lg:pb-32">
        <span className="mb-4 block text-overline uppercase text-primary">
          Legal
        </span>
        <h1 className="text-heading-lg text-balance text-foreground">
          OMEGA Markets Privacy Notice
        </h1>
        <div className="mt-8 space-y-5 text-body-lg leading-relaxed text-muted-foreground">
          <p>
            OMEGA Markets is operated by Airbooks Inc. We collect limited
            technical information, including standard web logs and session data,
            to operate and protect the site.
          </p>
          <p>
            For security inquiries, please consult our{" "}
            <a
              href="https://core.omega-markets.com/.well-known/security.txt"
              className="text-on-primary-container underline underline-offset-4 transition-colors hover:text-foreground"
            >
              security contact
            </a>
            .
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
