import { MapPin, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl">
                P
              </div>
              <div>
                <div className="font-bold text-xl">PELEGRIN</div>
                <div className="text-sm text-gray-400">Comunicação Visual</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Há mais de 12 anos transformando marcas em identidades visuais marcantes. 
              Especialistas em comunicação visual para frotas, fachadas e empresas.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm">Rua Plascido Bortoti Zanolli, 65</div>
                  <div className="text-sm text-gray-400">Vila São José - Içara - SC</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div className="text-sm">
                  <div>(48) 9 8431-0849</div>
                  <div className="text-gray-400">(48) 9 9625-4778</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Plotagem de Caminhões</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fachada em ACM</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Plotagem de Veículos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Totens e Placas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Banners e Faixas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sinalização Interna</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#projetos" className="hover:text-primary transition-colors">Projetos</a></li>
              <li><a href="#clientes" className="hover:text-primary transition-colors">Clientes</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Siga-nos</h5>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com/pelegrinletreirosCV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              © 2024 Pelegrin Comunicação Visual. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;