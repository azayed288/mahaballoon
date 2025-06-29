"use client";
import CommBanner from "../../components/Common/Banner/Index";
import FaqsList from "../../components/Faqs/FaqsList/Index";
const banner =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/Banner/Faqs%20banner.webp";

function PageContent() {
  return (
    <>
      <CommBanner title="Faqs" path="Home - Faqs" bg={banner} />
      <FaqsList />
    </>
  );
}

export default PageContent;
