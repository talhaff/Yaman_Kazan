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
    title: "Endüstriyel Buhar Kazanları",
    description: "AFYON Şeker Fabrikası ve RİZE Doğuş Çay (40 t/h) projelerimizde olduğu gibi yüksek kapasiteli buhar kazanlarının anahtar teslim imalat ve kurulumunu gerçekleştiriyoruz.",
    image: "/img/buharkazan_04.jpeg",
    slug: "buhar-kazani-imalat-ve-kurulumu",
    color: "bg-slate-900 text-white"
  },
  {
    number: "2",
    title: "Endüstriyel Tesis Taahhüt Hizmetleri",
    description: "Endüstriyel tesisler için anahtar teslim mekanik kurulumlar, yüksek basınçlı borulama sistemleri, teknolojik ekipman montajları ve kapsamlı altyapı projelerini uluslararası kalite standartlarında taahhüt ediyoruz.",
    image: "/img/kurulumlar.jpeg",
    slug: "kazan-revizyon-ve-modernizasyonu",
    color: "bg-primary-950 text-white"
  },
  {
    number: "3",
    title: "Çelik Konstrüksiyon",
    description: "Endüstriyel tesisler, depo yapıları ve ağır sanayi üniteleri için yüksek dayanımlı çelik konstrüksiyon imalat ve montaj hizmetleri sunuyoruz.",
    image: "/img/celik_01.jpeg",
    slug: "celik-konstruksiyon-imalat-ve-montaj",
    color: "bg-slate-800 text-white",
    detailSections: [
      {
        title: "Endüstriyel Çelik Yapı İmalatı",
        image: "/img/celik_02.jpeg",
        paragraphs: [
          "Fabrika binaları, hangarlar ve çok katlı endüstriyel yapılar için uluslararası standartlarda çelik konstrüksiyon imalatı gerçekleştiriyoruz. Tasarım aşamasından montaja kadar tüm süreçlerde mühendislik hassasiyetiyle çalışıyoruz.",
          "Kullandığımız yüksek kaliteli çelik malzemeler ve ileri kaynak teknolojileri sayesinde, yapılarınızın statik ömrünü maksimize ederken güvenliği en üst düzeyde tutuyoruz."
        ]
      },
      {
        title: "Saha Montaj ve Uygulama Hizmetleri",
        image: "/img/celik_03.jpeg",
        paragraphs: [
          "Uzman saha ekiplerimizle, en zorlu saha koşullarında bile hızlı ve güvenli montaj operasyonları yürütüyoruz. Vinç organizasyonu ve iş güvenliği prosedürlerimizle projelerinizi zamanında teslim ediyoruz.",
          "Mevcut tesislerinize entegre edilecek ilave çelik yapılar veya güçlendirme projeleri için de yerinde çözümler üreterek operasyonel sürekliliğinizi destekliyoruz."
        ]
      }
    ]
  },
  {
    number: "4",
    title: "Mekanik Tesisat Hizmetleri",
    description: "Kazan daireleri, borulama sistemleri ve yardımcı işletme üniteleri için yüksek basınç normlarına uygun hassas mekanik montaj ve devreye alma hizmetleri.",
    image: "/img/mekanik_04.png",
    slug: "mekanik-montaj-hizmetleri",
    color: "bg-primary-900 text-white",
    detailSections: [
      {
        title: "Endüstriyel Borulama ve Tesisat Çözümleri",
        image: "/img/mekanik_01.jpeg",
        paragraphs: [
          "Buhar, kondens, kızgın yağ ve gaz hatları için yüksek basınç standartlarında borulama hizmetleri sunuyoruz. Sertifikalı kaynakçılarımız ve uzman mühendis kadromuzla tesisat güvenliğini garanti altına alıyoruz.",
          "Projelendirmeden montaja kadar tüm süreçlerde malzeme seçimi ve uygulama kalitesini en üst düzeyde tutarak, işletmenizin enerji verimliliğini artırıyoruz."
        ]
      },
      {
        title: "Ekipman Montaj ve Devreye Alma",
        image: "/img/mekanik_02.jpeg",
        paragraphs: [
          "Eşanjörler, pompalar, vanalar ve diğer yardımcı ekipmanların hassas montajını gerçekleştiriyoruz. Sistem bütünlüğünü koruyarak, devreye alma öncesi gerekli testleri titizlikle tamamlıyoruz.",
          "Mekanik tesisatın her noktasında sızdırmazlık ve performans testlerini uygulayarak, tesisin sorunsuz çalışmasını sağlıyoruz."
        ]
      }
    ]
  },
  {
    number: "5",
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
