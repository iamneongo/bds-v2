import { Phone } from "lucide-react";

export function FloatingPhone() {
  return (
    <a
      href="tel:6196484700"
      aria-label="Call us"
      className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#2f9be0] text-white shadow-xl transition hover:scale-105 lg:bottom-28"
    >
      <Phone className="h-6 w-6 fill-white" />
    </a>
  );
}
