import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capsule Wardrobe | Elevated Minimal Wardrobe",
  description:
    "A systematic approach to capsule wardrobes: seasonal rotation, occasion mapping, and the versatility matrix that makes 30 pieces outperform 100.",
  openGraph: {
    title: "Capsule Wardrobe | Elevated Minimal Wardrobe",
    description:
      "Seasonal rotation, occasion mapping, and the versatility matrix for capsule wardrobes.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://seo-usa.littleoria.com/seo/capsule-wardrobe",
  },
};

const PAGE_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://littleoria.com" },
      { "@type": "ListItem", position: 2, name: "Capsule Wardrobe", item: "https://seo-usa.littleoria.com/seo/capsule-wardrobe" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Modern Capsule System — Seasonal Rotation and Versatility",
    description: "A systematic approach to capsule wardrobes with seasonal rotation and occasion mapping.",
    url: "https://seo-usa.littleoria.com/seo/capsule-wardrobe",
    publisher: { "@type": "Organization", name: "Littleoria", url: "https://littleoria.com" },
    datePublished: "2026-03-15",
  },
];

export default function CapsuleWardrobePage() {
  return (
    <article className="article-container">
      {PAGE_JSON_LD.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      <h1>The Modern Capsule System: Engineering Wardrobe Efficiency</h1>
      <div className="divider" />

      <p>
        Traditional capsule wardrobe advice focuses on counting — own 33 pieces, own 37 pieces,
        own exactly this number. The count is a distraction. What matters is the system: how
        pieces relate to each other, how they rotate through seasons, and how each garment's
        versatility contributes to the whole. A capsule wardrobe is a system, not a number.
      </p>

      <h2>The Versatility Matrix</h2>
      <p>
        Before building a capsule, construct a matrix. List every garment you own across the top
        and every context you dress for down the side: office, casual weekend, evening social,
        active outdoor, travel. Mark each intersection where a garment serves that context
        naturally — without forcing, without accessories as crutches.
      </p>
      <p>
        The garments with the most marks are your core. The garments with one or two marks are
        candidates for replacement with more versatile alternatives. The garments with zero
        marks in your actual life — regardless of how beautiful they are — are the first to edit
        out.
      </p>

      <h2>Seasonal Rotation Architecture</h2>
      <p>
        A four-season capsule doesn't mean four separate wardrobes. It means a stable core of
        seasonless pieces (roughly 60-70% of the total) supplemented by seasonal inserts that
        swap in and out. The core includes: neutral-toned trousers, versatile knitwear, quality
        denim, foundational tops, and transitional outerwear.
      </p>
      <p>
        Summer inserts add breathable fabrics, lighter weights, and swimwear. Winter inserts
        bring heavy knits, a serious coat, and thermal base layers. Spring and fall share
        transitional pieces: light jackets, layerable knits, and fabrics that respond to
        fluctuating temperatures.
      </p>
      <p>
        The insert system keeps the active wardrobe compact while acknowledging climate reality.
        Off-season inserts are cleaned, stored properly, and rotated back in when needed — not
        mixed into the daily selection where they create clutter and confusion.
      </p>

      <h2>Occasion Mapping</h2>
      <p>
        Most people dress for three to four distinct contexts daily or weekly. A capsule system
        must cover all of them without requiring costume changes. The solution is designing
        outfits that transition between contexts through layering and accessory swaps rather
        than complete changes.
      </p>
      <p>
        A structured blazer over a quality tee and tailored trousers works at the office. Remove
        the blazer and the same outfit is weekend-appropriate. Add a scarf and swap the sneakers
        for leather shoes and it handles a dinner reservation. This adaptability — built into
        the garments themselves, not bolted on — is the hallmark of a well-designed capsule.
      </p>

      <h2>The Replacement Protocol</h2>
      <p>
        When a capsule piece wears out, it creates a specific gap. The replacement protocol is
        clear: find the closest possible match to the departing garment in fit, weight, and
        colour. This is not the time for experimentation. The system has proven that this
        specific garment works — the task is to maintain continuity, not introduce novelty.
      </p>
      <p>
        Evolution in a capsule system happens at the margins: a slightly different wash of denim,
        a mildly adjusted sleeve length on a tee, a new season's version of a proven knit. These
        micro-adjustments refine the system over years without disrupting it.
      </p>

      <h2>Maintenance as Investment</h2>
      <p>
        A capsule wardrobe's longevity depends on maintenance. Proper washing (cold, inside-out,
        line-dried), seasonal storage (cedar, breathable garment bags, folded knitwear), and
        timely repairs (re-sewing a button before the thread loosens further, patching a small
        hole before it grows) extend the functional life of each piece dramatically.
      </p>
      <p>
        The maintenance investment is small — perhaps twenty minutes per week — but the return is
        significant: garments that last years rather than months, a system that maintains its
        performance, and a relationship with clothing built on care rather than consumption.
      </p>

      <div className="divider" />

      <div style={{ marginTop: "2rem" }}>
        <a href="https://littleoria.com" className="cta-button">
          Shop Capsule Essentials
        </a>
      </div>

      <nav style={{ marginTop: "3rem", fontSize: "0.9375rem" }}>
        <p style={{ color: "#6b6b6b", marginBottom: "0.5rem" }}>You may also explore</p>
        <Link href="/seo/luxury-cardigans">Luxury Cardigans</Link>
        {" · "}
        <Link href="/seo/minimalist-clothing">Minimalist Clothing</Link>
        {" · "}
        <Link href="/seo/premium-basics">Premium Basics</Link>
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
