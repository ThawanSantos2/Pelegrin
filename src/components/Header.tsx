import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-2 text-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(48) 9 8431-0849</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Vila São José - Içara - SC</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>@pelegrinletreirosSC</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-green-600 p-1 rounded-md">
                <img
                  src="/IMG-PNG/logo-pelegrin.png"
                  alt="Logo Pelegrin"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-primary transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-primary transition-colors">
                Sobre nós
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#projetos" className="text-gray-700 hover:text-primary transition-colors">
                Projetos
              </a>
              <a href="#clientes" className="text-gray-700 hover:text-primary transition-colors">
                Clientes
              </a>
              <a href="#contato" className="text-gray-700 hover:text-primary transition-colors">
                Contato
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                className="hover-scale"
                onClick={() => window.open('https://wa.me/5548984310849?text=Olá! Gostaria de solicitar um orçamento para comunicação visual.', '_blank')}
              >
                Solicitar Orçamento
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-primary transition-colors py-2">
                  Início
                </a>
                <a href="#sobre" className="text-gray-700 hover:text-primary transition-colors py-2">
                  Sobre nós
                </a>
                <a href="#servicos" className="text-gray-700 hover:text-primary transition-colors py-2">
                  Serviços
                </a>
                <a href="#projetos" className="text-gray-700 hover:text-primary transition-colors py-2">
                  Projetos
                </a>
                <a href="#clientes" className="text-gray-700 hover:text-primary transition-colors py-2">
                  Clientes
                </a>
                <a href="#contato" className="text-gray-700 hover:text-primary transition-colors py-2">
                  Contato
                </a>
                <Button 
                  className="mt-4"
                  onClick={() => window.open('https://wa.me/5548984310849?text=Olá! Gostaria de solicitar um orçamento para comunicação visual.', '_blank')}
                >
                  Solicitar Orçamento
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;