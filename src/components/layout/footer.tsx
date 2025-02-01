import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const navigation = {
  main: [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Doktorlarımız", href: "/doktorlar" },
    { name: "Hasta Hikayeleri", href: "/hasta-hikayeleri" },
    { name: "Fiyat Listesi", href: "/fiyat-listesi" },
    { name: "İletişim", href: "/iletisim" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Klinik Bilgileri */}
          <div>
            <h3 className="text-2xl font-bold text-white">Diş Kliniği</h3>
            <p className="mt-4 text-base text-gray-300">
              Modern diş kliniğimizde uzman kadromuzla kaliteli ve güvenilir diş
              tedavisi hizmetleri sunuyoruz.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5" />
                <span>+90 (555) 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5" />
                <span>info@disklinigi.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 mt-1" />
                <span>
                  Örnek Mahallesi, Örnek Caddesi No: 123
                  <br />
                  Örnek/İstanbul
                </span>
              </div>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Hızlı Linkler
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Tedaviler
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {[
                    "İmplant",
                    "Ortodonti",
                    "Diş Beyazlatma",
                    "Zirkonyum",
                    "Dolgu",
                    "Kanal Tedavisi",
                  ].map((treatment) => (
                    <li key={treatment}>
                      <Link
                        href={`/hizmetler#${treatment.toLowerCase()}`}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {treatment}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Çalışma Saatleri
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="text-sm text-gray-300">
                    <span className="block font-semibold">Hafta İçi</span>
                    09:00 - 19:00
                  </li>
                  <li className="text-sm text-gray-300">
                    <span className="block font-semibold">Cumartesi</span>
                    10:00 - 17:00
                  </li>
                  <li className="text-sm text-gray-300">
                    <span className="block font-semibold">Pazar</span>
                    Kapalı
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex items-center justify-between">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} Diş Kliniği. Tüm hakları
              saklıdır.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 