"use client";
import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import CommBanner from "../../../components/Common/Banner/Index";
import GiftOffer from "../../../components/Common/GiftOffer/Index";
import FaqsComm from "../../../components/Common/Faqs/Index";
import BlogDetails from "../../../components/BlogDetails/Details/Index";
import BlogsRelated from "../../../components/BlogDetails/BlogsRelated/Index";
import { useInView } from "react-intersection-observer";
import ReisterFormModal from "../../../components/BlogDetails/DiscountPop/Index";
import Loader from "../../../components/Common/Loader/Loader";

const banner =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/Banner/Blog%20Inner%20banner.webp";

const PageContent = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false,
    delay: 300,
  });

  const [FormModalShow, setFormModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (inView) {
      setFormModalShow(true);
    }
  }, [inView]);

  const params = useParams();
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const slug = params?.id;
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    if (!slug) return;
    
    setIsLoading(true);
    setError(null);
    
    fetch(`https://oqnfmp6966.execute-api.us-east-1.amazonaws.com/dev/api/blog/slug/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data, "blogData in pageContent");
        setBlogData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog data:", err);
        setError(err.message);
        setBlogData(null);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2>{lang === 'ar' ? 'خطأ في تحميل المدونة' : 'Error loading blog'}</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!blogData?.blog) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2>{lang === 'ar' ? 'المدونة غير موجودة' : 'Blog not found'}</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <CommBanner 
        title={lang === 'ar' ? 'المدونات' : 'Blogs'} 
        path={lang === 'ar' ? 'الرئيسية - المدونات' : 'Home - Blogs'} 
        bg={banner} 
      />
      <BlogDetails blog={blogData.blog} />
      <BlogsRelated blog={blogData.relatedBlogs} />
      <GiftOffer />
      <FaqsComm />
      <ReisterFormModal show={FormModalShow} setShow={setFormModalShow} />
      <div ref={ref} style={{ minHeight: "20px" }}></div>
    </>
  );
};

export default PageContent;
