export interface DetailSection {
  title: string;
  titleEn?: string;
  image: string;
  paragraphs: string[];
  paragraphsEn?: string[];
}

export interface Service {
  number: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  image: string;
  slug: string;
  color: string;
  detailSections?: DetailSection[];
}

export const services: Service[] = [
  {
    number: "1",
    title: "Endüstriyel Buhar Kazanları",
    titleEn: "Industrial Steam Boilers",
    description: "Endüstriyel tesislerin ihtiyaç duyduğu yüksek kapasiteli buhar kazanlarının anahtar teslim imalatı, mekanik kurulumu, devreye alınması ve yardımcı ekipman entegrasyonu hizmetlerini sunuyoruz.",
    descriptionEn: "We provide turnkey manufacturing, mechanical installation, commissioning and auxiliary equipment integration services for high-capacity steam boilers required by industrial facilities.",
    image: "/img/buharkazan_06.jpeg",
    slug: "buhar-kazani-imalat-ve-kurulumu",
    color: "bg-slate-900 text-white"
  },
  {
    number: "2",
    title: "Endüstriyel Tesis Taahhüt Hizmetleri",
    titleEn: "Industrial Facility Contracting Services",
    description: "Endüstriyel tesisler için anahtar teslim mekanik taahhüt, yüksek basınçlı borulama, proses hatları ve ekipman montaj hizmetleri sunuyoruz. Projelendirmeden montaja, revizyondan devreye almaya kadar tüm süreçleri mühendislik ve saha tecrübemizle güvenilir şekilde yönetiyoruz.",
    descriptionEn: "We provide turnkey mechanical contracting, high-pressure piping, process lines, and equipment installation services for industrial facilities. From project planning to assembly, revision to commissioning, we manage all processes reliably with our engineering and field experience.",
    image: "/img/kurulumlar.jpeg",
    slug: "kazan-revizyon-ve-modernizasyonu",
    color: "bg-primary-950 text-white",
    detailSections: [
      {
        title: "Endüstriyel Kazan ve Mekanik Tesisat Kurulumu",
        titleEn: "Industrial Boiler and Mechanical Installation",
        image: "/img/islemler.jpeg",
        paragraphs: [
          "Endüstriyel tesislerin kalbi olan yüksek kapasiteli buhar ve kızgın su kazanlarının, yardımcı ünitelerin ve mekanik ekipmanların montaj süreçlerini yüksek mühendislik standartlarında yürütüyoruz.",
          "Uluslararası normlara uygun olarak tasarlanan borulama hatları, vana grupları ve kontrol üniteleri, uzman kadromuz tarafından sahada güvenli ve hassas bir şekilde konumlandırılarak devreye almaya hazır hale getirilmektedir."
        ],
        paragraphsEn: [
          "We carry out the assembly processes of high-capacity steam and superheated water boilers, auxiliary units and mechanical equipment, which are the heart of industrial facilities, at high engineering standards.",
          "Piping lines, valve groups and control units designed in accordance with international norms are positioned safely and precisely in the field by our expert staff and made ready for commissioning."
        ]
      },
      {
        title: "Yüksek Basınçlı Tesisat ve Endüstriyel Borulama Taahhütleri",
        titleEn: "High Pressure Installation and Industrial Piping Contracting",
        image: "/img/islemler2.jpeg",
        paragraphs: [
          "Sanayi tesislerinin operasyonel verimliliği için kritik öneme sahip olan yüksek basınçlı buhar hatları, gaz ve sıvı akışkan tesisatlarının taahhüt ve kurulum süreçlerini üstleniyoruz.",
          "Sertifikalı kaynak tekniklerimiz, tahribatsız test (NDT) uygulamalarımız ve sızdırmazlık testlerimiz ile hatların uzun ömürlü, yüksek güvenlikli ve minimum kayıplı çalışmasını garanti altına alıyoruz."
        ],
        paragraphsEn: [
          "We undertake the contracting and installation processes of high-pressure steam lines, gas and liquid fluid installations, which are of critical importance for the operational efficiency of industrial facilities.",
          "With our certified welding techniques, non-destructive testing (NDT) applications and leak tests, we guarantee that the lines operate with a long life, high security and minimum loss."
        ]
      },
      {
        title: "Steam Drum Montaj ve Bağlantı Çalışmaları",
        titleEn: "Steam Drum Assembly and Connection Works",
        image: "/img/taahhuthizmet.jpeg",
        paragraphs: [
          "Akışkan yataklı buhar kazanı sistemine ait Steam Drum ünitesinin montaj ve bağlantı çalışmaları; yüksek mühendislik standartları ve kontrollü saha uygulamalarıyla uzman ekiplerimiz tarafından gerçekleştirilmektedir."
        ],
        paragraphsEn: [
          "The assembly and connection works of the Steam Drum unit belonging to the fluidized bed steam boiler system are carried out by our expert teams with high engineering standards and controlled field applications."
        ]
      }
    ]
  },
  {
    number: "3",
    title: "Çelik Konstrüksiyon",
    titleEn: "Steel Construction",
    description: "Endüstriyel tesisler, depo yapıları ve ağır sanayi üniteleri için yüksek dayanımlı çelik konstrüksiyon imalat ve montaj hizmetleri sunuyoruz.",
    descriptionEn: "We provide high-strength steel construction manufacturing and assembly services for industrial facilities, warehouse structures, and heavy industry units.",
    image: "/img/celik_02.jpeg",
    slug: "celik-konstruksiyon-imalat-ve-montaj",
    color: "bg-slate-800 text-white",
    detailSections: [
      {
        title: "Endüstriyel Çelik Yapı İmalatı",
        titleEn: "Industrial Steel Structure Manufacturing",
        image: "/img/celik_02.jpeg",
        paragraphs: [
          "Fabrika binaları, hangarlar ve çok katlı endüstriyel yapılar için uluslararası standartlarda çelik konstrüksiyon imalatı gerçekleştiriyoruz. Tasarım aşamasından montaja kadar tüm süreçlerde mühendislik hassasiyetiyle çalışıyoruz.",
          "Kullandığımız yüksek kaliteli çelik malzemeler ve ileri kaynak teknolojileri sayesinde, yapılarınızın statik ömrünü maksimize ederken güvenliği en üst düzeyde tutuyoruz."
        ],
        paragraphsEn: [
          "We manufacture steel structures at international standards for factory buildings, hangars, and multi-story industrial structures. We work with engineering precision in all processes from the design stage to assembly.",
          "Thanks to the high-quality steel materials and advanced welding technologies we use, we maximize the static life of your structures while keeping safety at the highest level."
        ]
      },
      {
        title: "Saha Montaj ve Uygulama Hizmetleri",
        titleEn: "Field Assembly and Application Services",
        image: "/img/celik_03.jpeg",
        paragraphs: [
          "Uzman saha ekiplerimizle, en zorlu saha koşullarında bile hızlı ve güvenli montaj operasyonları yürütüyoruz. Vinç organizasyonu ve iş güvenliği prosedürlerimizle projelerinizi zamanında teslim ediyoruz.",
          "Mevcut tesislerinize entegre edilecek ilave çelik yapılar veya güçlendirme projeleri için de yerinde çözümler üreterek operasyonel sürekliliğinizi destekliyoruz."
        ],
        paragraphsEn: [
          "With our expert field teams, we carry out fast and safe assembly operations even under the most challenging field conditions. We deliver your projects on time with our crane organization and occupational safety procedures.",
          "We also support your operational continuity by producing on-site solutions for additional steel structures to be integrated into your existing facilities or retrofitting projects."
        ]
      }
    ]
  },
  {
    number: "4",
    title: "Mekanik Tesisat Hizmetleri",
    titleEn: "Mechanical Installation Services",
    description: "Kazan daireleri, borulama sistemleri ve yardımcı işletme üniteleri için yüksek basınç normlarına uygun hassas mekanik montaj ve devreye alma hizmetleri.",
    descriptionEn: "Precision mechanical installation and commissioning services for boiler rooms, piping systems, and auxiliary operation units in accordance with high-pressure norms.",
    image: "/img/image.png",
    slug: "mekanik-montaj-hizmetleri",
    color: "bg-primary-900 text-white",
    detailSections: [
      {
        title: "Endüstriyel Borulama ve Tesisat Çözümleri",
        titleEn: "Industrial Piping and Installation Solutions",
        image: "/img/mekanik_01.jpeg",
        paragraphs: [
          "Buhar, kondens, kızgın yağ ve gaz hatları için yüksek basınç standartlarında borulama hizmetleri sunuyoruz. Sertifikalı kaynakçılarımız ve uzman mühendis kadromuzla tesisat güvenliğini garanti altına alıyoruz.",
          "Projelendirmeden montaja kadar tüm süreçlerde malzeme seçimi ve uygulama kalitesini en üst düzeyde tutarak, işletmenizin enerji verimliliğini artırıyoruz."
        ],
        paragraphsEn: [
          "We offer piping services at high-pressure standards for steam, condensate, hot oil and gas lines. We guarantee installation safety with our certified welders and expert engineering staff.",
          "By keeping the quality of material selection and application at the highest level in all processes from project planning to assembly, we increase the energy efficiency of your business."
        ]
      },
      {
        title: "Ekipman Montaj ve Devreye Alma",
        titleEn: "Equipment Assembly and Commissioning",
        image: "/img/mekanik_02.jpeg",
        paragraphs: [
          "Eşanjörler, pompalar, vanalar ve diğer yardımcı ekipmanların hassas montajını gerçekleştiriyoruz. Sistem bütünlüğünü koruyarak, devreye alma öncesi gerekli testleri titizlikle tamamlıyoruz.",
          "Mekanik tesisatın her noktasında sızdırmazlık ve performans testlerini uygulayarak, tesisin sorunsuz çalışmasını sağlıyoruz."
        ],
        paragraphsEn: [
          "We perform precision assembly of heat exchangers, pumps, valves and other auxiliary equipment. By preserving system integrity, we meticulously complete the necessary tests before commissioning.",
          "We ensure the smooth operation of the facility by applying leak and performance tests at every point of the mechanical installation."
        ]
      },
      {
        title: "Saha Borulama ve Hassas Kaynak Hizmetleri",
        titleEn: "Field Piping and Precision Welding Services",
        image: "/img/mekanik_05.jpeg",
        paragraphs: [
          "Endüstriyel tesislerin açık saha borulama hatlarında, yüksek basınç standartlarına uygun yerinde (saha) montaj ve hassas kaynak işlemlerini gerçekleştiriyoruz. Boru hatlarının hatasız şekilde hizalanması, askılama ve destek elemanlarının kurulumu uzman ekiplerimizce titizlikle yapılmaktadır.",
          "Saha kaynak operasyonlarında, zorlu çevre koşullarına rağmen sızdırmazlık ve mukavemet standartlarından ödün vermeden, sertifikalı kaynak yöntemleri ve deneyimli kadromuzla yüksek güvenlikli birleştirme çözümleri sunuyoruz."
        ],
        paragraphsEn: [
          "We perform on-site (field) assembly and precision welding processes for open-field piping lines of industrial facilities in accordance with high-pressure standards. Faultless alignment of pipelines, installation of suspension and support elements are carried out meticulously by our expert teams.",
          "In field welding operations, we offer highly secure joining solutions with certified welding methods and our experienced staff, without compromising leak tightness and strength standards despite challenging environmental conditions."
        ]
      }
    ]
  },
  {
    number: "5",
    title: "Bakım Hizmetleri",
    titleEn: "Maintenance Services",
    description: "Endüstriyel tesislerin sürdürülebilirliği için periyodik bakım, onarım ve revizyon hizmetleri ile işletme verimliliğinizi koruyoruz.",
    descriptionEn: "We protect your operational efficiency with periodic maintenance, repair and revision services for the sustainability of industrial facilities.",
    image: "/img/buharkazan_02.jpeg",
    slug: "bakim-hizmetleri",
    color: "bg-slate-700 text-white",
    detailSections: [
      {
        title: "Buhar Kazanı Demontaj ve Taşıma Çalışmaları",
        titleEn: "Steam Boiler Disassembly and Moving Works",
        image: "/img/buharkazan_01.jpeg",
        paragraphs: [
          "Tesis sahasında bulunan mevcut buhar kazanının demontaj, kaldırma ve saha içi taşıma çalışmaları tarafımızca gerçekleştirilmiştir. Çalışma kapsamında kazan bağlantıları kontrollü şekilde ayrılmış, gerekli söküm işlemleri tamamlanarak ekipman vinç yardımıyla güvenli şekilde bulunduğu alandan çıkarılmıştır.",
          "Yüksek tonajlı kaldırma operasyonları, saha şartlarına uygun kaldırma planı doğrultusunda gerçekleştirilmiş olup, kazan gövdesinin deformasyonsuz şekilde taşınması sağlanmıştır. Demontaj sürecinde mevcut çelik konstrüksiyon, platform ve bağlantı bölgelerinde gerekli söküm organizasyonları kontrollü şekilde yürütülmüştür.",
          "Çalışmalar boyunca iş güvenliği prosedürleri eksiksiz uygulanmış, saha koordinasyonu kontrollü şekilde sağlanarak operasyon planlanan süre içerisinde başarıyla tamamlanmıştır."
        ],
        paragraphsEn: [
          "The disassembly, lifting and on-site transportation works of the existing steam boiler located in the facility area were carried out by us. Within the scope of the work, the boiler connections were separated in a controlled manner, the necessary dismantling processes were completed and the equipment was safely removed from its location with the help of a crane.",
          "High-tonnage lifting operations were carried out in line with a lifting plan suitable for field conditions, and the boiler body was transported without deformation. During the disassembly process, the necessary dismantling organizations in the existing steel construction, platform and connection areas were carried out in a controlled manner.",
          "During the works, occupational safety procedures were fully applied, field coordination was ensured in a controlled manner, and the operation was successfully completed within the planned time."
        ]
      },
      {
        title: "100 t/h – 45 Bar Buhar Kazanı Membran Duvar Değişim Çalışması",
        titleEn: "100 t/h – 45 Bar Steam Boiler Membrane Wall Replacement Work",
        image: "/img/buharkazan_02.jpeg",
        paragraphs: [
          "45 bar işletme basıncına sahip 100 t/h kapasiteli buhar kazanında, kullanım ömrünü tamamlayan ve deformasyona uğrayan membran duvar borularının söküm ve yenileme çalışmaları gerçekleştirilmiştir.",
          "Çalışma kapsamında mevcut hasarlı membran paneller kontrollü şekilde demonte edilmiş, saha ölçülerine uygun olarak hazırlanan yeni membran boruları ve fin kaynakları montaj sahasında yerlerine uygulanmıştır. Montaj sonrası tüm kaynak imalatları prosedüre uygun şekilde tamamlanmış, gerekli kontroller yapılarak sistem işletmeye hazır hale getirilmiştir.",
          "İş süresince yüksek sıcaklık ve dar çalışma alanı şartlarına uygun emniyet tedbirleri alınmış, saha organizasyonu kontrollü şekilde yürütülmüştür. Çalışmalar planlanan süre içerisinde başarıyla tamamlanmıştır."
        ],
        paragraphsEn: [
          "In the 100 t/h capacity steam boiler with 45 bar operating pressure, dismantling and renewal works of membrane wall pipes that have completed their useful life and deformed have been carried out.",
          "Within the scope of the study, existing damaged membrane panels were dismantled in a controlled manner, and new membrane pipes and fin welds prepared in accordance with field dimensions were applied to their places in the assembly area. After assembly, all welding works were completed in accordance with the procedure, the necessary checks were made and the system was made ready for operation.",
          "During the work, safety precautions suitable for high temperature and narrow working area conditions were taken, and the field organization was carried out in a controlled manner. The works were completed successfully within the planned time."
        ]
      }
    ]
  }
];
