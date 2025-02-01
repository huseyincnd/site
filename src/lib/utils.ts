import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date, formatStr: string = "PP") {
  return format(date, formatStr, { locale: tr });
}

export function formatTime(time: Date) {
  return format(time, "HH:mm");
}

export function formatDateTime(date: Date) {
  return format(date, "PPp", { locale: tr });
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateMetadata({
  title,
  description,
  image,
}: {
  title?: string;
  description?: string;
  image?: string;
} = {}) {
  return {
    title: title ? `${title} | Diş Kliniği` : "Diş Kliniği",
    description:
      description ||
      "Modern diş kliniğimizde uzman kadromuzla kaliteli ve güvenilir diş tedavisi hizmetleri sunuyoruz.",
    openGraph: {
      title: title ? `${title} | Diş Kliniği` : "Diş Kliniği",
      description:
        description ||
        "Modern diş kliniğimizde uzman kadromuzla kaliteli ve güvenilir diş tedavisi hizmetleri sunuyoruz.",
      images: [{ url: image || "/og-image.jpg" }],
    },
  };
} 