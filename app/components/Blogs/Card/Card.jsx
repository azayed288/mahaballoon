import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.scss";

function Card(props) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const { title, short_des, category, readTime, thumb, route } = props;
  // Use lang from props if provided, else fallback to pathname
  const currentLang = props.lang || lang;

  // console.log(category.en[0], "test");

  // Parse JSON fields with error handling
  const parseJsonField = (field, defaultValue = '') => {
    try {
      if (!field) return defaultValue;
      if (typeof field === 'object') return field[currentLang] || field.en || defaultValue;
      if (typeof field === 'string') {
        try {
          const parsed = JSON.parse(field);
          return parsed[currentLang] || parsed.en || defaultValue;
        } catch (e) {
          return field || defaultValue;
        }
      }
      return String(field) || defaultValue;
    } catch (error) {
      console.error('Error parsing field:', error);
      return defaultValue;
    }
  };

  // Parse category with proper error handling
  const parseCategory = (categoryData) => {
    try {
      if (!categoryData) return 'General';
      
      // If it's already an array
      if (Array.isArray(categoryData)) {
        return categoryData[0] || 'General';
      }
      
      // If it's a string, try to parse it
      if (typeof categoryData === 'string') {
        const parsed = JSON.parse(categoryData);
        if (Array.isArray(parsed)) {
          return parsed[0] || 'General';
        }
        return parsed || 'General';
      }
      
      // If it's an object with language keys
      if (typeof categoryData === 'object') {
        const langCategory = categoryData[currentLang] || categoryData.en;
        if (Array.isArray(langCategory)) {
          return langCategory[0] || 'General';
        }
        return langCategory || 'General';
      }
      
      return 'General';
    } catch (error) {
      console.error('Error parsing category:', error);
      return 'General';
    }
  };

  const parsedTitle = parseJsonField(title, '');
  const parsedReadTime = parseJsonField(readTime, '5 min read');

  
  // Use the already parsed category data from parent component
  const getCategoryDisplay = () => {
    try {
      if (!category) return currentLang === 'ar' ? 'فئة' : 'Category';
      
      // If category is already parsed as an object with en/ar keys
      if (typeof category === 'object') {
        // Make sure we're returning a string, not an object
        const categoryValue = category[currentLang] || category.en || (currentLang === 'ar' ? 'فئة' : 'Category');
        return typeof categoryValue === 'string' ? categoryValue : (currentLang === 'ar' ? 'فئة' : 'Category');
      }
      
      // If it's a string, use it directly
      if (typeof category === 'string') {
        return category;
      }
      
      // Fallback for any other format
      return currentLang === 'ar' ? 'فئة' : 'Category';
    } catch (error) {
      console.error('Error in getCategoryDisplay:', error);
      return currentLang === 'ar' ? 'فئة' : 'Category';
    }
  };
  
  const parsedCategory = getCategoryDisplay();

  // Parse body and get the first paragraph for the current language
  let firstBodyParagraph = "";
  if (props.body) {
    try {
      let body = props.body;
      
      // Parse body if it's a string
      if (typeof body === 'string') {
        try {
          body = JSON.parse(body);
        } catch (e) {
          // If can't parse, use as is
          firstBodyParagraph = body;
          body = null;
        }
      }
      
      // If we have a parsed body array
      if (Array.isArray(body) && body.length > 0 && body[0]?.content) {
        const content = body[0].content[currentLang] || body[0].content.en || "";
        if (typeof content === 'string') {
          // Get only the first paragraph (split by \n or .)
          firstBodyParagraph = content.split("\n")[0].split(".")[0] + (content.includes(".") ? "." : "");
        }
      }
    } catch (error) {
      console.error('Error parsing body:', error);
    }
  }

  return (
    <div
      className={`${props?.slider
        ? "BlogsList3CardHomepahg32 dkj30329K"
        : "BlogsList3CardHomepahg32"
        }`}
    >
      <div className="cardFlight">
        <div className="imageWrapper">
          <img src={thumb} alt={parsedTitle || "Blog post"} loading="lazy" />
        </div>
        <div className="blogType">
          <div className="category">{parsedCategory}</div>
          <div className="readTime">{parsedReadTime}</div>
        </div>
        <div className="details mt-3">
          <div className="sec-title">{parsedTitle}</div>
          <p className="para mt-2">{firstBodyParagraph}</p>
        </div>
        <Link href={`/${currentLang}/blog/${props?.route}`}>
          <button className="btnNl btnNl-secondary">
            {currentLang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
