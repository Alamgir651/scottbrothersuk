// All copy is taken word-for-word from the live site (www.scottbrothersuk.co.uk)

export const links = {
  home: "/",
  about: "/about-us",
  portfolio: "/our-portfolio-of-home-transformations-in-bristol",
  design: "/garden-consultancy-yate",
  contact: "/contact-us",
  landscaping: "/landscape-gardeners-yate",
  testimonials: "/bristol-homeowner-testimonials",
  clientForm: "/client-form",
};

// Photos that are only on the live CDN (not downloaded into /public)
export const zyro = (file: string, w = 1600) =>
  `https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=${w}/mePB0Roo6KhE4R47/${file}`;

export const site = {
  name: "Scott Brothers UK LTD",
  phone: "07765 190 683",
  phoneHref: "tel:07765190683",
  email: "info@scottbrothersuk.co.uk",
  address: "229 North Road, Yate, BS37 7LG",
  social: {
    facebook: "https://www.facebook.com/scottbrothersuk",
    instagram: "https://www.instagram.com/scott_brothers_uk_ltd/",
    youtube: "https://www.youtube.com/channel/UCbosJdk74KY73T2k1gQPacQ/featured",
  },
};

export const nav = [
  { label: "Home", href: links.home },
  { label: "About Us", href: links.about },
  { label: "Our Portfolio", href: links.portfolio },
  { label: "Design My Space", href: links.design },
  { label: "Contact Us", href: links.contact },
  { label: "Luxury Landscaping", href: links.landscaping },
];

export const services = [
  {
    title: "Extension Building Contactors",
    lead: "Enhance your home for added value and comfort.",
    body: [
      "We have assisted families in Bristol and nearby areas. extend their home with ease and stress-free!",
      "Contact our team today to see the possibilities for your home!",
    ],
    image: "/img/extension2.jpg",
    alt: "Brick extension with glass roof panels and sliding doors, lit at dusk, opening onto a new sandstone patio",
  },
  {
    title: "Award Winning Landscape Design",
    lead: "Professional garden design",
    body: [
      "Create your dream garden with your vision and with our skills, we can make your dreams become a reality.",
      "Contact our team to help you design your new garden!",
    ],
    image: "/img/standrews.jpg",
    alt: "Victorian front garden of white gravel curves edged in steel with feature stone and planting",
  },
  {
    title: "A Grade Kitchens",
    lead: "The kitchen is the heart of the home, where the family hangs out and gathers around the dinner table.",
    body: ["If you would like a gorgeous bathroom, bespoke to you, then you should give us a call."],
    image: "/img/kitchen.jpg",
    alt: "Handleless kitchen in grey and navy with white worktops and built-in ovens",
  },
  {
    title: "Luxurious Bathroom Fitter",
    lead: "Maybe it's time to freshen up with a modern look that screams class, elegance and is very practical for the family",
    body: ["Get in touch with our bathroom fitters for a beautiful transformation you never knew was possible."],
    image: "/img/bathroom.jpg",
    alt: "Bathroom with freestanding bath, timber-effect tiles, black towel radiator and vessel basin",
  },
];

export const homeProjects = [
  {
    name: "Project Friary",
    href: "/winterbourne-landscapers",
    image: "/img/home.jpg",
    alt: "Cedar-clad garden room with glass doors beside a Japanese maple",
  },
  {
    name: "Project Hazel",
    href: "/project-hazel",
    image: "/img/hazel.jpg",
    alt: "Garden at night with a blue-lit raised bed and a glowing timber outdoor bar",
  },
  {
    name: "Project Dodd",
    href: "/project-dodd",
    image: "/img/project3.jpg",
    alt: "Family garden with new fencing, raised deck, lawn and a curved white gravel path",
  },
];
