'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiCheckCircle, FiHeart, FiShield, FiClock } from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import { siteConfig } from '@/lib/seo';

const awards = [
  {
    year: '2021',
    title: '4. Türk Azerbaycan Kardeşlik Ödülü',
    subtitle: 'En İyi Kozmetik Uzmanı',
  },
  {
    year: '2022',
    title: 'Altın Melek Ödülü Türkiye',
    subtitle: 'Yılın En Başarılı Güzellik Salonu',
  },
  {
    year: '2023',
    title: 'Gold Face Azerbaycam',
    subtitle: 'Yılın En İyi Dermatoloğu',
  },
  {
    year: '2024',
    title: 'Diamont of Ozbekistan',
    subtitle: 'Yılın En İyi Dermatoloğu',
  },
  {
    year: '2025',
    title: 'Uluslararası Balıkesir Sağlık Bilimleri Akademik Araştırma Kongresi - Türkiye',
    subtitle: '',
  },
];

const AboutPage = () => {
  return (
    <div className="page-flow min-h-screen bg-[var(--lale-emerald-deep)]">
      <PageHero
        eyebrow="Hakkımızda"
        title={<>Zarafetin<br />hikayesi</>}
        description="Dream Moon Beauty, Mecidiyeköy'de lazer epilasyon, cilt bakımı, kalıcı makyaj, protez tırnak ve kişisel bakım hizmetleri sunar."
        image="/dreammoon/about.webp"
        imageAlt="Dream Moon Beauty hakkında"
      />

      <section className="lale-dark-section py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[rgba(212,175,55,0.10)] rounded-2xl text-[var(--lale-gold)] shadow-sm mb-8">
                <FiHeart className="w-6 h-6" />
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl text-[var(--lale-gold)] mb-8 leading-tight">
                Dream Moon <span className="text-[var(--lale-gold)]">Beauty</span>
              </h2>

              <div className="space-y-6 text-[var(--lale-gold)] opacity-70 text-[17px] leading-relaxed">
                <p>
                  Dream Moon Beauty, profesyonel güzellik merkezi olarak lazer epilasyon, cilt bakımı, kalıcı makyaj, protez tırnak ve kişisel bakım hizmetleri sunmaktadır. Uzman kadromuz ve son teknoloji cihazlarımızla her müşterimizin kendini özel ve ayrıcalıklı hissetmesini amaçlıyoruz.
                </p>
                <p>
                  İstanbul Mecidiyeköy'de güvenilir, hijyenik ve müşteri memnuniyeti odaklı hizmet anlayışımızla; ağda, kaş tasarımı, kirpik lifting, masaj ve kuaför hizmetlerinde de kişiye özel çözümler üretiyoruz.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-serif text-[var(--lale-gold)] mb-1">15+</div>
                  <div className="text-xs tracking-widest text-[var(--lale-gold)] opacity-70 uppercase font-bold">Yıl Deneyim</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-[var(--lale-gold)] mb-1">5000+</div>
                  <div className="text-xs tracking-widest text-[var(--lale-gold)] opacity-70 uppercase font-bold">Mutlu Danışan</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden border border-[rgba(212,175,55,0.22)] shadow-2xl">
                <Image
                  src="/dreammoon/about.webp"
                  alt="Dream Moon Beauty bakım felsefesi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -inset-4 border border-[rgba(212,175,55,0.20)] rounded-[56px] -z-10 pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 bg-[rgba(6,35,31,0.84)] p-8 rounded-[32px] shadow-xl hidden sm:block border border-[rgba(212,175,55,0.18)]">
                <p className="font-serif text-[var(--lale-gold)] text-xl mb-1">“Güzellik, özgüvenle başlar.”</p>
                <p className="text-xs tracking-widest text-[rgba(251,250,246,0.66)] uppercase">Dream Moon Beauty Felsefesi</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="lale-dark-section py-24 relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="relative overflow-hidden rounded-[32px] border border-[rgba(212,175,55,0.18)] bg-[linear-gradient(135deg,rgba(7,37,33,0.98)_0%,rgba(8,49,42,0.94)_55%,rgba(10,65,55,0.88)_100%)] px-6 py-16 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:px-10 lg:px-14">
            <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14)_0%,rgba(212,175,55,0)_68%)] pointer-events-none" />
            <div className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(15,99,81,0.32)_0%,rgba(15,99,81,0)_70%)] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="text-center mb-14">
                <p className="text-sm tracking-[0.35em] text-[rgba(251,250,246,0.74)] uppercase mb-4">Uluslararası</p>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--lale-gold)] mb-5">
                  Ödüllerimiz
                </h2>
                <div className="mx-auto h-px w-40 bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.85),transparent)]" />
              </div>

              <div className="space-y-8">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                    className="grid grid-cols-1 gap-5 rounded-[28px] border border-[rgba(212,175,55,0.12)] bg-[rgba(251,250,246,0.03)] p-6 sm:grid-cols-[140px_1fr] sm:items-center sm:gap-8 sm:p-8"
                  >
                    <div className="flex items-center justify-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[rgba(212,175,55,0.34)] bg-[rgba(212,175,55,0.06)] text-3xl font-serif text-[var(--lale-gold)] shadow-inner shadow-[rgba(212,175,55,0.1)]">
                        {award.year}
                      </div>
                    </div>

                    <div className="text-center sm:text-left">
                      <h3 className="font-serif text-2xl text-[var(--lale-ivory)] leading-snug">
                        {award.title}
                      </h3>
                      {award.subtitle && (
                        <p className="mt-3 text-lg text-[rgba(251,250,246,0.76)] uppercase tracking-[0.08em]">
                          {award.subtitle}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="lale-dark-section py-24 relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-10 sm:p-14 rounded-[28px] lale-card-dark text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white">
                <FiTarget className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl text-[var(--lale-ivory)] mb-6">Misyonumuz</h3>
              <p className="text-[rgba(251,250,246,0.68)] leading-relaxed text-[17px]">
                Hijyen, güven ve kaliteyi ön planda tutarak kişiye özel bir bakım kültürü oluşturmak. Uzman kadromuzla her misafirin ihtiyacını doğru analiz edip, en doğal ve etkili sonuçları sunmak temel görevimizdir.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-10 sm:p-14 rounded-[28px] lale-card-dark text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white">
                <FiEye className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl text-[var(--lale-ivory)] mb-6">Vizyonumuz</h3>
              <p className="text-[rgba(251,250,246,0.68)] leading-relaxed text-[17px]">
                Güzellik ve kişisel bakım alanında zarafetiyle ilham veren, yenilikçi uygulamaları sıcak hizmet anlayışıyla birleştiren ve misafirlerinin ilk tercihi olan lider bir marka haline gelmek.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="lale-dark-section py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-block h-px w-20 bg-[var(--lale-gold)] mb-6" />
            <h2 className="font-serif text-4xl sm:text-5xl text-[var(--lale-gold)] mb-4">Değerlerimiz</h2>
            <p className="text-[var(--lale-gold)] opacity-70 tracking-widest uppercase text-xs font-bold">Bizi biz yapan prensiplerimiz</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {[
              { icon: FiShield, title: "Güvenlik", desc: "En yüksek hijyen ve güvenlik standartları." },
              { icon: FiCheckCircle, title: "Kalite", desc: "Onaylı ürünler ve uzman uygulamalar." },
              { icon: FiClock, title: "Zaman", desc: "Randevu sadakati ve özenli süreçler." },
              { icon: FiHeart, title: "Tutku", desc: "İşimize duyduğumuz derin sevgi ve ilgi." }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-[rgba(212,175,55,0.10)] rounded-xl flex items-center justify-center mx-auto mb-6 text-[var(--lale-gold)] shadow-sm border border-[rgba(212,175,55,0.18)]">
                  <value.icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-xl text-[var(--lale-gold)] mb-2">{value.title}</h4>
                <p className="text-sm text-[var(--lale-gold)] opacity-60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lale-dark-section pb-32 px-5">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[32px] lale-card-dark">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(212,175,55,0.08)] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative p-10 sm:p-20 text-center">
            <h2 className="font-serif text-4xl sm:text-5xl text-[var(--lale-ivory)] mb-6">
              Güzelliğinizi Keşfetmeye <span className="text-[var(--lale-gold)]">Hazır mısınız?</span>
            </h2>
            <p className="text-[rgba(251,250,246,0.68)] text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Size özel bakım planı oluşturmak ve profesyonel çözümlerimizle tanışmak için ekibimizle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="lale-gold-button"
              >
                İLETİŞİME GEÇİN
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="lale-outline-button"
              >
                HEMEN ARA
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
