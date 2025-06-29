//thumb
const package2 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Homepage/Explore Our Packages2.webp";
const package22 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Homepage/package5.webp";
const package3 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Homepage/Explore Our Packages3.webp";
const package4 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Homepage/Explore Our Packages4.webp";

// New Packages
const flightDuration =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/ExplorePackages/FlightDuration.webp";
const PerfectPurposal =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/ExplorePackages/PerfectPurposal.webp";
const RomanticGateway =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/ExplorePackages/RomanticGateway.webp";
const earlyReservation =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/Early reservation recommended.webp";
const culturalEntertainment =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/cultural enterainment.webp";
const Photograph =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/Photograph.webp";
const GroupBooking =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/Group_Booking.webp";
const PersonalizedPkg =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/PersonalizedPkg.webp";

let ArabicPackages = [
  {
    id: 2,
    thumb: package3,
    thumb_title:
      "ركوب منطاد الهواء الساخن الخاص | نقل خاص إلى جميع أنحاء دبي | Maha Balloon Adventures",
    thumb_desc:
      "استمتع برحلات المنطاد الخاصة مع خدمات النقل المريحة من وإلى جميع أنحاء دبي لتجربة مغامرة سلسة في صحراء العرب.",
    featured: true,
    title: "الرومانسية الخاصة السماوية",
    price_adult: "",
    price_child: "",
    bookNow: true,
    short_detail:
      "اجعل عرض زواجك أكثر تميزًا مع رحلة منطاد ساحرة فوق صحراء دبي عند شروق الشمس. استمتع باللحظة المثالية لطرح السؤال مع وجبة إفطار لذيذة.",
    itineraries: [
      {
        feature_img: PerfectPurposal,
        activity: "إعداد مثالي لعرض الزواج",
        details:
          "الإعداد المثالي لعرض الزواج، اللحظات الهامة، والذكرى السنوية.",
      },
      {
        feature_img: RomanticGateway,
        activity: "رحلة رومانسية",
        details:
          "احجز المنطاد بالكامل لك ولشريكك فقط، مع وجبة رومانسية فاخرة، مشروب فاخر، كعكة، وهدايا تذكارية.",
      },
      {
        feature_img: earlyReservation,
        activity: "ينصح بالحجز المبكر",
        details: "التقط كل لحظة مع جلسة تصوير فوتوغرافي وفيديو احترافية.",
      },
    ],
  },
  {
    id: 3,
    thumb: package22,
    thumb_title:
      "حجز جماعي لرحلة منطاد الهواء الساخن | Maha Balloon Adventures",
    thumb_desc:
      "استمتع برحلات منطاد الهواء الساخن بأسعار حصرية للمجموعات، مع باقات مخصصة وخدمة شخصية.",
    featured: true,
    title: "الحجز الجماعي",
    price_adult: "",
    price_child: "",
    bookNow: true,
    short_detail:
      "استمتع بأسعار حصرية للمجموعات، وباقات مخصصة، وخدمة شخصية. نقدم ترتيبات خاصة لجميع أنواع المجموعات لضمان تجربة فريدة وشخصية، سواء للعائلة، الأصدقاء، أو الزملاء.",
    itineraries: [
      {
        feature_img: GroupBooking,
        activity: "فعالية خاصة",
        details:
          "اجمع مجموعة من 10 أشخاص أو أكثر للاحتفال بأعياد الميلاد، اللقاءات، أو أي مناسبة خاصة!",
      },
      {
        feature_img: Photograph,
        activity: "تصوير فوتوغرافي لتوثيق الذكريات",
        details:
          "استمتع بأسعار خاصة، كعكات مخصصة، وإكسسوارات ممتعة مع جلسة تصوير احترافية لتوثيق الذكريات.",
      },
      {
        feature_img: PersonalizedPkg,
        activity: "باقات مخصصة",
        details: "باقات مخصصة لجعل احتفالك لا يُنسى.",
      },
      {
        feature_img: earlyReservation,
        activity: "ينصح بالحجز المبكر",
        details: "",
      },
    ],
  },
  {
    id: 4,
    thumb: package4,
    thumb_title:
      "باقة مناسبات الشركات لرحلة منطاد الهواء الساخن | Maha Balloon Adventures",
    thumb_desc:
      "اصطحب فعالية شركتك إلى آفاق جديدة، على ارتفاع 4000 قدم فوق سطح البحر!",
    featured: true,
    title: "فعالية الشركات",
    price_adult: "",
    price_child: "",
    bookNow: true,
    short_detail:
      "خذ فعاليتك الخاصة بالشركة إلى آفاق جديدة على ارتفاع 4000 قدم فوق سطح البحر! دع مغامرتك القادمة تكون الأفضل على الإطلاق لأصدقائك وزملائك.",
    itineraries: [
      {
        feature_img: flightDuration,
        activity: "الاحتفال بقدوم المواليد",
      },
      {
        feature_img: culturalEntertainment,
        activity: "حفلات الصديقات",
      },
      {
        feature_img: culturalEntertainment,
        activity: "الاحتفال بأعياد الميلاد والذكرى السنوية",
      },
    ],
  },
  {
    id: 5,
    thumb: package2,
    thumb_title:
      "مناسبات احتفالية | رحلات منطاد الهواء الساخن | Maha Balloon Adventures",
    thumb_desc:
      "احتفل بالمناسبات الخاصة مع رحلات منطاد الهواء الساخن لأعياد الميلاد، الذكرى السنوية، حفلات التخرج، الخطوبات، حفلات الزفاف، حفلات المواليد، التقاعد، واحتفالات رأس السنة الجديدة!",
    featured: true,
    title: "المناسبات الاحتفالية",
    price_adult: "",
    price_child: "",
    bookNow: true,
    short_detail:
      "احتفل بالمناسبات الخاصة مع رحلات منطاد الهواء الساخن لأعياد الميلاد، الذكرى السنوية، حفلات التخرج، الخطوبات، حفلات الزفاف، حفلات المواليد، التقاعد، واحتفالات رأس السنة الجديدة!",
    itineraries: [
      {
        feature_img: GroupBooking,
        activity: "فعالية خاصة",
        details:
          "اجمع مجموعة من 10 أشخاص أو أكثر للاحتفال بأعياد الميلاد، اللقاءات، أو أي مناسبة خاصة!",
      },
      {
        feature_img: flightDuration,
        activity: "الاحتفال بقدوم المواليد",
      },
      {
        feature_img: culturalEntertainment,
        activity: "حفلات الصديقات",
      },
      {
        feature_img: culturalEntertainment,
        activity: "الاحتفال بأعياد الميلاد والذكرى السنوية",
      },
      {
        feature_img: earlyReservation,
        activity: "ينصح بالحجز المبكر",
        details: "التقط كل لحظة مع جلسة تصوير فوتوغرافي وفيديو احترافية.",
      },
    ],
  },
];

export default ArabicPackages;
