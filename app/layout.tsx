import type { Metadata } from "next";
import "./variables.css";
import "./globals.css";
import Header from "@/lib/components/Header";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Ananda Ferreira",
  description: "Web Developer based in Copenhagen",
  icons: {
    icon: "/ananda-icon.svg",
  },
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <Head>
                <link rel="icon" href="/ananda-icon.svg" />
      </Head>
      <body className="antialiased">
        <Header />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
