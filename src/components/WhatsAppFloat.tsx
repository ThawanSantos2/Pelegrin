import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappNumber = "5548984310849"; // Número do WhatsApp da Pelegrin
  const message = "Olá! Gostaria de solicitar um orçamento para comunicação visual.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden group-hover:block text-sm font-medium whitespace-nowrap pr-2">
        Fale conosco
      </span>
    </a>
  );
};

export default WhatsAppFloat;