import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const playfair = localFont({
  src: "../node_modules/@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2",
  variable: '--font-display',
  display: 'swap',
})

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-standard-normal.woff2",
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "HomeWay — Plan Your First Home with Confidence",
  description: "HomeWay helps you find the perfect house and build a personalized mortgage plan based on your income, expenses, and family needs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
