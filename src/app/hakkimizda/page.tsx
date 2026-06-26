'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiHeart,
  FiMapPin,
  FiShield,
  FiStar,
  FiTarget,
  FiUsers,
} from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import { siteConfig } from '@/lib/seo';

const experiencePoints = [
  {
    icon: FiUsers,
    title: 'Kişiye özel analiz',
    text: 'Her işlemden önce cilt, beklenti ve günlük rutin birlikte değerlendirilir.',
  },
  {
    icon: FiShield,
    title: 'Hijyenik uygulama',
    text: 'Bakım alanları, ekipmanlar ve ürün akışı profesyonel hijyen standardıyla hazırlanır.',
  },
  {
    icon: FiStar,
    title: 'Doğal sonuç odağı',
    text: 'Amaç abartılı bir değişim değil; yüzünüze ve stilinize yakışan dengeli bir görünüm.',
  },
];

const values = [
  { icon: FiShield, title: 'Güven', desc: 'Şeffaf bilgilendirme ve steril çalışma düzeni.' },
  { icon: FiCheckCircle, title: 'Özen', desc: 'Her randevuda aynı dikkat ve sakin hizmet akışı.' },
  { icon: FiClock, title: 'Zaman', desc: 'Planlı randevu yönetimi ve bekletmeyen süreçler.' },
  { icon: FiHeart, title: 'Samimiyet', desc: 'Rahat hissettiren, sıcak ve saygılı iletişim.' },
];

const processSteps = [
  'Danışmanlık ve ihtiyaç analizi',
  'Uygun hizmet ve bakım planı seçimi',
  'Hijyenik hazırlık ve profesyonel uygulama',
  'Bakım sonrası yönlendirme ve takip',
];

const AboutPage = () => {
  return (
    <div className="page-flow min-h-screen bg-[var(--lale-cream)]">
      <PageHero
        eyebrow="Hakkımızda"
        title={<>Dream Moon<br />Beauty</>}
        description="Mecidiyeköy'de güzellik ve kişisel bakım deneyimini sakin, hijyenik ve kişiye özel bir yaklaşımla sunuyoruz."
        image="/dreammoon/about-hero-custom.png"
        imageAlt="Dream Moon Beauty özel bakım atmosferi"
        heightClassName="min-h-[500px] py-24 sm:min-h-[560px] sm:py-28"
      />

      <section className="lale-light-section py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-7 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="lale-kicker mb-7">Dream Moon yaklaşımı</div>
            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-[var(--dream-dark)] sm:text-5xl lg:text-6xl">
              Bakımı daha sakin, daha zarif ve size ait hissettiren bir merkez.
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-8 text-[var(--dream-text)]">
              <p>
                Dream Moon Beauty; lazer epilasyon, cilt bakımı, kalıcı makyaj, protez tırnak,
                kaş-kirpik uygulamaları, ağda, masaj ve kuaför hizmetlerini tek çatı altında sunan
                profesyonel bir güzellik merkezidir.
              </p>
              <p>
                Her misafirin beklentisi farklı olduğu için standart bir kalıp yerine analiz,
                doğru yönlendirme ve özenli uygulama sürecine odaklanıyoruz. Amacımız, merkezden
                ayrılırken sadece bakımlı değil, kendinizle daha iyi temas halinde hissetmeniz.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:max-w-xl">
              <div className="rounded-[8px] border border-[rgba(223,167,69,0.18)] bg-white/70 p-5 shadow-[0_18px_42px_rgba(95,89,108,0.08)]">
                <div className="font-serif text-4xl text-[var(--lale-gold)]">15+</div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--dream-text)]">
                  Yıl deneyim
                </p>
              </div>
              <div className="rounded-[8px] border border-[rgba(223,167,69,0.18)] bg-white/70 p-5 shadow-[0_18px_42px_rgba(95,89,108,0.08)]">
                <div className="font-serif text-4xl text-[var(--lale-gold)]">360°</div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--dream-text)]">
                  Bakım deneyimi
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] border border-white/70 shadow-[0_30px_80px_rgba(95,89,108,0.18)]">
              <Image
                src="/dreammoon/about-consultation-custom.png"
                alt="Dream Moon Beauty danışmanlık deneyimi"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 46vw, 100vw"
                quality={94}
              />
            </div>
            <div className="absolute -bottom-6 left-5 right-5 rounded-[8px] border border-white/45 bg-[rgba(255,250,248,0.88)] p-5 shadow-[0_20px_52px_rgba(95,89,108,0.16)] backdrop-blur sm:left-auto sm:w-80">
              <p className="text-sm font-medium leading-7 text-[var(--dream-dark)]">
                “Güzellik, doğru analizle başlayan kişisel bir bakım yolculuğudur.”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="lale-light-section pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {experiencePoints.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[8px] border border-[rgba(223,167,69,0.16)] bg-white/78 p-7 shadow-[0_18px_46px_rgba(95,89,108,0.08)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[8px] bg-[rgba(223,167,69,0.12)] text-[var(--lale-gold)]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl text-[var(--dream-dark)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--dream-text)]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#6b6178_0%,#5f596c_52%,#8a6f58_100%)] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-7 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[16/11] overflow-hidden rounded-[8px] border border-[rgba(255,250,248,0.44)] shadow-[0_28px_72px_rgba(37,30,45,0.24)]"
          >
            <Image
              src="/dreammoon/about-ritual-custom.png"
              alt="Dream Moon Beauty bakım hazırlığı"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 44vw, 100vw"
              quality={94}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f3d29a]">Deneyim akışı</p>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Her randevu, aceleye gelmeyen net bir bakım planıyla ilerler.
            </h2>
            <div className="mt-9 space-y-4">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-[8px] border border-white/45 bg-[rgba(255,250,248,0.92)] p-5 text-[var(--dream-dark)] shadow-[0_16px_42px_rgba(37,30,45,0.16)] backdrop-blur"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e5ad45] font-serif text-lg text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base font-medium leading-7 text-[var(--dream-dark)]">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="lale-light-section py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[8px] border border-[#ead7b8] bg-[#fffaf8] p-8 shadow-[0_20px_52px_rgba(95,89,108,0.10)] sm:p-10"
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#f7ead4] text-[#d89d34]">
                <FiTarget className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-3xl text-[var(--dream-dark)]">Misyonumuz</h3>
              <p className="mt-5 text-[17px] leading-8 text-[#6f6878]">
                Hijyen, güven ve kaliteyi merkeze alan; kişiye özel analizle desteklenen doğal,
                dengeli ve sürdürülebilir bakım sonuçları sunmak.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[8px] border border-[#ead7b8] bg-[#fffaf8] p-8 shadow-[0_20px_52px_rgba(95,89,108,0.10)] sm:p-10"
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#f7ead4] text-[#d89d34]">
                <FiMapPin className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-3xl text-[var(--dream-dark)]">Vizyonumuz</h3>
              <p className="mt-5 text-[17px] leading-8 text-[#6f6878]">
                Mecidiyeköy ve Şişli çevresinde güzellik hizmetlerini zarafet, profesyonellik ve
                sıcak bir misafir deneyimiyle hatırlanan bir marka haline getirmek.
              </p>
            </motion.div>
          </div>

          <div className="mt-14 text-center">
            <div className="mx-auto mb-6 h-px w-20 bg-[var(--lale-gold)]" />
            <h2 className="font-serif text-4xl text-[var(--dream-dark)] sm:text-5xl">Değerlerimiz</h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[8px] border border-[#ead7b8] bg-[#fffaf8] p-6 text-center shadow-[0_16px_38px_rgba(95,89,108,0.09)]"
              >
                <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#f7ead4] text-[#d89d34]">
                  <value.icon className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-xl text-[var(--dream-dark)]">{value.title}</h4>
                <p className="mt-3 text-sm leading-6 text-[#6f6878]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lale-light-section pb-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-7 lg:px-10">
          <div className="overflow-hidden rounded-[8px] border border-[#d8bd8d] bg-[linear-gradient(135deg,#6b6178_0%,#5f596c_58%,#d9a13c_100%)] p-8 text-center shadow-[0_28px_76px_rgba(95,89,108,0.18)] sm:p-14">
            <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
              Size özel bakım planını birlikte oluşturalım.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#fffaf8]/90 sm:text-lg">
              Dream Moon Beauty ekibiyle iletişime geçin; beklentinize, cilt yapınıza ve günlük
              ritminize uygun hizmetleri birlikte planlayalım.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/iletisim" className="inline-flex items-center justify-center gap-3 rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-[var(--dream-dark)] shadow-[0_16px_34px_rgba(37,30,45,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fff4df]">
                İletişime Geçin
                <FiArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center justify-center rounded-full border border-white/65 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/18">
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
