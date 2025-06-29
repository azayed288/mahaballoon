import { notFound } from "next/navigation";
import Head from "next/head"; // Import Head to inject the schema into the head tag
import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;

  return {
    title: "Maha Hot Air Balloons | Certified Hot Air Balloon Ride in UAE",
    description:
      "Experience stunning views of the desert and create unforgettable memories with our expert-guided aerial adventures. Book your hot air balloon Dubai today!",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}`,
    },
  };
}

const Home = ({ params }) => {
  const { locale } = params;
  // Define allowed locales
  const allowedLocales = ["en", "ar"];

  // If the locale is not in the allowed list, return 404
  if (!allowedLocales.includes(locale)) {
    notFound();
  }

  // Define the structured data (JSON-LD schema)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Maha Balloon Adventures (Hot Air Balloon Dubai)",
        "url": "https://mahaballoonadventures.ae/en/",
        "logo": "https://d3gelo9cifr8ed.cloudfront.net/assets/mahaNav.png",
        "sameAs": [
          "https://www.instagram.com/mahaballoonadventures/",
          "https://www.facebook.com/mahaballoonadventures/",
          "https://www.youtube.com/@mahaballoonadventures",
          "https://www.tiktok.com/@mahaballoon_adventures",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971-502600101",
          "contactType": "Customer Support",
          "areaServed": "AE",
          "availableLanguage": ["English", "Arabic"],
        },
      },
      {
        "@type": "LocalBusiness",
        "name": "Maha Balloon Adventures (Hot Air Balloon in Dubai)",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dubai Desert",
          "addressLocality": "Margham Dubai, United Arab Emirates",
          "addressRegion": "Dubai",
          "postalCode": "00000",
          "addressCountry": "AE",
        },
        "telephone": "+971-502600101",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            "opens": "09:00",
            "closes": "18:00",
          },
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.9037",
          "longitude": "55.6273",
        },
      },
      {
        "@type": "Product",
        "name": "Hot Air Balloon Adventure",
        "description": "Experience the beauty of Dubai with a breathtaking hot air balloon ride.",
        "image": "https://d3nt41cjjw3im8.cloudfront.net/assets/mahaNav.png",
        "brand": "Maha Balloon Adventures",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "AED",
          "price": "1200.00",
          "availability": "https://schema.org/InStock",
          "url": "https://mahaballoonadventures.ae/en/experiences",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        {/* Injecting schema data into the head tag */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
        <meta
          name="description"
          content="Experience stunning views of the desert and create unforgettable memories with our expert-guided aerial adventures. Book your hot air balloon Dubai today!"
        />
      </Head>
      <PageContent />
    </>
  );
};

export default Home;















// import { notFound } from "next/navigation";
// import PageContent from "./pageContent";

// export async function generateMetadata({ params }) {
//   const { locale } = params;

//   return {
//     title: "Maha Hot Air Balloons | Certified Hot Air Balloon Ride in UAE",
//     description:
//       "Experience stunning views of the desert and create unforgettable memories with our expert-guided aerial adventures. Book your hot air balloon Dubai today!",
//     alternates: {
//       canonical: `https://mahaballoonadventures.ae/${locale}`,
//     },
//   };
// }

// const Home = ({ params }) => {
//   const { locale } = params;
//   // Define allowed locales
//   const allowedLocales = ["en", "ar"];

//   // If the locale is not in the allowed list, return 404
//   if (!allowedLocales.includes(locale)) {
//     notFound();
//   }
//   return <PageContent />;
// };

// export default Home;
