import Script from 'next/script';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: "UnityESS - India's leading bess manufacturer company",
  description: 'UnityESS is a leading BESS manufacturer in India, delivering advanced battery energy storage systems for solar, industrial, and grid applications. Reliable, scalable, and future-ready energy solutions.',
  keywords: ['UnityESS', 'BESS manufacturer', 'energy storage', 'India'],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-B6Z6KT0BET" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B6Z6KT0BET');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="relative z-[1]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
