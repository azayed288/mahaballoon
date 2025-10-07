import React, { useState } from "react";
import "./styles.scss";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import ReactWhatsapp from "react-whatsapp";
import { whatsappNo } from "../../../../config/general";
function Card(
  {
    featured,
    thumb,
    thumb_title,
    thumb_desc,
    title,
    price,
    detail,

    moreService,
    id,
    active,
    setActive,
    setExtraDetails,
  },
  props
) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  return (
    <div
      className={`AboutpkCard3232 ${lang == "ar" ? "r_dir" : "l_dir"}`}
      {...props}
    >
      <div className="ImgThumb">
        {featured && <div className="featured">Featured</div>}
        <img
          src={thumb}
          alt={title}
          title={thumb_title}
          description={thumb_desc}
        />
      </div>
      <div className="CardDIdi">
        <div className="sec-title mt-4">{title?.[lang]}</div>
        <div className="tag-line mt-2">{price?.[lang]}</div>
        <p className="para mt-2">{detail?.[lang]}</p>
      </div>
      <a
        href="https://api.whatsapp.com/send/?phone=971504209377&text=+Hi+There%2C+++I+am+interested+in+Gift.+Please+get+in+touch+with+me+to+send+me+a+customized+quote.&type=phone_number&app_absent=0"
        className="Wtp btnNl btnNl-primary mt-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {lang == "ar" ? "اتصل بنا" : "Contact us"}
      </a>
      {/* <button className={`btnNl btnNl-primary mt-2`}>Contact us</button> */}
      {/* <button
        onClick={() => {
          if (active == id) {
            setActive(null);
            setExtraDetails([]);
            return;
          }
          setActive(id);
          setExtraDetails(moreService);
        }}
        className={`${active == id ? "btnNl-primary-j" : "btnNl-secondary-j"} ${
          active == id ? "activeCard" : ""
        } w-100 d-flex justify-content-between align-items-center`}
      >
        View Details <IoIosArrowDown className="iconsvg" size={32} />
      </button> */}
    </div>
  );
}

export default Card;
