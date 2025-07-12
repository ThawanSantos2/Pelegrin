const Clients = () => {
  const clients = [
    { name: "Transportes Rodanz", logo: "🚛" },
    { name: "Ouro Negro Transportes", logo: "⚫" },
    { name: "Grupo Giassi", logo: "🛒" },
    { name: "Super Moniari", logo: "🏪" },
    { name: "Roxo Distribuidora", logo: "📦" },
    { name: "Copal Distribuidora", logo: "🚚" },
    { name: "Transportes Rezin", logo: "🚛" },
    { name: "XBet Energy Drink", logo: "⚡" },
    { name: "Frigorífico Weber", logo: "🥩" },
    { name: "Sul Pet", logo: "🐕" },
    { name: "Pierini Redutores", logo: "⚙️" },
    { name: "Baldy Bom", logo: "🍯" },
    { name: "Transportes Francisconi", logo: "🚛" },
    { name: "Souza Roxo", logo: "🚚" }
  ];

  return (
    <section id="clientes" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas que confiam em nosso trabalho para representar suas marcas 
            com excelência e profissionalismo.
          </p>
        </div>

        {/* Trust indicator */}
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-8 py-4">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-gray-700">
              <div className="font-semibold">Clientes Satisfeitos</div>
              <div className="text-sm text-gray-600">Em mais de 12 anos de atuação</div>
            </div>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:bg-primary/10 hover:scale-105 transition-all duration-300 fade-in-up group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {client.logo}
              </div>
              <div className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                {client.name}
              </div>
            </div>
          ))}
        </div>

        {/* Client testimonials */}
        <div className="grid md:grid-cols-3 gap-8 fade-in-up">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="text-primary text-5xl mb-4">⭐</div>
            <h4 className="font-bold text-lg mb-3">Qualidade Excepcional</h4>
            <p className="text-gray-600 text-sm">
              "A Pelegrin transformou nossa frota com um trabalho impecável. 
              Recomendamos para qualquer empresa que busca excelência."
            </p>
            <div className="mt-4 font-semibold text-primary">Transportes Rodanz</div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="text-primary text-5xl mb-4">🚀</div>
            <h4 className="font-bold text-lg mb-3">Inovação e Agilidade</h4>
            <p className="text-gray-600 text-sm">
              "Prazo cumprido e resultado acima das expectativas. 
              Nossa marca nunca teve tanto destaque nas estradas."
            </p>
            <div className="mt-4 font-semibold text-primary">Grupo Giassi</div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="text-primary text-5xl mb-4">💯</div>
            <h4 className="font-bold text-lg mb-3">Parceria de Confiança</h4>
            <p className="text-gray-600 text-sm">
              "Há anos confiamos na Pelegrin para todos os nossos projetos. 
              Profissionalismo e qualidade garantidos."
            </p>
            <div className="mt-4 font-semibold text-primary">Pierini Redutores</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Faça Parte dos Nossos Clientes Satisfeitos
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já transformaram suas marcas 
              conosco e se destacam no mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Solicitar Orçamento
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Falar com Consultor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;