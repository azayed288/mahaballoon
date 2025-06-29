import { notFound } from "next/navigation";
import PageContent from "./pageContent";
import Head from "next/head";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Testimonials | Hot Air Balloons in Dubai | Maha Balloons",
    description:
      "Read reviews and testimonials from our satisfied customers. See why Maha Balloon Adventures is the top choice for hot air balloon rides in Dubai.",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/testimonial`,
    },
  };
}

const Testimonial = ({ params }) => {
  const { locale } = params;
  // Define allowed locales
  const allowedLocales = ["en", "ar"];

  // If the locale is not in the allowed list, return 404
  if (!allowedLocales.includes(locale)) {
    notFound();
  }

  // JSON-LD schema data to embed
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Testimonials",
    "url": "https://mahaballoonadventures.ae/en/testimonial/",
    "description": "Read testimonials from our happy customers who experienced hot air balloon rides.",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What do customers say about their experience?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Customers rave about the stunning views and professional service."
          }
        },
        {
          "@type": "Question",
          "name": "How do I leave a testimonial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can leave a testimonial on our website or social media pages."
          }
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>
      <PageContent />
    </>
  );
};

export default Testimonial;
