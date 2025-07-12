import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, User, CheckCircle } from "lucide-react";

interface ProjectDetailProps {
  project: {
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
  };
  onBack: () => void;
  onRequestQuote: () => void;
}

const ProjectDetail = ({ project, onBack, onRequestQuote }: ProjectDetailProps) => {
  console.log("ProjectDetail project:", project);
  // Logs de depuração movidos para fora do JSX
  console.log("Rendering client:", project.client);
  console.log("Rendering location:", project.location);
  console.log("Rendering year:", project.year);

  // Verificar se o projeto tem as propriedades necessárias
  if (!project || !project.title || !project.category || !project.description || !project.image) {
    return (
      <div className="min-h-screen bg-gray-50 py-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-8 hover:bg-gray-200"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Voltar aos Projetos
          </Button>
          <p className="text-red-600">Erro: Dados do projeto não disponíveis.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16" style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <div className="container mx-auto px-6">
        {/* Botão Voltar */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 hover:bg-gray-200"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Voltar aos Projetos
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Imagem do Projeto */}
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="relative rounded-2xl shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-80 lg:max-h-96 object-contain"
                onError={(e) => console.error(`Erro ao carregar imagem: ${project.image}`)}
              />
              <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                {project.category}
              </Badge>
            </div>
          </div>

          {/* Informações do Projeto */}
          <div className="space-y-8" style={{ opacity: 1, transform: 'none' }}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6" style={{ minHeight: '100px' }}>
                <h3 className="font-bold text-lg mb-4">Informações do Projeto</h3>
                <div className="space-y-3">
                  {project.client && (
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-blue-600" />
                      <div>
                        <span className="font-medium">Cliente:</span>
                        <span className="ml-2 text-gray-600">{project.client}</span>
                      </div>
                    </div>
                  )}
                  {project.location && (
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <div>
                        <span className="font-medium">Local:</span>
                        <span className="ml-2 text-gray-600">{project.location}</span>
                      </div>
                    </div>
                  )}
                  {project.year && (
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <div>
                        <span className="font-medium">Ano:</span>
                        <span className="ml-2 text-gray-600">{project.year}</span>
                      </div>
                    </div>
                  )}
                  {!project.client && !project.location && !project.year && (
                    <p className="text-gray-600">Nenhuma informação adicional disponível.</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div>
                <h3 className="font-bold text-lg mb-4">Tecnologias e Serviços</h3>
                <div className="flex flex-wrap,全
                gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Gostou deste projeto?
              </h3>
              <p className="text-gray-600 mb-4">
                Entre em contato conosco para desenvolvermos uma solução personalizada para sua empresa.
              </p>
              <Button
                size="lg"
                onClick={onRequestQuote}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>

        {/* Extras: Detalhes, Desafios, Resultados */}
        {(project.details || (project.challenges && project.challenges.length > 0) || (project.results && project.results.length > 0)) && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {project.details && (
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Detalhes do Projeto</h3>
                  <p className="text-gray-600 leading-relaxed">{project.details}</p>
                </CardContent>
              </Card>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Desafios</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {project.results && project.results.length > 0 && (
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Resultados</h3>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap- THERE
                      2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;