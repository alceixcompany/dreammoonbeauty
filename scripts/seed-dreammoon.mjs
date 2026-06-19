import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCG-FNGilVnayKeNuozqSyf67-lJuH0EQk",
  authDomain: "dreammoonbeauty-ed436.firebaseapp.com",
  projectId: "dreammoonbeauty-ed436",
  storageBucket: "dreammoonbeauty-ed436.firebasestorage.app",
  messagingSenderId: "584656085182",
  appId: "1:584656085182:web:10f42733fd833c966bfeef",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const now = new Date().toISOString();

const img = {
  hero: "/dreammoon/hero.webp",
  about: "/dreammoon/about.webp",
  why: "/dreammoon/why-us.webp",
  advantages: "/dreammoon/advantages.webp",
  process: "/dreammoon/service-process.webp",
  lazer: "/dreammoon/lazer-epilasyon.webp",
  agda: "/dreammoon/agda.webp",
  kas: "/dreammoon/kas-tasarimi.webp",
  kirpik: "/dreammoon/kirpik-lifting.webp",
  makyaj: "/dreammoon/kalici-makyaj.webp",
  tirnak: "/dreammoon/protez-tirnak.webp",
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

const categories = [
  {
    id: "lazer-epilasyon",
    name: "Lazer Epilasyon",
    description: "Son teknoloji cihazlarla planlanan konforlu lazer epilasyon uygulamaları.",
    icon: "sparkles",
    color: "#d4af37",
    order: 1,
    isActive: true,
    createdAt: now,
  },
  {
    id: "cilt-bakimi",
    name: "Cilt Bakımı",
    description: "Cilt tipine göre analiz edilen profesyonel bakım protokolleri.",
    icon: "heart",
    color: "#8fb9aa",
    order: 2,
    isActive: true,
    createdAt: now,
  },
  {
    id: "kas-kirpik",
    name: "Kaş & Kirpik",
    description: "Kaş tasarımı, kirpik lifting ve doğal ifade uygulamaları.",
    icon: "eye",
    color: "#c79b43",
    order: 3,
    isActive: true,
    createdAt: now,
  },
  {
    id: "tirnak-makyaj",
    name: "Tırnak & Makyaj",
    description: "Protez tırnak ve kalıcı makyaj uygulamalarından seçkiler.",
    icon: "star",
    color: "#b78a9d",
    order: 4,
    isActive: true,
    createdAt: now,
  },
];

const galleryItems = [
  {
    id: "lazer-epilasyon-mecidiyekoy",
    title: "Mecidiyeköy Lazer Epilasyon",
    description: "Dream Moon Beauty'de son teknoloji cihazlarla konforlu lazer epilasyon deneyimi.",
    categoryId: "lazer-epilasyon",
    imageUrl: img.lazer,
    thumbnailUrl: img.lazer,
    tags: ["lazer epilasyon", "mecidiyeköy", "şişli"],
    isActive: true,
    isFeatured: true,
    order: 1,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "cilt-bakimi-analiz",
    title: "Kişiye Özel Cilt Bakımı",
    description: "Cilt tipine göre analiz ve ihtiyaca uygun profesyonel bakım protokolleri.",
    categoryId: "cilt-bakimi",
    imageUrl: img.about,
    thumbnailUrl: img.about,
    tags: ["cilt bakımı", "cilt analizi", "bakım"],
    isActive: true,
    isFeatured: true,
    order: 2,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "kas-tasarimi-dogal",
    title: "Doğal Kaş Tasarımı",
    description: "Yüz hattına uyumlu, doğal ve estetik kaş tasarımı uygulaması.",
    categoryId: "kas-kirpik",
    imageUrl: img.kas,
    thumbnailUrl: img.kas,
    tags: ["kaş tasarımı", "microblading", "doğal görünüm"],
    isActive: true,
    isFeatured: true,
    order: 3,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "kirpik-lifting-bakis",
    title: "Kirpik Lifting",
    description: "Doğal kirpikleri kıvıran ve bakışları belirginleştiren profesyonel uygulama.",
    categoryId: "kas-kirpik",
    imageUrl: img.kirpik,
    thumbnailUrl: img.kirpik,
    tags: ["kirpik lifting", "bakış", "kaş kirpik"],
    isActive: true,
    isFeatured: false,
    order: 4,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "kalici-makyaj-dogal",
    title: "Kalıcı Makyaj",
    description: "Kaş, dudak ve eyeliner uygulamalarıyla günlük rutini kolaylaştıran doğal dokunuşlar.",
    categoryId: "tirnak-makyaj",
    imageUrl: img.makyaj,
    thumbnailUrl: img.makyaj,
    tags: ["kalıcı makyaj", "kaş", "eyeliner"],
    isActive: true,
    isFeatured: false,
    order: 5,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "protez-tirnak-estetik",
    title: "Protez Tırnak",
    description: "Dayanıklı, estetik ve uzun ömürlü protez tırnak uygulamaları.",
    categoryId: "tirnak-makyaj",
    imageUrl: img.tirnak,
    thumbnailUrl: img.tirnak,
    tags: ["protez tırnak", "manikür", "tırnak"],
    isActive: true,
    isFeatured: false,
    order: 6,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "agda-hijyenik-uygulama",
    title: "Profesyonel Ağda Hizmetleri",
    description: "Hijyenik ve etkili ağda uygulamalarıyla hızlı bölgesel çözümler.",
    categoryId: "lazer-epilasyon",
    imageUrl: img.agda,
    thumbnailUrl: img.agda,
    tags: ["ağda", "epilasyon", "hijyen"],
    isActive: true,
    isFeatured: false,
    order: 7,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "dream-moon-salon-deneyimi",
    title: "Dream Moon Beauty Deneyimi",
    description: "Mecidiyeköy'de hijyenik, sakin ve kişiye özel güzellik merkezi deneyimi.",
    categoryId: "cilt-bakimi",
    imageUrl: img.why,
    thumbnailUrl: img.why,
    tags: ["dream moon beauty", "mecidiyeköy", "güzellik merkezi"],
    isActive: true,
    isFeatured: true,
    order: 8,
    createdAt: now,
    updatedAt: now,
  },
];

const news = [
  {
    id: "sisli-guzellik-merkezi-mecidiyekoy-dream-moon",
    title: "Şişli Güzellik Merkezi Arayanlara: Mecidiyeköy Dream Moon Beauty",
    subtitle: "Lazer epilasyon, cilt bakımı ve kişisel bakım hizmetleri için merkezi konumda profesyonel deneyim.",
    description: "Dream Moon Beauty, Mecidiyeköy'de hijyenik ortamı, uzman ekibi ve son teknoloji cihazlarıyla güzellik merkezi arayanlara kapsamlı çözümler sunar.",
    content: `
      <h2>Mecidiyeköy'de profesyonel güzellik merkezi deneyimi</h2>
      <p>Dream Moon Beauty, Şişli ve Mecidiyeköy çevresinde lazer epilasyon, cilt bakımı, ağda, kaş tasarımı, kirpik lifting, kalıcı makyaj ve protez tırnak hizmetlerini tek çatı altında sunar.</p>
      <p>Her işlem öncesinde ihtiyaç analizi yapılır. Bu yaklaşım, hem daha doğru uygulama seçimi hem de daha konforlu bir bakım deneyimi sağlar.</p>
      <h3>Neden Dream Moon Beauty?</h3>
      <ul>
        <li>Son teknoloji cihazlarla planlanan lazer epilasyon</li>
        <li>Cilt tipine göre kişiye özel bakım protokolleri</li>
        <li>Hijyenik, sakin ve ulaşımı kolay merkez</li>
        <li>Kaş, kirpik, tırnak ve kalıcı makyajda doğal sonuç odağı</li>
      </ul>
    `,
    imageUrl: img.hero,
    tags: ["şişli güzellik merkezi", "mecidiyeköy güzellik merkezi", "dream moon beauty"],
    featured: true,
    isActive: true,
    order: 1,
    category: "Güzellik Merkezi",
    author: "Dream Moon Beauty",
    slug: "sisli-guzellik-merkezi-mecidiyekoy-dream-moon",
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "lazer-epilasyon-oncesi-sonrasi-dikkat-edilecekler",
    title: "Lazer Epilasyon Öncesi ve Sonrası Nelere Dikkat Edilmeli?",
    subtitle: "Konforlu bir lazer epilasyon süreci için temel bakım önerileri.",
    description: "Lazer epilasyon sürecinde doğru hazırlık ve işlem sonrası bakım, konforu ve memnuniyeti artırır.",
    content: `
      <h2>Lazer epilasyonda doğru hazırlık neden önemlidir?</h2>
      <p>Lazer epilasyon öncesinde cilt durumunun değerlendirilmesi, uygulama bölgesine uygun seans planı yapılmasını sağlar.</p>
      <p>İşlem sonrası cildi güneşten korumak, nemlendirme önerilerine dikkat etmek ve uzman yönlendirmelerine uymak önemlidir.</p>
      <h3>Dream Moon Beauty yaklaşımı</h3>
      <p>Merkezimizde lazer epilasyon süreci kişisel ihtiyaçlara göre planlanır ve seans sonrasında bakım önerileri paylaşılır.</p>
    `,
    imageUrl: img.lazer,
    tags: ["lazer epilasyon", "epilasyon önerileri", "mecidiyeköy lazer epilasyon"],
    featured: false,
    isActive: true,
    order: 2,
    category: "Lazer Epilasyon",
    author: "Dream Moon Beauty",
    slug: "lazer-epilasyon-oncesi-sonrasi-dikkat-edilecekler",
    publishedAt: now,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: now,
  },
  {
    id: "cilt-bakimi-hangi-cilt-tipleri-icin-uygundur",
    title: "Cilt Bakımı Hangi Cilt Tipleri İçin Uygundur?",
    subtitle: "Cilt analiziyle kişiye özel bakım planı oluşturmanın avantajları.",
    description: "Cilt bakımı, doğru analiz ve ürün seçimiyle farklı cilt tiplerine uygun şekilde planlanabilir.",
    content: `
      <h2>Kişiye özel cilt bakımı</h2>
      <p>Her cildin ihtiyacı farklıdır. Yağlı, kuru, karma veya hassas ciltlerde bakım planı, cildin mevcut durumuna göre oluşturulmalıdır.</p>
      <p>Dream Moon Beauty'de bakım öncesi analiz yaklaşımıyla cildinizin ihtiyacı değerlendirilir ve işlem adımları buna göre planlanır.</p>
      <h3>Düzenli bakımın katkısı</h3>
      <p>Düzenli bakım, cildin daha canlı, dengeli ve temiz görünmesine destek olur.</p>
    `,
    imageUrl: img.about,
    tags: ["cilt bakımı", "cilt analizi", "mecidiyeköy cilt bakımı"],
    featured: false,
    isActive: true,
    order: 3,
    category: "Cilt Bakımı",
    author: "Dream Moon Beauty",
    slug: "cilt-bakimi-hangi-cilt-tipleri-icin-uygundur",
    publishedAt: now,
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: now,
  },
  {
    id: "kas-tasarimi-ve-kirpik-lifting-dogal-bakislar",
    title: "Kaş Tasarımı ve Kirpik Lifting ile Doğal Bakışlar",
    subtitle: "Yüz hattına uygun kaş ve kirpik uygulamalarıyla daha belirgin ifade.",
    description: "Kaş tasarımı ve kirpik lifting, doğal görünümü koruyarak bakışları daha belirgin hale getiren uygulamalardır.",
    content: `
      <h2>Doğal ifadeyi koruyan uygulamalar</h2>
      <p>Kaş tasarımı, yüz oranları ve doğal kaş yapısı dikkate alınarak planlanmalıdır. Kirpik lifting ise doğal kirpikleri daha kıvrık ve bakımlı gösterir.</p>
      <p>Dream Moon Beauty'de hedef, yüz ifadesini destekleyen doğal ve dengeli sonuçlar elde etmektir.</p>
    `,
    imageUrl: img.kas,
    tags: ["kaş tasarımı", "kirpik lifting", "doğal bakış"],
    featured: false,
    isActive: true,
    order: 4,
    category: "Kaş & Kirpik",
    author: "Dream Moon Beauty",
    slug: "kas-tasarimi-ve-kirpik-lifting-dogal-bakislar",
    publishedAt: now,
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    updatedAt: now,
  },
];

const serviceAreas = [
  {
    id: "mecidiyekoy-guzellik-merkezi",
    name: "Mecidiyeköy Güzellik Merkezi",
    slug: "mecidiyekoy-guzellik-merkezi",
    description: "Mecidiyeköy'de lazer epilasyon, cilt bakımı ve kişisel bakım hizmetleri.",
    content: `
      <p>Dream Moon Beauty, Mecidiyeköy'de Arzu Apartmanı, Gülbahar, Büyükdere Caddesi No:99 Kat 2 Daire 4 adresinde hizmet verir.</p>
      <p>Lazer epilasyon, cilt bakımı, ağda, kaş tasarımı, kirpik lifting, kalıcı makyaj, protez tırnak, masaj ve kuaför hizmetleri için randevu oluşturabilirsiniz.</p>
    `,
    imageUrl: img.hero,
    isActive: true,
    order: 1,
    createdAt: now,
    updatedAt: now,
    maps: [],
  },
  {
    id: "sisli-guzellik-merkezi",
    name: "Şişli Güzellik Merkezi",
    slug: "sisli-guzellik-merkezi",
    description: "Şişli çevresinde profesyonel güzellik ve bakım hizmetleri arayanlar için Dream Moon Beauty.",
    content: `
      <p>Şişli bölgesinde güzellik merkezi arayan misafirlerimiz için Dream Moon Beauty, merkezi konumu ve profesyonel hizmet anlayışıyla öne çıkar.</p>
      <p>Hijyenik ortam, uzman ekip ve kişiye özel bakım planlamasıyla güzellik yolculuğunuzu destekliyoruz.</p>
    `,
    imageUrl: img.why,
    isActive: true,
    order: 2,
    createdAt: now,
    updatedAt: now,
    maps: [],
  },
  {
    id: "osmanbey-guzellik-merkezi",
    name: "Osmanbey Güzellik Merkezi",
    slug: "osmanbey-guzellik-merkezi",
    description: "Osmanbey'e yakın konumda lazer epilasyon, cilt bakımı ve kişisel bakım çözümleri.",
    content: `
      <p>Osmanbey çevresinden Dream Moon Beauty'ye kolayca ulaşabilir, lazer epilasyon ve bakım hizmetleri için randevu oluşturabilirsiniz.</p>
      <p>Doğal sonuç, konforlu süreç ve hijyenik uygulama alanı tüm hizmetlerimizin temelidir.</p>
    `,
    imageUrl: img.about,
    isActive: true,
    order: 3,
    createdAt: now,
    updatedAt: now,
    maps: [],
  },
  {
    id: "taksim-guzellik-merkezi",
    name: "Taksim Güzellik Merkezi",
    slug: "taksim-guzellik-merkezi",
    description: "Taksim çevresinden ulaşılabilir profesyonel güzellik merkezi deneyimi.",
    content: `
      <p>Taksim ve çevresinde yaşayan misafirlerimiz, Dream Moon Beauty'nin Mecidiyeköy'deki merkezinde kapsamlı güzellik hizmetlerinden yararlanabilir.</p>
      <p>Kaş tasarımı, kirpik lifting, kalıcı makyaj ve protez tırnak gibi uygulamalarda doğal görünümü önemsiyoruz.</p>
    `,
    imageUrl: img.process,
    isActive: true,
    order: 4,
    createdAt: now,
    updatedAt: now,
    maps: [],
  },
  {
    id: "nisantasi-guzellik-merkezi",
    name: "Nişantaşı Güzellik Merkezi",
    slug: "nisantasi-guzellik-merkezi",
    description: "Nişantaşı çevresinde kişiye özel bakım ve güzellik uygulamaları.",
    content: `
      <p>Nişantaşı çevresinde güzellik ve bakım hizmetleri arayan misafirler için Dream Moon Beauty, Mecidiyeköy'deki konumuyla ulaşılabilir bir alternatiftir.</p>
      <p>Cilt bakımı ve lazer epilasyon başta olmak üzere tüm süreçlerde kişisel ihtiyaç analizi yapılır.</p>
    `,
    imageUrl: img.advantages,
    isActive: true,
    order: 5,
    createdAt: now,
    updatedAt: now,
    maps: [],
  },
  {
    id: "besiktas-guzellik-merkezi",
    name: "Beşiktaş Güzellik Merkezi",
    slug: "besiktas-guzellik-merkezi",
    description: "Beşiktaş çevresinden Dream Moon Beauty'ye kolay ulaşım ve profesyonel bakım hizmetleri.",
    content: `
      <p>Beşiktaş çevresinden güzellik merkezi arayan misafirlerimiz için Dream Moon Beauty, geniş hizmet yelpazesiyle randevu kabul eder.</p>
      <p>Amacımız her işlemde konforlu, hijyenik ve güven veren bir bakım deneyimi sunmaktır.</p>
    `,
    imageUrl: img.kirpik,
    isActive: true,
    order: 6,
    createdAt: now,
    updatedAt: now,
    maps: [],
  },
];

const contactInfo = {
  id: "dreammoon-main",
  address: "Arzu Apartmanı, Gülbahar, Büyükdere Cd. No:99 Kat 2, Daire 4, 34394 Şişli/İstanbul",
  phone: "+90 538 216 60 85",
  email: "ruyaayguzellik@gmail.com",
  workingHours: "Pazartesi - Pazar: 09:00 - 22:00",
  socialMedia: {
    instagram: "https://www.instagram.com/dreammoonbeauty",
  },
  mapCoordinates: {
    lat: 40.99229797135275,
    lng: 28.842329076039675,
  },
  updatedAt: now,
};

const sampleMessages = [
  {
    id: "ornek-randevu-lazer",
    name: "Örnek Randevu Talebi",
    email: "ornek@dreammoonbeauty.com",
    phone: "+90 538 216 60 85",
    subject: "Lazer Epilasyon - normal",
    serviceType: "lazer-epilasyon",
    urgency: "normal",
    message: "Bu örnek mesaj admin panelinin boş görünmemesi için eklenmiştir. Gerçek müşteri mesajı değildir.",
    isRead: false,
    isArchived: false,
    priority: "low",
    status: "new",
    tags: ["seed", "ornek"],
    createdAt: now,
    updatedAt: now,
  },
];

async function upsert(collectionName, id, data) {
  await setDoc(doc(db, collectionName, id), {
    ...data,
    seededAt: serverTimestamp(),
    seedSource: "dreammoon-seed",
  }, { merge: true });
  console.log(`✓ ${collectionName}/${id}`);
}

async function main() {
  console.log("Dream Moon Beauty Firestore seed başlıyor...");

  await upsert("contact_info", contactInfo.id, contactInfo);
  await upsert("call_counter", "main", { count: 0, updatedAt: now });

  for (const category of categories) {
    await upsert("gallery_categories", category.id, category);
  }

  for (const item of galleryItems) {
    await upsert("gallery_items", item.id, item);
  }

  for (const item of news) {
    await upsert("haberler", item.id, item);
  }

  for (const area of serviceAreas) {
    await upsert("hizmet_bolgeleri", area.id, area);
  }

  for (const message of sampleMessages) {
    await upsert("contact_messages", message.id, message);
  }

  console.log("Seed tamamlandı.");
}

main().catch((error) => {
  console.error("Seed başarısız:", error);
  process.exitCode = 1;
});
