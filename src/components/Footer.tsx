'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiInstagram, FiMapPin, FiPhone } from 'react-icons/fi';
import { siteConfig } from '@/lib/seo';

const Footer = () => {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || false;

  if (isAdminPage) {
    return null;
  }

  return (
    <footer className="lale-light-section text-[var(--dream-dark)]">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="border-t border-[rgba(223,167,69,0.18)] py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.78fr_1.22fr_1fr] lg:gap-12">
            <div>
              <Link href="/" className="inline-flex">
                <span className="flex flex-col items-center leading-none text-[#151412] transition-transform duration-300 hover:scale-[1.02]">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.32em]">By Roya Ay</span>
                  <span className="font-script text-[38px] leading-[0.9]">Dream Moon</span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.48em]">Beauty</span>
                </span>
              </Link>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--dream-text)]">
                Mecidiyeköy'de lazer epilasyon, cilt bakımı, ağda ve kişisel
                bakım hizmetlerinde hijyenik, modern ve özenli bir deneyim sunuyoruz.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(223,167,69,0.24)] bg-white/88 text-[var(--lale-gold)] transition-colors hover:bg-[rgba(223,167,69,0.10)]"
                  title="Instagram"
                >
                  <FiInstagram className="h-4 w-4" />
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(223,167,69,0.24)] bg-white/88 text-[var(--lale-gold)] transition-colors hover:bg-[rgba(223,167,69,0.10)]"
                  title="Telefon"
                >
                  <FiPhone className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.instagram}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(223,167,69,0.24)] bg-white/88 text-[var(--lale-gold)] transition-colors hover:bg-[rgba(223,167,69,0.10)]"
                  title="Instagram"
                >
                  <FiInstagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">Sayfalar</h3>
              <ul className="mt-5 space-y-3 text-sm text-[var(--dream-text)]">
                <li><Link href="/" className="transition-colors hover:text-[var(--lale-gold)]">Ana Sayfa</Link></li>
                <li><Link href="/hakkimizda" className="transition-colors hover:text-[var(--lale-gold)]">Hakkımızda</Link></li>
                <li><Link href="/hizmetlerimiz" className="transition-colors hover:text-[var(--lale-gold)]">Hizmetlerimiz</Link></li>
                <li><Link href="/galeri" className="transition-colors hover:text-[var(--lale-gold)]">Galeri</Link></li>
                <li><Link href="/iletisim" className="transition-colors hover:text-[var(--lale-gold)]">İletişim</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">Bakımlar</h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-[var(--dream-text)]">
                <li>Cilt Bakımı</li>
                <li>Lazer Epilasyon</li>
                <li>Kaş ve Kirpik</li>
                <li>Vücut Bakımı</li>
                <li>Bölgesel Zayıflama</li>
                <li>İpek Kirpik</li>
                <li>Protez Tırnak</li>
                <li>Leke Bakımı</li>
                <li>Masaj</li>
                <li>Kalıcı Makyaj</li>
                <li>Hydrafacial</li>
                <li>Akne Bakımı</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">İletişim</h3>
              <ul className="mt-5 space-y-4 text-sm text-[var(--dream-text)]">
                <li className="flex items-start gap-3">
                  <FiMapPin className="mt-1 h-4 w-4 text-[var(--lale-gold)]" />
                  <span>{siteConfig.address.display}</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone className="h-4 w-4 text-[var(--lale-gold)]" />
                  <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-[var(--lale-gold)]">
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FiInstagram className="h-4 w-4 text-[var(--lale-gold)]" />
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--lale-gold)]"
                  >
                    {siteConfig.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(223,167,69,0.18)] py-6">
          <div className="flex flex-col gap-3 text-center text-sm text-[var(--dream-text)] md:flex-row md:items-center md:justify-between md:text-left">
            <p>
              © 2026 <span className="font-medium text-[var(--lale-gold)]">Dream Moon Beauty</span>. Tüm hakları saklıdır.
            </p>

            <div className="flex items-center justify-center gap-5 md:justify-end">
              <a
                href="https://www.alceix.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--lale-gold)]"
              >
                Hakları Alceix tarafından saklıdır
              </a>
              <Link href="/hakkimizda" className="transition-colors hover:text-[var(--lale-gold)]">
                Gizlilik Politikası
              </Link>
              <Link href="/iletisim" className="transition-colors hover:text-[var(--lale-gold)]">
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
