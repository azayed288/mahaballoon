import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Step, Stepper } from "react-form-stepper";
import Slider from "react-slick";
import "./styles.scss";
import { usePathname } from "next/navigation";
import DrSliderArrows from "../../DrSliderArrows/Index";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const whyUsIntro =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/WhyUs/WhyYouSHouldIntro.webp";

function Index(props) {
  const { content } = props;
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [CurrentStep, setCurrentStep] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      console.log("next: ", next);
      setCurrentStep(next);
      setCurrentSlide(next);
    },
  };
  let SLidesData = [
    {
      title: { en: "Unforgettable Experiences", ar: "تجارب لا تُنسى" },
      details: {
        en: "At Maha Hot Air Balloon, every flight is a memorable adventure. Our hot air balloon rides offer breathtaking views of the Dubai desert, letting you witness stunning sunrises and vast golden dunes from a unique perspective. Whether celebrating a special occasion, planning a romantic getaway, or seeking adventure, we have you covered.",
        ar: "في مها منطاد الهواء الساخن، كل رحلة هي مغامرة لا تُنسى. توفر جولاتنا الجوية مناظر خلابة لصحراء دبي، مما يتيح لك مشاهدة شروق الشمس الساحر والكثبان الرملية الذهبية من زاوية فريدة. سواء كنت تحتفل بمناسبة خاصة، تخطط لعطلة رومانسية، أو تبحث عن مغامرة، فنحن هنا لتلبية احتياجاتك.",
      },
    },
    {
      title: { en: "Expertise and Safety", ar: "الخبرة والسلامة" },
      details: {
        en: "Safety is our top priority. Our hot air balloons are operated by experienced and certified pilots dedicated to ensuring a safe and enjoyable flight. We adhere to strict safety protocols and guidelines set by the General Civil Aviation Authority (GCAA), giving you peace of mind as you soar high above the desert.",
        ar: "السلامة هي أولويتنا القصوى. يتم تشغيل مناطيدنا من قبل طيارين ذوي خبرة ومعتمدين، ملتزمين بتوفير رحلة آمنة وممتعة. نحن نلتزم ببروتوكولات وإرشادات السلامة الصارمة التي وضعتها الهيئة العامة للطيران المدني (GCAA)، مما يمنحك راحة البال أثناء تحليقك فوق الصحراء.",
      },
    },
    {
      title: { en: "Exceptional Customer Service", ar: "خدمة عملاء متميزة" },
      details: {
        en: "From the moment you book your flight to the time you land, our dedicated team is committed to providing exceptional service. Our friendly staff will assist you with every detail, ensuring a seamless and enjoyable experience. We take pride in our hospitality, and our guests frequently commend us for our attentive and accommodating service.",
        ar: "من لحظة حجز رحلتك وحتى هبوطك، يكرس فريقنا المتفاني جهوده لتقديم خدمة استثنائية. سيساعدك موظفونا الودودون في كل التفاصيل، لضمان تجربة سلسة وممتعة. نحن نفخر بضيافتنا، وغالبًا ما يشيد ضيوفنا بخدمتنا الدقيقة والودية.",
      },
    },
    {
      title: { en: "Tailored Packages for Everyone", ar: "باقات مخصصة للجميع" },
      details: {
        en: "We offer a variety of packages to cater to different preferences and budgets. Whether you choose our Classic, Majestic, or Royal Package, each option is designed to provide a unique experience. Enjoy gourmet breakfasts, photos with falcons, camel rides, and dune bashing. Our hot air balloon rides offer a spectacular setting. Don't Miss it!",
        ar: "نقدم مجموعة متنوعة من الباقات لتناسب مختلف التفضيلات والميزانيات. سواء اخترت باقتنا الكلاسيكية أو المهيبة أو الملكية، فإن كل خيار مصمم لتقديم تجربة فريدة. استمتع بوجبات الإفطار الفاخرة، والتقاط الصور مع الصقور، وركوب الجمال، وتجربة التزلج على الرمال. رحلاتنا الجوية بالمنطاد توفر لك مشهداً رائعاً. لا تفوتها!",
      },
    },
    {
      title: {
        en: "Stunning Views and Unique Experiences",
        ar: "مناظر خلابة وتجارب فريدة",
      },
      details: {
        en: "Experience the magic of the Dubai desert like never before. Our flights typically take place just before sunrise, allowing you to capture stunning colors of the sky as the sun rises over the horizon. You’ll have the chance to see iconic landmarks, wildlife, and breathtaking landscapes, all while floating peacefully in the sky.",
        ar: "اختبر سحر صحراء دبي كما لم تفعل من قبل. تُقام رحلاتنا عادةً قبل شروق الشمس، مما يتيح لك التقاط الألوان المذهلة للسماء مع بزوغ الفجر. ستتاح لك الفرصة لرؤية المعالم الشهيرة والحياة البرية والمناظر الطبيعية الخلابة، وكل ذلك أثناء تحليقك بهدوء في السماء.",
      },
    },
    {
      title: {
        en: "Memories to Last a Lifetime",
        ar: "ذكريات تدوم مدى الحياة",
      },
      details: {
        en: "Every flight with Maha Hot Air Balloon comes with a commemorative flight certificate signed by our pilot, allowing you to remember your adventure long after you’ve landed. Additionally, our professional photography options ensure that you can capture every moment of your journey, creating memories that you can cherish forever.",
        ar: "كل رحلة مع مها منطاد الهواء الساخن تأتي بشهادة طيران تذكارية موقعة من قبل الطيار، مما يتيح لك تذكر مغامرتك حتى بعد هبوطك. بالإضافة إلى ذلك، تضمن لك خيارات التصوير الاحترافية لدينا التقاط كل لحظة من رحلتك، مما يخلق ذكريات يمكنك الاحتفاظ بها إلى الأبد.",
      },
    },
    {
      title: { en: "Book your adventure today!", ar: "احجز مغامرتك اليوم!" },
      details: {
        en: "Don’t wait to experience the breathtaking beauty of the Dubai desert from above! Reserve your hot air balloon adventure today for a truly unforgettable journey. With expert pilots and tailored packages, we promise an extraordinary experience that will leave you in awe. Embrace the magic of the skies and create lasting memories with us!",
        ar: "لا تنتظر لتجربة الجمال الخلاب لصحراء دبي من الأعلى! احجز مغامرتك في منطاد الهواء الساخن اليوم لرحلة لا تُنسى. مع طيارين خبراء وباقات مخصصة، نعدك بتجربة استثنائية ستتركك في حالة من الذهول. استمتع بسحر السماء واصنع ذكريات تدوم مدى الحياة معنا!",
      },
    },
  ];


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

  const NextArrow = () => (
    <button
      className="slider_custom_arrows ms-3"
      onClick={nextSlide}
      disabled={currentSlide >= SLidesData?.length - 1}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="IntroSLider23e py-60">
      <Container>
        <h4 className="main-title">{props?.content?.title?.[lang]}</h4>

        <div className="mt-5">
          <Slider ref={sliderRef} {...settings}>
            {SLidesData?.map((item, i) => (
              <>
                <Row
                  className={` timeLIneWrap gy-3 ${
                    lang == "ar" ? "r_dir" : "l_dir"
                  }`}
                >
                  <Col lg="6">
                    <div className="wrapper">
                      <img
                        src={whyUsIntro}
                        alt="Hot Air Balloon Dubai | Hot Air Balloon Ride Dubai | Maha Balloon Adventures "
                        title={
                          "Hot Air Balloon Dubai | Hot Air Balloon Ride Dubai | Maha Balloon Adventures "
                        }
                        description="Hot air balloon over Dubai’s desert, capturing the serene experience offered by Maha Balloon Adventures."
                      />
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="details h-100 d-flex justify-content-center flex-column">
                      <h5 className="mt-3 titleSlide">{item?.title?.[lang]}</h5>
                      <p className="para mt-3">{item?.details?.[lang]}</p>
                      <div className="sliderArrows">
                        <DrSliderArrows
                          prevArrow={<PrevArrow />}
                          nextArrow={<NextArrow />}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default Index;
