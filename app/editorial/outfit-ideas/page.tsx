import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outfit Ideas | Elevated Minimal Wardrobe",
  description:
    "Practical outfit combinations built from a minimalist wardrobe. 20 proven formulas that work across seasons, occasions, and personal styles.",
  openGraph: {
    title: "Outfit Ideas | Elevated Minimal Wardrobe",
    description: "20 proven outfit combinations built from a minimalist foundation.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://seo-usa.littleoria.com/editorial/outfit-ideas",
  },
};

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "20 Outfit Formulas for the Minimalist Wardrobe",
  description: "Practical outfit combinations built from a minimalist wardrobe.",
  url: "https://seo-usa.littleoria.com/editorial/outfit-ideas",
  publisher: { "@type": "Organization", name: "Littleoria", url: "https://littleoria.com" },
  datePublished: "2026-03-15",
  dateModified: "2026-03-18",
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://littleoria.com" },
    { "@type": "ListItem", position: 2, name: "Outfit Ideas", item: "https://seo-usa.littleoria.com/editorial/outfit-ideas" },
  ],
};

export default function OutfitIdeasPage() {
  return (
    <article className="article-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />

      <h1>20 Outfit Formulas That Work Every Time</h1>
      <div className="divider" />

      <p>
        Outfit formulas eliminate the daily decision. Each formula below uses garments found in
        a standard minimalist wardrobe — no special purchases required. The goal isn't to
        prescribe what you wear but to demonstrate how a small number of quality pieces generates
        a surprising range of distinct outfits.
      </p>

      <h2>Everyday Foundations (Formulas 1–6)</h2>

      <h3>1. The Column</h3>
      <p>
        A single colour from head to toe. Black tee, black trousers, black shoes. The monochrome
        column elongates the body and projects effortless confidence. Works with any single
        colour in your palette — navy, charcoal, ivory, or camel.
      </p>

      <h3>2. The Tonal Layer</h3>
      <p>
        Three shades of one hue. Light grey tee, mid-grey cardigan, charcoal trousers. Tonal
        layering creates visual depth without complexity. The key is varying the shades enough
        to read as intentional, not accidental.
      </p>

      <h3>3. The Half-Tuck</h3>
      <p>
        Relaxed button-down, front half tucked into high-waisted trousers or denim. This simple
        gesture creates a defined waistline while maintaining the ease of untucked shirting.
        Works equally well with a linen shirt in summer or an Oxford in autumn.
      </p>

      <h3>4. The Knit-Over-Shirt</h3>
      <p>
        A crew-neck knit layered over a collared shirt with the collar and cuffs visible. This
        classic combination works year-round — lighter weights in spring, heavier in winter.
        The collar adds structure; the knit adds warmth without bulk.
      </p>

      <h3>5. The Perfect Tee</h3>
      <p>
        Quality white tee, straight-leg denim, clean sneakers or loafers. The foundation of
        casual minimalism. Everything depends on the fit and quality of each piece — there's
        nowhere for mediocrity to hide when the outfit is this simple.
      </p>

      <h3>6. The Weekend Overshirt</h3>
      <p>
        Overshirt or shacket worn open over a fitted tee with relaxed trousers. The overshirt
        functions as a light jacket while maintaining a casual, unhurried proportion. Works in
        linen, chambray, or brushed cotton depending on the season.
      </p>

      <h2>Office and Professional (Formulas 7–12)</h2>

      <h3>7. The Soft Suit</h3>
      <p>
        Unstructured blazer with matching trousers in a relaxed fabric — ponte, cotton twill,
        or light wool. Professional enough for meetings, comfortable enough for a full day. No
        tie, no stiff construction, no discomfort.
      </p>

      <h3>8. The Blazer-and-Denim</h3>
      <p>
        A structured blazer worn over a simple tee with dark denim. This formula balances formal
        and casual signals, making it appropriate for creative offices, client lunches, and
        after-work drinks without changing.
      </p>

      <h3>9. The Tailored Layer</h3>
      <p>
        Fitted turtleneck or mock-neck under a blazer or tailored jacket. The turtleneck
        eliminates the need for a shirt while adding visual elevation. In black or charcoal,
        it reads as sophisticated. In cream or camel, it reads as approachable.
      </p>

      <h3>10. The Trouser Swap</h3>
      <p>
        Keep the top half consistent (quality tee or knit) and swap between tailored trousers
        and denim to shift the formality level. This simple bottom-half change takes the same
        top from weekend to workday.
      </p>

      <h3>11. The Cardigan Office</h3>
      <p>
        Fine-gauge cardigan worn closed (or buttoned halfway) as a standalone top with tailored
        trousers. The cardigan-as-top eliminates layering bulk while maintaining a polished,
        textured appearance.
      </p>

      <h3>12. The Clean Dress-Down</h3>
      <p>
        Relaxed-fit chinos, a quality crew-neck knit, and clean leather shoes. No tie, no
        jacket, no complexity — but every piece fits well and the colours cohere. This is the
        formula for offices that don't require suits but do require effort.
      </p>

      <h2>Evening and Social (Formulas 13–16)</h2>

      <h3>13. The Elevated Black</h3>
      <p>
        All black, but with texture variation: a ribbed knit against smooth trousers against
        matte leather. The tonal consistency reads as intentional, and the texture differences
        prevent flatness.
      </p>

      <h3>14. The Statement Knit</h3>
      <p>
        A richer-textured knit — cable, ribbed, or bouclé — with simple black trousers and
        refined shoes. The knit becomes the visual centrepiece while the rest of the outfit
        provides a clean frame.
      </p>

      <h3>15. The Silk Proportion</h3>
      <p>
        Silk or silk-blend blouse with a wider-leg trouser and heeled sandals or pointed shoes.
        The fabric does the work: drape, lustre, and movement that elevate a minimal silhouette
        into evening territory.
      </p>

      <h3>16. The Jacket Dress</h3>
      <p>
        A tailored jacket worn over a simple slip dress or midi skirt with a fitted top. The
        jacket provides structure and formality; the dress provides ease. Together, they bridge
        the gap between effort and comfort.
      </p>

      <h2>Seasonal Adaptations (Formulas 17–20)</h2>

      <h3>17. Summer Minimal</h3>
      <p>
        Wide-leg linen trousers, a fitted tank or sleeveless top, flat sandals. Maximum coverage
        with maximum breathability. The wide leg creates airflow; the fitted top balances the
        proportion.
      </p>

      <h3>18. Transitional Layers</h3>
      <p>
        Tee, unbuttoned overshirt, light trench or cotton jacket. Three layers that can be
        added or removed as the temperature shifts through the day. Each layer should work on
        its own as well as in combination.
      </p>

      <h3>19. Winter Cocoon</h3>
      <p>
        Heavy knit turtleneck, tailored wool trousers, a substantial overcoat, and leather boots.
        The silhouette is generous but the colour palette is tight — a maximum of two tones.
        Volume is managed through the quality of the cut, not the slimness of the fit.
      </p>

      <h3>20. Weekend Travel</h3>
      <p>
        Stretchy dark denim, a quality long-sleeve tee, a packable jacket, and comfortable shoes
        that don't read as athletic. This formula works on the plane, at the hotel, at dinner,
        and for walking a new neighbourhood. It's the single-outfit travel solution.
      </p>

      <div className="divider" />

      <p>
        The goal of formulas isn't rigidity — it's liberation. When you know that any combination
        of your wardrobe pieces produces a good outcome, getting dressed stops being a problem
        and becomes a pleasure.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <a href="https://littleoria.com" className="cta-button">
          Shop the Essentials
        </a>
      </div>

      <nav style={{ marginTop: "3rem", fontSize: "0.9375rem" }}>
        <p style={{ color: "#6b6b6b", marginBottom: "0.5rem" }}>You may also explore</p>
        <Link href="/editorial/minimalist-style">Minimalist Style</Link>
        {" · "}
        <Link href="/editorial/quiet-luxury">Quiet Luxury</Link>
        {" · "}
        <Link href="/seo/luxury-cardigans">Luxury Cardigans</Link>
        {" · "}
        <Link href="/seo/minimalist-clothing">Minimalist Clothing</Link>
        {" · "}
        <Link href="/seo/premium-basics">Premium Basics</Link>
        {" · "}
        <Link href="/seo/capsule-wardrobe">Capsule Wardrobe</Link>
      </nav>
    </article>
  );
}
