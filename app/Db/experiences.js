// details
//thumb
const imgt1 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/HomePage/testimonial.jpg";
// New Images
const timeline1 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Experience/step1.webp";
const timeline2 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Experience/step2.webp";
const timeline3 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Experience/step3.webp";
const timeline4 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Experience/step4.webp";

const additionalS1 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Experience/private transfer.webp";
const additionalS2 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Experience/flight video.webp";
const additionalS3 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Experience/celebration.webp";

const package1 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Homepage/Explore Our Packages1.webp";
const package2 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Homepage/Explore Our Packages2.webp";
const package3 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Homepage/Explore Our Packages3.webp";
const package4 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Homepage/Explore Our Packages4.webp";

// New Packages
const PrivateVhe =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/Private Vehicle can be booked for an Extra cost.webp";
const CertificatDt2 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/MBA Certificate A4.webp2.webp";
const camelAndHorseRide =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/ExplorePackages/CamelandHorseRide.webp";
const unlimitedRefreshment =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/Unlimited Refreshment -Tea_Coffee & water at the take-off location.webp";
const OverNightStay =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/ExplorePackages/OverNightStay.webp";
const gourmetBreakfast =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/ExplorePackages/GourmetBreakfast.webp";
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

// More Packages
const photoWIthFelcone =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/ExplorePackages/photoWIthFelcone.webp";
const Piolet =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/ExplorePackages/Piolet.webp";
const sandboarding =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/ExplorePackages/sandboarding.webp";
// nt
const pickAndDrop =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/Pick up & Drop Off (Sharing Basis) from Hotel_Residence within Dubai City.webp";

const CertificatDtl =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/MBA Certificate A4.webp1.webp";

let experiencesData = {
  ourPackages: [
    {
      id: 10,
      thumb: package1,
      featured: false,
      title: { en: "MAHA CLASSIC PACKAGE", ar: "باقة مها الكلاسيكية" },
      price_adult: "1050",
      price_child: "1000",
      bookNow: true,
      short_detail: {
        en: "Experience breathtaking beauty in the Dubai desert with our Classic Hot Air Balloon Package. Enjoy stunning panoramic views as you gently ascend into the sky at an accessible, affordable price.",
        ar: "استمتع بجمال الصحراء الخلاب في دبي مع باقة المنطاد الكلاسيكية. تمتع بإطلالات بانورامية رائعة وأنت تحلق بلطف في السماء بسعر مناسب ومتاح للجميع.",
      },
      itineraries: [
        {
          feature_img: unlimitedRefreshment,
          activity: { en: "Unlimited Refreshment", ar: "مشروبات غير محدودة" },
          details: {
            en: "Stay refreshed with unlimited beverages throughout your adventure.",
            ar: "استمتع بالمشروبات المنعشة غير المحدودة طوال مغامرتك.",
          },
        },
        {
          feature_img: pickAndDrop,
          activity: { en: "Pick up & drop off", ar: "الاستقبال والتوصيل" },
          details: {
            en: "Enjoy convenient pick-up and drop-off services to make your experience hassle-free.",
            ar: "استمتع بخدمة التوصيل والاستقبال المريحة لجعل تجربتك خالية من المتاعب.",
          },
        },
      ],
    },
    {
      id: 9,
      thumb: package2,
      featured: true,
      title: { en: "MAHA MAJESTIC PACKAGE", ar: "باقة مها الفاخرة" },
      price_adult: "1149",
      price_child: "1099",
      bookNow: true,
      short_detail: {
        en: "Elevate your adventure with our Deluxe Package. Enjoy exclusive extras and luxurious touches as you float gently over the stunning Dubai desert at sunrise, ensuring a memorable, sophisticated journey.",
        ar: "ارفع مستوى مغامرتك مع باقتنا الفاخرة. استمتع بإضافات حصرية ولمسات فاخرة بينما تحلق برفق فوق صحراء دبي الخلابة عند شروق الشمس، مما يضمن رحلة راقية لا تُنسى.",
      },
      itineraries: [
        {
          feature_img: pickAndDrop,
          activity: {
            en: "Pick up & drop off (Sharing) Private Vehicle (Extra cost )",
            ar: "الاستقبال والتوصيل (مشترك) مركبة خاصة (بتكلفة إضافية)",
          },
          details: {
            en: "Enjoy convenient pick-up and drop-off services to make your experience hassle-free.",
            ar: "استمتع بخدمة التوصيل والاستقبال المريحة لجعل تجربتك خالية من المتاعب.",
          },
        },
        {
          feature_img: unlimitedRefreshment,
          activity: {
            en: "Unlimited Refreshment, Gourmet Breakfast at the camp after the ride",
            ar: "مشروبات غير محدودة، إفطار فاخر في المخيم بعد الرحلة",
          },
          details: {
            en: "Stay refreshed with unlimited beverages throughout your adventure.",
            ar: "استمتع بالمشروبات المنعشة غير المحدودة طوال مغامرتك.",
          },
        },
        {
          feature_img: flightDuration,
          activity: {
            en: "Flight duration 45-60 minutes",
            ar: "مدة الطيران 45-60 دقيقة",
          },
          details: {
            en: "Enjoy a breathtaking flight that lasts between 45 to 60 minutes, offering stunning aerial views.",
            ar: "استمتع برحلة جوية خلابة تدوم بين 45 إلى 60 دقيقة، مع إطلالات جوية مذهلة.",
          },
        },
        {
          feature_img: CertificatDtl,
          activity: {
            en: "Flying Experience Certificate signed by the Pilot",
            ar: "شهادة تجربة الطيران موقعة من الطيار",
          },
          details: {
            en: "Receive a personalized flying experience certificate signed by your pilot as a cherished memento.",
            ar: "احصل على شهادة تجربة الطيران موقعة من الطيار كتذكار مميز.",
          },
        },
      ],
    },
    {
      id: 8,
      thumb: package4,
      featured: true,
      title: { en: "MAHA ROYAL PACKAGE", ar: "باقة مها الملكية" },
      price_adult: "1349",
      price_child: "1299",
      bookNow: true,
      short_detail: {
        en: "Enjoy a complete desert experience with pick-up and drop-off from Dubai. Start with unlimited refreshments before an unforgettable 45-60 minute hot air balloon flight, followed by a signed flight certificate.",
        ar: "استمتع بتجربة صحراوية متكاملة مع الاستقبال والتوصيل من دبي. ابدأ بمشروبات غير محدودة قبل رحلة منطاد لا تُنسى تدوم 45-60 دقيقة، متبوعة بشهادة طيران موقعة.",
      },
      itineraries: [
        {
          feature_img: pickAndDrop,
          activity: {
            en: "Pick up & drop off (Sharing) Private Vehicle (Extra cost )",
            ar: "الاستقبال والتوصيل (مشترك) مركبة خاصة (بتكلفة إضافية)",
          },
          details: {
            en: "Enjoy convenient pick-up and drop-off services to make your experience hassle-free.",
            ar: "استمتع بخدمة التوصيل والاستقبال المريحة لجعل تجربتك خالية من المتاعب.",
          },
        },
        {
          feature_img: unlimitedRefreshment,
          activity: {
            en: "Unlimited Refreshment, Gourmet Breakfast at the camp after the ride",
            ar: "مشروبات غير محدودة، إفطار فاخر في المخيم بعد الرحلة",
          },
          details: {
            en: "Stay refreshed with unlimited beverages throughout your adventure.",
            ar: "استمتع بالمشروبات المنعشة غير المحدودة طوال مغامرتك.",
          },
        },
        {
          feature_img: camelAndHorseRide,
          activity: {
            en: "Camel & Horse ride | Quad biking, Dune Bashing",
            ar: "ركوب الجمال والخيول | ركوب الدراجات الرباعية والتزلج على الرمال",
          },
          details: {
            en: "Experience the thrill of camel and horse rides, quad biking, and exhilarating dune bashing.",
            ar: "استمتع بتجربة مشوقة من ركوب الجمال والخيول، ركوب الدراجات الرباعية، والانزلاق فوق الكثبان الرملية.",
          },
        },
        {
          feature_img: photoWIthFelcone,
          activity: { en: "Photo with Falcon", ar: "التصوير مع الصقر" },
          details: {
            en: "Capture a memorable moment with a majestic falcon for a unique keepsake.",
            ar: "التقط لحظة لا تُنسى مع صقر مهيب كتذكار فريد.",
          },
        },
        {
          feature_img: flightDuration,
          activity: {
            en: "Flight duration 45-60 minutes",
            ar: "مدة الطيران 45-60 دقيقة",
          },
          details: {
            en: "Enjoy a breathtaking flight that lasts between 45 to 60 minutes, offering stunning aerial views.",
            ar: "استمتع برحلة جوية خلابة تدوم بين 45 إلى 60 دقيقة، مع إطلالات جوية مذهلة.",
          },
        },
        {
          feature_img: CertificatDtl,
          activity: {
            en: "Flying Experience Certificate signed by the Pilot",
            ar: "شهادة تجربة الطيران موقعة من الطيار",
          },
          details: {
            en: "Receive a personalized flying experience certificate signed by your pilot as a cherished memento.",
            ar: "احصل على شهادة تجربة الطيران موقعة من الطيار كتذكار مميز.",
          },
        },
      ],
    },
  ],
  timeLine: [
    {
      thumb: timeline1,
      title: {
        en: "Afternoon Pick-Up & Desert Adventure",
        ar: "الاستقبال بعد الظهر ومغامرة في الصحراء",
      },
      disc: {
        en: "Start your journey with an afternoon pick-up from your hotel or residence in Dubai. Enjoy thrilling dune bashing, camel rides, sandboarding, and henna painting at the desert camp. All this is done with a welcome drink, live entertainment shows, and a buffet barbeque dinner. At the desert camp, enjoy thrilling dune bashing, camel rides, sandboarding, and henna painting. Enjoy a welcome drink and live entertainment shows with a buffet barbeque dinner.",
        ar: "ابدأ رحلتك مع الاستقبال بعد الظهر من فندقك أو مكان إقامتك في دبي. استمتع بتجربة مشوقة في الصحراء تشمل التزلج على الرمال، ركوب الجمال، والتزيين بالحناء داخل المخيم الصحراوي. كل ذلك مع مشروب ترحيبي، عروض ترفيهية مباشرة، وعشاء مشوي فاخر على طراز البوفيه.",
      },
    },
    {
      thumb: timeline2,
      title: {
        en: "Overnight Stay at the Desert Camp",
        ar: "إقامة ليلية في المخيم الصحراوي",
      },
      disc: {
        en: "After an exciting evening, relax with an overnight stay under the stars at the camp, surrounded by the serene desert landscape.",
        ar: "بعد أمسية مليئة بالمغامرات، استرخِ مع إقامة ليلية تحت السماء المرصعة بالنجوم في المخيم، وسط أجواء الصحراء الهادئة.",
      },
    },
    {
      thumb: timeline3,
      title: {
        en: "Early Morning Pick-Up for Hot Air Balloon Ride",
        ar: "الاستقبال فجراً لرحلة منطاد الهواء الساخن",
      },
      disc: {
        en: "Wake up early for a 4:00 AM pick-up, heading to the hot air balloon location. Enjoy unlimited refreshments before the flight.",
        ar: "استيقظ مبكرًا للاستقبال الساعة 4:00 فجراً والتوجه إلى موقع منطاد الهواء الساخن. استمتع بالمشروبات المنعشة غير المحدودة قبل الإقلاع.",
      },
    },
    {
      thumb: timeline4,
      title: {
        en: "Hot Air Balloon Ride & Gourmet Breakfast",
        ar: "رحلة منطاد الهواء الساخن وإفطار فاخر",
      },
      disc: {
        en: "Take to the skies for a 45-60 minute flight over the desert, followed by a gourmet breakfast at the camp. Receive a flying experience certificate signed by the pilot before drop-off.",
        ar: "حلّق في السماء لمدة 45-60 دقيقة فوق الصحراء، ثم استمتع بإفطار فاخر في المخيم. ستحصل على شهادة تجربة الطيران موقعة من الطيار قبل العودة.",
      },
    },
  ],
  // timeLine: [
  //   {
  //     thumb: timeline1,
  //     title: { en: "Afternoon Pick-Up & Desert Adventure", ar: "" },
  //     disc: {
  //       en: "Start your journey with an afternoon pick-up from your hotel or residence in Dubai. Enjoy thrilling dune bashing, camel rides, sandboarding, and henna painting at the desert camp. All this is done with a welcome drink, live entertainment shows, and a buffet barbeque dinner. At the desert camp, enjoy thrilling dune bashing, camel rides, sandboarding, and henna painting. Enjoy a welcome drink and live entertainment shows with a buffet barbeque dinner.",
  //       ar: "",
  //     },
  //   },
  //   {
  //     thumb: timeline2,

  //     title: { en: "Overnight Stay at the Desert Camp", ar: "" },
  //     disc: {
  //       en: "After an exciting evening, relax with an overnight stay under the stars at the camp, surrounded by the serene desert landscape.",
  //       ar: "",
  //     },
  //   },
  //   {
  //     thumb: timeline3,

  //     title: { en: "Early Morning Pick-Up for Hot Air Balloon Ride", ar: "" },
  //     disc: {
  //       en: "Wake up early for a 4:00 AM pick-up, heading to the hot air balloon location. Enjoy unlimited refreshments before the flight.",
  //       ar: "",
  //     },
  //   },
  //   {
  //     thumb: timeline4,
  //     title: { en: "Hot Air Balloon Ride & Gourmet Breakfast", ar: "" },
  //     disc: {
  //       en: "Take to the skies for a 45-60 minute flight over the desert, followed by a gourmet breakfast at the camp. Receive a flying experience certificate signed by the pilot before drop-off.",
  //       ar: "",
  //     },
  //   },
  // ],
  additionalServices: [
    {
      id: 33,
      title: { en: "Flight Video", ar: "فيديو الرحلة" },
      price: { en: "From AED 250", ar: "ابتداءً من 250 درهم" },
      thumb: additionalS2,
      thumb_title:
        "رحلة منطاد في دبي | أنشطة المغامرات في دبي | مها منطاد للمغامرات",
      thumb_desc:
        "استمتع برحلة منطاد مثيرة فوق صحراء دبي مع مها منطاد للمغامرات، والتقط مشاهد خلابة.",
      detail: {
        en: "Take your memories with you by purchasing an edited digital copy of your flight (download link sent via email or WhatsApp).",
        ar: "احتفظ بذكرياتك من خلال شراء نسخة رقمية معدلة من رحلتك (يتم إرسال رابط التنزيل عبر البريد الإلكتروني أو الواتساب).",
      },
      services: [],
    },
    {
      id: 34,
      title: { en: "Celebration Package", ar: "باقة الاحتفال" },
      price: { en: "From AED 300", ar: "ابتداءً من 300 درهم" },
      thumb: additionalS3,
      thumb_title:
        "منطاد الهواء الساخن في الإمارات | احتفالات في دبي | مها منطاد للمغامرات",
      thumb_desc:
        "احتفل فوق منطاد الهواء الساخن في دبي مع مها منطاد للمغامرات، واستمتع بمناظر خلابة وتجربة لا تُنسى.",
      detail: {
        en: "Celebrate life’s special moments with a breathtaking experience in the sky. Whether it's a birthday, anniversary, proposal, or milestone event, make lasting memories with a unique adventure that turns every occasion into an unforgettable journey.",
        ar: "احتفل بلحظات حياتك الخاصة مع تجربة ساحرة في السماء. سواء كان عيد ميلاد، ذكرى سنوية، عرض زواج، أو مناسبة مميزة، اصنع ذكريات تدوم مع مغامرة فريدة تجعل كل مناسبة تجربة لا تُنسى.",
      },
      services: [],
    },
    {
      id: 35,
      title: { en: "Private transfer", ar: "نقل خاص" },
      price: { en: "From AED 600-800", ar: "ابتداءً من 600-800 درهم" },
      thumb: pickAndDrop,
      thumb_title:
        "رحلات منطاد الهواء الساخن الخاصة | نقل خاص في دبي | مها منطاد للمغامرات",
      thumb_desc:
        "استمتع برحلة منطاد خاصة مع خدمة التوصيل من وإلى جميع أنحاء دبي لتجربة سلسة في صحراء العرب.",
      detail: {
        en: "(In City AED 600 for Private 4x4 vehicle for pick up and drop off within Dubai city. AED 800 for pick-ups outside Dubai City- Jebel Ali, Bab Al Shams, and Sharjah). Please contact us for pick up from other Emirates.",
        ar: "(داخل المدينة: 600 درهم للمركبة الخاصة 4x4 لنقل خاص داخل مدينة دبي. خارج دبي: 800 درهم لمناطق جبل علي، باب الشمس، والشارقة). يرجى التواصل معنا للاستفسار عن النقل من إمارات أخرى.",
      },
      services: [],
    },
  ],
  // additionalServices: [
  //   {
  //     id: 33,
  //     title: { en: "Flight Video", ar: "" },
  //     price: { en: "From AED 250", ar: "" },
  //     thumb: additionalS2,
  //     thumb_title:
  //       "Balloon flight dubai	| Adventure Activities dubai  |Maha Balloon Adventures",
  //     thumb_desc:
  //       "Enjoy a thrilling balloon flight video over the Arabian Desert in Dubai with Maha Balloon Adventures, capturing stunning scenery.",
  //     detail: {
  //       en: "Take your memories with you by purchasing an edited digital copy of your flight (download link sent via email or WhatsApp).",
  //       ar: "",
  //     },
  //     services: [],
  //   },
  //   {
  //     id: 34,
  //     title: { en: "Celebration Package", ar: "" },
  //     price: { en: "From AED 300", ar: "" },
  //     thumb: additionalS3,
  //     thumb_title:
  //       "Hot air balloon uae | Celebration in Dubai | Maha Balloon Adventures",
  //     thumb_desc:
  //       "Celebrate over the Hot air balloon in Dubai with Maha Balloon Adventures, offering spectacular views and unforgettable experiences.",
  //     detail: {
  //       en: "Celebrate life’s special moments with a breathtaking experience in the sky. Whether it's a birthday, anniversary, proposal, or milestone event, make lasting memories with a unique adventure that turns every occasion into an unforgettable journey.",
  //       ar: "",
  //     },
  //     services: [],
  //   },
  //   {
  //     id: 35,
  //     title: { en: "Private transfer", ar: "" },
  //     price: { en: "From AED 600-800", ar: "" },
  //     thumb: pickAndDrop,
  //     thumb_title:
  //       "Private Hot Air Balloon Rides | Private transfer all over Dubai |Maha Balloon Adventures",
  //     thumb_desc:
  //       "Experience private hot air balloon rides with convenient pick-up and drop-off across Dubai for a seamless Arabian Desert adventure. ",
  //     detail: {
  //       en: "(In City AED 600 for Private 4x4 vehicle for pick up and drop off within Dubai city. AED 800 for pick-ups outside Dubai City- Jebel Ali, Bab Al Shams, and Sharjah). Please contact us for pick up from other Emirates",
  //       ar: "",
  //     },
  //     services: [],
  //   },
  // ],
  faqsList: [
    {
      id: 0,
      qes: {
        en: "What can I expect during the hot air balloon ride?",
        ar: "",
      },
      ans: {
        en: "During your flight, you'll experience a smooth, peaceful ascent into the sky, offering breathtaking views of Dubai's stunning desert landscapes. It's a serene, unforgettable adventure conducted by highly experienced and certified pilots.",
        ar: "",
      },
    },
    {
      id: 1,
      qes: {
        en: "How early do balloon rides start?",
        ar: "",
      },
      ans: {
        en: "Balloon rides often start at sunrise between 5-6 AM when the weather is perfect for smooth and secure flights.",
        ar: "",
      },
    },
    {
      id: 2,
      qes: {
        en: "What is the duration of the entire experience?",
        ar: "",
      },
      ans: {
        en: "The whole experience takes approximately 3 to 4 hours; this includes transport, briefing, 45 to 60 minutes of flight time, and other activities thereafter,",
        ar: "",
      },
    },
    {
      id: 3,
      qes: {
        en: "Is the flight suitable for all ages?",
        ar: "",
      },
      ans: {
        en: "Flights are available for passengers aged from 5 up to 80 years old. However, children below 18 should be accompanied by an adult. In addition, young ones who are less than 5 and individuals above 80 cannot take part for security reasons.",
        ar: "",
      },
    },
    {
      id: 4,
      qes: {
        en: "Can I take photographs during the flight?",
        ar: "",
      },
      ans: {
        en: "Absolutely! Photographs taken from the balloon are breathtaking, and one can capture some magnificent desert scenery.",
        ar: "",
      },
    },
    {
      id: 5,
      qes: {
        en: "What happens if there are high winds or bad weather?",
        ar: "",
      },
      ans: {
        en: "In case of poor weather that would not allow for a tour, we reschedule your flight on the next available date. If such is not feasible, you will be issued a refund within ten working days.",
        ar: "",
      },
    },
    {
      id: 6,
      qes: {
        en: "Do you provide helmets or safety gear?",
        ar: "",
      },
      ans: {
        en: "Helmets and other safety gear are generally not required, as the flight is smooth. However, all necessary safety measures are taken, and safety protocols are strictly followed.",
        ar: "",
      },
    },
    {
      id: 7,
      qes: {
        en: "How high do the balloons fly?",
        ar: "",
      },
      ans: {
        en: "Normally, it varies between skies of around 1,000-3,000 feet above land depending on their ability to rise which gives a chance for excellent panoramas.",
        ar: "",
      },
    },
    {
      id: 8,
      qes: {
        en: "Are the balloon rides accessible for people with disabilities?",
        ar: "",
      },
      ans: {
        en: "Some providers offer accessibility options, but it’s best to confirm in advance to ensure accommodations for any special needs.",
        ar: "",
      },
    },
    {
      id: 9,
      qes: {
        en: "What is the weight limit for passengers?",
        ar: "",
      },
      ans: {
        en: "The maximum weight limit for each guest is limited to 120kg. Exceeding this limit may require the pilot’s approval as well as extra fees on top of it.",
        ar: "",
      },
    },
    {
      id: 10,
      qes: {
        en: "Can I fly alone, or do I need to be in a group?",
        ar: "",
      },
      ans: {
        en: "You may opt for solo flights or search for group ones according to your taste. Independent private bookings are meant for individuals or groups also available.",
        ar: "",
      },
    },
    {
      id: 11,
      qes: {
        en: "What is the procedure for boarding the balloon?",
        ar: "",
      },
      ans: {
        en: "There will be footholds used to help you climb into the basket. Thus getting in is easy and the ground crew will ensure that all are safely inside before takeoff time elapses.",
        ar: "",
      },
    },
    {
      id: 12,
      qes: {
        en: "Can I extend the duration of my balloon ride?",
        ar: "",
      },
      ans: {
        en: "More often than not the duration of flights is set but extensions can be granted on request through special packages.",
        ar: "",
      },
    },
    {
      id: 13,
      qes: {
        en: "What types of balloons do you use?",
        ar: "",
      },
      ans: {
        en: "The sizes of our balloons are distinctive depending on the number of people in there. The larger ones that carry from 20-24 passengers serve the purposes of shared flights whereas smaller ones targeted for private use hold up to 6 people at most.",
        ar: "",
      },
    },
    {
      id: 14,
      qes: {
        en: "Is there a minimum booking requirement for private flights?",
        ar: "",
      },
      ans: {
        en: "Yes, there is a minimum requirement. The requirement varies across the different balloon sizes and levels of service requested. Customizable according to your preference private flight booking details are available.",
        ar: "",
      },
    },
    {
      id: 15,
      qes: {
        en: "Do you provide transportation to the landing site?",
        ar: "",
      },
      ans: {
        en: "Yes sure! You can be picked up and dropped off around Dubai for seamless travel.",
        ar: "",
      },
    },
    {
      id: 16,
      qes: {
        en: "Are there any food or drink options during the flight?",
        ar: "",
      },
      ans: {
        en: "Food and drinks are generally not served during the flight, but some packages include refreshments after landing.",
        ar: "",
      },
    },
    {
      id: 17,
      qes: {
        en: "Are there any food or drink options during the flight?",
        ar: "",
      },
      ans: {
        en: "Food and drinks are generally not served during the flight, but some packages include refreshments after landing.",
        ar: "",
      },
    },
    {
      id: 18,
      qes: {
        en: "Can I arrange a surprise balloon ride for someone?",
        ar: "",
      },
      ans: {
        en: "Yes! We can help you plan a surprise balloon ride for special occasions like birthdays, anniversaries, or proposals, with customizable touches to make the experience memorable.",
        ar: "",
      },
    },
    {
      id: 19,
      qes: {
        en: "What is the best time of year for a balloon ride in Dubai?",
        ar: "",
      },
      ans: {
        en: "The best time for balloon rides is between October and April when the weather is cooler and more favorable for outdoor activities.",
        ar: "",
      },
    },
    {
      id: 20,
      qes: {
        en: "Do you offer sunrise photography sessions?",
        ar: "",
      },
      ans: {
        en: "Yes, sunrise balloon rides are ideal for photography, providing stunning lighting and views. Many guests use this opportunity for memorable photos.",
        ar: "",
      },
    },
    {
      id: 21,
      qes: {
        en: "Can I request a specific flight time or date?",
        ar: "",
      },
      ans: {
        en: "Definitely. You can make requests for specific dates or flights; however, things like weather and existing reservations will affect whether those requests can be fulfilled.",
        ar: "",
      },
    },
    {
      id: 22,
      qes: {
        en: "What is the policy for no-shows or late arrivals?",
        ar: "",
      },
      ans: {
        en: "If you do not turn up at all, or arrive late, the full charge applies as this would be deemed cancellation. Always arrive on time at the specified pick-up point.",
        ar: "",
      },
    },
    {
      id: 23,
      qes: {
        en: "Can I combine a balloon ride with a sunset dinner?",
        ar: "",
      },
      ans: {
        en: "In most cases, balloon flights happen during sunrise, but we can help schedule some other activities such as having your flight after which you can enjoy lunch prepared by professionals or celebrate your special occasions.",
        ar: "",
      },
    },
    {
      id: 24,
      qes: {
        en: "What is the cancellation policy for extreme weather conditions?",
        ar: "",
      },
      ans: {
        en: "When extreme weather forces us to cancel flights, customers are allowed to either reschedule or refund their money completely according to our refund policy.",
        ar: "",
      },
    },
    {
      id: 25,
      qes: {
        en: "Can I bring a picnic or personal snacks on the flight?",
        ar: "",
      },
      ans: {
        en: "Pilots don’t permit packing personal foodstuffs including picnics inside during traveling time due to the occurrence of safety and congestion problems; however, passengers can opt for refreshing drinks immediately after they reach down.",
        ar: "",
      },
    },
  ],
};

export default experiencesData;
