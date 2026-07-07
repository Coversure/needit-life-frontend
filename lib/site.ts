export const siteConfig = {
  name: "NeedIt Life",
  legalName: "Momentum Life Limited",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  newBusinessPhone: "0800 111 679",
  existingCustomerPhone: "0800 108 108",
  overseasPhone: "+64 9 488 9480",
  email: "support@needitlife.co.nz",
  claimsEmail: "claims@needitlife.co.nz",
  hours: "Monday to Friday, 9am to 5pm",
};

export const mainNavigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQs", href: "/faqs" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  cover: [
    { label: "NeedIt Life Insurance", href: "/needit-life-insurance" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Get a Quote", href: "/get-a-quote" },
    { label: "FAQs", href: "/faqs" },
  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Financial Strength", href: "/financial-strength" },
    { label: "Fair Conduct Programme", href: "/fair-conduct-programme" },
    {
      label: "Financial Advice Disclosure",
      href: "/financial-advice-disclosure",
    },
  ],
  resources: [
    { label: "Guides & Articles", href: "/resources" },
    { label: "Documents & Forms", href: "/resources/documents-and-forms" },
  ],
  support: [
    { label: "Existing Customers", href: "/existing-customers" },
    { label: "Claims", href: "/claims" },
    { label: "Contact", href: "/contact" },
    { label: "Book an Appointment", href: "/book-an-appointment" },
    { label: "Complaints", href: "/complaints" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};
