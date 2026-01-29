import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neexo - Gestion simplifiee pour artisans",
  description: "Gerez vos clients, devis et factures en un seul endroit. La solution tout-en-un pour les artisans modernes.",
  keywords: ["gestion artisan", "devis", "factures", "clients", "logiciel artisan", "SaaS"],
  authors: [{ name: "Neexo" }],
  openGraph: {
    title: "Neexo - Gestion simplifiee pour artisans",
    description: "Gerez vos clients, devis et factures en un seul endroit.",
    url: "https://neexo.fr",
    siteName: "Neexo",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neexo - Gestion simplifiee pour artisans",
    description: "Gerez vos clients, devis et factures en un seul endroit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
