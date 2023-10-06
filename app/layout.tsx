// Styles
import './globals.css';

// Site Configuration
import config from '@/fjord.json';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

// Components
import Nav from '@/components/global/nav';
import Footer from '@/components/global/footer';
import Main from '@/components/global/main'

const manrope = Manrope({ subsets: ['latin'] });

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
      </head>
      <body className={`${manrope.className} bg-slate-100`}>
        <Nav />
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}
