import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card/Card";
import DrSliderArrows from "../../DrSliderArrows/Index";
import { usePathname } from "next/navigation";
import Details from "./Details/Details";
import CustomPackages from "../../../Db/packages";
import ArabicPackages from "../../../Db/arabic-packages";
import useWindowSize from "../../../Hook/useWindowSize";

import "./styles.scss";

function Index() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: false,
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
          swipeToSlide: true,
        },
      },
    ],
  };

  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [active, setActive] = useState(null);
  const [ExtraDetails, setExtraDetails] = useState([]);
  const [packagesData, setPackagesData] = useState([]);

  useEffect(() => {
    if (lang == "ar") {
      setPackagesData(ArabicPackages);
    } else {
      setPackagesData(CustomPackages);
    }
  }, [CustomPackages, ArabicPackages]);

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
      disabled={currentSlide >= CustomPackages?.length - toCut}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  return (
    <div className="flightoptons32iom9 py-60">
      <Container>
        <h2 className="tag-line mb-3">
          Customized Hot Air Balloon Packages in Dubai
        </h2>
        <Row>
          <Col md={12} lg={10}>
            {/* <div className="main-title mb-3">Explore Flight Options</div> */}
            <h3 className="main-title mb-3">
              Best Personalized Hot Air Balloon Packages
            </h3>
          </Col>
          <Col className="sliderArrows " md={12} lg={2}>
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
            {packagesData?.map((item) => (
              <Card
                {...item}
                key={item?.id}
                active={active}
                setActive={setActive}
                setExtraDetails={setExtraDetails}
              />
            ))}
          </Slider>
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
