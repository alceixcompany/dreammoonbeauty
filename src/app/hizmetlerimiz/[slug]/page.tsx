import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import JsonLd from '@/components/JsonLd';
import { absoluteUrl, breadcrumbJsonLd, createSeoMetadata, siteConfig } from '@/lib/seo';

// Services data - JSON'dan gelecek
const servicesData = {
  'cilt-bakimi': {
    id: 'cilt-bakimi',
    title: 'Cilt Bakımı',
    icon: '✨',
    description: 'Cildinizin ihtiyacına uygun arındırma, nemlendirme ve canlandırma uygulamaları.',
    heroImage: '/dreammoon/why-us.webp',
    features: [
      'Kişisel cilt analizi',
      'Derin temizlik uygulaması',
      'Nem ve denge desteği',
      'Aydınlık görünüm hedefi',
      'Hassas ciltlere özel plan',
      'Bakım sonrası öneriler'
    ],
    detailedInfo: {
      overview: 'Cilt bakımı hizmetimiz, cildinizin mevcut durumunu analiz ederek ihtiyacınıza uygun profesyonel bir rutin oluşturmak için tasarlanmıştır.',
      whyChoose: [
        'Kişiye özel bakım planı',
        'Nazik ama etkili uygulama adımları',
        'Hijyen ve konfor odaklı süreç',
        'Bakım sonrası yönlendirme',
        'Doğal ışıltıyı destekleyen sonuç'
      ],
      process: [
        { step: 1, title: 'Cilt Analizi', description: 'Cildinizin ihtiyacını birlikte belirliyoruz' },
        { step: 2, title: 'Bakım Planı', description: 'Size uygun uygulama adımlarını planlıyoruz' },
        { step: 3, title: 'Profesyonel Uygulama', description: 'Konforlu ve özenli bir seans gerçekleştiriyoruz' },
        { step: 4, title: 'Takip Önerileri', description: 'Seans sonrasında ev bakımı için yönlendirme sunuyoruz' }
      ]
    },
    gallery: [
      '/dreammoon/why-us.webp',
      '/dreammoon/about.webp',
      '/dreammoon/logo-white.png'
    ]
  },
  'lazer-epilasyon': {
    id: 'lazer-epilasyon',
    title: 'Lazer Epilasyon',
    icon: '🌿',
    description: 'Modern cihazlarla planlanan, konforlu ve düzenli takipli lazer epilasyon seansları.',
    heroImage: '/dreammoon/why-us.webp',
    features: [
      'Bölgesel uygulama seçenekleri',
      'Kişiye uygun seans planlaması',
      'Konfor odaklı uygulama',
      'Düzenli takip süreci',
      'Cilt tipi değerlendirmesi',
      'Seans sonrası bilgilendirme'
    ],
    detailedInfo: {
      overview: 'Lazer epilasyon hizmetimiz, cilt yapınızı ve beklentilerinizi dikkate alarak düzenli ve kontrollü bir süreç sunar.',
      whyChoose: [
        'Modern cihaz desteği',
        'Kişisel seans takvimi',
        'Konforlu uygulama akışı',
        'Süreç boyunca bilgilendirme',
        'Düzenli takip ve geri bildirim'
      ],
      process: [
        { step: 1, title: 'Ön Görüşme', description: 'Cilt yapısı ve beklentiler değerlendirilir' },
        { step: 2, title: 'Seans Planlama', description: 'Bölgeye uygun uygulama takvimi oluşturulur' },
        { step: 3, title: 'Uygulama', description: 'Kontrollü ve konforlu bir seans gerçekleştirilir' },
        { step: 4, title: 'Takip', description: 'Bir sonraki seans ve bakım önerileri paylaşılır' }
      ]
    },
    gallery: [
      '/dreammoon/why-us.webp',
      '/dreammoon/about.webp',
      '/dreammoon/logo-white.png'
    ]
  },
  'kas-ve-kirpik': {
    id: 'kas-ve-kirpik',
    title: 'Kaş ve Kirpik',
    icon: '👁️',
    description: 'Yüzünüze uyumlu, doğal ama belirgin sonuç veren kaş ve kirpik uygulamaları.',
    heroImage: '/dreammoon/why-us.webp',
    features: [
      'Kaş tasarımı',
      'Kaş şekillendirme',
      'Kirpik bakımı',
      'Doğal ifade desteği',
      'Yüz hatlarına uygun planlama',
      'Bakım sonrası öneriler'
    ],
    detailedInfo: {
      overview: 'Kaş ve kirpik uygulamalarımız, yüz ifadenizi destekleyen zarif detayları öne çıkarmak için planlanır.',
      whyChoose: [
        'Doğal görünüm odağı',
        'Yüz proporsiyonuna uygun tasarım',
        'Titiz ve kontrollü uygulama',
        'Nazik ürün seçimi',
        'Misafir beklentisine göre şekillenen sonuç'
      ],
      process: [
        { step: 1, title: 'Yüz Analizi', description: 'Kaş ve kirpik yapısı detaylı incelenir' },
        { step: 2, title: 'Tasarım Kararı', description: 'Size en uygun görünüm birlikte belirlenir' },
        { step: 3, title: 'Uygulama', description: 'Planlanan işlem profesyonelce uygulanır' },
        { step: 4, title: 'Son Dokunuş', description: 'Bakım sonrası korunma önerileri paylaşılır' }
      ]
    },
    gallery: [
      '/dreammoon/why-us.webp',
      '/dreammoon/about.webp',
      '/dreammoon/logo-white.png'
    ]
  },
  'vucut-bakimi': {
    id: 'vucut-bakimi',
    title: 'Vücut Bakımı',
    icon: '💆',
    description: 'Rahatlama ve yenilenme hissi veren profesyonel vücut bakımı seansları.',
    heroImage: '/dreammoon/why-us.webp',
    features: [
      'Rahatlatıcı bakım ritüeli',
      'Kişisel ihtiyaca uygun uygulama',
      'Toparlanma hissi',
      'Bütünsel yaklaşım',
      'Konforlu seans planı',
      'Düzenli bakım önerileri'
    ],
    detailedInfo: {
      overview: 'Vücut bakımı hizmetimiz, günlük temponun etkilerini azaltmak ve kendinizi daha iyi hissetmenizi desteklemek için planlanır.',
      whyChoose: [
        'Sakin ve özenli merkez deneyimi',
        'İhtiyaca göre şekillenen uygulamalar',
        'Rahatlatan atmosfer',
        'Düzenli bakım süreci planlaması',
        'Misafir memnuniyeti odaklı yaklaşım'
      ],
      process: [
        { step: 1, title: 'İhtiyaç Belirleme', description: 'Beklenti ve odak alanları görüşülür' },
        { step: 2, title: 'Seans Kurgusu', description: 'Uygulama içeriği size göre belirlenir' },
        { step: 3, title: 'Bakım Uygulaması', description: 'Konforlu bir seans gerçekleştirilir' },
        { step: 4, title: 'Devam Planı', description: 'Gerekirse sonraki seans için yönlendirme yapılır' }
      ]
    },
    gallery: [
      '/dreammoon/why-us.webp',
      '/dreammoon/about.webp',
      '/dreammoon/logo-white.png'
    ]
  },
  'bolgesel-zayiflama': {
    id: 'bolgesel-zayiflama',
    title: 'Bölgesel Zayıflama',
    icon: '✨',
    description: 'Bölgesel incelme hedefinize uygun planlanan profesyonel seanslar.',
    heroImage: '/dreammoon/why-us.webp',
    features: [
      'Bölgesel değerlendirme',
      'Kişisel seans planlaması',
      'Sıkılaşma desteği',
      'Düzenli takip süreci',
      'Konforlu uygulama akışı',
      'Süreç önerileri'
    ],
    detailedInfo: {
      overview: 'Bölgesel zayıflama hizmetimiz, ihtiyaç duyulan alanlara odaklanan ve kişisel hedefinize göre şekillenen bir bakım planı sunar.',
      whyChoose: [
        'Kişisel hedef odaklı yaklaşım',
        'Planlı ve düzenli seans akışı',
        'Konforlu merkez deneyimi',
        'Takip ve yönlendirme desteği',
        'Daha dengeli görünüm hedefi'
      ],
      process: [
        { step: 1, title: 'Ön Değerlendirme', description: 'Beklentiniz ve odak bölgeler birlikte belirlenir' },
        { step: 2, title: 'Seans Planı', description: 'Kişiye uygun bakım akışı oluşturulur' },
        { step: 3, title: 'Uygulama', description: 'Planlanan işlem konforlu şekilde uygulanır' },
        { step: 4, title: 'Takip', description: 'Devam süreci için öneriler paylaşılır' }
      ]
    },
    gallery: [
      '/dreammoon/why-us.webp',
      '/dreammoon/about.webp',
      '/dreammoon/logo-white.png'
    ]
  },
  'ipek-kirpik': {
    id: 'ipek-kirpik',
    title: 'İpek Kirpik',
    icon: '👁️',
    description: 'Bakışları belirginleştiren, zarif ve doğal görünümlü ipek kirpik uygulamaları.',
    heroImage: '/dreammoon/why-us.webp',
    features: [
      'Göz yapısına uygun planlama',
      'Doğal görünüm odağı',
      'Uzunluk ve yoğunluk seçimi',
      'Nazik uygulama süreci',
      'Bakım önerileri',
      'Zarif bitiş'
    ],
    detailedInfo: {
      overview: 'İpek kirpik uygulamamız, bakışları güçlendirirken yüz ifadesine uyumlu ve bakımlı bir görünüm oluşturmayı hedefler.',
      whyChoose: [
        'Yüzünüze uygun tasarım',
        'Doğal etkiyi koruyan yaklaşım',
        'Özenli uygulama adımları',
        'Konforlu işlem süreci',
        'Kalıcı bakımlı görünüm'
      ],
      process: [
        { step: 1, title: 'Göz Analizi', description: 'Göz formu ve beklenti değerlendirilir' },
        { step: 2, title: 'Tasarım Seçimi', description: 'Uygun yoğunluk ve uzunluk belirlenir' },
        { step: 3, title: 'Uygulama', description: 'İşlem dikkatli ve kontrollü şekilde yapılır' },
        { step: 4, title: 'Koruma Önerileri', description: 'Kullanım ve bakım bilgileri paylaşılır' }
      ]
    },
    gallery: [
      '/dreammoon/why-us.webp',
      '/dreammoon/about.webp',
      '/dreammoon/logo-white.png'
    ]
  },
  'protez-tirnak': {
    id: 'protez-tirnak',
    title: 'Protez Tırnak',
    icon: '💅',
    description: 'Şık, düzenli ve estetik bir görünüm sunan protez tırnak uygulamaları.',
    heroImage: '/dreammoon/why-us.webp',
    features: [
      'El yapısına uygun form',
      'Uzunluk ve şekil seçimi',
      'Bakımlı görünüm',
      'Özenli uygulama',
      'Kişisel stil desteği',
      'Koruma önerileri'
    ],
    detailedInfo: {
      overview: 'Protez tırnak hizmetimiz, el yapınıza ve stilinize uygun estetik bir görünüm elde etmek için kişisel seçimlerle planlanır.',
      whyChoose: [
        'Kişiye özel şekillendirme',
        'Zarif ve düzenli sonuç',
        'Titiz uygulama süreci',
        'Bakımlı görünüm desteği',
        'Stilinize uyumlu seçenekler'
      ],
      process: [
        { step: 1, title: 'Karar Aşaması', description: 'Form, uzunluk ve beklenti netleştirilir' },
        { step: 2, title: 'Hazırlık', description: 'Tırnak yapısı uygulamaya uygun hale getirilir' },
        { step: 3, title: 'Uygulama', description: 'Protez tırnak işlemi özenle gerçekleştirilir' },
        { step: 4, title: 'Son Kontrol', description: 'Bakım ve kullanım önerileri paylaşılır' }
      ]
    },
    gallery: [
      '/dreammoon/why-us.webp',
      '/dreammoon/about.webp',
      '/dreammoon/logo-white.png'
    ]
  },
  'leke-bakimi': {
    id: 'leke-bakimi',
    title: 'Leke Bakımı',
    icon: '🌿',
    description: 'Cilt tonunu dengelemeye destek olan profesyonel leke bakım uygulamaları.',
    heroImage: '/dreammoon/why-us.webp',
    features: [
      'Cilt tonu analizi',
      'Leke görünümüne uygun bakım',
      'Dengeleyici uygulamalar',
      'Nazik yaklaşım',
      'Kişisel bakım planı',
      'Takip önerileri'
    ],
    detailedInfo: {
      overview: 'Leke bakımı hizmetimiz, cildinizin durumunu analiz ederek ton eşitsizliklerine yönelik dengeli bir bakım süreci sunar.',
      whyChoose: [
        'Cilde uygun uygulama seçimi',
        'Nazik ve kontrollü süreç',
        'Düzenli bakım planlaması',
        'Kişisel yönlendirme desteği',
        'Daha aydınlık görünüm hedefi'
      ],
      process: [
        { step: 1, title: 'Cilt İncelemesi', description: 'Leke görünümü ve cilt yapısı değerlendirilir' },
        { step: 2, title: 'Planlama', description: 'Uygun bakım adımları belirlenir' },
        { step: 3, title: 'Bakım Uygulaması', description: 'Seans profesyonel şekilde uygulanır' },
        { step: 4, title: 'Devam Önerileri', description: 'Ev bakımı ve takip önerileri paylaşılır' }
      ]
    },
    gallery: [
      '/dreammoon/why-us.webp',
      '/dreammoon/about.webp',
      '/dreammoon/logo-white.png'
    ]
  },
  'masaj': {
    id: 'masaj',
    title: 'Masaj',
    icon: '💆',
    description: 'Bedensel rahatlama ve zihinsel yenilenme hissi sunan profesyonel masaj seansları.',
    heroImage: '/dreammoon/why-us.webp',
    features: [
      'Rahatlatıcı seans akışı',
      'Kas gevşetici etki',
      'Sakin atmosfer',
      'Kişisel ihtiyaç odağı',
      'Yenilenme hissi',
      'Düzenli seans önerileri'
    ],
    detailedInfo: {
      overview: 'Masaj hizmetimiz, yoğun günlük temponun etkilerini azaltmak ve bedeninizi rahatlatmak için kişiye özel planlanır.',
      whyChoose: [
        'Sakin ve huzurlu merkez deneyimi',
        'İhtiyaca göre uyarlanan seans',
        'Rahatlatıcı uygulama akışı',
        'Konfor odaklı yaklaşım',
        'Bedensel yenilenme hissi'
      ],
      process: [
        { step: 1, title: 'İhtiyaç Analizi', description: 'Odak alanlar ve beklentiler konuşulur' },
        { step: 2, title: 'Seans Planı', description: 'Uygun masaj akışı belirlenir' },
        { step: 3, title: 'Masaj Uygulaması', description: 'Konforlu bir seans gerçekleştirilir' },
        { step: 4, title: 'Sonrası Öneriler', description: 'Rahatlamayı destekleyen yönlendirmeler paylaşılır' }
      ]
    },
    gallery: [
      '/dreammoon/why-us.webp',
      '/dreammoon/about.webp',
      '/dreammoon/logo-white.png'
    ]
  },
  'kalici-makyaj': {
    id: 'kalici-makyaj',
    title: 'Kalıcı Makyaj',
    icon: '✨',
    description: 'Yüz hatlarını doğal biçimde belirginleştiren kalıcı makyaj uygulamaları.',
    heroImage: '/dreammoon/why-us.webp',
    features: [
      'Kişisel tasarım planı',
      'Doğal görünüm odağı',
      'Yüz hatlarına uyum',
      'Özenli uygulama',
      'Uzun süreli konfor',
      'Bakım sonrası öneriler'
    ],
    detailedInfo: {
      overview: 'Kalıcı makyaj hizmetimiz, günlük rutini kolaylaştıran ama doğallığı koruyan estetik bir görünüm hedefiyle planlanır.',
      whyChoose: [
        'Yüz yapısına uygun tasarım',
        'Doğal sonuç odağı',
        'Titiz ve kontrollü işlem süreci',
        'Uzun vadeli kullanım konforu',
        'Kişisel beklentiye göre şekillenen görünüm'
      ],
      process: [
        { step: 1, title: 'Ön Görüşme', description: 'İstenen görünüm ve yüz hatları değerlendirilir' },
        { step: 2, title: 'Tasarım', description: 'Uygun şekil ve yoğunluk belirlenir' },
        { step: 3, title: 'Uygulama', description: 'İşlem profesyonel biçimde uygulanır' },
        { step: 4, title: 'Bakım Süreci', description: 'İyileşme ve koruma önerileri paylaşılır' }
      ]
    },
    gallery: [
      '/dreammoon/why-us.webp',
      '/dreammoon/about.webp',
      '/dreammoon/logo-white.png'
    ]
  },
  'hydrafacial': {
    id: 'hydrafacial',
    title: 'Hydrafacial',
    icon: '💧',
    description: 'Arındırma, nemlendirme ve canlandırmayı bir araya getiren hydrafacial bakımı.',
    heroImage: '/dreammoon/why-us.webp',
    features: [
      'Derin temizlik desteği',
      'Yoğun nem bakımı',
      'Canlı görünüm etkisi',
      'Nazik uygulama süreci',
      'Kişisel cilt yaklaşımı',
      'Seans sonrası öneriler'
    ],
    detailedInfo: {
      overview: 'Hydrafacial hizmetimiz, cildi yormadan arındıran ve yoğun nem desteğiyle daha taze bir görünüm sunan bir bakım deneyimidir.',
      whyChoose: [
        'Arındırma ve nemi bir arada sunar',
        'Cildi yormayan yaklaşım',
        'Anında taze görünüm hissi',
        'Kişisel bakım planlaması',
        'Konforlu seans akışı'
      ],
      process: [
        { step: 1, title: 'Cilt Analizi', description: 'Cildin ihtiyaçları değerlendirilir' },
        { step: 2, title: 'Hazırlık', description: 'Bakım akışı cilde uygun şekilde planlanır' },
        { step: 3, title: 'Hydrafacial Uygulaması', description: 'Arındırma ve nemlendirme adımları uygulanır' },
        { step: 4, title: 'Koruma Önerileri', description: 'Cilt görünümünü destekleyen öneriler paylaşılır' }
      ]
    },
    gallery: [
      '/dreammoon/why-us.webp',
      '/dreammoon/about.webp',
      '/dreammoon/logo-white.png'
    ]
  },
  'akne-bakimi': {
    id: 'akne-bakimi',
    title: 'Akne Bakımı',
    icon: '🌿',
    description: 'Akneye eğilimli ciltler için dengeleyici ve arındırıcı profesyonel bakım uygulamaları.',
    heroImage: '/dreammoon/why-us.webp',
    features: [
      'Akneye uygun cilt analizi',
      'Arındırıcı bakım adımları',
      'Sebum dengeleme desteği',
      'Nazik uygulama yaklaşımı',
      'Hassas cilt odağı',
      'Takip önerileri'
    ],
    detailedInfo: {
      overview: 'Akne bakımı hizmetimiz, cildi dengelemeye yardımcı olan ve daha sakin bir görünüm hedefleyen profesyonel uygulamalar içerir.',
      whyChoose: [
        'Akneye eğilimli ciltlere uygun yaklaşım',
        'Nazik ve kontrollü bakım süreci',
        'Düzenli bakım planlaması',
        'Cilt bariyerini gözeten uygulamalar',
        'Kişisel yönlendirme desteği'
      ],
      process: [
        { step: 1, title: 'Cilt Değerlendirmesi', description: 'Akne durumu ve cilt yapısı incelenir' },
        { step: 2, title: 'Bakım Planı', description: 'Uygun arındırma ve dengeleme akışı belirlenir' },
        { step: 3, title: 'Profesyonel Uygulama', description: 'Bakım adımları kontrollü şekilde uygulanır' },
        { step: 4, title: 'Devam Süreci', description: 'Cilt bakım rutini için öneriler sunulur' }
      ]
    },
    gallery: [
      '/dreammoon/why-us.webp',
      '/dreammoon/about.webp',
      '/dreammoon/logo-white.png'
    ]
  }
};

const dreamMoonServicesData = {
  'agda-uygulamalari': {
    id: 'agda-uygulamalari',
    title: 'Profesyonel Ağda Hizmetleri',
    icon: '🌿',
    description: 'Hijyenik ve etkili ağda uygulamalarıyla istenmeyen tüylerden hızlıca kurtulun.',
    heroImage: '/dreammoon/agda.webp',
    features: ['Hijyenik uygulama', 'Bölgesel ağda çözümleri', 'Hızlı işlem', 'Konforlu ortam'],
    detailedInfo: {
      overview: 'Dream Moon Beauty ağda hizmetleri, hijyenik ortamda hızlı ve etkili sonuç hedefiyle uygulanır.',
      whyChoose: ['Hijyenik uygulama alanı', 'Bölgesel çözümler', 'Deneyimli ekip', 'Konforlu süreç'],
      process: [
        { step: 1, title: 'Ön Görüşme', description: 'Uygulama bölgesi ve beklentiniz netleştirilir' },
        { step: 2, title: 'Hazırlık', description: 'Cilt uygulamaya uygun şekilde hazırlanır' },
        { step: 3, title: 'Uygulama', description: 'Ağda işlemi özenle tamamlanır' },
        { step: 4, title: 'Bakım Önerileri', description: 'İşlem sonrası dikkat edilmesi gerekenler paylaşılır' }
      ]
    },
    gallery: ['/dreammoon/agda.webp']
  },
  'kas-tasarimi': {
    id: 'kas-tasarimi',
    title: 'Kaş Tasarımı',
    icon: '✨',
    description: 'Yüz hatlarınıza uygun, estetik ve doğal kaş tasarımı.',
    heroImage: '/dreammoon/kas-tasarimi.webp',
    features: ['Yüz hattı analizi', 'Doğal görünüm', 'Kişisel tasarım', 'Estetik şekillendirme'],
    detailedInfo: {
      overview: 'Kaş tasarımı hizmetimiz, yüz hatlarınıza uygun doğal ve dengeli bir ifade oluşturmak için planlanır.',
      whyChoose: ['Yüzünüze özel tasarım', 'Doğal sonuç odağı', 'Titiz uygulama', 'Profesyonel yönlendirme'],
      process: [
        { step: 1, title: 'Analiz', description: 'Yüz hattı ve kaş yapısı değerlendirilir' },
        { step: 2, title: 'Tasarım', description: 'Size uygun kaş formu belirlenir' },
        { step: 3, title: 'Uygulama', description: 'Şekillendirme özenle yapılır' },
        { step: 4, title: 'Son Kontrol', description: 'Görünüm birlikte değerlendirilir' }
      ]
    },
    gallery: ['/dreammoon/kas-tasarimi.webp']
  },
  'kirpik-lifting': {
    id: 'kirpik-lifting',
    title: 'Kirpik Lifting',
    icon: '✨',
    description: 'Doğal kirpiklerinizi kıvıran ve belirginleştiren lifting uygulaması.',
    heroImage: '/dreammoon/kirpik-lifting.webp',
    features: ['Doğal kirpik etkisi', 'Kıvrık görünüm', 'Bakımlı bitiş', 'Rimelsiz etki'],
    detailedInfo: {
      overview: 'Kirpik lifting, doğal kirpiklerinizi daha kıvrık ve belirgin göstermek için uygulanan profesyonel bir bakım hizmetidir.',
      whyChoose: ['Doğal görünüm', 'Konforlu uygulama', 'Etkileyici bakışlar', 'Bakımlı sonuç'],
      process: [
        { step: 1, title: 'Değerlendirme', description: 'Kirpik yapınız incelenir' },
        { step: 2, title: 'Hazırlık', description: 'Uygulama alanı hazırlanır' },
        { step: 3, title: 'Lifting', description: 'Kirpikler profesyonelce şekillendirilir' },
        { step: 4, title: 'Bakım', description: 'Kalıcılığı destekleyen öneriler paylaşılır' }
      ]
    },
    gallery: ['/dreammoon/kirpik-lifting.webp']
  },
  'kuafor-hizmetleri': {
    id: 'kuafor-hizmetleri',
    title: 'Kuaför Hizmetleri',
    icon: '💇',
    description: 'Saç kesimi, fön, maşa, boyama, röfle, saç bakım kürleri, topuz ve örgü hizmetleri.',
    heroImage: '/dreammoon/why-us.webp',
    features: ['Saç kesimi', 'Fön ve maşa', 'Boyama ve röfle', 'Saç bakım kürleri'],
    detailedInfo: {
      overview: 'Dream Moon Beauty kuaför hizmetleri, saçınızın ihtiyacına ve stilinize uygun profesyonel çözümler sunar.',
      whyChoose: ['Kişisel stil yaklaşımı', 'Bakım odaklı işlem', 'Profesyonel ekip', 'Şık sonuç'],
      process: [
        { step: 1, title: 'Danışmanlık', description: 'İstek ve saç yapısı değerlendirilir' },
        { step: 2, title: 'Planlama', description: 'Uygun işlem seçilir' },
        { step: 3, title: 'Uygulama', description: 'İşlem profesyonelce uygulanır' },
        { step: 4, title: 'Son Şekil', description: 'Final görünüm tamamlanır' }
      ]
    },
    gallery: ['/dreammoon/why-us.webp']
  },
  'manikur-pedikur': {
    id: 'manikur-pedikur',
    title: 'Islak Manikür & Pedikür',
    icon: '💅',
    description: 'El ve ayak bakımında hijyenik, özenli ve estetik uygulamalar.',
    heroImage: '/dreammoon/protez-tirnak.webp',
    features: ['Hijyenik bakım', 'El ve ayak bakımı', 'Özenli uygulama', 'Estetik görünüm'],
    detailedInfo: {
      overview: 'Islak manikür ve pedikür hizmetlerimiz, bakımlı ve temiz bir görünüm için özenle uygulanır.',
      whyChoose: ['Hijyenik süreç', 'Özenli uygulama', 'Bakımlı görünüm', 'Konforlu deneyim'],
      process: [
        { step: 1, title: 'Hazırlık', description: 'El ve ayak bakımı için hazırlık yapılır' },
        { step: 2, title: 'Bakım', description: 'Manikür veya pedikür uygulanır' },
        { step: 3, title: 'Şekillendirme', description: 'Tırnak formu düzenlenir' },
        { step: 4, title: 'Bitiş', description: 'Bakım önerileri paylaşılır' }
      ]
    },
    gallery: ['/dreammoon/protez-tirnak.webp']
  }
};

const allServicesData = {
  ...servicesData,
  ...dreamMoonServicesData,
  'lazer-epilasyon': {
    ...servicesData['lazer-epilasyon'],
    description: 'Son teknoloji cihazlarla acısız, etkili ve kalıcı lazer epilasyon uygulamaları.',
    heroImage: '/dreammoon/lazer-epilasyon.webp',
  },
  'cilt-bakimi': {
    ...servicesData['cilt-bakimi'],
    heroImage: '/dreammoon/about.webp',
  },
  'kalici-makyaj': {
    ...servicesData['kalici-makyaj'],
    heroImage: '/dreammoon/kalici-makyaj.webp',
  },
  'protez-tirnak': {
    ...servicesData['protez-tirnak'],
    heroImage: '/dreammoon/protez-tirnak.webp',
  },
  'masaj': {
    ...servicesData['masaj'],
    title: 'Masaj Uygulamaları',
    description: 'Selülit masajı, bölgesel incelme masajı, G5 masajı ve pasif jimnastik uygulamaları.',
    heroImage: '/dreammoon/advantages.webp',
  },
};

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = allServicesData[slug as keyof typeof allServicesData];

  if (!service) {
    return createSeoMetadata({
      title: 'Hizmet Bulunamadı',
      description: 'Aradığınız Dream Moon Beauty hizmeti bulunamadı.',
      path: `/hizmetlerimiz/${slug}`,
    });
  }

  return createSeoMetadata({
    title: `${service.title} Şişli`,
    description: `${service.title} için Dream Moon Beauty'da kişiye özel, hijyenik ve profesyonel bakım deneyimi. ${service.description}`,
    path: `/hizmetlerimiz/${slug}`,
    image: service.heroImage,
    keywords: [
      `${service.title.toLowerCase()} bahcelievler`,
      `${service.title.toLowerCase()} istanbul`,
      `${service.title.toLowerCase()} sirinevler`,
    ],
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = allServicesData[slug as keyof typeof allServicesData];

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl(`/hizmetlerimiz/${slug}#service`),
    name: service.title,
    description: service.description,
    url: absoluteUrl(`/hizmetlerimiz/${slug}`),
    image: absoluteUrl(service.heroImage),
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
    areaServed: ['Şişli', 'Mecidiyeköy', 'İstanbul'],
    serviceType: service.title,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} kapsamı`,
      itemListElement: service.features.map((feature) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
      })),
    },
  };

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hizmetlerimiz', path: '/hizmetlerimiz' },
    { name: service.title, path: `/hizmetlerimiz/${slug}` },
  ]);

  return (
    <div className="page-flow min-h-screen bg-[var(--lale-emerald-deep)]">
      <JsonLd data={[serviceJsonLd, breadcrumb]} />
      <PageHero
        eyebrow="Özel Bakım"
        title={<>{service.title}</>}
        description={service.description}
        image={service.heroImage}
        imageAlt={service.title}
        align="center"
        heightClassName="min-h-[420px] py-24 sm:min-h-[500px] sm:py-28"
      />

      <section className="lale-dark-section py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--dream-dark)] mb-6">
                Hizmet Detayları
              </h2>
              <p className="text-lg text-[var(--dream-text)] mb-8 leading-relaxed">
                {service.detailedInfo.overview}
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[var(--dream-dark)] mb-4">
                  Neden Bizi Tercih Etmelisiniz?
                </h3>
                <ul className="space-y-3">
                  {service.detailedInfo.whyChoose.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[rgba(212,175,55,0.12)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[var(--lale-gold)]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-[var(--dream-text)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[var(--dream-dark)]">
                Hizmet Kapsamımız
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="bg-white/80 p-4 rounded-lg border border-[rgba(212,175,55,0.18)] shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[var(--lale-gold)] rounded-lg flex items-center justify-center">
                        <span className="text-[var(--lale-emerald-deep)] text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-[var(--dream-text)] font-semibold text-sm">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

 
    </div>
  );
}

// Generate static params for all services
export function generateStaticParams() {
  return Object.keys(allServicesData).map((slug) => ({
    slug: slug,
  }));
}
