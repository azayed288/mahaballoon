import Head from "next/head";
import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Maha Hot Air Balloons | Certified Hot Air Balloon Ride in UAE",
    description:
      "Experience stunning views of the desert and create unforgettable memories with our expert-guided aerial adventures. Book your hot air balloon Dubai today!",
    alternates: {
      canonical: `https://mahaballoonadventures.ae`,
    },
  };
}

const Home = () => {
  return (
    <>
      <Head>
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


















// import Head from "next/head";
// import PageContent from "./pageContent";

// export async function generateMetadata() {
//   return {
//     title: "Maha Hot Air Balloons | Certified Hot Air Balloon Ride in UAE",
//     description:
//       "Experience stunning views of the desert and create unforgettable memories with our expert-guided aerial adventures. Book your hot air balloon Dubai today!",
//     alternates: {
//       canonical: `https://mahaballoonadventures.ae`,
//     },
//   };
// }

// const Home = () => {
//   const schemaData = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Organization",
//         "name": "Maha Balloon Adventures (Hot Air Balloon Dubai)",
//         "url": "https://mahaballoonadventures.ae/en/",
//         "logo": "https://d3gelo9cifr8ed.cloudfront.net/assets/mahaNav.png",
//         "sameAs": [
//           "https://www.instagram.com/mahaballoonadventures/",
//           "https://www.facebook.com/mahaballoonadventures/",
//           "https://www.youtube.com/@mahaballoonadventures",
//           "https://www.tiktok.com/@mahaballoon_adventures",
//         ],
//         "contactPoint": {
//           "@type": "ContactPoint",
//           "telephone": "+971-502600101",
//           "contactType": "Customer Support",
//           "areaServed": "AE",
//           "availableLanguage": ["English", "Arabic"],
//         },
//       },
//       {
//         "@type": "LocalBusiness",
//         "name": "Maha Balloon Adventures (Hot Air Balloon in Dubai)",
//         "address": {
//           "@type": "PostalAddress",
//           "streetAddress": "Dubai Desert",
//           "addressLocality": "Margham Dubai, United Arab Emirates",
//           "addressRegion": "Dubai",
//           "postalCode": "00000",
//           "addressCountry": "AE",
//         },
//         "telephone": "+971-502600101",
//         "openingHoursSpecification": [
//           {
//             "@type": "OpeningHoursSpecification",
//             "dayOfWeek": [
//               "Monday",
//               "Tuesday",
//               "Wednesday",
//               "Thursday",
//               "Friday",
//               "Saturday",
//               "Sunday",
//             ],
//             "opens": "09:00",
//             "closes": "18:00",
//           },
//         ],
//         "geo": {
//           "@type": "GeoCoordinates",
//           "latitude": "24.9037",
//           "longitude": "55.6273",
//         },
//       },
//       {
//         "@type": "ImageObject",
//         "contentUrl": "https://d3gelo9cifr8ed.cloudfront.net/assets/mahaNav.png",
//         "name": "Hot Air Balloon in Dubai",
//         "description": "Experience stunning views of the desert and create unforgettable memories with our expert-guided aerial adventures. Book your hot air balloon Dubai today!",
//         "keywords": [
//           "hot air balloon",
//           "hot air balloon ride",
//           "hot air balloon Dubai",
//           "Desert safari",
//           "view Burj Khalifa",
//           "Dolphin and Seal Show",
//           "Atlantis the Palm",
//           "Green Planet",
//           "Burj Al Arab Jumeirah",
//           "hit the slopes at Ski Dubai",
//           "IFLY Dubai indoor skydiving",
//           "Museum of the Future",
//           "Aya Universe",
//           "Museum of Illusions",
//           "Dubai Frame",
//         ],
//       },
//       {
//         "@type": "Product",
//         "name": "Hot Air Balloon Adventure",
//         "description": "Experience the beauty of Dubai with a breathtaking hot air balloon ride.",
//         "image": "https://d3nt41cjjw3im8.cloudfront.net/assets/mahaNav.png",
//         "brand": "Maha Balloon Adventures",
//         "offers": {
//           "@type": "Offer",
//           "priceCurrency": "AED",
//           "price": "1200.00",
//           "availability": "https://schema.org/InStock",
//           "url": "https://mahaballoonadventures.ae/en/experiences",
//         },
//       },
//       {
//         "@type": "Product",
//         "name": "Mv",
//         "description": "Experience a Majestic hot air balloon adventure with added luxury and a gourmet breakfast after the ride.",
//         "image": "https://res.cloudinary.com/dmcknuzk4/image/upload/v1731048600/ff0p3dorlebgcdzdj3vn.webp",
//         "brand": "Maha Balloon Adventures",
//         "sku": "DELUXE456",
//         "offers": {
//           "@type": "Offer",
//           "priceCurrency": "AED",
//           "price": "1300.00",
//           "availability": "https://schema.org/InStock",
//           "url": "https://mahaballoonadventures.ae/en/experiences",
//         },
//         "aggregateRating": {
//           "@type": "AggregateRating",
//           "ratingValue": "9",
//           "reviewCount": "150",
//           "bestRating": "10",
//           "worstRating": "1",
//         },
//       },
//       {
//         "@type": "Product",
//         "name": "Royal Hot Air Balloon Ride",
//         "description": "An exclusive private hot air balloon ride for couples or small groups seeking an unforgettable experience.",
//         "image": "https://res.cloudinary.com/dmcknuzk4/image/upload/v1728815199/fh25knkp1mxu2h0nxceo.webp",
//         "brand": "Maha Balloon Adventures",
//         "sku": "VIP789",
//         "offers": {
//           "@type": "Offer",
//           "priceCurrency": "AED",
//           "price": "1550.00",
//           "availability": "https://schema.org/InStock",
//           "url": "https://mahaballoonadventures.ae/en/experiences",
//         },
//         "aggregateRating": {
//           "@type": "AggregateRating",
//           "ratingValue": "9.0",
//           "reviewCount": "80",
//           "bestRating": "10",
//           "worstRating": "1",
//         },
//       },
//       {
//         "@type": "FAQPage",
//         "mainEntity": [
//           {
//             "@type": "Question",
//             "name": "Is a hot air balloon ride in Dubai safe?",
//             "acceptedAnswer": {
//               "@type": "Answer",
//               "text": "Yes, a hot air balloon ride in Dubai is generally safe. Operators adhere to strict safety guidelines set by the UAE’s civil aviation authorities. The balloons are piloted by licensed, experienced professionals who conduct thorough safety checks before each flight. Weather conditions are closely monitored, and rides only proceed when it’s safe to fly. Additionally, hot air balloons are designed with safety in mind, making the experience enjoyable and secure for passengers.",
//             },
//           },
//           {
//             "@type": "Question",
//             "name": "What should I wear for a hot air balloon ride?",
//             "acceptedAnswer": {
//               "@type": "Answer",
//               "text": "For a hot air balloon ride, it’s best to dress in comfortable, casual clothing. Since the temperature can be cool in the early morning (when most rides occur), it’s advisable to wear layers that you can adjust as the day warms up. Closed-toe shoes like sneakers are ideal, as you may need to walk on uneven terrain during landing. Sunglasses and a hat can also help protect against the sun as the balloon ascends.",
//             },
//           },
//           {
//             "@type": "Question",
//             "name": "Can children participate in a hot air balloon ride?",
//             "acceptedAnswer": {
//               "@type": "Answer",
//               "text": "Yes, children can participate in a hot air balloon ride, but there are usually age and height restrictions for safety reasons. Most operators in Dubai recommend that children be at least 5 or 6 years old to join the flight. It’s always best to check with the specific balloon company for their exact policy regarding child passengers.",
//             },
//           },
//           {
//             "@type": "Question",
//             "name": "What are the best times for a hot air balloon ride in Dubai?",
//             "acceptedAnswer": {
//               "@type": "Answer",
//               "text": "The best time for a hot air balloon ride in Dubai is early in the morning, just before sunrise. This is when the weather is calmest and the desert views are breathtaking. The cooler temperatures and golden light of the early morning create a magical experience as you soar above the sand dunes. It’s also the optimal time for spotting wildlife such as Arabian oryx and gazelles in their natural habitat.",
//             },
//           },
//         ],
//       },
//     ],
//   };

//   return (
//     <>
//       <Head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemaData),
//           }}
//         />
//         <meta
//           name="description"
//           content="Experience stunning views of the desert and create unforgettable memories with our expert-guided aerial adventures. Book your hot air balloon Dubai today!"
//         />
//       </Head>
//       <PageContent />
//     </>
//   );
// };

// export default Home;
