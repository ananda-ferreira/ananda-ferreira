import type { Metadata } from "next";
import "./variables.css";
import "./globals.css";
import Header from "@/lib/components/Header";
import Footer from "@/lib/components/Footer";

export const metadata: Metadata = {
  title: "Ananda Ferreira",
  description: "Web Developer based in Copenhagen",
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
