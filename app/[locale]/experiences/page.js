import { notFound } from "next/navigation";
import PageContent from "./pageContent";
import Head from "next/head";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Hot Air Balloon Experiences in Dubai | Maha Balloon Adventures",
    description:
      "Explore a range of thrilling hot air balloon experiences with Maha Balloon Adventures in Dubai. Perfect for adventure seekers, couples, and families.",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/experiences`,
    },
  };
}

const Experiences = ({ params }) => {
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
          "text": "Every flight is conducted by highly trained and licensed pilots. We strictly follow safety measures set by the General Civil Aviation Authority (GCAA) to ensure a secure and enjoyable experience."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have any certifications or awards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we have multiple accreditations from the General Civil Aviation Authority (GCAA) and have received numerous awards for our commitment to safety, customer service, and exceptional experiences."
        }
      },
      {
        "@type": "Question",
        "name": "What is the capacity of your balloons?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Maha Balloon Adventures offers balloons that accommodate up to 20 or 24 passengers. For private experiences, we offer a balloon with a 6-passenger capacity."
        }
      },
      {
        "@type": "Question",
        "name": "How is the weather handled for balloon rides?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If the weather conditions prevent a safe flight, we will reschedule your ride. If rescheduling is not possible, we offer a full refund within 10 working days."
        }
      },
      {
        "@type": "Question",
        "name": "Can you accommodate special requests or celebrations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer celebration packages for birthdays, anniversaries, and other special occasions, including options like gourmet breakfasts, birthday cakes, and romantic setups."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide transportation to the balloon launch site?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide transportation to and from the balloon launch site for all our clients."
        }
      },
      {
        "@type": "Question",
        "name": "What is your refund policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cancellations made 72 hours or more before the flight receive a full refund. Cancellations 48 hours prior receive a 50% refund. Cancellations within 24 hours are non-refundable. No-shows will not be eligible for a refund."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer training or certification for aspiring balloon pilots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We do not provide pilot training or certification. However, all guests receive a flight certificate signed by the pilot as a souvenir."
        }
      },
      {
        "@type": "Question",
        "name": "Is the flight suitable for everyone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Flights are available for passengers aged 5 to 80 years. Children under 18 must be accompanied by a guardian. The maximum weight limit is 120 kg, and exceeding this may require pilot approval and an additional charge."
        }
      }
    ],
    "@graph": [
      {
        "@type": "Service",
        "name": "Flight Video",
        "description": "Take your memories with you by purchasing an edited digital copy of your flight (download link sent via email or WhatsApp).",
        "offers": {
          "@type": "Offer",
          "price": "From AED 250",
          "priceCurrency": "AED"
        }
      },
      {
        "@type": "Service",
        "name": "Celebration Package",
        "description": "Celebrate life’s special moments with a breathtaking experience in the sky. Whether it's a birthday, anniversary, proposal, or milestone event, make lasting memories with a unique adventure that turns every occasion into an unforgettable journey.",
        "offers": {
          "@type": "Offer",
          "price": "From AED 300",
          "priceCurrency": "AED"
        }
      },
      {
        "@type": "Service",
        "name": "Private Transfer",
        "description": "In City: AED 600 for a Private 4x4 vehicle for pick up and drop off within Dubai city. AED 800 for pick-ups outside Dubai City - Jebel Ali, Bab Al Shams, and Sharjah. Please contact us for pick-up from other Emirates.",
        "offers": {
          "@type": "Offer",
          "price": "From AED 600-800",
          "priceCurrency": "AED"
        }
      }
    ]
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

export default Experiences;
