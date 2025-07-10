import { NextResponse } from "next/server";

const SITE_URL = "https://mahaballoonadventures.ae"; // Change to your actual domain
const LOCALES = ["en", "ar"]; // Define supported languages

export async function GET() {
  // Define routes structure
  const routes = {
    en: {
      home: "/",
      whyChooseUs: "/en/why-choose-us",
      experiences: "/en/experiences",
      thingsToDo: "/en/things-to-do-in-dubai",
      testimonial: "/en/testimonial",
      blogs: "/en/blogs",
      contactUs: "/en/contact-us",
      comparePackages: "/en/compare-packages",
      cart: "/en/cart",
      wishlist: "/en/wishlist",
      faqs: "/en/faqs",
      privacyPolicy: "/en/privacy-policy",
      termsOfService: "/en/terms-of-service",
    },
    ar: {
      home: "/ar",
      whyChooseUs: "/ar/لماذا-نحن",
      experiences: "/ar/التجارب",
      thingsToDo: "/ar/أشياء-يمكنك-فعلها-في-دبي",
      testimonial: "/ar/الشهادات",
      blogs: "/ar/المدونات",
      contactUs: "/ar/تواصل-معنا",
      comparePackages: "/ar/compare-packages",
      cart: "/ar/cart",
      wishlist: "/ar/wishlist",
      faqs: "/ar/faqs",
      privacyPolicy: "/ar/privacy-policy",
      termsOfService: "/ar/terms-of-service",
    },
  };

  // Generate dynamic routes from the routes object
  const staticRoutes = [];
  
  // Add all static routes from the routes object
  Object.entries(routes).forEach(([locale, localeRoutes]) => {
    Object.values(localeRoutes).forEach((path) => {
      staticRoutes.push({
        path,
        lastmod: "2025-02-04",
      });
    });
  });

  // Fetch blogs from API
  let blogDetailRoutes = [];
  try {
    const response = await fetch("https://oqnfmp6966.execute-api.us-east-1.amazonaws.com/dev/api/blog/");
    if (response.ok) {
      const blogs = await response.json();
      
      // Generate blog detail routes from API data
      blogDetailRoutes = blogs.flatMap((blog) =>
        LOCALES.map((locale) => ({
          path: `/${locale}/blog/${blog.slug}`,
          lastmod: "2025-02-04",
        }))
      );
    } else {
      console.error("Failed to fetch blogs for sitemap");
    }
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  // Generate XML sitemap content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[...staticRoutes, ...blogDetailRoutes]
        .map(
          (route) => `
        <url>
          <loc>${SITE_URL}${route.path}</loc>
          <lastmod>${route.lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`
        )
        .join("")}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

