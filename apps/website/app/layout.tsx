import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";
import ThemeInitializer from "@/components/ThemeInitializer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Esmaeil Abedi - Front-End Engineer & AI Enthusiast",
  description: "Personal website and portfolio of Esmaeil Abedi, a Front-End Engineer with expertise in AI/ML technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col bg-background font-sans">
        <ThemeInitializer />
        {/* Prevent Vite from initializing */}
        <Script id="vite-cleanup" strategy="beforeInteractive">
          {`
          // This script prevents any Vite initialization from happening
          if (window.__vite_plugin_react_preamble_installed__) {
            window.__vite_plugin_react_preamble_installed__ = false;
          }
          
          // Clear any potential Vite-related localStorage items
          Object.keys(localStorage || {}).forEach(key => {
            if (key.includes('vite') || key.includes('react-refresh')) {
              localStorage.removeItem(key);
            }
          });
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
