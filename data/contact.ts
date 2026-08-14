import { ContactLink } from "@/lib/types";

export const whatsappHref = "https://wa.me/34630515551";
export const emailHref = "mailto:isamoreno333@gmail.com";
export const phoneHref = "tel:+34630515551";

export const contactLinks: ContactLink[] = [
  {
    icon: "fa-solid fa-phone",
    label: "+34 630 51 55 51",
    href: phoneHref,
  },
  {
    icon: "fa-solid fa-envelope",
    label: "isamoreno333@gmail.com",
    href: emailHref,
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "Donostia / San Sebastián (Presencial) & Online",
    href: "#",
    static: true,
  },
];
