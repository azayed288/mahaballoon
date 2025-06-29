import React, { useState, useEffect, useContext } from "react";
import { lazy, Suspense } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Container, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLanguage } from "../../../context/LanguageContext";
const cart = "https://d3nt41cjjw3im8.cloudfront.net/assets/icons/cart.svg";
const heart = "https://d3nt41cjjw3im8.cloudfront.net/assets/icons/heart.svg";
const person = "https://d3nt41cjjw3im8.cloudfront.net/assets/icons/person.svg";
const avatar = "https://d3nt41cjjw3im8.cloudfront.net/avatar.png";
const navLogo = "https://d3nt41cjjw3im8.cloudfront.net/assets/mahaNav.png";
const logo = "https://d3nt41cjjw3im8.cloudfront.net/assets/Logo.png";
const AuthComp = lazy(() => import("../../Common/Auth/Index"));
const CustomerAuthComp = lazy(() => import("../../Common/CustomerAuth/Index"));
const Booking = lazy(() => import("../../Booking/Index"));
import { GoDot } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import useSize from "../../../utils/useSize";
import { useAnimate } from "framer-motion";
import { LogOutUser } from "../../../store/auth";
import { GlobalLoader } from "../../../store/globalLoader";
import "./style.scss";
import { MdOutlineLanguage } from "react-icons/md";

const MainNavbar = () => {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const router = useRouter(); // Router hook from next/navigation
  const { setLang } = useLanguage();
  const cartItems = useSelector((state) => state.cart.products);
  const UserData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isBookingModal = useSelector((state) => state.booking.isBookingModal);
  const [scrolled, setScrolled] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [CustomermodalShow, setCustomerModalShow] = useState(false); //
  const [showDropDownDesk, setshowDropDownDesk] = useState(false);
  const [showDropDownDeskAvatr, setshowDropDownDeskAvatr] = useState(false);
  const { height, width } = useSize();
  const [scope, animate] = useAnimate();
  console.log("Current Language:", lang);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (lang == "en" || lang == "ar") {
      setLang(lang);
    }
  }, []);

  const searchParams = useSearchParams();
  const userRef = searchParams.get("referral");

  useEffect(() => {
    localStorage.setItem("referral_code", userRef);
  }, [userRef]);

  const handleLogin = () => {
    setModalShow(true);
  };

  const handleCustomerLogin = () => {
    setCustomerModalShow(true);
  };
  const [hoveredItem, setHoveredItem] = useState({
    section: "experiences",
    item: null,
  });

  const translatePageContent = async (targetLanguage, appPath) => {
    console.log("🚀 ~ translatePageContent ~ targetLanguage:", targetLanguage);

    if (targetLanguage === "en") {
      router.replace(appPath);
      return;
    }

    dispatch(GlobalLoader(true));

    const elements = document.querySelectorAll(
      "*:not(script):not(style):not(meta)"
    );
    const textsToTranslate = [];
    const elementMap = [];

    elements.forEach((el) => {
      if (
        el.childNodes.length === 1 &&
        el.childNodes[0].nodeType === Node.TEXT_NODE
      ) {
        const text = el.textContent.trim();
        if (text) {
          textsToTranslate.push(text);
          elementMap.push(el);
        }
      }
    });

    if (textsToTranslate.length === 0) return;

    try {
      const chunkSize = 128;
      const textChunks = [];
      for (let i = 0; i < textsToTranslate.length; i += chunkSize) {
        textChunks.push(textsToTranslate.slice(i, i + chunkSize));
      }

      const translations = [];

      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      for (const chunk of textChunks) {
        const response = await fetch(
          "https://translation.googleapis.com/language/translate/v2?key=AIzaSyAwsu7qVMZhfwjpQfnw1GMAmrmiZlfcYBQ",
          {
            method: "POST",
            body: JSON.stringify({
              q: chunk,
              target: targetLanguage,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) {
          throw new Error(`API call failed: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.data && data.data.translations) {
          translations.push(...data.data.translations);
        }

        await delay(1000);
      }

      translations.forEach((translation, index) => {
        elementMap[index].textContent = translation.translatedText;
      });

      router.replace(appPath);
    } catch (error) {
      console.error("Translation Error:", error);
    } finally {
      dispatch(GlobalLoader(false));
    }
  };

  const handleLanguageChange = async (value) => {
    console.log("🚀 ~ handleLanguageChange ~ value:", value);
    let paths = pathname.split("/");
    const langsData = ["en", "ar"];

    if (langsData?.includes(paths?.[1])) {
      let newPath = [...paths];
      newPath[1] = value;
      const CombinePath = newPath.join("/");
      router.replace(CombinePath);
    } else {
      const defpath = `/${value}${pathname}`;
      router.replace(defpath);
    }

    setshowDropDownDesk(false);
  };

  useEffect(() => {
    if (lang !== "en") {
      translatePageContent(lang, pathname);
    }
  }, [pathname, lang]);

  const closeToggler = () => {
    document.getElementById("responsive-navbar-nav").className =
      "navbar-collapse collapse";
  };
  const OpenToggler = () => {
    document.getElementById("responsive-navbar-nav").className =
      "navbar-collapse collapse show";
  };
  const handleMouseEnter = (section, item) => {
    setHoveredItem({ section, item });
  };

  const handleMouseLeave = () => {
    setHoveredItem({ section: "experiences", item: null });
  };

  const TogglerLang = () => {
    setshowDropDownDesk(!showDropDownDesk);
  };
  const getContent = (section, item) => {
    const content = {
      experiences: {
        all: {
          title: { en: "All Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
        "standard-balloon-rides": {
          title: { en: "Standard Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
        "luxury-balloon-rides": {
          title: { en: "Luxury Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
        "private-balloon-rides": {
          title: { en: "Private Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
        "special-packages": {
          title: { en: "Special Packages", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
      },
    };

    return (
      content[section][item] || {
        title: { en: "", ar: "" },
        description: { en: "", ar: "" },
      }
    );
  };

  const { section, item } = hoveredItem;
  const content = getContent(section, item);

  useEffect(() => {}, []);

  return (
    <>
      <Suspense fallback={"Loading..."}>
        <AuthComp
          show={modalShow}
          setShow={setModalShow}
          onHide={() => setModalShow(false)}
        />
      </Suspense>
      {/* cust log */}
      {CustomermodalShow ? (
        <Suspense fallback={"Loading..."}>
          <CustomerAuthComp
            show={CustomermodalShow}
            onHide={() => setCustomerModalShow(false)}
          />
        </Suspense>
      ) : null}
      <Suspense fallback={"Loading..."}>
        <Booking />
      </Suspense>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`navbar-area ${
          scrolled ? "fixed-top BgScroll" : "fixed-top"
        } ${lang === "ar" ? "r_dir" : "l_dir"}`}
      >
        <Container fluid={width <= 1200 ? true : false}>
          <Navbar.Brand href={`/${lang}`}>
            <div className="brandWrapper">
              <img
                className="imageWrapper"
                src={navLogo}
                alt="logo"
                width="180px"
              />
              <img
                src={logo}
                alt="Logo"
                className="imageWrapper MobilNavLogo"
              />
            </div>
          </Navbar.Brand>

          <div className="d-flex gap-1">
            <div className="mobile_nav_icon">
              <Navbar></Navbar>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* //# Mobile Nav Icons */}
            <div className="NavBtMobl">
              <div className="iconsWrapper IconMobile">
                {
                  <Dropdown
                    className={`lang_dropdown lang_dropdownMobil borderEnd ${
                      lang === "ar" ? "lang_dropdownAr" : "lang_dropdownEn"
                    }`}
                    show={showDropDownDesk}
                  >
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      // onClick={TogglerLang}
                      onClick={() => {
                        setshowDropDownDesk(!showDropDownDesk);
                        setshowDropDownDeskAvatr(false);
                      }}
                    >
                      <MdOutlineLanguage size={25} />
                    </Dropdown.Toggle>
                    {showDropDownDesk ? (
                      <Dropdown.Menu className="dropItemsList">
                        <Dropdown.Item disabled>Language</Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleLanguageChange("en")}
                          className={
                            lang === "en" ? "active langItem" : "langItem"
                          }
                        >
                          <GoDot className="icon_lang" />
                          English
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleLanguageChange("ar")}
                          className={
                            lang === "ar" ? "active langItem" : "langItem"
                          }
                        >
                          <GoDot className="icon_lang" />
                          Arabic
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    ) : null}
                  </Dropdown>
                }

                {
                  <div
                    className="icons2"
                    onClick={() => {
                      router.push(`/${lang}/wishlist`);
                    }}
                  >
                    <span>0</span>
                    <FaRegHeart size={20} />
                  </div>
                }
                {
                  <div
                    ref={scope}
                    className=" icons2"
                    onClick={() => {
                      // dispatch(clearCart());
                      router.push(`/${lang}/cart`);
                    }}
                  >
                    <span>{cartItems?.length}</span>
                    <IoCartOutline size={25} />
                  </div>
                }
                <div
                  className="icons1"
                  onClick={(e) => {
                    if (UserData?.isAuth) {
                      return;
                    }
                    handleCustomerLogin(e);
                  }}
                >
                  {UserData?.isAuth ? (
                    <>
                      <Dropdown
                        className={`lang_dropdown lang_dropdownMobil ${
                          lang === "ar" ? "lang_dropdownAr" : "lang_dropdownEn"
                        }`}
                        show={showDropDownDeskAvatr}
                      >
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic2"
                          // onClick={TogglerLang}
                          onClick={() => {
                            setshowDropDownDeskAvatr(!showDropDownDeskAvatr);
                            setshowDropDownDesk(false);
                          }}
                        >
                          <img
                            src={avatar}
                            alt=""
                            height={25}
                            width={25}
                            className="avatrk"
                          />
                        </Dropdown.Toggle>
                        {showDropDownDeskAvatr ? (
                          <Dropdown.Menu className="dropItemsList">
                            <Dropdown.Item
                              onClick={() => dispatch(LogOutUser())}
                              className={
                                lang === "ar"
                                  ? "langItem link_Itemsk"
                                  : "langItem link_Itemsk"
                              }
                            >
                              <GoDot className="icon_lang" />
                              Logout
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        ) : null}
                      </Dropdown>
                    </>
                  ) : (
                    <FaRegUser size={20} />
                  )}
                </div>
              </div>
              {UserData?.isAuth ? (
                ""
              ) : (
                <button
                  className={
                    scrolled
                      ? "btnNl btnNl-primary btnNl-nav logBtn borderfixed"
                      : "btnNl btnNl-primary logBtn"
                  }
                  onClick={(e) => {
                    if (UserData?.isAuth) {
                      return;
                    }
                    handleLogin(e);
                  }}
                >
                  B2B Login
                </button>
              )}
            </div>

            <Nav className="mx-auto">
              {/* <Nav.Link
                onClick={() => closeToggler()}
                href={routeMappings[lang]?.whyChooseUs || "/"} // Dynamically choose the correct route based on language
                className={`nav-item ${
                  pathname === routeMappings[lang]?.whyChooseUs && "active"
                }`}
              >
                {lang === "ar" ? "لماذا نحن" : "Why Choose Us"}
              </Nav.Link> */}
              <Nav.Link
                onClick={() => closeToggler()}
                // as={Link}
                href={`/${lang}/why-choose-us`}
                className={`nav-item ${
                  pathname === `/${lang}/why-choose-us` && "active"
                }`}
              >
                {lang == "ar" ? "Why Choose Us" : "Why Choose Us"}
              </Nav.Link>
              <Nav.Link
                onClick={() => closeToggler()}
                // as={Link}
                href={`/${lang}/experiences`}
                className={`nav-item ${
                  pathname === `/${lang}/experiences` && "active"
                }`}
              >
                {lang == "ar" ? "Experiences" : "Experiences"}
              </Nav.Link>

              <Nav.Link
                onClick={() => closeToggler()}
                // as={Link}
                href={`/${lang}/things-to-do-in-dubai`}
                className={`nav-item ${
                  pathname === `/${lang}/things-to-do-in-dubai` && "active"
                }`}
              >
                {lang == "ar"
                  ? "Things To Do In Dubai"
                  : "Things To Do In Dubai"}
              </Nav.Link>
              <Nav.Link
                onClick={() => closeToggler()}
                // as={Link}
                href={`/${lang}/testimonial`}
                className={`nav-item ${
                  pathname === `/${lang}/testimonial` && "active"
                }`}
              >
                {lang == "ar" ? "Testimonials" : "Testimonials"}
              </Nav.Link>
              <Nav.Link
                onClick={() => closeToggler()}
                // as={Link}
                href={`/${lang}/blogs`}
                className={`nav-item ${
                  pathname === `/${lang}/blogs` && "active"
                }`}
              >
                {lang == "ar" ? "Blogs" : "Blogs"}
              </Nav.Link>
              <Nav.Link
                onClick={() => closeToggler()}
                // as={Link}
                href={`/${lang}/contact-us`}
                className={`nav-item ${
                  pathname === `/${lang}/contact-us` && "active"
                }`}
              >
                {lang == "ar" ? "Contact Us" : "Contact Us"}
              </Nav.Link>
            </Nav>
            <Nav className="desktop_nav_icon">
              <div className="d-flex justify-content-end align-items-center w-100">
                <div className="iconsWrapper">
                  <div
                    className="icons1"
                    onClick={(e) => {
                      if (UserData?.isAuth) {
                        return;
                      }
                      handleCustomerLogin(e);
                    }}
                  >
                    {UserData?.isAuth ? (
                      <>
                        <Dropdown
                          className={`lang_dropdown lang_dropdownMobil ${
                            lang === "ar"
                              ? "lang_dropdownAr"
                              : "lang_dropdownEn"
                          }`}
                          show={showDropDownDeskAvatr}
                        >
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basicdd"
                            // onClick={TogglerLang}
                            onClick={() => {
                              setshowDropDownDeskAvatr(!showDropDownDeskAvatr);
                              setshowDropDownDesk(false);
                            }}
                          >
                            <img
                              src={avatar}
                              alt=""
                              height={25}
                              width={25}
                              className="avatrk"
                            />
                          </Dropdown.Toggle>
                          {showDropDownDeskAvatr ? (
                            <Dropdown.Menu className="dropItemsList">
                              <Dropdown.Item
                                onClick={() => dispatch(LogOutUser())}
                                className={
                                  lang === "ar"
                                    ? "langItem link_Itemsk"
                                    : "langItem link_Itemsk"
                                }
                              >
                                <GoDot className="icon_lang" />
                                Logout
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          ) : null}
                        </Dropdown>
                      </>
                    ) : (
                      <img className="icns" src={person} alt="" />
                    )}
                  </div>
                </div>
                <div className="btnWrapper">
                  <Nav>
                    <div id="google_translate_element"></div>
                    <Dropdown
                      className={`lang_dropdown ${
                        lang === "ar" ? "lang_dropdownAr" : "lang_dropdownEn"
                      }`}
                      show={showDropDownDesk}
                    >
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        // onClick={TogglerLang}
                        onClick={() => {
                          setshowDropDownDesk(!showDropDownDesk);
                          setshowDropDownDeskAvatr(false);
                        }}
                      >
                        <MdOutlineLanguage size={20} />
                      </Dropdown.Toggle>
                      {showDropDownDesk ? (
                        <Dropdown.Menu className="dropItemsList">
                          <Dropdown.Item disabled>Language</Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handleLanguageChange("en")}
                            className={
                              lang === "en" ? "active langItem" : "langItem"
                            }
                          >
                            <GoDot className="icon_lang" />
                            English
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handleLanguageChange("ar")}
                            className={
                              lang === "ar" ? "active langItem" : "langItem"
                            }
                          >
                            <GoDot className="icon_lang" />
                            Arabic
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      ) : null}
                    </Dropdown>
                  </Nav>
                  {UserData?.isAuth ? (
                    ""
                  ) : (
                    <button
                      className={
                        scrolled
                          ? "btnNl btnNl-primary btnNl-nav logBtn borderfixed"
                          : "btnNl btnNl-primary logBtn"
                      }
                      onClick={(e) => {
                        if (UserData?.isAuth) {
                          return;
                        }
                        handleLogin(e);
                      }}
                    >
                      B2B Login
                    </button>
                  )}
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;

