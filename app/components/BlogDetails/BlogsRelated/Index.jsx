import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../../Common/Blogs/Card/Card";
import DrSliderArrows from "../../DrSliderArrows/Index";
import useWindowSize from "../../../Hook/useWindowSize";
import { usePathname } from "next/navigation";

import "./styles.scss";
function Index({ blog }) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
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
      disabled={currentSlide >= (blog?.length || 0) - toCut}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  // Parse blog data for related blogs
  const parseRelatedBlogs = (blogs) => {
    if (!blogs || !Array.isArray(blogs)) return [];

    return blogs.map(blogItem => {
      // Parse JSON fields with error handling
      const parseJsonField = (field, defaultValue = '') => {
        try {
          if (!field) return defaultValue;
          const parsed = JSON.parse(field);
          return parsed[lang] || parsed.en || defaultValue;
        } catch (error) {
          return defaultValue;
        }
      };

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
        ...blogItem,
        title: blogItem.title ? (typeof blogItem.title === 'string' ? JSON.parse(blogItem.title) : blogItem.title) : { en: "", ar: "" },
        excerpt: parseJsonField(blogItem.excerpt, ''),
        written_by: blogItem.written_by ? (typeof blogItem.written_by === 'string' ? JSON.parse(blogItem.written_by) : blogItem.written_by) : { en: "", ar: "" },
        content: parseJsonField(blogItem.content, ''),
        thumb: blogItem.image,
        route: blogItem.slug,
        category: parseCategories(blogItem.categories),
        readTime: blogItem.readTime ? (typeof blogItem.readTime === 'string' ? JSON.parse(blogItem.readTime) : blogItem.readTime) : { en: "5 min read", ar: "5 دقائق قراءة" },
        body: blogItem.body ? (typeof blogItem.body === 'string' ? JSON.parse(blogItem.body) : blogItem.body) : [],
        lang: lang
      };
    });
  };

  const relatedBlogs = parseRelatedBlogs(blog);

  return (
    <div className="BlogsRelated33d3 py-60">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div className="main-title mb-3">
              {lang === 'ar' ? 'المدونات ذات الصلة' : 'Related Blogs'}
            </div>
          </Col>
          <Col md={12} lg={6}>
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
          <Slider ref={sliderRef} {...settings}>
            {relatedBlogs?.map((item, i) => (
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
      </Container>
    </div>
  );
}

export default Index;
