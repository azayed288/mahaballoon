import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogCard from "../../Blogs/Card/Card";
import "./styles.scss";
import { usePathname } from "next/navigation";

function Index() {
  const [blogs, setBlogs] = useState([]);
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  useEffect(() => {
    fetch("https://oqnfmp6966.execute-api.us-east-1.amazonaws.com/dev/api/blog/")
      .then((res) => res.json())
      .then((data) => {
        // Parse JSON fields for each blog
        const parsed = data.map((item) => {
          // Parse categories with proper structure handling
          const parseCategories = (categoriesField) => {
            try {
              if (!categoriesField) return { en: "", ar: "" };
              
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
                  en: enNames || "",
                  ar: arNames || ""
                };
              }
              
              return { en: "", ar: "" };
            } catch (error) {
              console.error('Error parsing categories:', error, categoriesField);
              return { en: "", ar: "" };
            }
          };

          // Helper function to safely parse JSON fields
          const parseJsonField = (field, defaultValue = { en: "", ar: "" }) => {
            try {
              if (!field) return defaultValue;
              if (typeof field === 'object') return field;
              return JSON.parse(field);
            } catch (error) {
              console.error('Error parsing field:', error, field);
              return defaultValue;
            }
          };

          // Parse all fields
          const parsedTitle = parseJsonField(item.title, { en: "", ar: "" });
          const parsedShortDes = parseJsonField(item.short_des, { en: "", ar: "" });
          const parsedCategory = parseCategories(item.categories);
          const parsedReadTime = item.readTime 
            ? parseJsonField(item.readTime, { en: "5 min", ar: "5 min" })
            : { en: "5 min", ar: "5 min" };
          const parsedWrittenBy = parseJsonField(item.written_by, { en: "", ar: "" });
          
          // Remove body content - only display title
          const parsedBody = [];

          return {
            ...item,
            // Pass language-specific values to avoid React object rendering errors
            title: parsedTitle[lang] || parsedTitle.en || "",
            short_des: parsedShortDes[lang] || parsedShortDes.en || "",
            category: parsedCategory[lang] || parsedCategory.en || "",
            readTime: parsedReadTime[lang] || parsedReadTime.en || "",
            written_by: parsedWrittenBy[lang] || parsedWrittenBy.en || "",
            thumb: item.image,
            route: item.slug,
            body: parsedBody,
            // Keep original objects for any component that might need them
            titleObj: parsedTitle,
            short_desObj: parsedShortDes,
            categoryObj: parsedCategory,
            readTimeObj: parsedReadTime,
            written_byObj: parsedWrittenBy,
          };
        });
        setBlogs(parsed);
      });
  }, [lang]);

  return (
    <div className="BlogList3939m py-60">
      <Container>
        <div className="main-title">Latest News & Articles</div>
        <div className="BlogsList">
          <Row className="g-5">
            {blogs.map((item, i) => (
              <Col xs={12} md={6} lg={4} key={"blogsList" + i}>
                <BlogCard
                  {...item}
                  lang={lang}
                  // Pass slug for blogdetails page
                  blogdetailsSlug={item.slug}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Index;
