export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Implants", href: "/services/dental-implants" },
  { label: "Doctor", href: "/doctor" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks: NavItem[] = [
  { label: "About the Clinic", href: "/about" },
  { label: "Meet the Doctor", href: "/doctor" },
  { label: "All Services", href: "/services" },
  { label: "Clinic Gallery", href: "/gallery" },
  { label: "Book an Appointment", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export const footerServiceLinks: NavItem[] = [
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
  { label: "Crowns & Bridges", href: "/services/crowns-and-bridges" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening" },
  { label: "Braces & Clear Aligners", href: "/services/braces-clear-aligners" },
  { label: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
];
