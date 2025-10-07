import React, { useState } from "react";
import "./styles.scss";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { setBooking } from "../../../../store/booking";
import ReactWhatsapp from "react-whatsapp";
import { whatsappNo } from "../../../../config/general";
function Card(props) {
  const {
    featured,
    thumb,
    title,
    price_adult,
    price_child,
    short_details,
    moreService,
    id,
    active,
    setActive,
    setExtraDetails,
    reserve,
  } = props;
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const dispatch = useDispatch();

  return (
    <div
      className={`pk212Card32  ${lang == "ar" ? "r_dir" : "l_dir"}`}
      {...props}
    >
      <div className="ImgThumb">
        {featured ? <div className="featured">Featured</div> : null}
        <img src={thumb} alt="" loading="lazy" />
      </div>
      <div className="detials39">
        <div className="sec-title mt-4">{title}</div>
        <div className="tag-line mt-2">
          {price_adult ? (
            <>
              {lang == "ar" ? "الكبار: درهم" : "ADULTS: AED"} {price_adult}
            </>
          ) : lang == "ar" ? (
            "السعر عند الطلب"
          ) : (
            "PRICE ON REQUEST"
          )}{" "}
          /{"  "}
          {lang == "ar" ? "الطفل: درهم" : "CHILD: AED"}{" "}
          {price_child ? <>{price_child}</> : "NA"}
        </div>
        <p className="para">{short_details}</p>
      </div>
      {/* <p className="para mt-2">{details}</p> */}
      {reserve ? (
        <div className="reservieBtns">
          {moreService ? (
            <button
              onClick={() => {
                if (active == id) {
                  setActive(null);
                  setExtraDetails(null);
                  return;
                }
                setActive(id);
                setExtraDetails(moreService);
              }}
              className={`${
                active == id ? "btnNl-primary-j" : "btnNl-secondary-j"
              } ${
                active == id ? "activeCard" : ""
              } d-flex justify-content-between align-items-center`}
            >
              {lang == "ar" ? "عرض التفاصيل" : "View Details"}{" "}
              <IoIosArrowDown className="iconsvg" size={16} />
            </button>
          ) : null}
          <a 
            href="https://api.whatsapp.com/send/?phone=971504209377&text=+Hi+There%2C+++I+am+interested+in+Gift.+Please+get+in+touch+with+me+to+send+me+a+customized+quote.&type=phone_number&app_absent=0"
            className="Wtp btnNl btnNl-primary-j"
            target="_blank"
            rel="noopener noreferrer"
          >
            {lang == "ar" ? "احتياطي" : "Reserve"}
          </a>
        </div>
      ) : (
        <div>
          {moreService ? (
            <button
              onClick={() => {
                if (active == id) {
                  setActive(null);
                  setExtraDetails(null);
                  return;
                }
                setActive(id);
                setExtraDetails(moreService);
              }}
              className={`${
                active == id ? "btnNl-primary-j" : "btnNl-secondary-j"
              } ${
                active == id ? "activeCard" : ""
              } w-100 d-flex justify-content-between align-items-center`}
            >
              {lang == "ar" ? "عرض التفاصيل" : "View Details"}{" "}
              <IoIosArrowDown className="iconsvg" size={32} />
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Card;
