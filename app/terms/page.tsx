import type { Metadata } from "next";
import { SiteNav } from "@/components/home/site-nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "OMEGA Markets preview terms — access to protected areas is provided for authorized evaluation only.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteNav />
      <article className="mx-auto w-full max-w-3xl flex-1 px-6 pt-40 pb-24 lg:pb-32">
        <span className="mb-4 block text-overline uppercase text-primary">
          Legal
        </span>
        <h1 className="text-heading-lg text-balance text-foreground">
          OMEGA Markets Preview Terms
        </h1>
        <div className="mt-8 space-y-5 text-body-lg leading-relaxed text-muted-foreground">
          <p>
            OMEGA Markets is operated by Airbooks Inc. Access to
            password-protected areas is provided for authorized evaluation only
            and may change without notice.
          </p>
          <p>
            Please do not attempt to access protected areas without permission
            or interfere with the availability of the site.
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
