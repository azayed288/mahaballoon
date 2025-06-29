// import React from "react";
// import "./styles.scss";
// import { Container } from "react-bootstrap";
// function Index() {
//   return (
//     <div className="PrimaryDei39Page py-60">
//       {" "}
//       <Container>
//         <div className="content_wrap">
//           <div className="tag-line mb-3">Policy</div>
//           <div className="main-title mb-3">Privacy Policy</div>
//           <p>
//             At Maha Balloon Adventures, we prioritize your privacy and are
//             committed to safeguarding the information collected throughout the
//             balloon flight process. We understand that your details are
//             sensitive, and we implement robust measures to protect your data
//             from unauthorized access, disclosure, or misuse. Your information
//             will only be utilized for communication purposes directly related to
//             your flight, ensuring a seamless and personalized experience.
//           </p>
//           <h3>Information We Collect</h3>
//           <p>
//             To provide you with the best possible service, we collect specific
//             personal details during the booking process. This includes your
//             name, contact information (such as phone number and email address),
//             and a form of identification (ID) to confirm your identity and
//             ensure compliance with safety protocols. All collected information
//             is securely stored in our database, which is protected by advanced
//             security measures to prevent unauthorized access. We want to assure
//             you that your information is not shared with third parties under any
//             circumstances unless required by law or with your explicit consent.
//           </p>
//           <h3>Data Usage</h3>
//           <p>
//             Your information is vital for the smooth operation of our services.
//             We use your personal details for several key purposes:
//           </p>

//           <ul>
//             <li>
//               <strong>Reservation Confirmation:</strong> Your data allows us to
//               accurately confirm your flight reservation, ensuring that all
//               details are correct and up to date.
//             </li>
//             <li>
//               <strong>Coordination of Pick-Ups:</strong> We use your contact
//               information to arrange pick-up times and locations, making the
//               process convenient and tailored to your needs.
//             </li>
//             <li>
//               <strong>Compliance with Flight Safety Standards:</strong> We are
//               committed to maintaining the highest safety standards. Your
//               personal information is essential for verifying identities,
//               conducting safety briefings, and complying with aviation
//               regulations.
//             </li>
//           </ul>
//           <p>
//             Overall, we utilize your information solely for these purposes,
//             ensuring a safe, efficient, and enjoyable balloon flight experience
//             while respecting your privacy.
//           </p>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Index;

import React from "react";
import "./styles.scss";
import { Container } from "react-bootstrap";
import { usePathname } from "next/navigation";

function PrivacyPolicy() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const content = {
    en: {
      tagLine: "Policy",
      title: "Privacy Policy",
      intro:
        "At Maha Balloon Adventures, we prioritize your privacy and are committed to safeguarding the information collected throughout the balloon flight process. We understand that your details are sensitive, and we implement robust measures to protect your data from unauthorized access, disclosure, or misuse.",
      infoTitle: "Information We Collect",
      infoContent:
        "To provide you with the best possible service, we collect specific personal details during the booking process. This includes your name, contact information (such as phone number and email address), and a form of identification (ID) to confirm your identity and ensure compliance with safety protocols.",
      dataTitle: "Data Usage",
      dataContent:
        "Your information is vital for the smooth operation of our services. We use your personal details for several key purposes:",
      dataPoints: [
        "Reservation Confirmation: Your data allows us to accurately confirm your flight reservation, ensuring that all details are correct and up to date.",
        "Coordination of Pick-Ups: We use your contact information to arrange pick-up times and locations, making the process convenient and tailored to your needs.",
        "Compliance with Flight Safety Standards: We are committed to maintaining the highest safety standards. Your personal information is essential for verifying identities, conducting safety briefings, and complying with aviation regulations.",
      ],
    },
    ar: {
      tagLine: "السياسة",
      title: "سياسة الخصوصية",
      intro:
        "في مغامرات مها للبالونات، نولي خصوصيتك أهمية قصوى ونلتزم بحماية المعلومات التي يتم جمعها أثناء عملية حجز رحلة البالون. نحن ندرك أن تفاصيلك حساسة، ونتخذ تدابير قوية لحماية بياناتك من الوصول غير المصرح به أو الكشف أو سوء الاستخدام.",
      infoTitle: "المعلومات التي نجمعها",
      infoContent:
        "لتقديم أفضل خدمة ممكنة، نقوم بجمع بعض التفاصيل الشخصية أثناء عملية الحجز. يشمل ذلك اسمك ومعلومات الاتصال الخاصة بك (مثل رقم الهاتف وعنوان البريد الإلكتروني) ونوعًا من التعريف (الهوية) لتأكيد هويتك وضمان الامتثال لبروتوكولات السلامة.",
      dataTitle: "استخدام البيانات",
      dataContent:
        "معلوماتك ضرورية لضمان التشغيل السلس لخدماتنا. نستخدم بياناتك الشخصية لأغراض رئيسية:",
      dataPoints: [
        "تأكيد الحجز: تتيح لنا بياناتك تأكيد حجز رحلتك بدقة، مما يضمن أن جميع التفاصيل صحيحة ومحدثة.",
        "تنسيق عمليات النقل: نستخدم معلومات الاتصال الخاصة بك لترتيب مواعيد وأماكن الالتقاط، مما يجعل العملية مريحة ومناسبة لاحتياجاتك.",
        "الامتثال لمعايير سلامة الطيران: نحن ملتزمون بالحفاظ على أعلى معايير السلامة. معلوماتك الشخصية ضرورية للتحقق من الهويات، وإجراء الإحاطات الأمنية، والامتثال للوائح الطيران.",
      ],
    },
  };

  const data = content[lang];

  return (
    <div className="PrimaryDei39Page py-60">
      <Container>
        <div
          className="content_wrap"
          style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
        >
          <div className="tag-line mb-3">{data.tagLine}</div>
          <div className="main-title mb-3">{data.title}</div>
          <p>{data.intro}</p>
          <h3>{data.infoTitle}</h3>
          <p>{data.infoContent}</p>
          <h3>{data.dataTitle}</h3>
          <p>{data.dataContent}</p>
          <ul>
            {data.dataPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default PrivacyPolicy;
