import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium Minimalist Fashion | Elevated Minimal Wardrobe",
  description:
    "Discover luxury cardigans, minimalist clothing, and premium basics designed for enduring style. Elevated essentials for the modern wardrobe.",
};

export default function HomePage() {
  return (
    <div className="article-container" style={{ textAlign: "center", paddingTop: "6rem", paddingBottom: "6rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Premium Fashion,<br />Minimalist Philosophy</h1>
      <p style={{ maxWidth: "520px", margin: "0 auto 2.5rem", color: "#6b6b6b" }}>
        An editorial exploration of intentional dressing — luxury knitwear, elevated basics,
        and the principles behind wardrobes that last.
      </p>

      <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center", marginBottom: "3rem" }}>
        <Link href="/seo/luxury-cardigans" style={{ fontSize: "1.0625rem" }}>Investment Knitwear</Link>
        <Link href="/seo/minimalist-clothing" style={{ fontSize: "1.0625rem" }}>Minimalist Clothing</Link>
        <Link href="/seo/premium-basics" style={{ fontSize: "1.0625rem" }}>Premium Basics</Link>
        <Link href="/seo/capsule-wardrobe" style={{ fontSize: "1.0625rem" }}>Capsule Wardrobe System</Link>
        <Link href="/editorial/minimalist-style" style={{ fontSize: "1.0625rem" }}>Minimalist Style Identity</Link>
        <Link href="/editorial/outfit-ideas" style={{ fontSize: "1.0625rem" }}>Outfit Formulas</Link>
        <Link href="/editorial/quiet-luxury" style={{ fontSize: "1.0625rem" }}>Quiet Luxury</Link>
      </nav>

      <a href="https://littleoria.com" className="cta-button">
        Shop the Collection
      </a>
    </div>
  );
}
