import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Award, Users } from "lucide-react";
import { imgGiassiBase64 } from "../lib/inicial";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-32">
      {/* Background with organic shapes */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 organic-blob"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8 fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary-light text-green-600">
                <Award className="w-6 h-6" />
                <span className="font-semibold">12 anos de experiência</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                PELEGRIN
                <span className="block text-3xl lg:text-4xl font-normal opacity-90">
                  LETREIROS E COMUNICAÇÃO VISUAL
                </span>
              </h1>
              
              <p className="text-xl opacity-90 max-w-lg">
                Especialistas em comunicação visual para frotas, veículos e empresas. 
                Transformamos sua marca em movimento com qualidade, agilidade e inovação.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="hover-scale text-primary bg-white"
                onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça nossos serviços
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                onClick={() => window.open('https://wa.me/5548984310849?text=Olá! Gostaria de falar sobre comunicação visual para minha empresa.', '_blank')}
              >
                Fale conosco
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold">12+</div>
                <div className="text-sm opacity-75">Anos no mercado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-75">Projetos realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-75">Satisfação do cliente</div>
              </div>
            </div>
          </div>

          {/* Right content - Project showcase */}
          <div className="relative fade-in-up">
            <div className="relative">
              {/* Background P logo */}
              <div className="text-white/10 text-[300px] font-bold leading-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
                P
              </div>
              
              {/* Project image */}
              <div className="relative z-10 flex items-center justify-center h-96">
                <div className="relative group">
                  <img
                    src={imgGiassiBase64}
                    alt="Plotagem Completa - Giassi Supermercados"
                    className="w-80 h-64 object-cover rounded-2xl shadow-2xl hover-scale"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-2xl group-hover:bg-black/10 transition-colors"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;