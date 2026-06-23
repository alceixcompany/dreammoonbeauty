import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiFeather } from 'react-icons/fi';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { absoluteUrl, breadcrumbJsonLd, createSeoMetadata, siteConfig } from '@/lib/seo';

const path = '/rofle-mi-ombre-mi-hangisi-size-daha-uygun-mecidiyekoy-rofle-ve-ombre';

export const metadata = createSeoMetadata({
  title: 'Röfle mi Ombre mi? Mecidiyeköy Röfle ve Ombre',
  description:
    'Röfle ve ombre arasındaki farkları keşfedin. Mecidiyeköy Dream Moon Beauty kuaför hizmetlerinde saç renginize ve stilinize uygun seçimi planlayın.',
  path,
  image: '/dreammoon/why-us.webp',
  keywords: [
    'mecidiyekoy rofle',
    'mecidiyekoy ombre',
    'rofle mi ombre mi',
    'sisli ombre',
    'mecidiyekoy kuafor',
  ],
  type: 'article',
});

const comparison = [
  {
    title: 'Röfle',
    description:
      'Saçın belirli tutamlarına daha açık tonlar verilerek hareketli, ışıltılı ve canlı bir görünüm oluşturulur.',
    bestFor: ['Daha belirgin ışıltı isteyenler', 'Saçında kontrast sevenler', 'Klasik ve hacimli görünüm arayanlar'],
  },
  {
    title: 'Ombre',
    description:
      'Diplerden uçlara doğru yumuşak renk geçişi sağlanır; doğal açılmış saç etkisi isteyenler için modern bir seçenektir.',
    bestFor: ['Doğal geçiş isteyenler', 'Dip bakımını daha rahat yönetmek isteyenler', 'Modern ve yumuşak görünüm sevenler'],
  },
];

const decisionPoints = [
  'Cilt alt tonunuz ve doğal saç renginiz',
  'Saçınızın mevcut işlem geçmişi',
  'Günlük stiliniz ve bakım rutininiz',
  'Ne kadar belirgin bir değişim istediğiniz',
  'Dip bakımı için ayırabileceğiniz zaman',
];

export default function RofleOmbrePage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': absoluteUrl(`${path}#article`),
    headline: 'Röfle mi Ombre mi? Hangisi Size Daha Uygun?',
    description: metadata.description,
    image: absoluteUrl('/dreammoon/why-us.webp'),
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'BeautySalon',
      '@id': `${siteConfig.url}/#business`,
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(siteConfig.logo),
      },
    },
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: 'tr-TR',
  };

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Haberler', path: '/haberler' },
    { name: 'Röfle mi Ombre mi?', path },
  ]);

  return (
    <main className="page-flow min-h-screen bg-[var(--lale-emerald-deep)]">
      <JsonLd data={[articleJsonLd, breadcrumb]} />
      <PageHero
        eyebrow="Mecidiyeköy Kuaför"
        title={<>Röfle mi<br />ombre mi?</>}
        description="Saç renginizi yenilemek istiyor ama hangi uygulamanın size daha uygun olduğundan emin olamıyorsanız, karar vermeden önce farkları birlikte netleştirelim."
        image="/dreammoon/why-us.webp"
        imageAlt="Mecidiyeköy röfle ve ombre saç uygulamaları"
      />

      <article className="lale-dark-section py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-7 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-10">
          <div className="max-w-3xl">
            <div className="lale-kicker">Saç Rengi Rehberi</div>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-[var(--dream-dark)] sm:text-5xl">
              Röfle ve ombre arasındaki temel fark nedir?
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-[var(--dream-text)] sm:text-lg">
              <p>
                Röfle, saçın seçilen tutamlarına daha açık renk geçişleri verilerek yapılan bir renklendirme tekniğidir. Saça parlaklık, hareket ve daha belirgin bir boyut kazandırır.
              </p>
              <p>
                Ombre ise saç diplerinden uçlara doğru daha yumuşak bir renk geçişi sağlar. Genellikle diplerde doğal tona yakın bir görünüm korunur, uçlara doğru açıklık artar. Bu nedenle daha modern ve doğal geçişli bir etki isteyenler tarafından sık tercih edilir.
              </p>
              <p>
                Dream Moon Beauty'de Mecidiyeköy röfle ve ombre danışmanlığı sırasında saçınızın mevcut rengi, işlem geçmişi, cilt tonunuz ve bakım beklentiniz birlikte değerlendirilir. Böylece yalnızca trend olan değil, size yakışan uygulama seçilir.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {comparison.map((item) => (
                <section key={item.title} className="lale-card-light rounded-[14px] p-6">
                  <FiFeather className="h-7 w-7 text-[var(--lale-gold)]" />
                  <h3 className="mt-4 font-serif text-3xl text-[var(--dream-dark)]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--dream-text)]">{item.description}</p>
                  <div className="mt-6 space-y-3">
                    {item.bestFor.map((text) => (
                      <div key={text} className="flex items-start gap-3 text-sm leading-6 text-[var(--dream-text)]">
                        <FiCheck className="mt-1 h-4 w-4 shrink-0 text-[var(--lale-gold)]" />
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-12">
              <h2 className="font-serif text-4xl text-[var(--dream-dark)]">Hangisi size daha uygun?</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-[var(--dream-text)] sm:text-lg">
                <p>
                  Daha canlı, çizgisel ve ışığı yakalayan bir görünüm istiyorsanız röfle sizin için iyi bir seçenek olabilir. Özellikle saçına hacimli ve enerjik bir ifade katmak isteyenler röfleyle daha belirgin sonuç alır.
                </p>
                <p>
                  Daha doğal, yumuşak geçişli ve dip uzadıkça görünümü daha kolay yönetilen bir stil istiyorsanız ombre daha uygun olabilir. Ombre, saç uçlarında güneşten açılmış gibi duran zarif bir etki sağlar.
                </p>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-serif text-4xl text-[var(--dream-dark)]">Karar verirken nelere bakıyoruz?</h2>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {decisionPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-[10px] bg-white/70 p-4">
                    <FiCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--lale-gold)]" />
                    <span className="text-sm leading-6 text-[var(--dream-text)]">{point}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="lale-card-light overflow-hidden rounded-[14px]">
              <div className="relative h-64">
                <Image
                  src="/dreammoon/why-us.webp"
                  alt="Dream Moon Beauty kuaför hizmetleri"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 360px"
                />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-2xl text-[var(--dream-dark)]">Mecidiyeköy röfle ve ombre randevusu</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--dream-text)]">
                  Saç renginize en uygun geçişi seçmek için merkezimizde kısa bir ön değerlendirme yapabiliriz.
                </p>
                <Link href="/iletisim" className="mt-6 inline-flex lale-gold-button gap-3 text-xs">
                  Randevu Oluştur
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
