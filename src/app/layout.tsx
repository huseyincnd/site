import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diş Kliniği | Modern ve Güvenilir Diş Tedavisi",
  description:
    "Modern diş kliniğimizde uzman kadromuzla kaliteli ve güvenilir diş tedavisi hizmetleri sunuyoruz.",
  keywords: [
    "diş kliniği",
    "diş tedavisi",
    "implant",
    "ortodonti",
    "diş beyazlatma",
    "diş hekimi",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="h-full">
      <body className={cn(inter.className, "min-h-full bg-background antialiased")}>
        {children}
      </body>
    </html>
  );
}
