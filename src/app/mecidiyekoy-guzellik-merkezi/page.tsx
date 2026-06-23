import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiMapPin, FiPhone, FiStar } from 'react-icons/fi';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { absoluteUrl, breadcrumbJsonLd, createSeoMetadata, localBusinessJsonLd, siteConfig } from '@/lib/seo';

const path = '/mecidiyekoy-guzellik-merkezi';

export const metadata = createSeoMetadata({
  title: 'Mecidiyeköy Güzellik Merkezi',
  description:
    'Mecidiyeköy güzellik merkezi Dream Moon Beauty; lazer epilasyon, cilt bakımı, protez tırnak, kalıcı makyaj, kaş-kirpik ve kuaför hizmetleri sunar.',
  path,
  image: '/dreammoon/hero.webp',
  keywords: [
    'mecidiyekoy guzellik merkezi',
    'sisli guzellik merkezi',
    'mecidiyekoy lazer epilasyon',
    'mecidiyekoy cilt bakimi',
    'mecidiyekoy protez tirnak',
  ],
});

const services = [
  'Lazer epilasyon',
  'Cilt bakımı',
  'Protez tırnak',
  'Kalıcı makyaj',
  'Kaş tasarımı ve kirpik lifting',
  'Ağda uygulamaları',
  'Masaj uygulamaları',
  'Kuaför hizmetleri',
];

const reasons = [
  {
    icon: FiMapPin,
    title: 'Mecidiyeköy merkezde',
    description: 'Büyükdere Caddesi üzerindeki konumumuzla Şişli ve çevresinden kolay ulaşım sağlar.',
  },
  {
    icon: FiStar,
    title: 'Kişiye özel planlama',
    description: 'Her bakım öncesinde beklentinizi dinler, size uygun uygulama akışını birlikte belirleriz.',
  },
  {
    icon: FiCheck,
    title: 'Hijyen ve özen',
    description: 'Uygulama alanlarında hijyen, sakin deneyim ve profesyonel hizmet standardını önemseriz.',
  },
];

export default function MecidiyekoyGuzellikMerkeziPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Mecidiyeköy Güzellik Merkezi', path },
  ]);

  return (
    <main className="page-flow min-h-screen bg-[var(--lale-emerald-deep)]">
      <JsonLd data={[localBusinessJsonLd(), breadcrumb]} />
      <PageHero
        eyebrow="Dream Moon Beauty"
        title={<>Mecidiyeköy<br />güzellik merkezi</>}
        description="Lazer epilasyondan cilt bakımına, protez tırnaktan kalıcı makyaja kadar kişisel bakım ihtiyaçlarınızı Mecidiyeköy'de tek çatı altında planlıyoruz."
        image="/dreammoon/hero.webp"
        imageAlt="Dream Moon Beauty Mecidiyeköy güzellik merkezi"
      />

      <section className="lale-dark-section py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-7 lg:grid-cols-[1fr_0.95fr] lg:px-10">
          <div>
            <div className="lale-kicker">Mecidiyeköy'de Profesyonel Bakım</div>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-[var(--dream-dark)] sm:text-5xl">
              Güzellik ve bakım rutininiz için sakin, ulaşılabilir ve özenli bir merkez
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-[var(--dream-text)] sm:text-lg">
              <p>
                Dream Moon Beauty, Mecidiyeköy'de güzellik ve kişisel bakım hizmetlerini hijyenik, konforlu ve profesyonel bir ortamda sunar. Merkezimizde her uygulama, kişinin ihtiyacına ve beklentisine göre planlanır.
              </p>
              <p>
                Lazer epilasyon, cilt bakımı, protez tırnak, kalıcı makyaj, kaş-kirpik uygulamaları, ağda, masaj ve kuaför hizmetleri için randevu oluşturabilir; size uygun bakım planını ekibimizle birlikte netleştirebilirsiniz.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/iletisim" className="lale-gold-button gap-3">
                Randevu Oluştur
                <FiArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[rgba(95,89,108,0.18)] px-6 py-3 text-sm font-medium text-[var(--dream-dark)] transition-all duration-300 hover:bg-white/70"
              >
                <FiPhone className="h-4 w-4" />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-[14px]">
            <Image
              src="/dreammoon/about.webp"
              alt="Mecidiyeköy Dream Moon Beauty merkezi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
          </div>
        </div>
      </section>

      <section className="lale-dark-section py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="lale-kicker">Hizmetler</div>
            <h2 className="mt-6 font-serif text-4xl text-[var(--dream-dark)] sm:text-5xl">
              Mecidiyeköy güzellik merkezi hizmetlerimiz
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--dream-text)] sm:text-lg">
              Bakım ihtiyacınıza göre tek bir uygulama seçebilir veya birkaç hizmeti birlikte planlayabilirsiniz.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service}
                href="/hizmetlerimiz"
                className="group flex min-h-28 items-center justify-between rounded-[14px] bg-white/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <span className="font-serif text-xl text-[var(--dream-dark)]">{service}</span>
                <FiArrowRight className="h-5 w-5 text-[var(--lale-gold)] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article key={reason.title} className="lale-card-light rounded-[14px] p-7">
                  <Icon className="h-7 w-7 text-[var(--lale-gold)]" />
                  <h3 className="mt-5 font-serif text-2xl text-[var(--dream-dark)]">{reason.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--dream-text)]">{reason.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lale-dark-section py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-7 lg:px-10">
          <div className="rounded-[14px] bg-white/70 p-8 sm:p-10">
            <FiMapPin className="mx-auto h-8 w-8 text-[var(--lale-gold)]" />
            <h2 className="mt-5 font-serif text-4xl text-[var(--dream-dark)]">Adres ve iletişim</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--dream-text)]">
              {siteConfig.address.display}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href={`tel:${siteConfig.phone}`} className="lale-gold-button gap-3">
                Hemen Ara
                <FiPhone className="h-4 w-4" />
              </a>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(95,89,108,0.18)] px-6 py-3 text-sm font-medium text-[var(--dream-dark)] transition-all duration-300 hover:bg-white/70"
              >
                Yol Tarifi ve Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
