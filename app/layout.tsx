import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seo-usa.littleoria.com"),
  title: {
    default: "Littleoria — Premium Minimalist Fashion",
    template: "%s | Littleoria",
  },
  description:
    "Premium minimalist fashion for the modern wardrobe. Luxury cardigans, elevated basics, and timeless essentials designed to last.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Littleoria",
  },
  alternates: {
    canonical: "https://seo-usa.littleoria.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid #e5e5e0",
        padding: "1.25rem 1.5rem",
        textAlign: "center",
      }}
    >
      <a
        href="https://littleoria.com"
        style={{
          textDecoration: "none",
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: "1.375rem",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "#1a1a1a",
        }}
      >
        Littleoria
      </a>
    </header>
  );
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e5e0",
        padding: "2.5rem 1.5rem",
        textAlign: "center",
        fontSize: "0.8125rem",
        color: "#6b6b6b",
      }}
    >
      <nav style={{ marginBottom: "1rem", display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" as const }}>
        <a href="/seo/luxury-cardigans">Luxury Cardigans</a>
        <a href="/seo/minimalist-clothing">Minimalist Clothing</a>
        <a href="/seo/premium-basics">Premium Basics</a>
        <a href="/seo/capsule-wardrobe">Capsule Wardrobe</a>
        <a href="/editorial/minimalist-style">Style</a>
        <a href="/editorial/outfit-ideas">Outfit Ideas</a>
        <a href="/editorial/quiet-luxury">Quiet Luxury</a>
      </nav>
      <p style={{ marginBottom: "0.5rem" }}>
        <a href="https://littleoria.com" style={{ textDecoration: "none" }}>
          littleoria.com
        </a>
      </p>
      <p>&copy; {new Date().getFullYear()} Littleoria. All rights reserved.</p>
    </footer>
  );
}
