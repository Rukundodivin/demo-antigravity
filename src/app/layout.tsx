import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SchemaOrg } from "@/components/SchemaOrg";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Chesterfields Bar | Pub Anglais & Terrasse à Marrakech",
  description: "Découvrez l'authenticité d'un pub anglais au cœur de Marrakech. Ambiance chaleureuse, bières artisanales et terrasse ensoleillée à l'Hôtel Nassim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark overflow-x-hidden">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased overflow-x-hidden w-full max-w-full`}
      >
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}
