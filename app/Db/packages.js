//thumb
// New Images
const package2 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Homepage/Explore Our Packages2.webp";
const package22 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Homepage/package5.webp";
const package3 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Homepage/Explore Our Packages3.webp";
const package4 =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/New/Homepage/Explore Our Packages4.webp";

// New Packages
const flightDuration =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/ExplorePackages/FlightDuration.webp";
const PerfectPurposal =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/ExplorePackages/PerfectPurposal.webp";
const RomanticGateway =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/ExplorePackages/RomanticGateway.webp";
const earlyReservation =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/Early reservation recommended.webp";
const culturalEntertainment =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/cultural enterainment.webp";
const Photograph =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/Photograph.webp";
const GroupBooking =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/Group_Booking.webp";
const PersonalizedPkg =
  "https://d3nt41cjjw3im8.cloudfront.net/assets/more_details/PersonalizedPkg.webp";

let ourPackages = [
  {
    id: 2,
    thumb: package3,
    thumb_title:
      "Private Hot Air Balloon Rides | Private transfer all over Dubai |Maha Balloon Adventures",
    thumb_desc:
      "Experience private hot air balloon rides with convenient pick-up and drop-off across Dubai for a seamless Arabian Desert adventure. ",
    featured: true,
    title: "CELESTIAL PRIVATE ROMANCE",
    price_adult: "",
    price_child: "",
    bookNow: true,
    short_detail:
      "Elevate your proposal to new heights with this unforgettable hot air balloon ride over the Dubai desert. Experience a magical sunrise ride, pop the question, and enjoy a delightful breakfast together.",
    itineraries: [
      {
        feature_img: PerfectPurposal,
        activity: "Perfect Proposal Setting",
        details:
          "The perfect setting for proposals, key milestones, and anniversaries.",
      },
      {
        feature_img: RomanticGateway,
        activity: "A Romantic Getaway",
        details:
          "Book the entire balloon exclusively for you and your partner, with a gourmet romantic meal, bubbly, cake, and memorabilia.",
      },
      {
        feature_img: earlyReservation,
        activity: "Early Reservations recommended",
        details:
          "Capture every moment with a professional photo and video shoot.",
      },
    ],
  },
  {
    id: 3,
    thumb: package22,
    thumb_title:
      "Group Booking Hot Air Balloon Package | Hot Air Balloon | Maha Balloon Adventures",
    thumb_desc:
      "Enjoy Hot Air Balloon with exclusive group rates, tailored packages, and personalised service.",
    featured: true,
    title: "GROUP BOOKING",
    price_adult: "",
    price_child: "",
    bookNow: true,
    short_detail:
      "Enjoy exclusive group rates, tailored packages, and personalized service:We offer tailored arrangements for all group types, ensuring a unique and personalized experience. Whether for family, friends, or colleagues.",
    itineraries: [
      {
        feature_img: GroupBooking,
        activity: "Special event",
        details:
          "Get your group of 10 or more together for birthdays, reunions, or any special event!",
      },
      {
        feature_img: Photograph,
        activity: "Photoshoot to Capture the Memories",
        details:
          "Enjoy exclusive rates, customized cakes, and fun props with a professional photoshoot to capture the memories.",
      },
      {
        feature_img: PersonalizedPkg,
        activity: "Personalized packages",
        details:
          "Personalized packages tailored to make your celebration unforgettable.",
      },

      {
        feature_img: earlyReservation,
        activity: "Early Reservations recommended",
        details: "",
        // "Capture every moment with a professional photo and video shoot.",
      },
    ],
  },
  {
    id: 4,
    thumb: package4,
    thumb_title:
      "Corporate Event Hot Air Balloon Package | Hot Air Balloon Ride | Maha Balloon Adventures",
    thumb_desc:
      "CORPORATE EVENT hot air balloon ride Take your corporate event to new heights. 4000 feet above sea level to be exact!",
    featured: true,
    title: "CORPORATE EVENT",
    price_adult: "",
    price_child: "",
    bookNow: true,
    short_detail:
      "CORPORATE EVENT Take your corporate event to new heights. 4000 feet above sea level to be exact! Let your next corporate adventure be the best one yet for your friends ",
    itineraries: [
      {
        feature_img: flightDuration,
        activity: "Celebrate Baby Showers",
      },
      {
        feature_img: culturalEntertainment,
        activity: "Kitty parties",
      },
      {
        feature_img: culturalEntertainment,
        activity: "Birthday celebration anniversaries",
      },
    ],
  },
  {
    id: 5,
    thumb: package2,
    thumb_title:
      "CELEBRATORY OCCASIONS | hot air balloon rides | Maha Balloon Adventures",
    thumb_desc:
      "Celebrate your special milestones with hot air balloon rides for birthdays, anniversaries, graduations, engagements, weddings, baby showers, retirements, and Overnight New Year celebrations!",
    featured: true,
    title: "CELEBRATORY OCCASIONS",
    price_adult: "",
    price_child: "",
    bookNow: true,
    short_detail:
      "Celebrate your special milestones with hot air balloon rides for birthdays, anniversaries, graduations, engagements, weddings, baby showers, retirements, and Overnight New Year celebrations!",
    itineraries: [
      {
        feature_img: GroupBooking,
        activity: "Special event",
        details:
          "Get your group of 10 or more together for birthdays, reunions, or any special event!",
      },
      {
        feature_img: flightDuration,
        activity: "Celebrate Baby Showers",
      },
      {
        feature_img: culturalEntertainment,
        activity: "Kitty parties",
      },
      {
        feature_img: culturalEntertainment,
        activity: "Birthday celebration anniversaries",
      },
      {
        feature_img: earlyReservation,
        activity: "Early Reservations recommended",
        details:
          "Capture every moment with a professional photo and video shoot.",
      },
    ],
  },
];

export default ourPackages;
