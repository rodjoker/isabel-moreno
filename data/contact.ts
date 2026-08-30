import { ContactLink } from "@/lib/types";

export const whatsappHref = "https://wa.me/34674095265";
export const emailHref = "mailto:metodonostos@gmail.com";
export const phoneHref = "tel:+34674095265";

export const contactLinks: ContactLink[] = [
  {
    icon: "fa-solid fa-phone",
    label: "+34 674 09 52 65",
    href: phoneHref,
  },
  {
    icon: "fa-solid fa-envelope",
    label: "metodonostos@gmail.com",
    href: emailHref,
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "Guipuzcoa (Presencial) & Online",
    href: "#",
    static: true,
  },
];
