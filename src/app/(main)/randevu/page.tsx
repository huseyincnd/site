"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle2, ChevronRight } from "lucide-react";

const doctors = [
  {
    id: "dr-ahmet-yilmaz",
    name: "Dr. Ahmet Yılmaz",
    title: "Ağız, Diş ve Çene Cerrahisi Uzmanı",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=80",
    specialties: ["İmplant", "Çene Cerrahisi", "Gömülü Diş"],
  },
  {
    id: "dr-zeynep-kaya",
    name: "Dr. Zeynep Kaya",
    title: "Ortodonti Uzmanı",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop&q=80",
    specialties: ["Ortodonti", "Şeffaf Plak", "Çocuk Ortodontisi"],
  },
  {
    id: "dr-mehmet-demir",
    name: "Dr. Mehmet Demir",
    title: "Estetik Diş Hekimi",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=80",
    specialties: ["Estetik Dolgular", "Diş Beyazlatma", "Lamina"],
  },
];

const treatments = [
  {
    id: "implant",
    name: "İmplant Tedavisi",
    duration: "60 dk",
    description: "Eksik dişlerin yerine yapay diş kökü yerleştirilmesi",
  },
  {
    id: "ortodonti",
    name: "Ortodontik Tedavi",
    duration: "45 dk",
    description: "Diş ve çene düzensizliklerinin tedavisi",
  },
  {
    id: "beyazlatma",
    name: "Diş Beyazlatma",
    duration: "30 dk",
    description: "Profesyonel diş beyazlatma işlemi",
  },
  {
    id: "dolgu",
    name: "Estetik Dolgu",
    duration: "30 dk",
    description: "Çürük tedavisi ve estetik dolgu uygulaması",
  },
  {
    id: "temizleme",
    name: "Diş Temizliği",
    duration: "30 dk",
    description: "Profesyonel diş temizliği ve bakımı",
  },
  {
    id: "muayene",
    name: "Genel Muayene",
    duration: "20 dk",
    description: "Genel ağız ve diş sağlığı kontrolü",
  },
];

const availableHours = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

export default function AppointmentPage() {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

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
              Online Randevu
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Hızlı ve kolay bir şekilde online randevu alın. Size en uygun
              doktor ve saati seçerek tedavinizi planlayabilirsiniz.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),theme(colors.primary.800))] opacity-20" />
      </motion.div>

      {/* Appointment Form */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Randevu Adımları
                </h2>
                <p className="mt-4 text-gray-600">
                  Randevunuzu oluşturmak için aşağıdaki adımları takip edin.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    1
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      Doktor Seçimi
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Size uygun doktorumuzu seçin
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    2
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      Tedavi Seçimi
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Randevu almak istediğiniz tedaviyi seçin
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    3
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      Tarih ve Saat
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Size uygun tarih ve saati seçin
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    4
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      Bilgileriniz
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      İletişim bilgilerinizi girin
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="space-y-12">
              {/* Doctor Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Doktor Seçimi
                </h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {doctors.map((doctor) => (
                    <motion.div
                      key={doctor.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative rounded-lg border-2 p-4 cursor-pointer transition-colors ${
                        selectedDoctor === doctor.id
                          ? "border-primary bg-primary-50"
                          : "border-gray-200 hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedDoctor(doctor.id)}
                    >
                      <div className="flex items-center gap-x-4">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-base font-semibold text-gray-900">
                            {doctor.name}
                          </h4>
                          <p className="text-sm text-gray-500">{doctor.title}</p>
                        </div>
                      </div>
                      {selectedDoctor === doctor.id && (
                        <CheckCircle2 className="absolute top-4 right-4 h-5 w-5 text-primary" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Treatment Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Tedavi Seçimi
                </h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {treatments.map((treatment) => (
                    <motion.div
                      key={treatment.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative rounded-lg border-2 p-4 cursor-pointer transition-colors ${
                        selectedTreatment === treatment.id
                          ? "border-primary bg-primary-50"
                          : "border-gray-200 hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedTreatment(treatment.id)}
                    >
                      <div>
                        <h4 className="text-base font-semibold text-gray-900">
                          {treatment.name}
                        </h4>
                        <p className="mt-1 text-sm text-gray-500">
                          {treatment.description}
                        </p>
                        <div className="mt-4 flex items-center gap-x-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{treatment.duration}</span>
                        </div>
                      </div>
                      {selectedTreatment === treatment.id && (
                        <CheckCircle2 className="absolute top-4 right-4 h-5 w-5 text-primary" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Date and Time Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Tarih ve Saat Seçimi
                </h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tarih
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Saat
                    </label>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {availableHours.map((time) => (
                        <motion.button
                          key={time}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`rounded-md px-3 py-2 text-sm font-semibold shadow-sm ${
                            selectedTime === time
                              ? "bg-primary text-white"
                              : "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  İletişim Bilgileri
                </h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Ad Soyad
                    </label>
                    <div className="mt-2 flex rounded-md">
                      <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                          placeholder="Adınız Soyadınız"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Telefon
                    </label>
                    <div className="mt-2 flex rounded-md">
                      <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                          placeholder="(5XX) XXX XX XX"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      E-posta
                    </label>
                    <div className="mt-2 flex rounded-md">
                      <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                          placeholder="ornek@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="notes"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Notlar (Opsiyonel)
                    </label>
                    <div className="mt-2 flex rounded-md">
                      <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MessageSquare className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          name="notes"
                          id="notes"
                          rows={4}
                          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                          placeholder="Eklemek istediğiniz notlar..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8"
              >
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-x-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Randevuyu Onayla
                  <ChevronRight className="h-5 w-5" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 