"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, ThumbsUp, Calendar, PlayCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ayşe Yılmaz",
    age: 34,
    treatment: "İmplant Tedavisi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    date: "Ekim 2023",
    content:
      "Uzun yıllar diş eksikliği nedeniyle yaşadığım özgüven problemlerinden implant tedavisi sayesinde kurtuldum. Dr. Ahmet Bey ve ekibi tedavi sürecinde çok profesyonel ve ilgiliydi. Artık gülümsemekten çekinmiyorum!",
    shortQuote: "Artık gülümsemekten çekinmiyorum!",
    beforeAfter: {
      before: "https://drozlemorto.com/wp-content/uploads/2023/12/implant-vakalari-9-Dr.-Bahadir-Ugur-Aylikci-Ortodonti-Uzmani-Dr.-Ozlem-Aylikci-.jpg",
      after: "https://drozlemorto.com/wp-content/uploads/2023/12/implant-vakalari-10-Dr.-Bahadir-Ugur-Aylikci-Ortodonti-Uzmani-Dr.-Ozlem-Aylikci-.jpg",
    },
    highlights: [
      "Ağrısız tedavi süreci",
      "Doğal görünümlü sonuç",
      "Hızlı iyileşme",
    ],
  },
  {
    id: 2,
    name: "Mehmet Demir",
    age: 28,
    treatment: "Ortodonti Tedavisi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    date: "Kasım 2023",
    content:
      "Çapraşık dişlerim nedeniyle hep utangaçtım. Dr. Zeynep Hanım'ın uyguladığı şeffaf plak tedavisi ile 18 ayda mükemmel sonuçlar elde ettik. Tedavi sürecinde hiç zorlanmadım ve sonuç beklediğimden çok daha iyi oldu.",
    shortQuote: "Sonuç beklediğimden çok daha iyi oldu!",
    beforeAfter: {
      before: "https://drozlemorto.com/wp-content/uploads/2023/12/Vaka-1-Oncesi.jpg",
      after: "https://drozlemorto.com/wp-content/uploads/2023/12/Vaka-1-Sonrasi.jpg",
    },
    highlights: [
      "Şeffaf plaklar ile estetik tedavi",
      "Konforlu kullanım",
      "Kısa tedavi süresi",
    ],
  },
  {
    id: 3,
    name: "Zeynep Kaya",
    age: 42,
    treatment: "Diş Beyazlatma",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    date: "Aralık 2023",
    content:
      "Sigara ve kahve tüketimi nedeniyle sararmış dişlerim vardı. Dr. Mehmet Bey'in uyguladığı beyazlatma tedavisi ile çok doğal bir beyazlığa kavuştum. İşlem sırasında hiç acı hissetmedim ve sonuç çok etkileyici!",
    shortQuote: "Sonuç çok etkileyici!",
    beforeAfter: {
      before: "https://drozlemorto.com/wp-content/uploads/2024/01/Dr.-Ozlem-Aylikci-Drozlemorto-Gulus-Tasarim-Uzmani-dr.-Bahadir-Ugur-Aylikci-Dis-beyazlatma-Bleaching-before.jpg",
      after: "https://drozlemorto.com/wp-content/uploads/2024/01/Dr.-Ozlem-Aylikci-Drozlemorto-Gulus-Tasarim-Uzmani-dr.-Bahadir-Ugur-Aylikci-Dis-beyazlatma-Bleaching-aftery.jpg",
    },
    highlights: [
      "Tek seansta sonuç",
      "Hassasiyet yaratmayan uygulama",
      "Kalıcı beyazlık",
    ],
  },
];

const stats = [
  { id: 1, name: "Mutlu Hasta", value: "1000+" },
  { id: 2, name: "Başarılı Tedavi", value: "5000+" },
  { id: 3, name: "Yıllık Deneyim", value: "15+" },
  { id: 4, name: "Hasta Memnuniyeti", value: "%98" },
];

export default function PatientStoriesPage() {
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
              Hasta Hikayeleri
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Kliniğimizde tedavi olan hastaların deneyimlerini ve başarı
              hikayelerini keşfedin. Her gülüş bizim için değerlidir.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),theme(colors.primary.800))] opacity-20" />
      </motion.div>

      {/* Stats Section */}
      <div className="relative -mt-12 sm:-mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mx-auto grid max-w-2xl grid-cols-2 gap-8 bg-white/90 backdrop-blur-sm py-8 px-4 sm:py-12 sm:px-6 lg:max-w-none lg:grid-cols-4 lg:px-8 rounded-2xl shadow-xl"
          >
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center gap-y-2 border-l border-gray-200 first:border-0 pl-8 first:pl-0"
              >
                <dt className="text-sm text-gray-600">{stat.name}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-primary">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5"
            >
              <div className="grid lg:grid-cols-2">
                {/* Content */}
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <blockquote className="mt-6">
                      <div className="relative">
                        <Quote className="absolute -left-4 -top-4 h-8 w-8 text-gray-100 -z-10" />
                        <p className="relative z-10 text-lg italic text-gray-600">
                          "{testimonial.content}"
                        </p>
                      </div>
                    </blockquote>
                    <div className="mt-8">
                      <h4 className="text-sm font-semibold text-gray-900">
                        Öne Çıkanlar
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {testimonial.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-center gap-x-2 text-sm text-gray-600"
                          >
                            <ThumbsUp className="h-4 w-4 text-primary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 flex items-center gap-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>Tedavi Tarihi: {testimonial.date}</span>
                    </div>
                  </div>
                </div>

                {/* Before/After Images */}
                <div className="relative bg-gray-50 p-8 sm:p-10">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Öncesi / Sonrası
                  </h4>
                  <div className="mt-6 grid gap-6">
                    <div>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src={testimonial.beforeAfter.before}
                          alt="Tedavi öncesi"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                        <div className="absolute bottom-2 left-2 rounded-md bg-black/50 px-2 py-1 text-sm text-white">
                          Öncesi
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src={testimonial.beforeAfter.after}
                          alt="Tedavi sonrası"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                        <div className="absolute bottom-2 left-2 rounded-md bg-black/50 px-2 py-1 text-sm text-white">
                          Sonrası
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 flex w-full items-center justify-center gap-x-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Video Testimonial'ı İzle
                  </motion.button>
                </div>
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
              Siz de Başarı Hikayelerimizden Biri Olun
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Modern tedavi yöntemlerimiz ve uzman kadromuzla sizin için en uygun
              tedavi planını oluşturalım.
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
                Randevu Al
              </a>
            </motion.div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-0">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80"
              alt="Happy patient"
              fill
              className="absolute left-0 top-0 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
} 