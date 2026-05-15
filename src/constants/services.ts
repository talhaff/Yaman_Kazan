export interface DetailSection {
  title: string;
  image: string;
  paragraphs: string[];
}

export interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  color: string;
  detailSections?: DetailSection[];
}

export const services: Service[] = [
  {
    number: "1",
    title: "Buhar Kazanı İmalat ve Kurulumu",
    description: "AFYON Şeker Fabrikası ve RİZE Doğuş Çay (40 t/h) projelerimizde olduğu gibi yüksek kapasiteli buhar kazanlarının anahtar teslim imalat ve kurulumunu gerçekleştiriyoruz.",
    image: "/img/sahamontajkurulumu.jpeg",
    slug: "buhar-kazani-imalat-ve-kurulumu",
    color: "bg-slate-900 text-white"
  },
  {
    number: "2",
    title: "Kazan Revizyon ve Modernizasyonu",
    description: "100 t/h kapasiteli, 45 bar basınca sahip sistemlerin (örn: Afyon Şeker) kapsamlı bakım, basınç dayanım testleri ve modernizasyon çalışmalarını profesyonelce yürütüyoruz.",
    image: "/img/kurulumlar.jpeg",
    slug: "kazan-revizyon-ve-modernizasyonu",
    color: "bg-primary-950 text-white"
  },
  {
    number: "3",
    title: "Mekanik Montaj Hizmetleri",
    description: "Kazan daireleri, borulama sistemleri ve yardımcı işletme üniteleri için yüksek basınç normlarına uygun hassas mekanik montaj ve devreye alma hizmetleri.",
    image: "/img/Kaynakİşleri.jpeg",
    slug: "mekanik-montaj-hizmetleri",
    color: "bg-primary-900 text-white"
  },
  {
    number: "4",
    title: "Bakım Hizmetleri",
    description: "Endüstriyel tesislerin sürdürülebilirliği için periyodik bakım, onarım ve revizyon hizmetleri ile işletme verimliliğinizi koruyoruz.",
    image: "/img/islemler.jpeg",
    slug: "bakim-hizmetleri",
    color: "bg-primary-900 text-white",
    detailSections: [
      {
        title: "Buhar Kazanı Demontaj ve Taşıma Çalışmaları",
        image: "/img/buharkazan_01.jpeg",
        paragraphs: [
          "Tesis sahasında bulunan mevcut buhar kazanının demontaj, kaldırma ve saha içi taşıma çalışmaları tarafımızca gerçekleştirilmiştir. Çalışma kapsamında kazan bağlantıları kontrollü şekilde ayrılmış, gerekli söküm işlemleri tamamlanarak ekipman vinç yardımıyla güvenli şekilde bulunduğu alandan çıkarılmıştır.",
          "Yüksek tonajlı kaldırma operasyonları, saha şartlarına uygun kaldırma planı doğrultusunda gerçekleştirilmiş olup, kazan gövdesinin deformasyonsuz şekilde taşınması sağlanmıştır. Demontaj sürecinde mevcut çelik konstrüksiyon, platform ve bağlantı bölgelerinde gerekli söküm organizasyonları kontrollü şekilde yürütülmüştür.",
          "Çalışmalar boyunca iş güvenliği prosedürleri eksiksiz uygulanmış, saha koordinasyonu kontrollü şekilde sağlanarak operasyon planlanan süre içerisinde başarıyla tamamlanmıştır."
        ]
      },
      {
        title: "100 t/h – 45 Bar Buhar Kazanı Membran Duvar Değişim Çalışması",
        image: "/img/buharkazan_02.jpeg",
        paragraphs: [
          "45 bar işletme basıncına sahip 100 t/h kapasiteli buhar kazanında, kullanım ömrünü tamamlayan ve deformasyona uğrayan membran duvar borularının söküm ve yenileme çalışmaları gerçekleştirilmiştir.",
          "Çalışma kapsamında mevcut hasarlı membran paneller kontrollü şekilde demonte edilmiş, saha ölçülerine uygun olarak hazırlanan yeni membran boruları ve fin kaynakları montaj sahasında yerlerine uygulanmıştır. Montaj sonrası tüm kaynak imalatları prosedüre uygun şekilde tamamlanmış, gerekli kontroller yapılarak sistem işletmeye hazır hale getirilmiştir.",
          "İş süresince yüksek sıcaklık ve dar çalışma alanı şartlarına uygun emniyet tedbirleri alınmış, saha organizasyonu kontrollü şekilde yürütülmüştür. Çalışmalar planlanan süre içerisinde başarıyla tamamlanmıştır."
        ]
      }
    ]
  }
];

