import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  Instagram
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento.

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*E-mail:* ${formData.email}
*Serviço:* ${formData.service}
*Mensagem:* ${formData.message}

Aguardo retorno. Obrigado!`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5548984310849?text=${encodedMessage}`, '_blank');
    
    // Show success toast
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será direcionado para continuar a conversa no WhatsApp.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para transformar sua marca? Entre em contato conosco e 
            descubra como podemos ajudar sua empresa a se destacar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-up">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Vamos Conversar?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Nossa equipe está pronta para atender você e desenvolver 
                a solução perfeita para sua necessidade.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Endereço</h4>
                    <p className="text-gray-600">Rua Plascido Bortoti Zanolli, 65</p>
                    <p className="text-gray-600">Vila São José - Içara - SC</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefones</h4>
                    <p className="text-gray-600">(48) 9 8431-0849</p>
                    <p className="text-gray-600">(48) 9 9625-4778</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Redes Sociais</h4>
                    <p className="text-gray-600">@pelegrinletreirosCV</p>
                    <p className="text-sm text-gray-500">Siga-nos no Instagram</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábado: 8h às 12h</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Message */}
            <div className="bg-primary/10 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Bora movimentar sua marca?
              </h4>
              <p className="text-gray-600 mb-4">
                Entre em contato conosco pelo WhatsApp para um atendimento 
                mais rápido e personalizado!
              </p>
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white"
                onClick={() => window.open('https://wa.me/5548984310849?text=Olá! Gostaria de falar sobre comunicação visual para minha empresa.', '_blank')}
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                Chamar no WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Solicite seu Orçamento
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="(48) 9 9999-9999"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Serviço de Interesse</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="plotagem-caminhoes">Plotagem de Caminhões</option>
                    <option value="fachada-acm">Fachada em ACM</option>
                    <option value="plotagem-veiculos">Plotagem de Veículos</option>
                    <option value="totens-placas">Totens e Placas</option>
                    <option value="banners-faixas">Banners e Faixas</option>
                    <option value="sinalizacao-interna">Sinalização Interna</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    rows={4}
                    placeholder="Conte-nos mais sobre seu projeto..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full hover-scale">
                  <Send className="mr-2 w-5 h-5" />
                  Enviar Solicitação
                </Button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Retornaremos seu contato em até 24 horas úteis
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;