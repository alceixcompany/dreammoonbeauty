import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiFeather, FiHeart, FiShield, FiSmile, FiSun } from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl, createSeoMetadata, siteConfig } from '@/lib/seo';

export const metadata = createSeoMetadata({
  title: 'Hizmetlerimiz',
  description:
    'Dream Moon Beauty hizmetleri: lazer epilasyon, ağda, kaş tasarımı, kirpik lifting, kalıcı makyaj, protez tırnak, cilt bakımı, masaj ve kuaför uygulamaları.',
  path: '/hizmetlerimiz',
  image: '/dreammoon/why-us.webp',
  keywords: ['mecidiyekoy cilt bakimi', 'mecidiyekoy lazer epilasyon', 'sisli guzellik merkezi'],
});

const services = [
  {
    slug: 'lazer-epilasyon',
    icon: FiSun,
    title: 'Lazer Epilasyon',
    description:
      'Son teknoloji cihazlarla acısız, etkili ve kalıcı lazer epilasyon deneyimi sunuyoruz.',
    highlights: ['Son teknoloji cihaz', 'Acısız uygulama', 'Kalıcı pürüzsüzlük hedefi'],
    image: '/dreammoon/lazer-epilasyon.webp',
  },
  {
    slug: 'agda-uygulamalari',
    icon: FiSun,
    title: 'Profesyonel Ağda Hizmetleri',
    description:
      'Hijyenik ve etkili ağda uygulamalarıyla istenmeyen tüylerden hızlıca kurtulmanıza destek oluyoruz.',
    highlights: ['Hijyenik ortam', 'Bölgesel çözümler', 'Hızlı uygulama'],
    image: '/dreammoon/agda.webp',
  },
  {
    slug: 'kas-tasarimi',
    icon: FiFeather,
    title: 'Kaş Tasarımı',
    description:
      'Yüz hatlarınıza uygun, estetik ve doğal kaş tasarımıyla bakışlarınıza anlam katıyoruz.',
    highlights: ['Yüz hattına uyum', 'Doğal görünüm', 'Kişisel tasarım'],
    image: '/dreammoon/kas-tasarimi.webp',
  },
  {
    slug: 'kirpik-lifting',
    icon: FiFeather,
    title: 'Kirpik Lifting',
    description:
      'Doğal kirpiklerinizi besleyerek kıvıran lifting uygulamasıyla etkileyici bakışlara sahip olun.',
    highlights: ['Doğal kirpik etkisi', 'Kıvrık görünüm', 'Bakımlı bitiş'],
    image: '/dreammoon/kirpik-lifting.webp',
  },
  {
    slug: 'kalici-makyaj',
    icon: FiFeather,
    title: 'Kalıcı Makyaj',
    description:
      'Kaş, dudak ve eyeliner uygulamalarıyla gün boyu kalıcı ve doğal güzellik çözümleri sunuyoruz.',
    highlights: ['Kaş, dudak, eyeliner', 'Doğal sonuç', 'Uzun süreli konfor'],
    image: '/dreammoon/kalici-makyaj.webp',
  },
  {
    slug: 'protez-tirnak',
    icon: FiCheck,
    title: 'Protez Tırnak',
    description:
      'Dayanıklı, estetik ve uzun ömürlü protez tırnak uygulamalarıyla bakımlı eller sağlıyoruz.',
    highlights: ['Dayanıklı yapı', 'Estetik görünüm', 'Uzun ömürlü kullanım'],
    image: '/dreammoon/protez-tirnak.webp',
  },
  {
    slug: 'cilt-bakimi',
    icon: FiSmile,
    title: 'Cilt Bakımı',
    description:
      'Tüm cilt tiplerine uygun analiz ve kişiye özel bakım planıyla cildinizi yeniliyoruz.',
    highlights: ['Ücretsiz analiz', 'Kişisel bakım planı', 'Hijyenik uygulama'],
    image: '/dreammoon/cilt-bakimi-premium.png',
  },
  {
    slug: 'masaj',
    icon: FiHeart,
    title: 'Masaj Uygulamaları',
    description:
      'Selülit masajı, bölgesel incelme masajı, G5 masajı ve pasif jimnastik uygulamaları sunuyoruz.',
    highlights: ['G5 masajı', 'Bölgesel incelme', 'Pasif jimnastik'],
    image: '/dreammoon/advantages.webp',
  },
  {
    slug: 'kuafor-hizmetleri',
    icon: FiHeart,
    title: 'Kuaför Hizmetleri',
    description:
      'Saç kesimi, fön, maşa, saç boyama, röfle, saç bakım kürleri, topuz ve örgü hizmetleri.',
    highlights: ['Saç kesimi', 'Fön ve maşa', 'Boyama ve bakım'],
    image: '/dreammoon/why-us.webp',
  },
  {
    slug: 'manikur-pedikur',
    icon: FiShield,
    title: 'Islak Manikür & Pedikür',
    description:
      'El ve ayak bakımında hijyenik, özenli ve estetik manikür-pedikür uygulamaları.',
    highlights: ['Hijyenik bakım', 'Özenli uygulama', 'Bakımlı görünüm'],
    image: '/dreammoon/protez-tirnak.webp',
  },
] as const;

const values = [
  {
    icon: FiShield,
    title: 'Güven Veren Süreç',
    description: 'Hijyen, doğru ürün seçimi ve profesyonel uygulama adımlarıyla her seansı özenle yönetiyoruz.',
  },
  {
    icon: FiHeart,
    title: 'Sakin Deneyim',
    description: 'Randevu öncesinden seans sonrasına kadar sizi yormayan, dingin ve özel hissettiren bir akış sunuyoruz.',
  },
  {
    icon: FiSmile,
    title: 'Kişisel Yaklaşım',
    description: 'Her misafirin beklentisini ve ihtiyacını dinleyerek ona en uygun bakım ritüelini birlikte planlıyoruz.',
  },
] as const;

const ServicesPage = () => {
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dream Moon Beauty Hizmetleri',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: absoluteUrl(`/hizmetlerimiz/${service.slug}`),
        image: absoluteUrl(service.image),
        provider: {
          '@type': 'BeautySalon',
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: 'Istanbul',
      },
    })),
  };

  return (
    <main className="page-flow min-h-screen bg-[var(--lale-emerald-deep)]">
      <JsonLd data={servicesJsonLd} />
      <PageHero
        eyebrow="Profesyonel Çözümler"
        title={<>İmza<br />bakımlar</>}
        description="Lazer epilasyon, ağda, kaş tasarımı, kirpik lifting, kalıcı makyaj, protez tırnak, cilt bakımı ve kuaför hizmetlerimizi keşfedin."
        image="/dreammoon/why-us.webp"
        imageAlt="Dream Moon Beauty hizmetleri"
      />

      <section className="lale-dark-section py-24 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="lale-kicker">
              İMZA BAKIMLAR
            </div>

            <h2 className="mt-8 font-serif text-4xl leading-tight text-[var(--dream-dark)] sm:text-5xl">
              İhtiyacınıza göre şekillenen
              <span className="block text-[var(--lale-gold)]">premium bakım seçimleri</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--dream-text)]">
              Her bakım öncesinde sizi dinliyor, beklentinize uygun uygulama akışını
              planlıyor ve sürecin tamamında konforu korumaya odaklanıyoruz.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.slug}
                  className="lale-card-light overflow-hidden rounded-[14px] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,175,55,0.42)] hover:shadow-[0_28px_90px_rgba(95,89,108,0.12)]"
                >
                  <div className="grid md:grid-cols-[0.92fr_1.08fr]">
                    <div className="relative min-h-[280px] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,35,31,0.22)] via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-[var(--lale-gold)] shadow-sm backdrop-blur">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>

                    <div className="p-7 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lale-gold)]">
                        Özel Bakım
                      </p>
                      <h3 className="mt-3 font-serif text-3xl text-[var(--dream-dark)]">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[var(--dream-text)] sm:text-base">
                        {service.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        {service.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-3 text-sm text-[var(--dream-text)]"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(212,175,55,0.12)]">
                              <FiCheck className="h-4 w-4 text-[var(--lale-gold)]" />
                            </div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                          href={`/hizmetlerimiz/${service.slug}`}
                          className="lale-gold-button gap-3 text-xs"
                        >
                          Detayları İncele
                          <FiArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                          href="/iletisim"
                          className="inline-flex items-center justify-center rounded-full border border-[rgba(95,89,108,0.18)] px-6 py-3 text-xs font-medium text-[var(--dream-dark)] transition-all duration-300 hover:bg-white/70"
                        >
                          Randevu Oluştur
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lale-dark-section py-24 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="lale-kicker">
              NEDEN DREAM MOON
            </div>

            <h2 className="mt-8 font-serif text-4xl leading-tight text-[var(--dream-dark)] sm:text-5xl">
              Sonuçtan önce
              <span className="block text-[var(--lale-gold)]">deneyime de özen gösteriyoruz</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--dream-text)]">
              Merkezimize gelen herkesin kendini rahat, güvende ve özel hissetmesini
              önemsiyoruz. Bu anlayış, tüm hizmetlerimizin temelini oluşturuyor.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="lale-card-light rounded-[14px] p-7 shadow-[0_16px_46px_rgba(95,89,108,0.08)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(223,167,69,0.14)] text-[var(--lale-gold)] shadow-inner">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-[var(--dream-dark)]">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--dream-text)] sm:text-base">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lale-dark-section py-24 sm:py-28">
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-7 lg:px-10">
          <div className="lale-card-light rounded-[14px] p-8 sm:p-10 shadow-[0_24px_70px_rgba(95,89,108,0.12)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--lale-gold)]">
              Randevu Planlama
            </p>
            <h2 className="mt-4 font-serif text-4xl text-[var(--dream-dark)] sm:text-5xl">
              Size en uygun bakım planını birlikte oluşturalım
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--dream-text)] sm:text-lg">
              İster ilk kez gelin ister rutininizi güçlendirmek isteyin, size en uygun
              uygulamayı birlikte belirleyelim ve keyifli bir merkez deneyimi planlayalım.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/iletisim"
                className="lale-gold-button gap-3"
              >
                İletişime Geçin
                <FiArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/galeri"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(95,89,108,0.18)] px-6 py-3 text-sm font-medium text-[var(--dream-dark)] transition-all duration-300 hover:bg-white/70"
              >
                Galeriyi İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
