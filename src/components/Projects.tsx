import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";
import ProjectDetail from "./ProjectDetail";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags?: string[];
  client?: string;
  location?: string;
  year?: string;
  details?: string;
  challenges?: string[];
  results?: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      title: "Plotagem Completa - Giassi Supermercados",
      category: "Caminhões",
      description: "Plotagem completa de frota comercial com identidade visual corporativa.",
      image: "/IMG-PNG/aba1c62a-086f-4b83-9333-43b9042711bc.png",
      tags: ["Plotagem", "Frota", "Identidade Visual"],
      client: "Giassi Supermercados",
      location: "Santa Catarina",
      year: "2023",
      details: "Projeto completo de plotagem para frota comercial do Giassi Supermercados, incluindo desenvolvimento de identidade visual e aplicação em diferentes tipos de veículos.",
      challenges: ["Padronização visual em diferentes tipos de veículos", "Resistência às condições climáticas", "Tempo reduzido de execução"],
      results: ["100% da frota padronizada", "Aumento da visibilidade da marca", "Maior reconhecimento no mercado"]
    },
    {
      title: "Pintura Personalizada - Criciúma FC",
      category: "Veículos Especiais",
      description: "Pintura temática personalizada para veículo promocional do clube.",
      image: "/IMG-PNG/3605b5f8-0962-4bd8-beac-04f7b33a577c.png",
      tags: ["Pintura", "Personalização", "Esportivo"],
      client: "Criciúma Esporte Clube",
      location: "Criciúma - SC",
      year: "2023",
      details: "Desenvolvimento de pintura temática especial para veículo promocional do Criciúma FC, incorporando elementos visuais do clube e criando um design único.",
      challenges: ["Design temático autêntico", "Durabilidade da pintura", "Aprovação da diretoria do clube"],
      results: ["Visual impactante e único", "Grande repercussão nas redes sociais", "Fortalecimento da parceria com o clube"]
    },
    {
      title: "Fachada ACM - Pierini Redutores",
      category: "Fachadas",
      description: "Fachada completa em ACM com iluminação LED e letras caixas.",
      image: "/IMG-PNG/43a08657-2041-44fc-a4d0-90b8814fe687.png",
      tags: ["ACM", "Iluminação", "Letras Caixas"]
    },
    {
      title: "Comunicação Visual - Parma Alimentos",
      category: "Comunicação Empresarial",
      description: "Plotagem diferencial para transporte de alimentos com alta durabilidade.",
      image: "/IMG-PNG/5a1feb22-834e-43f8-a788-335ee4a7a163.png",
      tags: ["Durabilidade", "Alimentos", "Logística"]
    },
    {
      title: "Sinalização Completa - Cripex Transportes",
      category: "Frota Completa",
      description: "Padronização completa de frota com sinalização e identificação visual.",
      image: "/IMG-PNG/b18567d3-9601-49ef-9c74-27b01cef3886.png",
      tags: ["Padronização", "Transportes", "Sinalização"]
    },
    {
      title: "Identidade Visual - Glassi Combo",
      category: "Plotagem Comercial",
      description: "Desenvolvimento de identidade visual aplicada em veículos comerciais.",
      image: "/IMG-PNG/54fc7004-7f24-4eba-ba46-7746271a16bd.png",
      tags: ["Identidade", "Comercial", "Branding"]
    }
  ];

  const categories = ["Todos", "Caminhões", "Fachadas", "Veículos Especiais", "Frota Completa"];

  return (
    <section id="projetos" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" style={{ opacity: 1, transform: 'none' }}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-blue-600">Projetos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Confira alguns dos projetos que realizamos para nossos clientes, 
            transformando suas marcas em identidades visuais marcantes e profissionais.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-600 hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  onError={(e) => console.error(`Erro ao carregar imagem: ${project.image}`)}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      console.log("Selected project:", project);
                      setSelectedProject(project);
                    }}
                  >
                    <Eye className="mr-2 w-4 h-4" />
                    Ver Detalhes
                  </Button>
                </div>
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  {project.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags && project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="text-blue-600 hover:text-blue-700 p-0"
                  onClick={() => {
                    console.log("Selected project:", project);
                    setSelectedProject(project);
                  }}
                >
                  Ver projeto completo
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center" style={{ opacity: 1, transform: 'none' }}>
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Gostou do que viu?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Entre em contato conosco e transforme sua marca com nossas soluções 
              em comunicação visual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://wa.me/5548984310849?text=Olá! Gostaria de solicitar um orçamento para comunicação visual.', '_blank')}
              >
                Solicitar Orçamento
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://instagram.com/pelegrinletreirosCV', '_blank')}
              >
                Ver Mais Projetos
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full">
            <ProjectDetail
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
              onRequestQuote={() => {
                setSelectedProject(null);
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;