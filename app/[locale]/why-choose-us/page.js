// import { notFound } from "next/navigation";
// import PageContent from "./pageContent";
// import UrlSync from "./UrlSync";

// // Define the path mapping for English to Arabic
// const pathMapping = {
//   "why-choose-us": "لماذا-نحن",
//   "about-us": "من-نحن",
//   "contact-us": "اتصل-بنا",
// };

// // Reverse mapping (Arabic -> English) for syncing the URL back to English
// const reversePathMapping = Object.fromEntries(
//   Object.entries(pathMapping).map(([en, ar]) => [ar, en])
// );

// export async function generateMetadata({ params }) {
//   const { locale } = params;
//   return {
//     title: "Why Choose Maha Balloon | Hot Air Balloon Adventure In Dubai",
//     description:
//       "Discover why Maha Balloon Adventures is the top choice for hot air balloon rides in Dubai. Experience unmatched service, breathtaking views, and memories.",
//     alternates: {
//       canonical: `https://mahaballoonadventures.ae/${locale}/why-choose-us`,
//     },
//   };
// }

// const WhyChooseUs = ({ params }) => {
//   const { locale, page } = params;
//   console.log(locale)
//   console.log(page)

//   // Define allowed locales
//   const allowedLocales = ["en", "ar"];

//   // If the locale is not in the allowed list, return 404
//   if (!allowedLocales.includes(locale)) {
//     notFound();
//   }

//   // Arabic display name (or fallback to page name)
//   const displayPage = locale === "ar" ? pathMapping[page] || page : page;

//   return (
//     <>
//       {/* Client component to modify URL without triggering navigation */}
//       <UrlSync lang={locale} page={page} />

//       <PageContent />
//     </>
//   );
// };

// export default WhyChooseUs;

import { notFound } from "next/navigation";
import PageContent from "./pageContent";
import Head from "next/head";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Why Choose Maha Balloon | Hot Air Balloon Adventure In Dubai",
    description:
      "Discover why Maha Balloon Adventures is the top choice for hot air balloon rides in Dubai. Experience unmatched service, breathtaking views, and memories.",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/why-choose-us`,
    },
    openGraph: {
      type: 'website',
      title: 'Why Choose Maha Balloon | Hot Air Balloon Adventure In Dubai',
      description:
        "Discover why Maha Balloon Adventures is the top choice for hot air balloon rides in Dubai. Experience unmatched service, breathtaking views, and memories.",
      url: `https://mahaballoonadventures.ae/${locale}/why-choose-us`,
      images: [
        {
          url: '/path-to-your-image.jpg',
          width: 800,
          height: 600,
          alt: 'Maha Balloon Adventures Image',
        },
      ],
    },
  };
}

const WhyChooseUs = ({ params }) => {
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
    "name": "Why Choose Us",
    "url": "https://mahaballoonadventures.ae/en/en/why-us/",
    "description": "Learn why Maha Hot Air Balloon is the best choice for your ballooning experience in Dubai.",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How experienced are your balloon pilots?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All our pilots at Maha B have GCAA UAE General Civil Aviation Authority licenses and vast experience in flying, ensuring safety for our clients."
          }
        },
        {
          "@type": "Question",
          "name": "What safety measures do you have in place?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Safety is our top priority. All our flights are operated by highly trained and licensed pilots, following strict safety measures provided by the General Civil Aviation Authority (GCAA) to ensure a comfortable and secure flight experience."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have any certifications or awards?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we have multiple accreditations from the General Civil Aviation Authority (GCAA) and have received numerous awards in recognition of our commitment to safety, customer service, and outstanding flight experiences."
          }
        },
        {
          "@type": "Question",
          "name": "What is the capacity of your balloons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Maha B offers different balloon sizes: one accommodating up to 20 passengers, another up to 24 passengers, and a private balloon with a seating capacity for 6 passengers for a more intimate experience."
          }
        },
        {
          "@type": "Question",
          "name": "How is the weather handled for balloon rides?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the weather conditions are not suitable for flying, Maha B will reschedule your flight to the next available date. If rescheduling is not possible, we will issue a full refund within 10 working days per our cancellation policy."
          }
        },
        {
          "@type": "Question",
          "name": "Can you accommodate special requests or celebrations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we welcome special requests for celebrations such as birthdays, anniversaries, graduations, and more. Additional options like gourmet breakfasts, birthday cakes, and romantic arrangements can be added to your hot air balloon experience."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide transportation to the balloon launch site?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our clients are provided with transportation to and from the balloon launch site."
          }
        },
        {
          "@type": "Question",
          "name": "What is your refund policy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cancellations made 72 hours or more before the flight are fully refundable. Cancellations made 48 hours before the flight receive a 50% refund. Cancellations within 24 hours or no-shows are non-refundable. Cancellation requests must be submitted via the original booking channel."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer training or certification for aspiring balloon pilots?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We do not provide training or certification for aspiring balloon pilots. However, all guests receive a flight certificate signed by the pilot as a keepsake of their hot air balloon experience."
          }
        },
        {
          "@type": "Question",
          "name": "Is the flight suitable for everyone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our flights are suitable for passengers aged 5 to 80 years. Children under 5 and adults over 80 are not permitted to fly. Children under 18 must be accompanied by a parent or guardian. The maximum weight limit is 120 kg; guests exceeding this limit require pilot approval and may incur an additional charge."
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

export default WhyChooseUs;
