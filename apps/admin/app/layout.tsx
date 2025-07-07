import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { AdminHeader } from "@/components/layout/AdminHeader";
import ThemeInitializer from "@/components/ThemeInitializer";
import Script from "next/script";

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
  title: "Admin Panel | Esmaeil Abedi",
  description: "Admin panel for managing content on Esmaeil Abedi's personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-background font-sans">
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
        
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <AdminSidebar />
          
          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <AdminHeader />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
