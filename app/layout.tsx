// Styles
import "./globals.css";

// Site fjorduration
import fjord from "@/fjord.config";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

// Components
import Nav from "@/components/sections/nav";
import Footer from "@/components/sections/footer";
import Main from "@/components/global/layout/main";
import Script from "next/script";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(fjord.site_domain),
  title: fjord.site_title,
  description: fjord.site_description,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="bg-secondary-100 dark:bg-secondary-950">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${fjord.google_analytics_id}`}
        />
        <Script id="google-analytics">
          {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('fjord', '${fjord.google_analytics_id}');
                `}
        </Script>
      </head>
      <body
        className={`${manrope.className} text-secondary-950 dark:text-secondary-200 bg-secondary-100 dark:bg-secondary-900`}
      >
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
