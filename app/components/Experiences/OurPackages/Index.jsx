import React, { useEffect, useRef, useState } from "react";

import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card/Card";

// details
import DrSliderArrows from "../../DrSliderArrows/Index";
import Details from "./Details/Details";
import { usePathname } from "next/navigation";
import { fetchPackagesData } from "../../../api/commonApi";
import useWindowSize from "../../../Hook/useWindowSize";

import "./styles.scss";

let packagesArabic = [
  {
    id: 1,
    title: "الحزمة الكلاسيكية",
    route: "maha-classic-package",
    price_adult: "1200",
    price_child: "1150",
    short_detail:
      "استمتع بالجمال الأخاذ في صحراء دبي مع باقة منطاد الهواء الساخن الكلاسيكية. استمتع بالمناظر البانورامية المذهلة وأنت تصعد بلطف إلى السماء بسعر في متناول الجميع.",
    location: "مرغم دبي، الإمارات العربية المتحدة",
    package_image:
      "https://res.cloudinary.com/dmcknuzk4/image/upload/v1728814574/xisitklqxcezlx3ynmq9.webp",
    slug: null,
    duration: "45 - 60 دقيقة",
    seo: {},
    featured: "",
    createdAt: "2024-10-13T06:40:54.000Z",
    updatedAt: "2025-01-16T08:20:09.000Z",
    itineraries: [
      {
        id: 1,
        packageId: 1,
        activity:
          "النقل والتوصيل (على أساس المشاركة) من الفندق/الإقامة داخل مدينة دبي.",
        details: "ابق منتعشًا مع مشروبات غير محدودة طوال مغامرتك",
        feature_img:
          "http://res.cloudinary.com/dmcknuzk4/image/upload/v1728815396/q0kxuavmjcgr8volaonu.webp",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 2,
        packageId: 1,
        activity: "مرطبات غير محدودة - شاي/قهوة ومياه في موقع الإقلاع.",
        details:
          "استمتع بخدمات الاستقبال والتوصيل المريحة لتجعل تجربتك خالية من المتاعب.",
        feature_img:
          "http://res.cloudinary.com/dmcknuzk4/image/upload/v1728815624/tmypegmdbcvnroxirfep.webp",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 13,
        packageId: 1,
        activity: "مدة الرحلة 45-60 دقيقة",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 14,
        packageId: 1,
        activity: "شهادة خبرة طيران موقعة من الطيار.",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
    ],
  },
  {
    id: 2,
    title: "حزمة مهيبة",
    route: "maha-majestic-package",
    price_adult: "1300",
    price_child: "1250",
    short_detail:
      "ارفع مستوى مغامرتك مع باقتنا الفاخرة. استمتع بإضافات حصرية ولمسات فاخرة وأنت تطفو بلطف فوق صحراء دبي المذهلة عند شروق الشمس، مما يضمن لك رحلة راقية لا تُنسى.",
    location: "مرغم دبي، الإمارات العربية المتحدة",
    package_image:
      "https://res.cloudinary.com/dmcknuzk4/image/upload/v1731048600/ff0p3dorlebgcdzdj3vn.webp",
    slug: null,
    duration: "45 - 60 دقيقة",
    seo: {},
    featured: "",
    createdAt: "2024-10-13T06:46:34.000Z",
    updatedAt: "2024-12-18T13:47:45.000Z",
    itineraries: [
      {
        id: 3,
        packageId: 2,
        activity:
          "النقل والتوصيل (على أساس المشاركة) من الفندق/الإقامة داخل مدينة دبي.",
        details:
          "استمتع بخدمات الاستقبال والتوصيل المريحة لتجعل تجربتك خالية من المتاعب.",
        feature_img:
          "http://res.cloudinary.com/dmcknuzk4/image/upload/v1728815624/tmypegmdbcvnroxirfep.webp",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 4,
        packageId: 2,
        activity: "مرطبات غير محدودة - شاي/قهوة ومياه قبل الإقلاع",
        details: "ابق منتعشًا مع مشروبات غير محدودة طوال مغامرتك.",
        feature_img:
          "http://res.cloudinary.com/dmcknuzk4/image/upload/v1728815396/q0kxuavmjcgr8volaonu.webp",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-25T11:49:20.000Z",
      },
      {
        id: 5,
        packageId: 2,
        activity: "الإفطار الذواقة في المخيم بعد الرحلة",
        details:
          "استمتع برحلة تحبس الأنفاس تستمر ما بين 45 إلى 60 دقيقة، وتتمتع بمناظر جوية خلابة.",
        feature_img:
          "http://res.cloudinary.com/dmcknuzk4/image/upload/v1728815820/oznlc4fdoo1dzmcofjtf.webp",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 6,
        packageId: 2,
        activity: "ركوب الجمال (حوالي 10 دقائق)",
        details:
          "احصل على شهادة خبرة طيران شخصية موقعة من الطيار الخاص بك كتذكار عزيز.",
        feature_img:
          "http://res.cloudinary.com/dmcknuzk4/image/upload/v1728815950/o5uxx3xycer6a9nqilyq.webp",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 15,
        packageId: 2,
        activity: "الصورة مع فالكون",
        details: "",
        feature_img:
          "http://res.cloudinary.com/dmcknuzk4/image/upload/v1728815950/o5uxx3xycer6a9nqilyq.webp",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 16,
        packageId: 2,
        activity: "مدة الرحلة 45-60 دقيقة",
        details: "",
        feature_img:
          "http://res.cloudinary.com/dmcknuzk4/image/upload/v1728815950/o5uxx3xycer6a9nqilyq.webp",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 17,
        packageId: 2,
        activity: "شهادة خبرة طيران موقعة من الطيار",
        details: "",
        feature_img:
          "http://res.cloudinary.com/dmcknuzk4/image/upload/v1728815950/o5uxx3xycer6a9nqilyq.webp",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
    ],
  },
  {
    id: 3,
    title: "الحزمة الملكية",
    route: "maha-royal-package",
    price_adult: "1550",
    price_child: "1450",
    short_detail:
      "استمتع بتجربة صحراوية كاملة مع خدمة الاستقبال والتوصيل من دبي. ابدأ بمرطبات غير محدودة قبل رحلة لا تُنسى لمدة 45-60 دقيقة بمنطاد الهواء الساخن، تليها شهادة طيران موقعة.",
    location: "مرغم دبي، الإمارات العربية المتحدة",
    package_image:
      "http://res.cloudinary.com/dmcknuzk4/image/upload/v1728815199/fh25knkp1mxu2h0nxceo.webp",
    slug: null,
    duration: "45 - 60 دقيقة",
    seo: {},
    featured: "",
    createdAt: "2024-10-13T06:48:16.000Z",
    updatedAt: "2025-01-16T08:20:49.000Z",
    itineraries: [
      {
        id: 7,
        packageId: 3,
        activity:
          "النقل والتوصيل (على أساس المشاركة) من الفندق/الإقامة داخل مدينة دبي.",
        details: "",
        feature_img:
          "http://res.cloudinary.com/dmcknuzk4/image/upload/v1728815624/tmypegmdbcvnroxirfep.webp",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 8,
        packageId: 3,
        activity: "مرطبات غير محدودة - شاي/قهوة ومياه في موقع الإقلاع",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 9,
        packageId: 3,
        activity:
          "ركوب الجمال والحصان | ركوب الدراجات الرباعية، وقيادة الكثبان الرملية",
        details:
          "استمتع بتجربة ركوب الجمال والخيول المثيرة وركوب الدراجات الرباعية والقيادة المبهجة على الكثبان الرملية.",
        feature_img:
          "http://res.cloudinary.com/dmcknuzk4/image/upload/v1728816161/p7wq9stnamdl2ipom69y.webp",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 10,
        packageId: 3,
        activity: "بوفيه إفطار شهي في المخيم بعد الرحلة",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 11,
        packageId: 3,
        activity: "ركوب الجمال (حوالي 5-10 دقائق)",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 12,
        packageId: 3,
        activity: "ركوب الدراجات الرباعية (حوالي 10-15 دقيقة)",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 18,
        packageId: 3,
        activity: "القيادة على الكثبان الرملية (حوالي 15-20 دقيقة)",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 19,
        packageId: 3,
        activity: "الصورة مع فالكون",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 20,
        packageId: 3,
        activity: "مدة الرحلة 45-60 دقيقة",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 21,
        packageId: 3,
        activity: "شهادة خبرة طيران موقعة من الطيار",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
    ],
  },
  {
    id: 5,
    title: "حزمة الشفق طوال الليل",
    route: "maha-twilight-ballooning-overnight-package",
    price_adult: "1799",
    price_child: "1599",
    short_detail:
      "استمتع بسحر صحراء دبي مع مغامرتنا الحصرية لرحلات السفاري الليلية الفريدة التي تجمع بين إثارة التحليق فوق المناظر الطبيعية المذهلة وإقامة ليلية فاخرة تحت النجوم.",
    location: "مرغم دبي، الإمارات العربية المتحدة",
    package_image:
      "http://res.cloudinary.com/dmcknuzk4/image/upload/v1728815090/az3qoi32vwjukzbairio.webp",
    slug: null,
    duration: "45 - 60 دقيقة",
    seo: {},
    featured: "",
    createdAt: "2024-10-13T06:48:16.000Z",
    updatedAt: "2024-10-13T06:48:16.000Z",
    itineraries: [
      {
        id: 22,
        packageId: 5,
        activity: "الاستقبال والتوصيل (خاص) من الفندق/الإقامة داخل مدينة دبي.",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 23,
        packageId: 5,
        activity:
          "سيتم النقل في اليوم الأول من الفندق/الإقامة داخل مدينة دبي في حوالي الساعة 03:00 ظهرًا حتى 03:30 ظهرًا",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 24,
        packageId: 5,
        activity: "القيادة على الكثبان الرملية (حوالي 20 دقيقة)",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 25,
        packageId: 5,
        activity: "في المخيم، مشروب ترحيبي (شاي/قهوة/تمر، حلويات عربية)",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 26,
        packageId: 5,
        activity: "ركوب الجمل القصير، صورة مع الصقر، رسم الحناء.",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 27,
        packageId: 5,
        activity: "عروض المخيم الترفيهية: رقص شرقي، رقص التنورة، عرض النار",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 28,
        packageId: 5,
        activity: "بوفيه عشاء مشويات ومشروبات غازية ومياه غير محدودة",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 29,
        packageId: 5,
        activity: "المبيت في المخيم",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 30,
        packageId: 5,
        activity:
          "النقل في صباح اليوم التالي من المخيم حوالي الساعة 04:00 صباحًا متجهًا إلى موقع منطاد الهواء الساخن",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 31,
        packageId: 5,
        activity: "مرطبات غير محدودة - شاي/قهوة ومياه في موقع الإقلاع",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 32,
        packageId: 5,
        activity: "إفطار شهي في معسكر منطاد الهواء الساخن بعد الرحلة",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 33,
        packageId: 5,
        activity: "مدة الرحلة 45-60 دقيقة",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
      {
        id: 34,
        packageId: 5,
        activity: "شهادة خبرة طيران موقعة من الطيار",
        details: "",
        feature_img: "",
        createdAt: "2024-10-13T07:29:59.000Z",
        updatedAt: "2024-10-13T07:29:59.000Z",
      },
    ],
  },
];

function Index(props) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  const [active, setActive] = useState();
  const [ExtraDetails, setExtraDetails] = useState([]);
  const [packagesData, setPackagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (lang == "ar") {
      setPackagesData(packagesArabic);
    } else {
      const fetchPackageListData = async () => {
        try {
          setIsLoading(true); // Show the loader
          const { data } = await fetchPackagesData();
          if (Array.isArray(data)) {
            setPackagesData(data);
          }
        } catch (error) {
          console.error("Error fetching Data:", error);
        } finally {
          setIsLoading(false); // Hide the loader
        }
      };

      fetchPackageListData();
    }
  }, [packagesArabic]);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };
  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const PrevArrow = () => (
    <button
      className="slider_custom_arrows"
      onClick={previousSlide}
      disabled={currentSlide === 0}
    >
      <FaAngleLeft fontSize={"24px"} />
    </button>
  );

  const { width } = useWindowSize();

  let toCut = width > 992 ? 3 : width >= 776 ? 2 : 1;

  const NextArrow = () => (
    <button
      className="slider_custom_arrows ms-3"
      onClick={nextSlide}
      disabled={currentSlide >= packagesData?.length - toCut}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="ExperiencesOurPackagesk312 py-60">
      <Container>
        <div className="tag-line mb-3">Plans</div>
        <Row>
          <Col md={12} lg={6}>
            <div className="main-title mb-3">Explore Our Packages</div>
          </Col>
          <Col className="sliderArrows" md={12} lg={6}>
            <div className="sliderArrows slider_pd-end2">
              <DrSliderArrows
                prevArrow={<PrevArrow />}
                nextArrow={<NextArrow />}
              />
            </div>
          </Col>
        </Row>
        <div className="SliderWrapper3 mt-3 mt-md-5">
          <div className="arrowslic22dernext">
            <NextArrow />
          </div>
          <div className="arrowslic22derprev">
            <PrevArrow />
          </div>
          {isLoading ? (
            <p className="text-center">loading...</p>
          ) : (
            <Slider ref={sliderRef} {...settings}>
              {packagesData?.map((item) => (
                <Card
                  {...item}
                  key={item?.id}
                  active={active}
                  setActive={setActive}
                  setExtraDetails={setExtraDetails}
                  packageVal={item}
                />
              ))}
            </Slider>
          )}
        </div>
        <Row>
          {ExtraDetails
            ? ExtraDetails?.map((item, i) => (
                <Col md={12} lg={6} key={i}>
                  <Details {...item} key={i} />
                </Col>
              ))
            : null}
        </Row>
      </Container>
    </div>
  );
}

export default Index;
