import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiClock, FiMapPin, FiShield } from 'react-icons/fi';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { absoluteUrl, breadcrumbJsonLd, createSeoMetadata, siteConfig } from '@/lib/seo';

const path = '/mecidiyekoy-guzellik-merkezi-hizmetler/mecidiyekoy-protez-tirnak';

export const metadata = createSeoMetadata({
  title: 'Mecidiyeköy Protez Tırnak',
  description:
    'Mecidiyeköy protez tırnak uygulamaları için Dream Moon Beauty: kalıcı oje, jel protez, tırnak şekillendirme ve bakımlı el görünümü.',
  path,
  image: '/dreammoon/protez-tirnak.webp',
  keywords: [
    'mecidiyekoy protez tirnak',
    'mecidiyekoy kalici oje',
    'mecidiyekoy tirnak merkezi',
    'sisli protez tirnak',
  ],
});

const highlights = [
  'El yapısına uygun tırnak formu',
  'Jel protez ve kalıcı oje seçenekleri',
  'Hijyenik hazırlık ve özenli uygulama',
  'Doğal, zarif veya iddialı tasarım alternatifleri',
  'Kullanım ve bakım önerileri',
  'Mecidiyeköy merkezde kolay ulaşım',
];

const steps = [
  {
    title: 'Kısa danışmanlık',
    description: 'Tırnak yapınız, günlük kullanım alışkanlığınız ve istediğiniz görünüm birlikte değerlendirilir.',
  },
  {
    title: 'Hazırlık ve şekillendirme',
    description: 'Tırnak yüzeyi hijyenik şekilde hazırlanır; uzunluk, form ve tasarım netleştirilir.',
  },
  {
    title: 'Protez tırnak uygulaması',
    description: 'Seçilen teknikle dayanıklı, pürüzsüz ve dengeli bir görünüm oluşturulur.',
  },
  {
    title: 'Son kontrol',
    description: 'Final görünüm kontrol edilir, bakım aralığı ve günlük kullanım önerileri paylaşılır.',
  },
];

export default function MecidiyekoyProtezTirnakPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl(`${path}#service`),
    name: 'Mecidiyeköy Protez Tırnak',
    description: metadata.description,
    url: absoluteUrl(path),
    image: absoluteUrl('/dreammoon/protez-tirnak.webp'),
    provider: {
      '@type': 'BeautySalon',
      '@id': `${siteConfig.url}/#business`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.addressLocality,
        addressRegion: siteConfig.address.addressRegion,
        addressCountry: siteConfig.address.addressCountry,
      },
    },
    areaServed: ['Mecidiyeköy', 'Şişli', 'İstanbul'],
    serviceType: 'Protez Tırnak',
  };

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Mecidiyeköy Güzellik Merkezi Hizmetler', path: '/mecidiyekoy-guzellik-merkezi-hizmetler' },
    { name: 'Mecidiyeköy Protez Tırnak', path },
  ]);

  return (
    <main className="page-flow min-h-screen bg-[var(--lale-emerald-deep)]">
      <JsonLd data={[serviceJsonLd, breadcrumb]} />
      <PageHero
        eyebrow="Mecidiyeköy Tırnak Bakımı"
        title={<>Protez<br />tırnak</>}
        description="Dream Moon Beauty'de protez tırnak uygulamaları; el yapınıza, stilinize ve günlük kullanımınıza uygun şekilde planlanır."
        image="/dreammoon/protez-tirnak.webp"
        imageAlt="Mecidiyeköy protez tırnak uygulaması"
      />

      <section className="lale-dark-section py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-7 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <div className="lale-kicker">Dream Moon Beauty</div>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-[var(--dream-dark)] sm:text-5xl">
              Mecidiyeköy'de bakımlı, dayanıklı ve stilinize uygun tırnaklar
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--dream-text)] sm:text-lg">
              <p>
                Protez tırnak, doğal tırnak görünümünü düzenlemek, uzunluğu artırmak veya daha kalıcı bir manikür etkisi elde etmek isteyenler için profesyonel bir uygulamadır. Dream Moon Beauty'de her işlem öncesinde tırnak yapınız ve beklentiniz değerlendirilir.
              </p>
              <p>
                Mecidiyeköy'deki merkezimizde jel protez, kalıcı oje ve tırnak şekillendirme seçenekleriyle sade, zarif ya da daha dikkat çekici tasarımlar hazırlanabilir. Amacımız yalnızca güzel bir görünüm değil, konforlu kullanım sağlayan dengeli bir sonuçtur.
              </p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                { icon: FiMapPin, title: 'Merkezi Konum', text: 'Büyükdere Caddesi üzerinde kolay ulaşım.' },
                { icon: FiShield, title: 'Hijyenik Süreç', text: 'Hazırlık ve uygulama adımları özenle yürütülür.' },
                { icon: FiClock, title: 'Planlı Bakım', text: 'Kontrol ve yenileme aralıkları paylaşılır.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="lale-card-light rounded-[14px] p-5">
                    <Icon className="h-6 w-6 text-[var(--lale-gold)]" />
                    <h3 className="mt-4 font-serif text-xl text-[var(--dream-dark)]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--dream-text)]">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[14px]">
            <Image
              src="/dreammoon/protez-tirnak.webp"
              alt="Dream Moon Beauty protez tırnak"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
          </div>
        </div>
      </section>

      <section className="lale-dark-section py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-4xl text-[var(--dream-dark)]">Uygulama kapsamı</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3 rounded-[10px] bg-white/70 p-4">
                    <FiCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--lale-gold)]" />
                    <span className="text-sm leading-6 text-[var(--dream-text)]">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-4xl text-[var(--dream-dark)]">Süreç nasıl ilerler?</h2>
              <div className="mt-8 space-y-4">
                {steps.map((step, index) => (
                  <article key={step.title} className="lale-card-light rounded-[14px] p-5">
                    <div className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--lale-gold)] text-sm font-semibold text-[var(--lale-emerald-deep)]">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-serif text-xl text-[var(--dream-dark)]">{step.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-[var(--dream-text)]">{step.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[14px] bg-white/70 p-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-3xl text-[var(--dream-dark)]">Mecidiyeköy protez tırnak randevusu</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--dream-text)]">
                Tırnak yapınıza uygun uygulama ve tasarım seçimi için Dream Moon Beauty ekibiyle iletişime geçebilirsiniz.
              </p>
            </div>
            <Link href="/iletisim" className="lale-gold-button shrink-0 gap-3">
              Randevu Oluştur
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
