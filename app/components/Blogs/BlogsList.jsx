import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Card from "./Card/Card";

function BlogsList() {
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

          return {
            ...item,
            title: JSON.parse(item.title),
            short_des: item.short_des ? JSON.parse(item.short_des) : { en: "", ar: "" },
            category: parseCategories(item.categories),
            readTime: item.readTime ? JSON.parse(item.readTime) : { en: "", ar: "" },
            written_by: item.written_by ? JSON.parse(item.written_by) : { en: "", ar: "" },
            thumb: item.image,
            route: item.slug,
          };
        });
        setBlogs(parsed);
      });
  }, [lang]); // refetch blogs when language changes

  return (
    <div className="blogs-list">
      {blogs.map((blog) => (
        <Card
          key={blog.id}
          title={blog.title}
          short_des={blog.short_des}
          category={blog.category}
          readTime={blog.readTime}
          thumb={blog.thumb}
          route={blog.route}
          lang={lang}
        />
      ))}
    </div>
  );
}

export default BlogsList;
