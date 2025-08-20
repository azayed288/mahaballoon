import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineLink } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import Head from "next/head";
import Loader from "../../Common/Loader/Loader";
import { useParams, usePathname } from "next/navigation";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { toast } from "react-toastify";
import "./styles.scss";

function Index({ blog }) {
  const { id } = useParams();
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const [isLoading, setIsLoading] = useState(false);

  // console.log(blog?.seo, "test");

  // Parse the JSON strings in the blog data with proper error handling
  const parseJsonField = (field, defaultValue = '') => {
    try {
      if (!field) return defaultValue;
      const parsed = JSON.parse(field);

      // For SEO data, return the entire parsed object
      if (typeof defaultValue === 'object' && defaultValue !== null) {
        return parsed;
      }

      // For other fields, return the localized version
      return parsed[lang] || parsed.en || defaultValue;
    } catch (error) {
      console.error('Error parsing JSON field:', error);
      return defaultValue;
    }
  };

  // Parse categories with proper structure handling
  const parseCategories = (categoriesField) => {
    try {
      console.log('BlogDetails - Raw categories field:', categoriesField);
      if (!categoriesField) return lang === 'ar' ? 'فئة' : 'Category';
      
      let categories;
      if (typeof categoriesField === 'string') {
        categories = JSON.parse(categoriesField);
      } else {
        categories = categoriesField;
      }
      
      console.log('BlogDetails - Parsed categories:', categories);
      
      if (Array.isArray(categories) && categories.length > 0) {
        // Extract names from all categories and join with commas
        const categoryNames = categories
          .map(category => {
            const name = category?.name?.[lang] || category?.name?.en || '';
            console.log('BlogDetails - Category name:', name);
            return name;
          })
          .filter(name => name !== '') // Remove empty names
          .join(', '); // Join with comma and space
        
        // console.log('BlogDetails - Final category names:', categoryNames);
        return categoryNames || (lang === 'ar' ? 'فئة' : 'Category');
      }
      
      return lang === 'ar' ? 'فئة' : 'Category';
    } catch (error) {
      console.error('Error parsing categories:', error, categoriesField);
      return lang === 'ar' ? 'فئة' : 'Category';
    }
  };

  const title = parseJsonField(blog?.title, '');
  const writtenBy = parseJsonField(blog?.written_by, '');
  const excerpt = parseJsonField(blog?.excerpt, '');
  const category = parseCategories(blog?.categories);
  // console.log('BlogDetails - Final parsed category:', category);
  // console.log(category[0], "test");
  // Handle content field - it contains HTML content
  const content = parseJsonField(blog?.content, '');

  // Parse SEO data for additional image alt information
  const seoData = parseJsonField(blog?.seo, {});
  const seoImageAlt = seoData?.imageAlt || {};

  // Extract meta title and meta description from SEO data
  const metaTitle = seoData?.metaTitle ?
    (lang === 'ar' && seoData.metaTitle.ar ? seoData.metaTitle.ar : seoData.metaTitle.en) :
    title;
  const metaDescription = seoData?.metaDescription ?
    (lang === 'ar' && seoData.metaDescription.ar ? seoData.metaDescription.ar : seoData.metaDescription.en) :
    excerpt;

  // Extract schema markup from SEO data
  const schemaMarkup = seoData?.schemaMarkup || '';

  // Render schema markup if available
  const renderSchemaMarkup = () => {
    if (!schemaMarkup) return null;
    
    try {
      // Parse the schema markup if it's a string
      const schema = typeof schemaMarkup === 'string' ? JSON.parse(schemaMarkup) : schemaMarkup;
      
      // Update schema with current blog data
      const updatedSchema = {
        ...schema,
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "author": {
          "@type": "Person",
          "name": writtenBy || "Maha Balloon Adventures"
        },
        "datePublished": blog?.createdAt || blog?.date,
        "dateModified": blog?.updatedAt || blog?.date,
        "description": excerpt || metaDescription,
        "image": blog?.image || '',
        "url": typeof window !== 'undefined' ? window.location.href : '',
        "publisher": {
          "@type": "Organization",
          "name": "Maha Balloon Adventures",
          "logo": {
            "@type": "ImageObject",
            "url": "https://mahaballoonadventures.ae/logo.png"
          }
        }
      };

      return (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(updatedSchema, null, 2)
          }}
        />
      );
    } catch (error) {
      console.error('Error parsing schema markup:', error);
      return null;
    }
  };

  // Format date with proper locale
  // console.log(metaTitle, "metaTitle");
  // console.log(metaDescription, "metaDescription");
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  };

  const date = formatDate(blog?.date);

  // Function to process and localize image alt tags using string replacement
  const processImagesForLocale = (htmlContent) => {
    if (!htmlContent) return '';

    // Use regex to find and replace image alt attributes
    return htmlContent.replace(/<img([^>]*?)>/gi, (match, attributes) => {
      // Extract data-alt attributes
      const altEnMatch = attributes.match(/data-alt-en="([^"]*?)"/);
      const altArMatch = attributes.match(/data-alt-ar="([^"]*?)"/);
      const currentAltMatch = attributes.match(/alt="([^"]*?)"/);

      const altEn = altEnMatch ? altEnMatch[1] : '';
      const altAr = altArMatch ? altArMatch[1] : '';
      const currentAlt = currentAltMatch ? currentAltMatch[1] : '';

      let finalAlt = '';

      // Priority 1: Use data attributes from the image
      if (lang === 'ar' && altAr) {
        finalAlt = altAr;
      } else if (altEn) {
        finalAlt = altEn;
      }

      // Priority 2: Fallback to SEO imageAlt if no data attributes
      if (!finalAlt) {
        if (lang === 'ar' && seoImageAlt.ar) {
          finalAlt = seoImageAlt.ar;
        } else if (seoImageAlt.en) {
          finalAlt = seoImageAlt.en;
        }
      }

      // Priority 3: Fallback to existing alt or title
      if (!finalAlt) {
        finalAlt = currentAlt || title || '';
      }

      // Replace or add alt attribute
      let updatedAttributes = attributes;
      if (finalAlt) {
        if (currentAltMatch) {
          // Replace existing alt
          updatedAttributes = attributes.replace(/alt="[^"]*?"/, `alt="${finalAlt}"`);
        } else {
          // Add alt attribute
          updatedAttributes = `${attributes} alt="${finalAlt}"`;
        }

        // Also add/update title attribute for accessibility
        if (updatedAttributes.includes('title="')) {
          updatedAttributes = updatedAttributes.replace(/title="[^"]*?"/, `title="${finalAlt}"`);
        } else {
          updatedAttributes = `${updatedAttributes} title="${finalAlt}"`;
        }
      }

      return `<img${updatedAttributes}>`;
    });
  };

  // Function to render HTML content safely with localized alt tags
  const renderContent = () => {
    if (!content) return null;

    const processedContent = processImagesForLocale(content);

    return (
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
    );
  };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="blog description" content={metaDescription} />
        <meta property="og:blog title" content={metaTitle} />
        <meta property="og:blog description" content={metaDescription} />
        <meta property="og:image" content={blog?.image || ''} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={blog?.image || ''} />
        {renderSchemaMarkup()}
      </Head>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="blogDetaildsk3i py-60">
          <Container>
            <div className="blogType">
              <div className="category">
                {category}
              </div>
              <div className="readTime">
                {lang === 'ar' ? '5 دقائق قراءة' : '5 min read'}
              </div>
            </div>
            <h1 className="main-title">{title}</h1>

            {blog?.image && (
              <div className="main-img">
                <img
                  src={blog.image}
                  alt={
                    lang === 'ar' && seoImageAlt.ar
                      ? seoImageAlt.ar
                      : seoImageAlt.en || title
                  }
                  title={
                    lang === 'ar' && seoImageAlt.ar
                      ? seoImageAlt.ar
                      : seoImageAlt.en || title
                  }
                  loading="lazy"
                />
              </div>
            )}

            <Row className="gy-3">
              <Col md={6}>
                <div className="blogInfo">
                  <div className="blogAuth">
                    <div className="title">
                      {lang === 'ar' ? 'كتب بواسطة' : 'Written by'}
                    </div>

                    <div className="name">{writtenBy}</div>
                  </div>
                  <div className="blogDate">
                    <div className="title">
                      {lang === 'ar' ? 'نشر في' : 'Published on'}
                    </div>
                    <div className="name">{date}</div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="social w-100">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast.info(
                        lang === 'ar' ? "تم نسخ الرابط" : "Link Copied to Clipboard",
                        {
                          autoClose: 1000,
                          hideProgressBar: true,
                        }
                      );
                    }}
                  >
                    <div className="social-item">
                      <AiOutlineLink size={20} />
                    </div>
                  </div>
                  <LinkedinShareButton
                    url={window.location.href}
                    title={title}
                    summary={excerpt || title}
                    source={window.location.href}
                  >
                    <div className="social-item">
                      <FaLinkedin size={20} />
                    </div>
                  </LinkedinShareButton>
                  <TwitterShareButton
                    url={window.location.href}
                    title={title}
                    hashtag="#MahaHotAirBalloons"
                  >
                    <div className="social-item">
                      <FaXTwitter size={20} />
                    </div>
                  </TwitterShareButton>
                  <FacebookShareButton
                    url={window.location.href}
                    hashtag="#MahaHotAirBalloons"
                  >
                    <div className="social-item">
                      <FaFacebook size={20} />
                    </div>
                  </FacebookShareButton>
                </div>
              </Col>
            </Row>

            <div className="details">
              {renderContent()}
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

export default Index;