import { notFound } from "next/navigation";
import PageContent from "./pageContent";
import Head from "next/head";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Contact Maha Balloon | Book Your Aerial Adventure Ride in Dubai",
    description:
      "Reach out to Maha Balloon Adventures for inquiries or bookings. Contact us today to plan your unforgettable hot air balloon experience in Dubai.",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/contact-us`,
    },
  };
}

const ContactUs = ({ params }) => {
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
    "name": "Contact Us",
    "url": "https://mahaballoonadventures.ae/en/contact-us/",
    "description": "Get in touch with us for inquiries about hot air balloon rides and services.",
    "mainEntity": {
      "@type": "ContactPage",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971-1234-5678",
        "contactType": "Customer Service",
        "areaServed": "AE",
        "availableLanguage": "English"
      }
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

export default ContactUs;
