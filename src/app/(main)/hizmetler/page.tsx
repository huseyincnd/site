"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, CheckCircle2, Info } from "lucide-react";
import { motion } from "framer-motion";

const treatments = [
  {
    id: "implant",
    name: "İmplant",
    description: "Eksik dişleriniz için kalıcı ve doğal görünümlü çözüm",
    longDescription:
      "İmplant tedavisi, eksik dişlerin yerine titanyum vidalar kullanılarak yapılan modern bir tedavi yöntemidir. Doğal dişlerin yerini alan implantlar, hem estetik hem de fonksiyonel açıdan mükemmel bir çözüm sunar.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&auto=format&fit=crop&q=80",
    duration: "2-6 ay",
    benefits: [
      "Doğal diş görünümü ve hissi",
      "Uzun ömürlü çözüm",
      "Çene kemiği erimesini önleme",
      "Komşu dişlere zarar vermez",
      "Yüksek başarı oranı",
    ],
    priceRange: "15.000₺ - 30.000₺",
    faq: [
      {
        question: "İmplant tedavisi ağrılı mıdır?",
        answer:
          "İmplant tedavisi lokal anestezi altında yapılır ve işlem sırasında ağrı hissedilmez. İşlem sonrası hafif bir rahatsızlık olabilir, ancak bu birkaç gün içinde geçer.",
      },
      {
        question: "İmplant ne kadar süre dayanır?",
        answer:
          "İyi bir ağız bakımı ile implantlar ömür boyu kullanılabilir. Düzenli kontroller ve doğru bakım, implantların uzun ömürlü olmasını sağlar.",
      },
    ],
  },
  {
    id: "ortodonti",
    name: "Ortodonti",
    description: "Düzgün ve sağlıklı bir gülüş için ortodontik tedaviler",
    longDescription:
      "Ortodontik tedavi, diş ve çene düzensizliklerinin düzeltilmesi için uygulanan bir tedavi yöntemidir. Modern braketler ve şeffaf plaklar ile dişlerinizi ideal konuma getiriyoruz.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80",
    duration: "12-24 ay",
    benefits: [
      "Düzgün diş dizilimi",
      "Daha iyi çiğneme fonksiyonu",
      "Kolay temizlenebilen dişler",
      "Özgüvenli gülümseme",
      "Çene problemlerinin önlenmesi",
    ],
    priceRange: "20.000₺ - 40.000₺",
    faq: [
      {
        question: "Hangi yaşta ortodontik tedavi olunabilir?",
        answer:
          "Ortodontik tedavi her yaşta uygulanabilir. Ancak ideal yaş aralığı 12-16 yaş arasıdır. Yetişkinlerde de başarılı sonuçlar elde edilmektedir.",
      },
      {
        question: "Şeffaf plaklar mı, metal braketler mi?",
        answer:
          "Her iki seçenek de etkilidir. Tercih, vakanın karmaşıklığına ve hastanın isteklerine göre belirlenir. Şeffaf plaklar daha estetik bir görünüm sunar.",
      },
    ],
  },
  {
    id: "dis-beyazlatma",
    name: "Diş Beyazlatma",
    description: "Profesyonel diş beyazlatma ile parlak bir gülümseme",
    longDescription:
      "Diş beyazlatma, dişlerdeki renk değişimlerini gidermek için uygulanan güvenli ve etkili bir kozmetik işlemdir. Ofis tipi ve ev tipi beyazlatma seçenekleri sunuyoruz.",
    image: "https://drozlemorto.com/wp-content/uploads/2024/01/Dr.-Ozlem-Aylikci-Drozlemorto-Gulus-Tasarim-Uzmani-dr.-Bahadir-Ugur-Aylikci-Dis-beyazlatma-Bleaching-aftery.jpg",
    duration: "1-2 seans",
    benefits: [
      "Hızlı ve etkili sonuç",
      "Güvenli uygulama",
      "Uzun süre kalıcı etki",
      "Diş minesine zarar vermez",
      "Özgüvenli gülümseme",
    ],
    priceRange: "3.000₺ - 5.000₺",
    faq: [
      {
        question: "Diş beyazlatma zararlı mıdır?",
        answer:
          "Profesyonel diş beyazlatma işlemi, uzman diş hekimleri tarafından uygulandığında güvenlidir. Dişlere ve diş etlerine zarar vermez.",
      },
      {
        question: "Sonuçlar ne kadar süre kalıcıdır?",
        answer:
          "Sonuçların kalıcılığı kişinin yaşam tarzına ve ağız bakımına bağlıdır. Ortalama 1-2 yıl etkisini korur. Düzenli bakım ile bu süre uzatılabilir.",
      },
    ],
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ServicesPage() {
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
              Tedavi Hizmetlerimiz
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Modern diş hekimliğinin tüm olanaklarını kullanarak size en iyi
              tedavi seçeneklerini sunuyoruz. Uzman kadromuz ve son teknoloji
              ekipmanlarımızla yanınızdayız.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),theme(colors.primary.800))] opacity-20" />
      </motion.div>

      {/* Treatments List */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-16"
        >
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              id={treatment.id}
              variants={fadeIn}
              className="scroll-mt-16 lg:scroll-mt-24"
            >
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <div className="flex items-center gap-x-2 text-white">
                      <Clock className="h-5 w-5" />
                      <span>Tedavi Süresi: {treatment.duration}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col justify-center"
                >
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    {treatment.name}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    {treatment.longDescription}
                  </p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-6"
                  >
                    <h3 className="font-semibold text-gray-900">
                      Tedavinin Faydaları
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {treatment.benefits.map((benefit, idx) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + idx * 0.1 }}
                          className="flex items-start gap-x-3 text-gray-600"
                        >
                          <CheckCircle2 className="h-5 w-5 flex-none text-primary" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 flex items-center gap-x-3 text-lg font-semibold text-gray-900"
                  >
                    <span>Fiyat Aralığı:</span>
                    <span className="text-primary">{treatment.priceRange}</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="mt-12"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Sık Sorulan Sorular
                </h3>
                <dl className="mt-4 grid gap-6 lg:grid-cols-2">
                  {treatment.faq.map((item, idx) => (
                    <motion.div
                      key={item.question}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + idx * 0.1 }}
                      className="rounded-lg bg-gray-50 p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <dt className="flex items-start gap-x-3">
                        <Info className="h-5 w-5 flex-none text-primary" />
                        <span className="font-semibold text-gray-900">
                          {item.question}
                        </span>
                      </dt>
                      <dd className="mt-4 text-gray-600">{item.answer}</dd>
                    </motion.div>
                  ))}
                </dl>
              </motion.div>

              {/* Divider */}
              {treatment.id !== treatments[treatments.length - 1].id && (
                <div className="relative mt-12">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 rounded-2xl bg-primary-50 px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Tedaviniz için Randevu Alın
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Size en uygun tedavi planını oluşturmak için uzman kadromuzla
              görüşün.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 lg:mt-0 lg:ml-8"
          >
            <Link
              href="/randevu"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Randevu Al
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 