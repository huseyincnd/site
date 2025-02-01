"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, GraduationCap, Award, Star, ChevronRight } from "lucide-react";

const doctors = [
  {
    id: "dr-ahmet-yilmaz",
    name: "Dr. Ahmet Yılmaz",
    title: "Ağız, Diş ve Çene Cerrahisi Uzmanı",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=80",
    education: [
      "İstanbul Üniversitesi Diş Hekimliği Fakültesi",
      "Ağız, Diş ve Çene Cerrahisi Uzmanlık Eğitimi",
    ],
    experience: "15 yıl",
    specialties: [
      "İmplant Cerrahisi",
      "Çene Eklemi Tedavisi",
      "Gömülü Diş Operasyonları",
    ],
    awards: [
      "Türk Diş Hekimleri Birliği Bilim Ödülü",
      "Uluslararası İmplantoloji Sertifikası",
    ],
    workingHours: {
      weekday: "09:00 - 17:00",
      saturday: "10:00 - 14:00",
    },
    languages: ["Türkçe", "İngilizce", "Almanca"],
  },
  {
    id: "dr-zeynep-kaya",
    name: "Dr. Zeynep Kaya",
    title: "Ortodonti Uzmanı",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop&q=80",
    education: [
      "Ankara Üniversitesi Diş Hekimliği Fakültesi",
      "Ortodonti Uzmanlık Eğitimi",
    ],
    experience: "12 yıl",
    specialties: [
      "Şeffaf Plak Tedavisi",
      "Çocuk Ortodontisi",
      "Yetişkin Ortodontisi",
    ],
    awards: [
      "Avrupa Ortodonti Derneği Üyeliği",
      "Dijital Ortodonti Sertifikası",
    ],
    workingHours: {
      weekday: "10:00 - 18:00",
      saturday: "09:00 - 13:00",
    },
    languages: ["Türkçe", "İngilizce"],
  },
  {
    id: "dr-mehmet-demir",
    name: "Dr. Mehmet Demir",
    title: "Estetik Diş Hekimi",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=80",
    education: [
      "Ege Üniversitesi Diş Hekimliği Fakültesi",
      "Estetik Diş Hekimliği Yüksek Lisansı",
    ],
    experience: "10 yıl",
    specialties: [
      "Dijital Gülüş Tasarımı",
      "Porselen Lamina",
      "Diş Beyazlatma",
    ],
    awards: [
      "Estetik Diş Hekimliği Akademisi Üyeliği",
      "Digital Smile Design Sertifikası",
    ],
    workingHours: {
      weekday: "09:00 - 17:00",
      saturday: "10:00 - 15:00",
    },
    languages: ["Türkçe", "İngilizce", "İspanyolca"],
  },
];

export default function DoctorsPage() {
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
              Uzman Kadromuz
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Alanında uzman ve deneyimli diş hekimlerimizle size en iyi tedavi
              hizmetini sunuyoruz. Modern teknikleri yakından takip eden
              ekibimizle tanışın.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),theme(colors.primary.800))] opacity-20" />
      </motion.div>

      {/* Doctors List */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid gap-16">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Image */}
                <div className="relative lg:col-span-1">
                  <div className="aspect-[3/4] overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h2 className="text-xl font-bold text-white">{doctor.name}</h2>
                    <p className="mt-2 text-sm text-gray-300">{doctor.title}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 lg:col-span-2">
                  <div className="grid gap-8 sm:grid-cols-2">
                    {/* Education & Experience */}
                    <div>
                      <h3 className="flex items-center gap-x-2 text-base font-semibold text-gray-900">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        Eğitim
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        {doctor.education.map((edu) => (
                          <motion.li
                            key={edu}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                          >
                            {edu}
                          </motion.li>
                        ))}
                      </ul>

                      <h3 className="mt-6 flex items-center gap-x-2 text-base font-semibold text-gray-900">
                        <Star className="h-5 w-5 text-primary" />
                        Deneyim
                      </h3>
                      <p className="mt-3 text-sm text-gray-600">
                        {doctor.experience}
                      </p>
                    </div>

                    {/* Specialties & Awards */}
                    <div>
                      <h3 className="flex items-center gap-x-2 text-base font-semibold text-gray-900">
                        <Award className="h-5 w-5 text-primary" />
                        Uzmanlık Alanları
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        {doctor.specialties.map((specialty) => (
                          <motion.li
                            key={specialty}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-x-2"
                          >
                            <ChevronRight className="h-4 w-4 text-primary" />
                            {specialty}
                          </motion.li>
                        ))}
                      </ul>

                      <h3 className="mt-6 flex items-center gap-x-2 text-base font-semibold text-gray-900">
                        <Clock className="h-5 w-5 text-primary" />
                        Çalışma Saatleri
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        <li>Hafta İçi: {doctor.workingHours.weekday}</li>
                        <li>Cumartesi: {doctor.workingHours.saturday}</li>
                      </ul>
                    </div>
                  </div>

                  {/* Languages & Appointment Button */}
                  <div className="mt-8 flex items-center justify-between border-t border-gray-900/5 pt-8">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        Konuştuğu Diller
                      </h3>
                      <div className="mt-2 flex gap-2">
                        {doctor.languages.map((lang) => (
                          <span
                            key={lang}
                            className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`/randevu?doctor=${doctor.id}`}
                        className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        Randevu Al
                        <Calendar className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 