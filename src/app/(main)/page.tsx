"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, ChevronRight, Play, Calendar, Phone, Clock, MapPin, Quote, ArrowDown } from "lucide-react";

const features = [
  {
    name: "Modern Teknoloji",
    description:
      "En son teknolojik cihazlar ve yöntemlerle tedavi hizmetleri sunuyoruz.",
  },
  {
    name: "Uzman Kadro",
    description:
      "Alanında uzman ve deneyimli diş hekimleri ile hizmet veriyoruz.",
  },
  {
    name: "Steril Ortam",
    description:
      "Tüm tedavilerimiz steril ortamlarda, hijyen kurallarına uygun olarak gerçekleştirilir.",
  },
  {
    name: "Konforlu Tedavi",
    description:
      "Hastalarımızın konforu için modern ve rahat bir ortam sunuyoruz.",
  },
];

const treatments = [
  {
    name: "İmplant",
    description: "Eksik dişleriniz için kalıcı ve doğal görünümlü çözüm",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Ortodonti",
    description: "Düzgün ve sağlıklı bir gülüş için ortodontik tedaviler",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Diş Beyazlatma",
    description: "Profesyonel diş beyazlatma ile parlak bir gülümseme",
    image: "https://drozlemorto.com/wp-content/uploads/2024/01/Dr.-Ozlem-Aylikci-Drozlemorto-Gulus-Tasarim-Uzmani-dr.-Bahadir-Ugur-Aylikci-Dis-beyazlatma-Bleaching-aftery.jpg",
  },
];

const testimonials = [
  {
    content:
      "Çok profesyonel ve güler yüzlü bir ekip. Tedavi sürecim boyunca kendimi çok rahat hissettim.",
    author: "Ayşe Y.",
    role: "İmplant Tedavisi",
  },
  {
    content:
      "Ortodonti tedavim için en doğru adres. Sonuçtan çok memnunum, herkese tavsiye ederim.",
    author: "Mehmet K.",
    role: "Ortodonti Tedavisi",
  },
  {
    content:
      "Diş beyazlatma işleminden sonra özgüvenimi tekrar kazandım. Teşekkürler!",
    author: "Zeynep A.",
    role: "Diş Beyazlatma",
  },
];

const stats = [
  { name: 'Mutlu Hasta', value: '5000+' },
  { name: 'Başarılı Tedavi', value: '15000+' },
  { name: 'Yıllık Deneyim', value: '15+' },
  { name: 'Hasta Memnuniyeti', value: '%98' },
];

const workingHours = [
  { day: 'Pazartesi - Cuma', hours: '09:00 - 18:00' },
  { day: 'Cumartesi', hours: '10:00 - 15:00' },
  { day: 'Pazar', hours: 'Kapalı' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1800&auto=format&fit=crop&q=80"
            alt="Modern dental clinic"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Mükemmel Gülüşler
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                Mutlu Yüzler
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
              Modern diş hekimliğinin tüm imkanlarıyla, uzman kadromuz ve son teknoloji 
              ekipmanlarımızla yanınızdayız.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/randevu"
              className="group relative inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <span>Randevu Al</span>
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/hizmetler"
              className="group inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-white/50 hover:scale-105"
            >
              <span>Hizmetlerimiz</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="group flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm font-medium mb-2">Daha Fazlası</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </button>
        </motion.div>
      </div>

      {/* Features Grid with 3D Cards */}
      <div className="relative py-24 bg-gradient-to-b from-white via-gray-100 to-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Modern teknoloji ve uzman kadromuzla fark yaratan hizmetler sunuyoruz.
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  translateZ: 20
                }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CheckCircle2 className="h-8 w-8 text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Showcase */}
      <div className="relative py-32 bg-gradient-to-b from-gray-200 via-white to-gray-100">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.03]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Tedavi Hizmetlerimiz
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Size özel tedavi seçenekleri ile sağlıklı gülüşlere kavuşun.
            </p>
          </motion.div>

          <div className="mt-24 grid grid-cols-1 gap-16 sm:gap-24 lg:grid-cols-3">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{treatment.name}</h3>
                    <p className="text-lg text-gray-200 mb-6">{treatment.description}</p>
                    <Link
                      href={`/hizmetler#${treatment.name.toLowerCase()}`}
                      className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:scale-105"
                    >
                      Detaylı Bilgi
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats with 3D Effect */}
      <div className="relative py-24 bg-gradient-to-b from-gray-100 via-gray-900 to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  className="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-8 backdrop-blur-sm"
                >
                  <dt className="text-sm font-medium text-gray-300">{stat.name}</dt>
                  <dd className="mt-2 text-4xl font-bold text-white">{stat.value}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Contact Section with Glassmorphism */}
      <div className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl bg-white/5 p-8 backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold text-white">İletişime Geçin</h2>
              <p className="mt-4 text-lg text-gray-300">
                Size en uygun zamanda randevu oluşturmak için bizimle iletişime geçin.
              </p>
              <dl className="mt-8 space-y-6">
                <div className="flex items-center gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telefon</span>
                    <Phone className="h-6 w-6 text-primary-400" />
                  </dt>
                  <dd>
                    <a href="tel:+902122222222" className="text-lg text-white hover:text-primary-400 transition-colors">
                      +90 (212) 222 22 22
                    </a>
                  </dd>
                </div>
                <div className="flex items-center gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Adres</span>
                    <MapPin className="h-6 w-6 text-primary-400" />
                  </dt>
                  <dd className="text-lg text-white">
                    İstanbul, Türkiye
                  </dd>
                </div>
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl bg-white/5 p-8 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Çalışma Saatleri</h3>
              <div className="space-y-6">
                {workingHours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex items-center justify-between border-b border-white/10 pb-4"
                  >
                    <div className="flex items-center gap-x-4">
                      <Clock className="h-5 w-5 text-primary-400" />
                      <span className="text-white">{schedule.day}</span>
                    </div>
                    <span className="text-gray-300">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 flex justify-center"
          >
            <Link
              href="/randevu"
              className="group relative inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:scale-105"
            >
              <span>Hemen Randevu Alın</span>
              <Calendar className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Testimonials with Modern Design */}
      <div className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-primary/10 ring-1 ring-primary/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hasta Yorumları
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Mutlu hastalarımızın deneyimlerini dinleyin.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
              >
                <div className="flex items-center gap-x-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-6 text-lg font-semibold text-gray-900">
                  <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary/20" />
                  <p>{testimonial.content}</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4 border-t border-gray-900/5 pt-6">
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 