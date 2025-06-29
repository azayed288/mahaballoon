import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card/Card";
import DrSliderArrows from "../../DrSliderArrows/Index";
import useWindowSize from "../../../Hook/useWindowSize";

import "./styles.scss";
function Index(props) {


  const { lang } = props;
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
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
  const [blogs, setBlogs] = useState([]);

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
      disabled={currentSlide >= blogs?.length - toCut}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  useEffect(() => {
    fetch("https://oqnfmp6966.execute-api.us-east-1.amazonaws.com/dev/api/blog/")
      .then((res) => res.json())
      .then((data) => {
        // Parse JSON fields for each blog with better error handling
        const parsed = data.map((item) => {
          try {
            // Parse categories with proper structure handling
            const parseCategories = (categoriesField) => {
              try {
                if (!categoriesField) return { en: "category", ar: "فئة" };
                
                let categories;
                if (typeof categoriesField === 'string') {
                  categories = JSON.parse(categoriesField);
                } else {
                  categories = categoriesField;
                }
                
                if (Array.isArray(categories) && categories.length > 0) {
                  // Extract names from all categories for both languages
                  const enNames = categories
                    .map(category => category?.name?.en || '')
                    .filter(name => name !== '')
                    .join(', ');

                  const arNames = categories
                    .map(category => category?.name?.ar || '')
                    .filter(name => name !== '')
                    .join(', ');
                  
                  return {
                    en: enNames || "category",
                    ar: arNames || "فئة"
                  };
                }
                
                return { en: "category", ar: "فئة" };
              } catch (error) {
                console.error('Error parsing categories:', error, categoriesField);
                return { en: "category", ar: "فئة" };
              }
            };

            return {
              ...item,
              title: item.title ? (typeof item.title === 'string' ? JSON.parse(item.title) : item.title) : { en: "", ar: "" },
              short_des: item.short_des ? (typeof item.short_des === 'string' ? JSON.parse(item.short_des) : item.short_des) : { en: "", ar: "" },
              category: parseCategories(item.categories),
              readTime: item.readTime ? (typeof item.readTime === 'string' ? JSON.parse(item.readTime) : item.readTime) : { en: "5 min read", ar: "5 دقائق قراءة" },
              written_by: item.written_by ? (typeof item.written_by === 'string' ? JSON.parse(item.written_by) : item.written_by) : { en: "", ar: "" },
              thumb: item.image,
              route: item.slug,
              body: item.body ? (typeof item.body === 'string' ? JSON.parse(item.body) : item.body) : [],
            };
          } catch (error) {
            console.error('Error parsing blog item:', error, item);
            return {
              ...item,
              title: { en: "Error loading title", ar: "خطأ في تحميل العنوان" },
              short_des: { en: "", ar: "" },
              category: { en: "category", ar: "فئة" },
              readTime: { en: "5 min read", ar: "5 دقائق قراءة" },
              written_by: { en: "", ar: "" },
              thumb: item.image,
              route: item.slug,
              body: [],
            };
          }
        });
        setBlogs(parsed);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      });
  }, [lang]);

  return (
    <div className="BlogsHomepage33d3 py-60">
      <Container>
        <h3 className="tag-line mb-3">
          {" "}
          {props?.subTitle
            ? props?.subTitle
            : lang == "ar"
              ? "مدونات"
              : "Blogs"}
        </h3>

        <h4 className="main-title mb-3 ">
          {props?.title
            ? props?.title
            : lang == "ar"
              ? "مرشدون سياحيون حول الأشياء التي يجب القيام بها في دبي، الإمارات العربية المتحدة"
              : "Tourist Guides on Things To Do In Dubai UAE"}
        </h4>

        <div className="SliderWrapper3  mt-3 mt-md-5">
          <div className="arrowslic22dernext">
            <NextArrow />
          </div>
          <div className="arrowslic22derprev">
            <PrevArrow />
          </div>
          <Slider ref={sliderRef} {...settings}>
            {blogs?.map((item, i) => (
              <Card
                {...item}
                lang={lang}
                route={item.slug || item.route}
                slider={true}
                key={i}
              />
            ))}
          </Slider>
        </div>
        <div className="sliderArrows slider_pd-end2 mt-3">
          <DrSliderArrows prevArrow={<PrevArrow />} nextArrow={<NextArrow />} />
        </div>
      </Container>
    </div>
  );
}

export default Index;
