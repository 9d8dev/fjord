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

const instrument_serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(fjord.site_domain),
  title: fjord.site_title,
  description: fjord.site_description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Craft.Layout
      className={`${manrope.variable} ${instrument_serif.variable}`}
    >
      <Nav />
      {children}
      <Footer />
    </Craft.Layout>
  );
}
