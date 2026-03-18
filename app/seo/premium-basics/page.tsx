import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium Basics | Elevated Minimal Wardrobe",
  description:
    "Premium basics aren't ordinary basics done expensively. They're the structural foundation of elevated dressing — fabric science, construction details, and cost-per-wear analysis.",
  openGraph: {
    title: "Premium Basics | Elevated Minimal Wardrobe",
    description: "Fabric science, construction details, and cost-per-wear analysis of premium basics.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://seo-usa.littleoria.com/seo/premium-basics",
  },
};

const PAGE_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://littleoria.com" },
      { "@type": "ListItem", position: 2, name: "Premium Basics", item: "https://seo-usa.littleoria.com/seo/premium-basics" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Premium Basics — Elevated Foundations",
    description: "Premium basics as the structural foundation of elevated dressing.",
    url: "https://seo-usa.littleoria.com/seo/premium-basics",
    isPartOf: { "@type": "WebSite", name: "Littleoria", url: "https://littleoria.com" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Beyond Basic — Why Premium Foundations Transform Your Wardrobe",
    description: "Fabric science, construction details, and cost-per-wear analysis of premium basics.",
    url: "https://seo-usa.littleoria.com/seo/premium-basics",
    publisher: { "@type": "Organization", name: "Littleoria", url: "https://littleoria.com" },
    datePublished: "2026-03-15",
  },
];

export default function PremiumBasicsPage() {
  return (
    <article className="article-container">
      {PAGE_JSON_LD.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      <h1>Beyond Basic: Why Premium Foundations Transform Everything</h1>
      <div className="divider" />

      <p>
        The term "basics" implies simplicity. In fashion, it suggests the unambitious garments
        that pad out a wardrobe between the statement pieces. This understanding is backwards.
        Basics are the garments worn most frequently, seen most often, and relied upon most
        heavily. They are the foundation upon which every outfit is constructed — and when the
        foundation is weak, the entire structure suffers.
      </p>

      <h2>The Fabric Difference You Can Feel</h2>
      <p>
        A premium white tee and a fast-fashion white tee serve the same notional purpose. The
        distinction is in the fabric. A Pima cotton single-jersey, ring-spun at a slow twist
        and knitted on fine-gauge machines, produces a fabric that drapes rather than clings,
        that maintains its shape after fifty washes, and that develops surface character rather
        than surface damage over time.
      </p>
      <p>
        Fast-fashion tees use open-end spun yarn — faster and cheaper to produce — resulting in a
        coarser fabric that pills within weeks and thins within months. The visual difference may
        be subtle on day one. By day thirty, the gap is obvious. By day ninety, the cheap version
        has been replaced while the premium version has just finished breaking in.
      </p>

      <h2>Construction That Endures</h2>
      <p>
        Premium basics are not just better materials assembled the same way. The construction
        differs at every stage. Seams are bound or flat-felled rather than overlocked, preventing
        the fraying and unravelling that plagues lower-quality garments. Hems are set with a
        coverstitched finish that allows stretch without popping. Necklines are reinforced with
        a taping that prevents the dreaded collar droop — the single most visible sign of a cheap tee.
      </p>
      <p>
        These details are invisible when the garment is new. Their value emerges over time, in
        the things that don't happen: seams that don't split, hems that don't curl, necklines
        that don't stretch into shapeless ovals. Premium construction is the absence of
        deterioration.
      </p>

      <h2>The Cost-Per-Wear Truth</h2>
      <p>
        Consider two tee shirts. Garment A costs $15 and lasts four months of regular wear
        before becoming unwearable (approximately 50 wears). Garment B costs $65 and lasts
        three years (approximately 400 wears). Garment A costs $0.30 per wear. Garment B
        costs $0.16 per wear. The premium option is literally cheaper — it just requires
        patience and initial capital.
      </p>
      <p>
        This arithmetic applies across all basics categories: trousers, knitwear, shirting,
        and undergarments. In every case, the upfront investment in quality returns its value
        through dramatically extended use. The only scenario where fast basics win economically
        is if the wearer genuinely prefers variety over consistency — and minimalism, by
        definition, does not.
      </p>

      <h2>Building a Basics Foundation</h2>
      <p>
        A complete basics foundation for a minimalist wardrobe requires approximately eight to
        twelve pieces: two to three tees in core colours, two pairs of trousers in complementary
        tones, one or two long-sleeve layers, a button-down shirt, and a pair of versatile
        denim. Each piece should be chosen for maximum interoperability — any top works with any
        bottom, any layer works over any base.
      </p>
      <p>
        The selection process is rigorous but finite. Once your basics are established, they
        require only periodic replacement as pieces reach the end of their natural lifespan.
        Shopping becomes maintenance rather than recreation — an occasional, purposeful activity
        rather than a chronic habit.
      </p>

      <h2>When Basics Become Signature</h2>
      <p>
        The most stylish people in any room are often the ones wearing the least complex outfits.
        A perfectly fitted black tee, well-cut trousers, and clean shoes communicate more
        confidence than any amount of trend-chasing. Premium basics, worn consistently and well,
        become a signature — a personal uniform that signals intentionality.
      </p>
      <p>
        This is the paradox of elevated basics: by investing in the simplest possible garments,
        you achieve the most distinctive possible result. The restraint becomes the statement.
      </p>

      <div className="divider" />

      <div style={{ marginTop: "2rem" }}>
        <a href="https://littleoria.com" className="cta-button">
          Shop Premium Basics
        </a>
      </div>

      <nav style={{ marginTop: "3rem", fontSize: "0.9375rem" }}>
        <p style={{ color: "#6b6b6b", marginBottom: "0.5rem" }}>You may also explore</p>
        <Link href="/seo/luxury-cardigans">Luxury Cardigans</Link>
        {" · "}
        <Link href="/seo/minimalist-clothing">Minimalist Clothing</Link>
        {" · "}
        <Link href="/seo/capsule-wardrobe">Capsule Wardrobe</Link>
        {" · "}
        <Link href="/editorial/minimalist-style">Minimalist Style</Link>
        {" · "}
        <Link href="/editorial/outfit-ideas">Outfit Ideas</Link>
        {" · "}
        <Link href="/editorial/quiet-luxury">Quiet Luxury</Link>
      </nav>
    </article>
  );
}
