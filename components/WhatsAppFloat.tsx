import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/** Bouton WhatsApp flottant, visible surtout sur mobile. */
export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener"
      aria-label="Nous écrire sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-13 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" strokeWidth={2} aria-hidden />
    </a>
  );
}
