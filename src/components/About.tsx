import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Clock, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quem <span className="text-primary">Somos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma empresa especializada há mais de 12 anos no mercado, 
            trabalhando com padronização de frota, pintura de letreiro em caminhões 
            e toda linha de comunicação visual.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Nosso <span className="text-primary">Compromisso</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tendo como objetivo atender as necessidades dos nossos clientes 
                oferecendo sempre a melhor relação de custo benefício, prezando pela 
                <strong className="text-primary"> qualidade, agilidade e inovação!</strong>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold text-gray-900">12+ Anos</div>
                  <div className="text-sm text-gray-600">de Experiência</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold text-gray-900">Qualidade</div>
                  <div className="text-sm text-gray-600">Garantida</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold text-gray-900">Agilidade</div>
                  <div className="text-sm text-gray-600">na Entrega</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold text-gray-900">Inovação</div>
                  <div className="text-sm text-gray-600">Constante</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Visual element */}
          <div className="relative fade-in-up">
            <div className="bg-primary/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-6xl font-bold text-primary mb-2">12</div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">Anos de Experiência</div>
                  <div className="text-gray-600">
                    Transformando marcas em movimento com excelência em comunicação visual
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="card-float border-0 shadow-lg hover-glow fade-in-up">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Missão</h4>
              <p className="text-gray-600">
                Oferecer soluções completas em comunicação visual, proporcionando 
                identidade visual marcante e duradoura para nossos clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="card-float border-0 shadow-lg hover-glow fade-in-up">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Visão</h4>
              <p className="text-gray-600">
                Ser referência em comunicação visual no Sul do Brasil, 
                reconhecida pela qualidade, inovação e excelência no atendimento.
              </p>
            </CardContent>
          </Card>

          <Card className="card-float border-0 shadow-lg hover-glow fade-in-up">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Valores</h4>
              <p className="text-gray-600">
                Qualidade, agilidade, inovação, transparência e compromisso 
                com a satisfação total de nossos clientes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;