// import React from "react";
// import "./styles.scss";
// import { Container } from "react-bootstrap";
// function Index() {
//   return (
//     <div className="termsPage939 py-60">
//       {" "}
//       <Container>
//         <div className="content_wrap">
//           <div className="tag-line mb-3">Terms</div>
//           <div className="main-title mb-3">
//             Terms and Conditions for Hot Air Balloon Flights
//           </div>
//           <p>
//             <strong>General Information:</strong>
//             Balloon flights occur early in the morning, with timings adjusted
//             according to sunrise. The reservation team will contact you the day
//             before the flight between 12 PM and 9 PM for confirmation and
//             pick-up details. Transfers are conducted in four-wheel vehicles
//             suitable for desert travel. A Certificate of First Flight will be
//             provided upon completion, and all flights adhere to GCAA safety
//             standards. It is essential to wear comfortable clothing and follow
//             the pilot’s safety instructions during the flight.
//           </p>
//           <p>
//             <strong>Reservation and Age Requirements:</strong>
//             Children under 11 must be accompanied by an adult, while adult
//             prices apply to those aged 11 and older. Passengers must submit a
//             government-issued ID, and certain medical conditions may prevent
//             participation. The maximum weight limit is 120 kg per adult.
//             Pregnant women beyond three months, children under five, and
//             individuals over 80 years old cannot fly.
//           </p>
//           <p>
//             <strong>Cancellation Policy:</strong>
//             For non-group bookings, cancellations made 72 hours before the
//             flight incur no fee, while cancellations made 24 hours before incur
//             a 100% cancellation fee. Group bookings have different timelines for
//             cancellation fees. If a flight is canceled due to weather
//             conditions, a full refund will be processed within 7–10 days. The
//             operator reserves the right to amend these terms, and any changes
//             will be communicated accordingly.
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

function TermsAndConditions() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const content = {
    en: {
      tagLine: "Terms",
      title: "Terms and Conditions for Hot Air Balloon Flights",
      generalInfo: `Balloon flights occur early in the morning, with timings adjusted according to sunrise. The reservation team will contact you the day before the flight between 12 PM and 9 PM for confirmation and pick-up details. Transfers are conducted in four-wheel vehicles suitable for desert travel. A Certificate of First Flight will be provided upon completion, and all flights adhere to GCAA safety standards. It is essential to wear comfortable clothing and follow the pilot’s safety instructions during the flight.`,
      reservation: `Children under 11 must be accompanied by an adult, while adult prices apply to those aged 11 and older. Passengers must submit a government-issued ID, and certain medical conditions may prevent participation. The maximum weight limit is 120 kg per adult. Pregnant women beyond three months, children under five, and individuals over 80 years old cannot fly.`,
      cancellation: `For non-group bookings, cancellations made 72 hours before the flight incur no fee, while cancellations made 24 hours before incur a 100% cancellation fee. Group bookings have different timelines for cancellation fees. If a flight is canceled due to weather conditions, a full refund will be processed within 7–10 days. The operator reserves the right to amend these terms, and any changes will be communicated accordingly.`
    },
    ar: {
      tagLine: "الشروط",
      title: "الشروط والأحكام لرحلات المناطيد الهوائية",
      generalInfo: `تُجرى رحلات المناطيد الهوائية في وقت مبكر من الصباح، مع تعديل التوقيت حسب شروق الشمس. سيتواصل فريق الحجز معك في اليوم السابق للرحلة بين الساعة 12 ظهرًا و9 مساءً للتأكيد وتفاصيل النقل. تتم عمليات النقل في مركبات رباعية الدفع مناسبة للسفر في الصحراء. سيتم تقديم شهادة الطيران الأول عند الانتهاء، وتلتزم جميع الرحلات بمعايير السلامة الخاصة بهيئة الطيران المدني (GCAA). من الضروري ارتداء ملابس مريحة واتباع تعليمات السلامة التي يقدمها الطيار أثناء الرحلة.`,
      reservation: `يجب أن يكون الأطفال الذين تقل أعمارهم عن 11 عامًا برفقة شخص بالغ، بينما يتم تطبيق أسعار البالغين على من تبلغ أعمارهم 11 عامًا أو أكثر. يجب على الركاب تقديم هوية حكومية، وقد تمنع بعض الحالات الطبية المشاركة في الرحلة. الحد الأقصى للوزن هو 120 كجم لكل بالغ. لا يُسمح للنساء الحوامل بعد الشهر الثالث، أو الأطفال دون سن الخامسة، أو الأشخاص الذين تزيد أعمارهم عن 80 عامًا بالطيران.`,
      cancellation: `بالنسبة للحجوزات غير الجماعية، لا يتم فرض أي رسوم على الإلغاء الذي يتم قبل 72 ساعة من الرحلة، بينما يتم فرض رسوم إلغاء بنسبة 100٪ على الإلغاءات التي تتم قبل 24 ساعة. تخضع الحجوزات الجماعية لسياسات إلغاء مختلفة. في حالة إلغاء الرحلة بسبب الظروف الجوية، سيتم استرداد المبلغ بالكامل خلال 7-10 أيام. يحتفظ المشغل بالحق في تعديل هذه الشروط، وسيتم التواصل بأي تغييرات وفقًا لذلك.`
    }
  };

  return (
    <div className="termsPage939 py-60" style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>
      <Container>
        <div className="content_wrap">
          <div className="tag-line mb-3">{content[lang].tagLine}</div>
          <div className="main-title mb-3">{content[lang].title}</div>
          <p>
            <strong>{lang === "en" ? "General Information:" : "معلومات عامة:"}</strong>
            {content[lang].generalInfo}
          </p>
          <p>
            <strong>{lang === "en" ? "Reservation and Age Requirements:" : "متطلبات الحجز والعمر:"}</strong>
            {content[lang].reservation}
          </p>
          <p>
            <strong>{lang === "en" ? "Cancellation Policy:" : "سياسة الإلغاء:"}</strong>
            {content[lang].cancellation}
          </p>
        </div>
      </Container>
    </div>
  );
}

export default TermsAndConditions;

