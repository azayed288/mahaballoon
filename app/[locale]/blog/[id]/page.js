import { notFound } from "next/navigation";
import BlogDetails from "./pageContent";

export async function generateMetadata({ params }) {
  const { id, locale } = params;

  try {
    // Fetch blog data from API
    const response = await fetch(`https://oqnfmp6966.execute-api.us-east-1.amazonaws.com/dev/api/blog/slug/${id}`, {
      cache: 'no-store' // Ensure fresh data for metadata
    });
    
    if (!response.ok) {
      throw new Error('Blog not found');
    }
    
    const data = await response.json();
    const blog = data.blog;
    
    if (!blog) {
      throw new Error('Blog not found');
    }

    // Helper function to parse JSON fields and get localized content
    const parseJsonField = (field, defaultValue = '') => {
      try {
        if (!field) return defaultValue;
        
        // If field is already an object, use it directly
        let parsed;
        if (typeof field === 'object') {
          parsed = field;
        } else if (typeof field === 'string') {
          // Only parse if it's a JSON string
          parsed = JSON.parse(field);
        } else {
          return defaultValue;
        }
        
        // Debug log for parsing
        // console.log('parseJsonField - input:', field);
        // console.log('parseJsonField - parsed:', parsed);
        // console.log('parseJsonField - locale:', locale);
        // console.log('parseJsonField - result:', parsed[locale] || parsed.en);
        
        return parsed[locale] || parsed.en || defaultValue;
      } catch (error) {
        console.error('Error parsing JSON field:', error, 'Field:', field);
        return defaultValue;
      }
    };

    // Parse blog title
    const blogTitle = parseJsonField(blog.title, '');
    
    // Parse SEO data
    let metaTitle = '';
    let metaDescription = '';
    let ogTitle = '';
    let ogDescription = '';
    
    // Debug: Log the raw blog data
    // console.log('Raw blog data:', JSON.stringify(blog, null, 2));
    // console.log('Raw blog.seo:', blog.seo);
    // console.log('Type of blog.seo:', typeof blog.seo);
    
    try {
      const seoData = typeof blog.seo === 'string' ? JSON.parse(blog.seo) : blog.seo;
      // console.log('Parsed seoData:', JSON.stringify(seoData, null, 2));
      
      if (seoData) {
        // Debug: Log the individual SEO fields
        // console.log('seoData.metaTitle:', seoData.metaTitle);
        // console.log('seoData.metaDescription:', seoData.metaDescription);
        
        // Fix the parsing - don't double stringify if already an object
        metaTitle = parseJsonField(seoData.metaTitle, '');
        metaDescription = parseJsonField(seoData.metaDescription, '');
        ogTitle = parseJsonField(seoData.ogTitle, '');
        ogDescription = parseJsonField(seoData.ogDescription, '');
      }
    } catch (seoError) {
      console.error('Error parsing SEO data:', seoError);
    }

    // console.log(metaTitle, "metaTitle hi");
    // console.log(metaDescription, "metaDescription");

    // Parse excerpt as fallback
    const excerpt = parseJsonField(blog.excerpt, '');

    // Determine final title and description with fallbacks
    const finalTitle = metaTitle || ""
    const finalDescription = metaDescription || "";
    
    // Use OG tags if available, otherwise fallback to main meta tags
    const finalOgTitle = ogTitle || finalTitle;
    const finalOgDescription = ogDescription || finalDescription;

    return {
      title: finalTitle,
      description: finalDescription,
      alternates: {
        canonical: `https://mahaballoonadventures.ae/${locale}/blog/${id}`,
      },
      openGraph: {
        title: finalOgTitle,
        description: finalOgDescription,
        images: blog.image ? [
          {
            url: blog.image,
            width: 1200,
            height: 630,
            alt: parseJsonField(blog.seo ? JSON.parse(blog.seo).imageAlt || {} : {}, blogTitle),
          }
        ] : [],
        url: `https://mahaballoonadventures.ae/${locale}/blog/${id}`,
        type: 'article',
        locale: locale,
        siteName: locale === 'ar' ? 'مها بالون للمغامرات' : 'Maha Balloon Adventures',
      },
      twitter: {
        card: 'summary_large_image',
        title: finalOgTitle,
        description: finalOgDescription,
        images: blog.image ? [blog.image] : [],
      },
      // Additional meta tags
      robots: {
        index: blog.status === 'published',
        follow: blog.status === 'published',
      },
      // Schema.org structured data
      other: {
        'article:published_time': blog.createdAt,
        'article:modified_time': blog.updatedAt,
        'article:author': parseJsonField(blog.written_by, ''),
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Fallback metadata if API call fail
  }
}

const BlogInner = async ({ params }) => {
  const { locale, id } = params;
  // Define allowed locales
  const allowedLocales = ["en", "ar"];

  // If the locale is not in the allowed list, return 404
  if (!allowedLocales.includes(locale)) {
    notFound();
  }

  // Server-side fetch of blog for SSR output
  let blogData = null;
  try {
    const res = await fetch(`https://oqnfmp6966.execute-api.us-east-1.amazonaws.com/dev/api/blog/slug/${id}`, { cache: 'no-store' });
    if (res.ok) {
      blogData = await res.json();
    }
  } catch (e) {}

  return <BlogDetails initialData={blogData} />;
};

export default BlogInner;
