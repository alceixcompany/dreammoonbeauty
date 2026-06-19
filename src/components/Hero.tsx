'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FiArrowUpRight, FiInstagram, FiMapPin, FiPhone, FiShield, FiStar } from 'react-icons/fi';
import { siteConfig } from '@/lib/seo';

const heroItems = ['Lazer Epilasyon', 'Hydrafacial', 'Cilt Bakımı'];

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: 'easeOut' },
  },
};

const group: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#fbf6f3] px-4 pb-8 pt-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <Image
          src="/dreammoon/why-us.webp"
          alt="Dream Moon Beauty bakım atmosferi"
          fill
          priority
          className="object-cover object-[66%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,246,243,0.98)_0%,rgba(251,246,243,0.90)_36%,rgba(251,246,243,0.40)_66%,rgba(95,89,108,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,246,243,0.20)_0%,rgba(251,246,243,0.88)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid min-h-[690px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            variants={group}
            initial="hidden"
            animate="visible"
            className="relative z-20 max-w-[650px] py-12 lg:py-16"
          >
            <motion.h1
              variants={reveal}
              className="max-w-[620px] font-serif text-[42px] font-normal leading-[1.08] tracking-[-0.02em] text-[var(--dream-dark)] sm:text-[58px] lg:text-[68px]"
            >
              Dream Moon Beauty profesyonel güzellik merkezi
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-5 max-w-xl text-base leading-8 text-[var(--dream-text)] sm:text-lg"
            >
              Lazer epilasyon, cilt bakımı, ağda ve kişisel bakım hizmetlerinde
              profesyonel, hijyenik ve kişiye özel çözümler.
            </motion.p>

            <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/hizmetlerimiz" className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--dream-dark)] px-6 py-3 text-sm font-medium text-white shadow-[0_18px_42px_rgba(95,89,108,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-panel-deep)]">
                Hizmetlerimizi Keşfet
                <FiArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/iletisim" className="inline-flex items-center justify-center gap-3 rounded-full border border-[rgba(95,89,108,0.18)] bg-white/72 px-6 py-3 text-sm font-medium text-[var(--dream-dark)] shadow-[0_14px_32px_rgba(95,89,108,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
                Randevu Al
                <FiPhone className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div variants={reveal} className="mt-11 grid max-w-xl gap-3 sm:grid-cols-3">
              {heroItems.map((service) => (
                <span
                  key={service}
                  className="rounded-[18px] border border-[rgba(223,167,69,0.22)] bg-white/72 px-4 py-3 text-sm text-[var(--dream-dark)] shadow-[0_12px_30px_rgba(95,89,108,0.07)] backdrop-blur"
                >
                  {service}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.12 }}
            className="relative z-10 min-h-[520px] lg:min-h-[650px]"
          >
            <div className="absolute bottom-0 right-0 h-[500px] w-[min(88vw,560px)] lg:h-[660px] lg:w-[620px]">
              <Image
                src="/dreammoon/hero.webp"
                alt="Dream Moon Beauty ana sayfa görseli"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_32px_58px_rgba(95,89,108,0.20)]"
                sizes="(max-width: 1024px) 88vw, 48vw"
              />
            </div>

            <div className="absolute right-0 top-12 hidden w-[250px] rounded-[22px] border border-white/70 bg-white/82 p-4 text-[var(--dream-dark)] shadow-[0_22px_54px_rgba(95,89,108,0.14)] backdrop-blur md:block">
              <div className="flex items-center gap-1 text-[#d9a76f]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FiStar key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm font-medium">Misafir memnuniyeti odaklı bakım deneyimi</p>
            </div>

            <Link
              href="/iletisim"
              className="absolute bottom-12 left-2 z-30 hidden h-[116px] w-[116px] items-center justify-center rounded-full border border-white/70 bg-white/90 text-[var(--dream-dark)] shadow-[0_20px_54px_rgba(95,89,108,0.18)] backdrop-blur transition-transform hover:scale-105 sm:flex"
              aria-label="Randevu al"
            >
              <svg className="dream-rotate absolute inset-2 h-[100px] w-[100px]" viewBox="0 0 100 100">
                <path id="dreammoon-circle-text" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                <text className="fill-[var(--dream-dark)] text-[9px] font-medium tracking-[0.18em]">
                  <textPath href="#dreammoon-circle-text">RANDEVU AL * DREAM MOON BEAUTY *</textPath>
                </text>
              </svg>
              <FiArrowUpRight className="h-7 w-7" />
            </Link>

            <div className="absolute bottom-10 right-4 hidden max-w-[240px] rounded-[22px] border border-white/70 bg-[var(--dream-dark)]/92 p-4 text-white shadow-[0_22px_54px_rgba(95,89,108,0.18)] backdrop-blur lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/12">
                  <FiShield className="h-5 w-5" />
                </div>
                <p className="text-xs font-medium leading-5">Hijyenik uygulama alanı, kişiye özel planlama</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-20 grid gap-4 rounded-[24px] border border-[rgba(223,167,69,0.16)] bg-white/76 px-3 py-4 shadow-[0_20px_60px_rgba(95,89,108,0.08)] backdrop-blur md:grid-cols-3 md:px-5">
          {[
            { icon: FiInstagram, title: 'İletişim', value: siteConfig.instagramHandle },
            { icon: FiMapPin, title: 'Konum', value: 'Mecidiyeköy / İstanbul' },
            { icon: FiPhone, title: 'Randevu', value: siteConfig.phoneDisplay },
          ].map((detail, index) => {
            const Icon = detail.icon;

            return (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                className="flex items-start gap-4 rounded-[18px] border border-[rgba(223,167,69,0.10)] bg-white/58 px-4 py-4 md:border-transparent md:bg-transparent"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--dream-dark)] text-white shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-serif text-xl text-[var(--dream-dark)]">{detail.title}</p>
                  <p className="mt-1 text-sm text-[var(--dream-text)]">{detail.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
