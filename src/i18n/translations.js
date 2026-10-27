import { siteConfig } from "../config/siteConfig";

export const SUPPORTED_LANGS = ["EN", "UZ", "RU"];

export const translations = {
  EN: {
    header: {
      available: "Available for projects",
      nav: {
        hero: "Hero",
        services: "Services",
        portfolio: "Portfolio",
        process: "Process",
        whyUs: "Why Us",
        contact: "Contact",
      },
      cta: "Contact on Telegram",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      mobileNavLabel: "Mobile navigation",
    },
    hero: {
      badgeLeft: "Digital Studio based in Uzbekistan",
      badgeRight: "Open for new projects",
      titleStart: "We build websites that ",
      titleAccent: "bring you customers",
      subtitle:
        "High-performing landing pages, e-commerce stores, and bespoke web platforms engineered to elevate your brand and drive real business growth.",
      seeWork: "See our work",
      contactTelegram: "Contact us on Telegram",
      stats: [
        { icon: "verified", value: "100%", label: "On-time delivery" },
        { icon: "trending_up", value: "3x Higher", label: "Conversion rates" },
        { icon: "devices", value: "Mobile-First", label: "Engineered precision" },
        { icon: "forum", value: "Direct Access", label: "Founder communication" },
      ],
    },
    services: {
      tag: "OUR EXPERTISE",
      title: "Services tailored to scale your business",
      subtitle: "From high-converting local funnels to complex web infrastructure",
      cards: [
        {
          icon: "rocket_launch",
          title: "Landing pages for local businesses",
          description:
            "Turn Instagram and ad traffic into direct customer inquiries with a fast, conversion-focused single-page website.",
          features: [
            "Fast 5-day turnaround for single-page sites",
            "Mobile-first layout built for ad conversions",
            "Instant Telegram / WhatsApp lead notifications",
            "SEO-ready structure & Google Analytics tracking",
          ],
        },
        {
          icon: "shopping_cart_checkout",
          title: "E-commerce & B2B platforms",
          description:
            "Simplify retail and wholesale sales with an online catalog, automated checkout, and clear order management.",
          features: [
            "Frictionless customer checkout & tiered B2B orders",
            "Payme & Click payment gateway integration",
            "Order & inventory management dashboard",
            "Custom product catalog with SKU variants",
          ],
        },
        {
          icon: "terminal",
          title: "Custom web development",
          description:
            "Automate complex business workflows and client operations with tailored web applications built to scale.",
          features: [
            "Custom client portals & business automation",
            "CRM, ERP & third-party API integrations",
            "Next.js, React & modern scalable architecture",
            "High-security enterprise standards",
          ],
        },
      ],
    },
    portfolio: {
      tag: "FEATURED WORK",
      title: "Proof of our craft",
      subtitle: "Recent digital solutions delivered for growing businesses",
      viewProject: "View project",
      projects: [
        {
          id: "abdulaziz-kafe",
          url: "https://abdulaziz-kafe.vercel.app/",
          domain: "abdulaziz-kafe.vercel.app",
          image: "/assets/abdulaziz-kafe.png",
          alt: "Abdulaziz Kafe live website screenshot",
          liveStatus: "Live Reservation Bot active",
          location: "Yangiariq, Khorezm",
          category: "Local Hospitality & Dining",
          title: "Abdulaziz Kafe",
          description:
            "Landing page for a local cafe in Yangiariq, showcasing menu, atmosphere, and contact info. Designed to drive foot traffic from Instagram and ease direct table inquiries.",
          tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Telegram Bot API"],
          metricIcon: "trending_up",
          metricText: "+140% table reservation inquiries in first month",
          reverse: false,
        },
      ],
    },
    process: {
      tag: "THE ROADMAP",
      title: "How we work",
      subtitle: "A transparent, friction-free journey from concept to revenue",
      steps: [
        {
          num: "01",
          icon: "chat",
          title: "Discuss",
          description:
            "We hop on a quick Telegram call or chat to understand your business goals, target audience, and project scope.",
        },
        {
          num: "02",
          icon: "draw",
          title: "Design",
          description:
            "We craft high-fidelity Figma prototypes with modern aesthetics, clear hierarchy, and mobile-first experience.",
        },
        {
          num: "03",
          icon: "code",
          title: "Develop",
          description:
            "Clean, lightning-fast code development with full responsiveness, SEO setup, and analytics integration.",
        },
        {
          num: "04",
          icon: "rocket",
          title: "Launch",
          description:
            "Domain setup, final QA testing, and handing over all assets plus training so your team can start taking orders immediately.",
        },
      ],
    },
    whyUs: {
      tag: "THE YURITO ADVANTAGE",
      title: "Why choose us",
      subtitle: "Designed for business owners who value speed, quality, and results",
      benefits: [
        {
          icon: "bolt",
          tag: "Fast Delivery",
          title: "Ready in 7–14 days",
          description:
            "Landing pages launch in ~5 days, while multi-page and B2B platforms ship in 7–14 days through our focused studio workflow.",
          footerIcon: "schedule",
          footerText: "Zero bureaucratic delays",
        },
        {
          icon: "auto_awesome",
          tag: "Modern Design",
          title: "Stand out from competition",
          description:
            "Every site is custom crafted with high aesthetic standards, micro-interactions, and flawless mobile experience that builds instant credibility.",
          footerIcon: "palette",
          footerText: "Bespoke visual identity",
        },
        {
          icon: "verified_user",
          tag: "Flexible Pricing",
          title: "Tailored agreement for your project",
          description:
            "We discuss and agree on pricing individually during project consultation based on your exact goals and scope, with zero hidden fees.",
          footerIcon: "price_check",
          footerText: "Direct agreement, zero surprise costs",
        },
      ],
    },
    contact: {
      tag: "GET IN TOUCH",
      title: "Let's build something remarkable together",
      subtitle:
        "Have an idea or need a website revamp? Drop us a message or reach out directly on your favorite app.",
      directTitle: "Direct Channels",
      directDesc:
        "For instant queries, reach out directly on Telegram or Instagram. We usually reply in minutes.",
      telegramSub: `${siteConfig.telegram.handle} • Fast reply (~15m)`,
      instagramSub: `${siteConfig.instagram.handle} • Stories & Case studies`,
      phoneTitle: "Phone Call",
      phoneSub: `${siteConfig.phone.display} • Mon-Sat 9-19`,
      location: "Khorezm / Tashkent, Uzbekistan • Serving clients worldwide",
      formTitle: "Start a conversation",
      formSubtitle:
        "Fill in the fields below and your inquiry will be sent directly to our Telegram.",
      nameLabel: "Your Name or Company",
      namePlaceholder: "e.g. Jasur Bek or MedTech LLC",
      phoneLabel: "Phone Number or Telegram Handle",
      phonePlaceholder: "e.g. +998 77 114 75 31 or @username",
      messageLabel: "Project Details",
      messagePlaceholder:
        "Tell us about your project, target launch date, and business goals...",
      submitBtn: "Send message",
      submittingBtn: "Sending...",
      successMsg:
        "Rahmat! Your inquiry has been sent to our Telegram. We will reach out to you shortly.",
      errors: {
        nameRequired: "Please enter your name or company name.",
        contactRequired: "Please enter your phone number or Telegram @username.",
        contactInvalid:
          "Please enter a valid phone number (7–15 digits, e.g. +998 77 114 75 31) or Telegram handle starting with @ (5–32 characters).",
        messageRequired: "Please briefly describe your project details.",
        submitFailed:
          "Could not send automatically. Please message us directly on Telegram (@YuritoDigital).",
      },
    },
    footer: {
      tagline:
        "Yurito Digital — Handcrafted digital experiences for forward-thinking businesses in Uzbekistan and beyond.",
      badge: "Tashkent & Worldwide",
      quickLinks: "Quick Links",
      connectSocial: "Connect & Social",
      copyright: "© 2025 Yurito Digital. Handcrafted with modern engineering.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    legal: {
      closeBtn: "Close",
      privacy: {
        title: "Privacy Policy",
        summary:
          "Yurito Digital respects your privacy and only collects contact information voluntarily submitted through our project inquiry channels.",
        points: [
          "Information submitted via the contact form (name, phone number or Telegram handle, and project details) is sent directly to our team to respond to your inquiry.",
          "We do not sell or share your contact details with third-party marketers.",
          "For immediate data removal or privacy questions, contact us via Telegram at " +
            siteConfig.telegram.handle +
            " or call " +
            siteConfig.phone.display +
            ".",
        ],
        note: "All project inquiries and data handling are managed directly by Yurito Digital.",
      },
      terms: {
        title: "Terms of Service",
        summary:
          "All web development, design, and digital studio services provided by Yurito Digital are governed by individual project agreements.",
        points: [
          "Project scope, deliverables, timeline, and pricing are mutually agreed upon during project consultation before development begins.",
          "Portfolio case studies shown on this website represent past studio work and live client deployments.",
          "For specific contract terms or commercial inquiries, reach out via Telegram at " +
            siteConfig.telegram.handle +
            " or call " +
            siteConfig.phone.display +
            ".",
        ],
        note: "All terms and project milestones are finalized individually with each client.",
      },
    },
  },
  UZ: {
    header: {
      available: "Yangi loyihalar uchun ochiq",
      nav: {
        hero: "Asosiy",
        services: "Xizmatlar",
        portfolio: "Portfolio",
        process: "Jarayon",
        whyUs: "Afzalliklar",
        contact: "Aloqa",
      },
      cta: "Telegram orqali bog'lanish",
      openMenu: "Menyuni ochish",
      closeMenu: "Menyuni yopish",
      mobileNavLabel: "Mobil navigatsiya",
    },
    hero: {
      badgeLeft: "O'zbekistondagi raqamli studiya",
      badgeRight: "Yangi loyihalar uchun ochiq",
      titleStart: "Mijoz olib keladigan ",
      titleAccent: "saytlar yaratamiz",
      subtitle:
        "Brendingizni yuksaltirish va real biznes o'sishini ta'minlash uchun yuqori konversiyali landing sahifalar, internet-do'konlar va maxsus veb-platformalar.",
      seeWork: "Ishlarimizni ko'rish",
      contactTelegram: "Telegramda bog'lanish",
      stats: [
        { icon: "verified", value: "100%", label: "O'z vaqtida topshirish" },
        { icon: "trending_up", value: "3x Yuqori", label: "Konversiya darajasi" },
        { icon: "devices", value: "Mobile-First", label: "Mukammal moslashuv" },
        { icon: "forum", value: "To'g'ridan-to'g'ri", label: "Asoschi bilan muloqot" },
      ],
    },
    services: {
      tag: "BIZNING YO'NALISHLAR",
      title: "Biznesingizni kengaytirish uchun xizmatlar",
      subtitle: "Yuqori konversiyali lokal landinglardan murakkab veb-tizimlargacha",
      cards: [
        {
          icon: "rocket_launch",
          title: "Mahalliy biznes uchun Landing sahifalar",
          description:
            "Instagram va reklama orqali kirgan foydalanuvchilarni real mijozga aylantiruvchi tezkor, sotuvga yo'naltirilgan bir sahifali saytlar.",
          features: [
            "Bir sahifali saytlar uchun 5 kunlik tezkor ishga tushirish",
            "Reklama konversiyasi uchun qulay mobil interfeys",
            "Telegram / WhatsApp orqali tezkor lid-xabarnomalar",
            "SEO-tayyor tuzilma va Google Analytics integratsiyasi",
          ],
        },
        {
          icon: "shopping_cart_checkout",
          title: "E-commerce va B2B platformalar",
          description:
            "Onlayn katalog, qulay xarid jarayoni va buyurtmalar boshqaruvi orqali chakana hamda ulgurji savdoni tizimlashtiring.",
          features: [
            "Oson xarid jarayoni va ulgurji B2B buyurtmalar",
            "Payme va Click to'lov tizimlari integratsiyasi",
            "Buyurtmalar va omborni boshqarish paneli",
            "Maxsus mahsulotlar katalogi va SKU variantlari",
          ],
        },
        {
          icon: "terminal",
          title: "Maxsus veb-dasturlash",
          description:
            "Kengayuvchan veb-ilovalar va mijozlar portali yordamida murakkab biznes jarayonlarini avtomatlashtiring.",
          features: [
            "Mijozlar kabineti va biznes jarayonlarini avtomatlashtirish",
            "CRM, ERP va tashqi API integratsiyalar",
            "Next.js, React va kengayuvchan arxitektura",
            "Yuqori darajadagi xavfsizlik standartlari",
          ],
        },
      ],
    },
    portfolio: {
      tag: "TANLANGAN LOYIHALAR",
      title: "Mahoratimiz isboti",
      subtitle: "Rivojlanayotgan bizneslar uchun topshirilgan so'nggi raqamli yechimlar",
      viewProject: "Loyihani ko'rish",
      projects: [
        {
          id: "abdulaziz-kafe",
          url: "https://abdulaziz-kafe.vercel.app/",
          domain: "abdulaziz-kafe.vercel.app",
          image: "/assets/abdulaziz-kafe.png",
          alt: "Abdulaziz Kafe veb-sayti skrinshoti",
          liveStatus: "Jonli bron qilish boti faol",
          location: "Yangiariq, Xorazm",
          category: "Restoran va Kafe",
          title: "Abdulaziz Kafe",
          description:
            "Yangiariqdagi mahalliy kafe uchun menyu, muhit va aloqa ma'lumotlarini namoyish etuvchi landing sahifa. Instagramdan mijozlarni jalb qilish va joy band qilishni osonlashtirish uchun ishlab chiqilgan.",
          tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Telegram Bot API"],
          metricIcon: "trending_up",
          metricText: "Birinchi oyda joy bron qilish so'rovlari +140% ga oshdi",
          reverse: false,
        },
      ],
    },
    process: {
      tag: "ISH JARAYONI",
      title: "Qanday ishlaymiz",
      subtitle: "G'oyadan daromadgacha shaffof va qulay hamkorlik",
      steps: [
        {
          num: "01",
          icon: "chat",
          title: "Muhokama",
          description:
            "Biznes maqsadlaringiz, maqsadli auditoriyangiz va loyiha ko'lamini tushunish uchun Telegramda qisqa suhbat o'tkazamiz.",
        },
        {
          num: "02",
          icon: "draw",
          title: "Dizayn",
          description:
            "Zamonaviy estetika, aniq ierarxiya va mobile-first tajribaga ega yuqori aniqlikdagi Figma prototiplarini yaratamiz.",
        },
        {
          num: "03",
          icon: "code",
          title: "Dasturlash",
          description:
            "To'liq moslashuvchanlik, SEO sozlamalari va analitika integratsiyasiga ega toza hamda tezkor kod yozamiz.",
        },
        {
          num: "04",
          icon: "rocket",
          title: "Ishga tushirish",
          description:
            "Domen ulash, yakuniy QA tekshiruvi va jamoangiz darhol buyurtmalarni qabul qilishi uchun barcha fayllarni topshirish.",
        },
      ],
    },
    whyUs: {
      tag: "YURITO AFZALLIGI",
      title: "Nega aynan biz",
      subtitle: "Tezlik, sifat va natijani qadrlaydigan tadbirkorlar uchun",
      benefits: [
        {
          icon: "bolt",
          tag: "Tezkor Natija",
          title: "7–14 kunda tayyor",
          description:
            "Landing sahifalar ~5 kunda, ko'p sahifali va B2B platformalar esa 7–14 kunda sifat va tezlikka putur yetkazmasdan topshiriladi.",
          footerIcon: "schedule",
          footerText: "Byurokratik kechikishlarsiz",
        },
        {
          icon: "auto_awesome",
          tag: "Zamonaviy Dizayn",
          title: "Raqobatchilardan ajralib turing",
          description:
            "Har bir sayt yuqori estetik standartlar, mikro-animatsiyalar va ishonch uyg'otuvchi mukammal mobil tajriba bilan individual yaratiladi.",
          footerIcon: "palette",
          footerText: "Takrorlanmas vizual uslub",
        },
        {
          icon: "verified_user",
          tag: "Qulay Kelishuv",
          title: "Loyihaga mos kelishilgan narx",
          description:
            "Narxlar loyiha ko'lami va talablariga qarab ishni muhokama qilish mobaynida o'zaro kelishib olinadi — yashirin to'lovlarsiz.",
          footerIcon: "price_check",
          footerText: "O'zaro kelishuv, kutilmagan xarajatlarsiz",
        },
      ],
    },
    contact: {
      tag: "BOG'LANISH",
      title: "Keling, birgalikda ajoyib loyiha quramiz",
      subtitle:
        "G'oyangiz bormi yoki saytingizni yangilamoqchimisiz? Bizga xabar qoldiring yoki o'zingizga qulay tarmoq orqali yozing.",
      directTitle: "To'g'ridan-to'g'ri aloqa",
      directDesc:
        "Tezkor savollar uchun Telegram yoki Instagram orqali yozing. Odatda bir necha daqiqada javob beramiz.",
      telegramSub: `${siteConfig.telegram.handle} • Tezkor javob (~15 daqiqa)`,
      instagramSub: `${siteConfig.instagram.handle} • Stories va keyslar`,
      phoneTitle: "Telefon orqali",
      phoneSub: `${siteConfig.phone.display} • Dush-Shan 9-19`,
      location: "Xorazm / Toshkent, O'zbekiston • Dunyo bo'ylab xizmat ko'rsatamiz",
      formTitle: "Muloqotni boshlash",
      formSubtitle:
        "Quyidagi maydonlarni to'ldiring — arizangiz to'g'ridan-to'g'ri Telegramimizga yuboriladi.",
      nameLabel: "Ismingiz yoki Kompaniya nomi",
      namePlaceholder: "masalan: Jasur Bek yoki MedTech MChJ",
      phoneLabel: "Telefon raqam yoki Telegram username",
      phonePlaceholder: "masalan: +998 77 114 75 31 yoki @username",
      messageLabel: "Loyiha tafsilotlari",
      messagePlaceholder:
        "Loyihangiz, rejalashtirilgan muddat va biznes maqsadlaringiz haqida yozing...",
      submitBtn: "Xabar yuborish",
      submittingBtn: "Yuborilmoqda...",
      successMsg:
        "Rahmat! Arizangiz Telegram orqali qabul qilindi. Tez orada siz bilan bog'lanamiz.",
      errors: {
        nameRequired: "Iltimos, ismingiz yoki kompaniya nomini kiriting.",
        contactRequired: "Iltimos, telefon raqamingiz yoki Telegram @username kiriting.",
        contactInvalid:
          "Iltimos, to'g'ri telefon raqam (7–15 ta raqam, masalan: +998 77 114 75 31) yoki @ bilan boshlanuvchi Telegram username (5–32 belgi) kiriting.",
        messageRequired: "Iltimos, loyiha tafsilotlari haqida qisqacha yozing.",
        submitFailed:
          "Avtomatik yuborishda xatolik yuz berdi. Iltimos, bevosita Telegram (@YuritoDigital) orqali yozing.",
      },
    },
    footer: {
      tagline:
        "Yurito Digital — O'zbekiston va undan tashqaridagi ilg'or bizneslar uchun maxsus raqamli yechimlar.",
      badge: "Toshkent va Dunyo bo'ylab",
      quickLinks: "Tezkor havolalar",
      connectSocial: "Ijtimoiy tarmoqlar",
      copyright: "© 2025 Yurito Digital. Zamonaviy muhandislik asosida yaratilgan.",
      privacy: "Maxfiylik siyosati",
      terms: "Foydalanish shartlari",
    },
    legal: {
      closeBtn: "Yopish",
      privacy: {
        title: "Maxfiylik siyosati",
        summary:
          "Yurito Digital sizning maxfiyligingizni hurmat qiladi va faqat loyiha bo'yicha murojaat formasi orqali ixtiyoriy yuborilgan aloqa ma'lumotlarini qabul qiladi.",
        points: [
          "Murojaat formasi orqali yuborilgan ma'lumotlar (ism, telefon raqam yoki Telegram username hamda loyiha tafsilotlari) faqat so'rovingizga javob berish uchun Telegram orqali jamoamizga yetkaziladi.",
          "Biz sizning aloqa ma'lumotlaringizni uchinchi shaxslarga bermaymiz va sotmaymiz.",
          "Ma'lumotlarni o'chirish yoki maxfiylik bo'yicha savollar uchun Telegram (" +
            siteConfig.telegram.handle +
            ") yoki " +
            siteConfig.phone.display +
            " raqami orqali bog'lanishingiz mumkin.",
        ],
        note: "Barcha murojaatlar bevosita Yurito Digital jamoasi tomonidan ko'rib chiqiladi.",
      },
      terms: {
        title: "Foydalanish shartlari",
        summary:
          "Yurito Digital tomonidan taqdim etiladigan barcha veb-dasturlash va dizayn xizmatlari har bir loyiha bo'yicha tuziladigan o'zaro kelishuv asosida amalga oshiriladi.",
        points: [
          "Loyiha ko'lami, topshirish muddatlari va xizmat narxi ishni muhokama qilish mobaynida o'zaro kelishib olinadi.",
          "Saytda ko'rsatilgan portfolio namunalari studiyaning amaldagi loyihalari hisoblanadi.",
          "Tijoriy shartlar va hamkorlik bo'yicha savollar uchun Telegram (" +
            siteConfig.telegram.handle +
            ") yoki " +
            siteConfig.phone.display +
            " raqamiga murojaat qiling.",
        ],
        note: "Barcha ish bosqichlari va shartlar har bir mijoz bilan individual kelishiladi.",
      },
    },
  },
  RU: {
    header: {
      available: "Открыты для проектов",
      nav: {
        hero: "Главная",
        services: "Услуги",
        portfolio: "Портфолио",
        process: "Процесс",
        whyUs: "Почему мы",
        contact: "Контакты",
      },
      cta: "Написать в Telegram",
      openMenu: "Открыть меню навигации",
      closeMenu: "Закрыть меню навигации",
      mobileNavLabel: "Мобильная навигация",
    },
    hero: {
      badgeLeft: "Digital-студия в Узбекистане",
      badgeRight: "Открыты для новых проектов",
      titleStart: "Создаем сайты, которые ",
      titleAccent: "приводят клиентов",
      subtitle:
        "Высококонверсионные лендинги, интернет-магазины и индивидуальные веб-платформы для усиления вашего бренда и реального роста продаж.",
      seeWork: "Наши работы",
      contactTelegram: "Связаться в Telegram",
      stats: [
        { icon: "verified", value: "100%", label: "Сдача точно в срок" },
        { icon: "trending_up", value: "В 3 раза", label: "Выше конверсия" },
        { icon: "devices", value: "Mobile-First", label: "Инженерная точность" },
        { icon: "forum", value: "Напрямую", label: "Связь с основателем" },
      ],
    },
    services: {
      tag: "НАША ЭКСПЕРТИЗА",
      title: "Услуги для масштабирования вашего бизнеса",
      subtitle: "От конверсионных локальных воронок до сложной веб-инфраструктуры",
      cards: [
        {
          icon: "rocket_launch",
          title: "Лендинги для локального бизнеса",
          description:
            "Превращайте трафик из Instagram и рекламы в целевые заявки с помощью быстрого одностраничного сайта.",
          features: [
            "Быстрый запуск одностраничного сайта за 5 дней",
            "Мобильный интерфейс с фокусом на конверсию",
            "Мгновенные заявки в бот Telegram / WhatsApp",
            "SEO-структура и подключение Google Analytics",
          ],
        },
        {
          icon: "shopping_cart_checkout",
          title: "E-commerce и B2B платформы",
          description:
            "Систематизируйте розничные и оптовые продажи через удобный онлайн-каталог, быструю оплату и учет заказов.",
          features: [
            "Удобное оформление заказов и оптовые B2B-закупки",
            "Интеграция платежных систем Payme и Click",
            "Панель управления заказами и остатками",
            "Кастомный каталог товаров с вариациями SKU",
          ],
        },
        {
          icon: "terminal",
          title: "Индивидуальная веб-разработка",
          description:
            "Автоматизируйте сложные бизнес-процессы и работу с клиентами с помощью масштабируемых веб-приложений.",
          features: [
            "Клиентские порталы и автоматизация процессов",
            "Интеграция CRM, ERP и сторонних API",
            "Next.js, React и масштабируемая архитектура",
            "Высокие корпоративные стандарты безопасности",
          ],
        },
      ],
    },
    portfolio: {
      tag: "ИЗБРАННЫЕ ПРОЕКТЫ",
      title: "Доказательство мастерства",
      subtitle: "Недавние цифровые решения для растущего бизнеса",
      viewProject: "Смотреть проект",
      projects: [
        {
          id: "abdulaziz-kafe",
          url: "https://abdulaziz-kafe.vercel.app/",
          domain: "abdulaziz-kafe.vercel.app",
          image: "/assets/abdulaziz-kafe.png",
          alt: "Скриншот сайта Abdulaziz Kafe",
          liveStatus: "Бот бронирования активен",
          location: "Янгиарык, Хорезм",
          category: "Рестораны и Кафе",
          title: "Abdulaziz Kafe",
          description:
            "Лендинг для локального кафе в Янгиарыке с меню, атмосферой и контактами. Спроектирован для привлечения гостей из Instagram и быстрого бронирования столов.",
          tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Telegram Bot API"],
          metricIcon: "trending_up",
          metricText: "+140% заявок на бронь столов в первый месяц",
          reverse: false,
        },
      ],
    },
    process: {
      tag: "ЭТАПЫ РАБОТЫ",
      title: "Как мы работаем",
      subtitle: "Прозрачный и понятный путь от идеи до прибыли",
      steps: [
        {
          num: "01",
          icon: "chat",
          title: "Обсуждение",
          description:
            "Проводим короткий созвон или чат в Telegram, чтобы понять ваши бизнес-цели, аудиторию и объем задачи.",
        },
        {
          num: "02",
          icon: "draw",
          title: "Дизайн",
          description:
            "Разрабатываем детальные прототипы в Figma с современной эстетикой, четкой иерархией и упором на мобильные устройства.",
        },
        {
          num: "03",
          icon: "code",
          title: "Разработка",
          description:
            "Пишем чистый, молниеносный код с полной адаптивностью, базовым SEO и подключением аналитики.",
        },
        {
          num: "04",
          icon: "rocket",
          title: "Запуск",
          description:
            "Настраиваем домен, проводим финальное тестирование и передаем все доступы с обучением вашей команды.",
        },
      ],
    },
    whyUs: {
      tag: "ПРЕИМУЩЕСТВА YURITO",
      title: "Почему выбирают нас",
      subtitle: "Для владельцев бизнеса, которые ценят скорость, качество и результат",
      benefits: [
        {
          icon: "bolt",
          tag: "Быстрая Сдача",
          title: "Готовность за 7–14 дней",
          description:
            "Лендинги запускаем за ~5 дней, а многостраничные сайты и B2B-платформы — за 7–14 дней без потери качества.",
          footerIcon: "schedule",
          footerText: "Никакой бюрократии и задержек",
        },
        {
          icon: "auto_awesome",
          tag: "Современный Дизайн",
          title: "Выделяйтесь среди конкурентов",
          description:
            "Каждый сайт создается индивидуально с высокими стандартами эстетики, микро-анимациями и безупречным мобильным интерфейсом.",
          footerIcon: "palette",
          footerText: "Уникальный визуальный стиль",
        },
        {
          icon: "verified_user",
          tag: "Гибкие Условия",
          title: "Договорная стоимость под ваш проект",
          description:
            "Стоимость обсуждается и согласовывается индивидуально в ходе обсуждения задачи в зависимости от объема работ — без скрытых доплат.",
          footerIcon: "price_check",
          footerText: "Честная договоренность, без сюрпризов",
        },
      ],
    },
    contact: {
      tag: "СВЯЗАТЬСЯ С НАМИ",
      title: "Давайте создадим что-то выдающееся вместе",
      subtitle:
        "Есть идея или нужно обновить сайт? Оставьте заявку или напишите нам напрямую в удобный мессенджер.",
      directTitle: "Прямые каналы связи",
      directDesc:
        "Для быстрых вопросов пишите напрямую в Telegram или Instagram. Обычно отвечаем в течение нескольких минут.",
      telegramSub: `${siteConfig.telegram.handle} • Быстрый ответ (~15 мин)`,
      instagramSub: `${siteConfig.instagram.handle} • Stories и кейсы`,
      phoneTitle: "Телефонный звонок",
      phoneSub: `${siteConfig.phone.display} • Пн-Сб 9-19`,
      location: "Хорезм / Ташкент, Узбекистан • Работаем по всему миру",
      formTitle: "Начать диалог",
      formSubtitle:
        "Заполните поля ниже — ваша заявка сразу придет нам в Telegram.",
      nameLabel: "Ваше имя или компания",
      namePlaceholder: "напр. Жасур Бек или MedTech LLC",
      phoneLabel: "Номер телефона или Telegram",
      phonePlaceholder: "напр. +998 77 114 75 31 или @username",
      messageLabel: "Детали проекта",
      messagePlaceholder:
        "Расскажите о вашем проекте, желаемых сроках запуска и бизнес-целях...",
      submitBtn: "Отправить сообщение",
      submittingBtn: "Отправка...",
      successMsg:
        "Рахмат! Ваша заявка отправлена в наш Telegram. Мы скоро свяжемся с вами.",
      errors: {
        nameRequired: "Пожалуйста, укажите ваше имя или название компании.",
        contactRequired: "Пожалуйста, укажите номер телефона или @username в Telegram.",
        contactInvalid:
          "Введите корректный номер телефона (7–15 цифр, напр. +998 77 114 75 31) или Telegram @username (5–32 символа).",
        messageRequired: "Пожалуйста, кратко опишите задачу или проект.",
        submitFailed:
          "Не удалось отправить автоматически. Пожалуйста, напишите нам напрямую в Telegram (@YuritoDigital).",
      },
    },
    footer: {
      tagline:
        "Yurito Digital — Цифровые продукты ручной работы для прогрессивного бизнеса в Узбекистане и за его пределами.",
      badge: "Ташкент и весь мир",
      quickLinks: "Быстрые ссылки",
      connectSocial: "Соцсети и контакты",
      copyright: "© 2025 Yurito Digital. Создано с современной инженерией.",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
    },
    legal: {
      closeBtn: "Закрыть",
      privacy: {
        title: "Политика конфиденциальности",
        summary:
          "Yurito Digital уважает вашу конфиденциальность и собирает только те контактные данные, которые вы добровольно отправляете через форму заявки.",
        points: [
          "Данные из формы обратной связи (имя, телефон или Telegram @username, описание проекта) направляются напрямую нашей команде в Telegram для ответа на ваш запрос.",
          "Мы не передаем и не продаем ваши контактные данные третьим лицам.",
          "По вопросам удаления данных или конфиденциальности свяжитесь с нами в Telegram (" +
            siteConfig.telegram.handle +
            ") или по телефону " +
            siteConfig.phone.display +
            ".",
        ],
        note: "Все обращения обрабатываются непосредственно командой Yurito Digital.",
      },
      terms: {
        title: "Условия использования",
        summary:
          "Все услуги по веб-разработке и дизайну студии Yurito Digital оказываются на основании индивидуальных договоренностей по каждому проекту.",
        points: [
          "Объем работ, сроки сдачи и стоимость обсуждаются и согласовываются индивидуально до начала разработки.",
          "Представленные в портфолио проекты демонстрируют реальные выполненные работы студии.",
          "Для уточнения коммерческих условий свяжитесь с нами в Telegram (" +
            siteConfig.telegram.handle +
            ") или по телефону " +
            siteConfig.phone.display +
            ".",
        ],
        note: "Все этапы и условия фиксируются индивидуально с каждым клиентом.",
      },
    },
  },
};
