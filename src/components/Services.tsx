import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  Building, 
  PaintBucket, 
  FileImage, 
  Square, 
  Layers, 
  Car,
  Store,
  ArrowRight,
  Palette
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Plotagem e Pintura de Caminhões",
      description: "Especialistas em personalização de caminhões com plotagem, pintura de letreiro, logomarca em baú, chassi e toda linha de utilitários.",
      features: ["Plotagem Baú", "Pintura Letreiro", "Pintura Chassi", "Remoção de Adesivos"]
    },
    {
      icon: Building,
      title: "Fachada em ACM",
      description: "Fachadas com revestimento em ACM, ACM Adesivado, Letras Caixas ou Lonas Back e Front Light com iluminação.",
      features: ["ACM Revestimento", "Letras Caixas", "Iluminação LED", "Front Light"]
    },
    {
      icon: FileImage,
      title: "Totens e Placas",
      description: "Totens em ACM Vazado, Adesivado, Lonas Front e Back Light com iluminação por Lâmpadas, Leds ou SpotLight.",
      features: ["Totens Illuminados", "Placas de Segurança", "Sinalização Industrial", "Placas Personalizadas"]
    },
    {
      icon: PaintBucket,
      title: "Adesivos",
      description: "Renovamos sua fachada, adesivamos sua vitrine ou serviços de plotagens de comunicação interna e externa.",
      features: ["Adesivos de Vitrine", "Plotagem Interna", "Comunicação Externa", "Personalização"]
    },
    {
      icon: Square,
      title: "Banners e Faixas",
      description: "Banners em Lonas com acabamento com ilhós e com suporte de madeira para diversas aplicações.",
      features: ["Banners Promocionais", "Faixas Publicitárias", "Suporte Madeira", "Acabamento Ilhós"]
    },
    {
      icon: Car,
      title: "Plotagem de Veículos",
      description: "Temos mão de obra especializada para colocar em prática aquele projeto especial de personalização do seu veículo.",
      features: ["Envelopamento Total", "Plotagem Parcial", "Identidade Visual", "Proteção da Pintura"]
    },
    {
      icon: Layers,
      title: "Sinalização Interna",
      description: "Placas, Displays, Adesivos e Letras Caixas para sinalização interna para personalizar sua empresa.",
      features: ["Placas Direcionais", "Displays Informativos", "Sinalização de Segurança", "Identificação de Setores"]
    },
    {
      icon: Store,
      title: "Comunicação Expositores",
      description: "Soluções personalizadas para feiras e show rooms, alinhadas com sua estratégia competitiva.",
      features: ["Material para Feiras", "Show Room", "Displays Promocionais", "Comunicação Visual"]
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços em comunicação visual, 
            desde plotagem de veículos até fachadas comerciais completas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-float border-0 shadow-lg group fade-in-up">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="mt-4 p-0 text-primary hover:text-primary-dark"
                  onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba mais
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialty Section */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 lg:p-12 text-white fade-in-up">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Especialistas em Comunicação Visual
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Com mais de 12 anos de experiência, oferecemos soluções completas 
                para sua empresa se destacar no mercado com identidade visual marcante e profissional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="text-primary hover-scale bg-white"
                  onClick={() => window.open('https://wa.me/5548984310849?text=Olá! Gostaria de solicitar um orçamento para comunicação visual.', '_blank')}
                >
                  <Palette className="mr-2 w-5 h-5" />
                  Solicitar Orçamento
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Portfolio
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-xl mb-4">Projetos Realizados</div>
                <div className="text-sm opacity-75">
                  Caminhões, fachadas, veículos e muito mais transformados 
                  com nossa expertise em comunicação visual
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;