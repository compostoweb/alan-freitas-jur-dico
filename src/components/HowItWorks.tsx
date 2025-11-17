const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Análise inicial do cenário da empresa",
      description: "Entendimento completo da sua situação atual e objetivos"
    },
    {
      number: "02",
      title: "Construção de uma estratégia jurídica personalizada",
      description: "Desenvolvimento de soluções específicas para suas necessidades"
    },
    {
      number: "03",
      title: "Execução das medidas necessárias",
      description: "Implementação eficiente das ações definidas"
    },
    {
      number: "04",
      title: "Acompanhamento contínuo com total transparência",
      description: "Monitoramento constante e comunicação clara sobre cada etapa"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Como funciona o atendimento
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-card p-8 rounded-lg shadow-card border border-border hover:shadow-elegant transition-shadow duration-300">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">{step.number}</span>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
