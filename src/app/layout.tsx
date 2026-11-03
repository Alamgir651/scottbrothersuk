import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: {
    default: "Your Trusted South West Landscapers | Scott Brothers Yate Builders",
    template: "%s | Scott Brothers Yate Builders",
  },
  description:
    "Turning your outdated garden space into something you can really show off. An award-winning premium finish landscaping company in Bristol, covering the south west with pride.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the inline script below adds the "js" class before React hydrates
    <html lang="en-GB" data-scroll-behavior="smooth" className={`${archivo.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Runs before first paint, so scroll-reveal content starts hidden instead of flashing. No JS = everything stays visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
