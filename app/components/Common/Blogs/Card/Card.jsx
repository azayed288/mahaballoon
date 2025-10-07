import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.scss";

function Card(props) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  // Use lang from props if provided, else fallback to pathname
  const currentLang = props.lang || lang;

  // console.log(props, "test");

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

  const parsedTitle = parseJsonField(props.title, '');
  const parsedShortDes = parseJsonField(props.short_des, '');
  
  // Handle both already parsed category data and raw category data
  const getCategoryDisplay = () => {
    try {
      // Check if category is passed as parsed data from parent
      if (props.category && typeof props.category === 'object') {
        // Make sure we're returning a string, not an object
        const categoryValue = props.category[currentLang] || props.category.en || (currentLang === 'ar' ? 'فئة' : 'Category');
        return typeof categoryValue === 'string' ? categoryValue : (currentLang === 'ar' ? 'فئة' : 'Category');
      }
      
      // Fallback to parsing categories field if needed
      if (props.categories) {
        try {
          let categories;
          if (typeof props.categories === 'string') {
            categories = JSON.parse(props.categories);
          } else {
            categories = props.categories;
          }
          
          if (Array.isArray(categories) && categories.length > 0) {
            const categoryNames = categories
              .map(category => {
                const name = category?.name?.[currentLang] || category?.name?.en || '';
                return typeof name === 'string' ? name : '';
              })
              .filter(name => name !== '')
              .join(', ');
            
            return categoryNames || (currentLang === 'ar' ? 'فئة' : 'Category');
          }
        } catch (error) {
          console.error('Error parsing categories:', error);
        }
      }
    } catch (error) {
      console.error('Error in getCategoryDisplay:', error);
    }
    
    return currentLang === 'ar' ? 'فئة' : 'Category';
  };
  
  const parsedCategory = getCategoryDisplay();
  const parsedReadTime = parseJsonField(props.readTime, currentLang === 'ar' ? '5 دقائق قراءة' : '5 min read');

  // Use image as thumb, slug as route if provided
  const thumb = props.thumb || props.image;
  const route = props.route || props.slug;

  // Parse body and get the first paragraph for the current language
  let firstBodyParagraph = parsedShortDes;
  if (!firstBodyParagraph && props.body) {
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
    <div className={`${props?.slider ? "BlogsList3CardHomepahg32 dkj30329K" : "BlogsList3CardHomepahg32"}`}>
      <div className="imageWrapper">
        <img src={thumb} alt={parsedTitle || "blog_thumbnail"} loading="lazy" />
      </div>
      <div className="blogType">
        <div className="category">{parsedCategory}</div>
        <div className="readTime">{parsedReadTime}</div>
      </div>
      <div className="details">
        <div className="sec-title">{parsedTitle}</div>
        <p className="para">{firstBodyParagraph}</p>
      </div>
      <Link href={`/${currentLang}/blog/${route}`}>
        <button className="btnNl btnNl-secondary">
          {currentLang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
        </button>
      </Link>
    </div>
  );
}

export default Card;
