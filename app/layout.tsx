// Styles
import "./globals.css";

// Site Configuration
import config from "@/fjord.json";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

// Components
import Nav from "@/components/global/nav";
import Footer from "@/components/global/footer";
import Main from "@/components/global/main";
import Script from "next/script";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.site_name,
  description: config.site_description,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
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
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${config.google_analytics_id}`}
          async
        />
        <Script
          id="google_analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', ${config.google_analytics_id});
                    `,
          }}
        />
      </head>
      <body className={`${manrope.className} text-secondary-950 bg-primary-100`}>
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
