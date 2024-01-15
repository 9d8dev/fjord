import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import * as Craft from "@/components/craft/layout";
import Nav from "@/components/craft/section/nav";
import Footer from "@/components/craft/section/footer";
import "./globals.css";
import fjord from "@/fjord.config";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: fjord.site_title,
    default: `%s | ${fjord.site_name}`,
    absolute: `Home | ${fjord.site_name}`,
  },
  description: fjord.site_description,
  generator: "Next.js",
  applicationName: fjord.site_name,
  referrer: "origin-when-cross-origin",
  keywords: fjord.keywords,
  authors: fjord.authors,
  metadataBase: new URL(fjord.site_domain),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: fjord.site_title,
    description: fjord.site_description,
    url: fjord.site_domain,
    siteName: fjord.site_name,
    images: [
      {
        url: `${fjord.site_domain}/og.png`, // Must be an absolute URL
        width: 800,
        height: 600,
        alt: fjord.site_description,
      },
      {
        url: `${fjord.site_domain}/og-alt.png`, // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: fjord.site_description,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  manifest: `${fjord.site_domain}/manifest.json`, // Must be an absolute URL
  twitter: {
    card: "summary_large_image",
    title: fjord.site_title,
    description: fjord.site_description,
    // siteId: "1467726470533754880",
    // creator: "@nextjs",
    // creatorId: "1467726470533754880",
    images: [`${fjord.site_domain}/og.png`], // Must be an absolute URL
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      new URL("/icon.png", "https://example.com"),
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
    // other: [
    //   {
    //     rel: "apple-touch-icon-precomposed",
    //     url: "/apple-touch-icon-precomposed.png",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Craft.Layout className={`${manrope.variable}`}>
      <Nav />
      {children}
      <Footer />
    </Craft.Layout>
  );
}
