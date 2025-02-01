"use client";

import { motion } from "framer-motion";
import { Info, Check, ChevronRight } from "lucide-react";

const priceCategories = [
  {
    id: "implant",
    title: "İmplant Tedavileri",
    description: "En son teknoloji implant sistemleri ile eksik dişlerinizi tamamlıyoruz.",
    treatments: [
      {
        name: "Tek Diş İmplant",
        price: "15.000 ₺",
        details: [
          "Premium marka implant",
          "Lokal anestezi",
          "3 boyutlu planlama",
          "Kontrol seansları dahil",
        ],
      },
      {
        name: "All-on-4 İmplant",
        price: "120.000 ₺'den başlayan",
        details: [
          "4 implant üzeri protez",
          "Geçici protez dahil",
          "1 yıl garanti",
          "Ücretsiz kontroller",
        ],
      },
      {
        name: "Sinüs Lifting",
        price: "12.000 ₺",
        details: [
          "Kemik tozu dahil",
          "İleri cerrahi teknikler",
          "Detaylı planlama",
        ],
      },
    ],
  },
  {
    id: "ortodonti",
    title: "Ortodonti Tedavileri",
    description: "Şeffaf plaklar ve modern braket sistemleri ile gülüşünüzü düzenliyoruz.",
    treatments: [
      {
        name: "Şeffaf Plak Tedavisi",
        price: "40.000 ₺'den başlayan",
        details: [
          "Tüm plaklar dahil",
          "3D tedavi planlaması",
          "Düzenli kontroller",
          "Pekiştirme tedavisi",
        ],
      },
      {
        name: "Metal Braket Tedavisi",
        price: "25.000 ₺'den başlayan",
        details: [
          "Premium braket sistemi",
          "Tel değişimleri dahil",
          "Elastik ve apareyler dahil",
        ],
      },
      {
        name: "Seramik Braket Tedavisi",
        price: "30.000 ₺'den başlayan",
        details: [
          "Estetik görünüm",
          "Yüksek kalite braketler",
          "Tüm randevular dahil",
        ],
      },
    ],
  },
  {
    id: "estetik",
    title: "Estetik Diş Tedavileri",
    description: "Gülüş tasarımı ve estetik uygulamalar ile hayalinizdeki gülüşe kavuşun.",
    treatments: [
      {
        name: "Lamina Veneer (Diş Başı)",
        price: "7.000 ₺",
        details: [
          "E-max porselen",
          "Dijital gülüş tasarımı",
          "Geçici kaplama dahil",
        ],
      },
      {
        name: "Zirkonyum Kaplama (Diş Başı)",
        price: "5.000 ₺",
        details: [
          "Tam seramik kaplama",
          "Doğal görünüm",
          "5 yıl garanti",
        ],
      },
      {
        name: "Diş Beyazlatma",
        price: "3.000 ₺",
        details: [
          "Ofis tipi beyazlatma",
          "Hassasiyet önleyici",
          "Ev tipi beyazlatma kiti",
        ],
      },
    ],
  },
];

export default function PriceListPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative isolate overflow-hidden bg-gradient-to-b from-primary-600 to-primary-800 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Fiyat Listesi
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Şeffaf fiyatlandırma politikamız ile tüm tedavi seçeneklerimizi
              inceleyin. Tedavi planlaması için ücretsiz konsültasyon randevusu
              alabilirsiniz.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),theme(colors.primary.800))] opacity-20" />
      </motion.div>

      {/* Notice Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mx-auto max-w-7xl px-6 lg:px-8 mt-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <Info className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Fiyatlarımız tedavi planlamasına göre değişiklik gösterebilir.
              Detaylı bilgi için ücretsiz konsültasyon randevusu alabilirsiniz.
            </p>
          </div>
        </div>
      </div>

      {/* Price Categories */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:gap-16">
          {priceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="relative"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h2>
                <p className="mt-2 text-gray-600">{category.description}</p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {category.treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {treatment.name}
                        </h3>
                        <p className="mt-4 text-2xl font-bold text-primary">
                          {treatment.price}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-8 space-y-3">
                      {treatment.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-x-2 text-sm text-gray-600"
                        >
                          <Check className="h-4 w-4 text-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8"
                    >
                      <a
                        href="/randevu"
                        className="flex items-center justify-center gap-x-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600"
                      >
                        Randevu Al
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8 pb-24"
      >
        <div className="relative isolate overflow-hidden bg-primary-50 px-6 py-12 sm:rounded-3xl sm:px-12 sm:py-16 lg:flex lg:items-center lg:gap-x-20 lg:px-20">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Ücretsiz Konsültasyon
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Size özel tedavi planı ve fiyatlandırma için ücretsiz konsültasyon
              randevusu alın. Uzman hekimlerimiz tüm sorularınızı yanıtlasın.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10"
            >
              <a
                href="/randevu"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Hemen Randevu Al
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 