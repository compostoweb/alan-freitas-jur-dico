import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Análise inicial do cenário da empresa",
      description: "Entendimento completo da sua situação atual e objetivos"
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Construção de uma estratégia jurídica personalizada",
      description: "Desenvolvimento de soluções específicas para suas necessidades"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Execução das medidas necessárias",
      description: "Implementação eficiente das ações definidas"
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Acompanhamento contínuo com total transparência",
      description: "Monitoramento constante e comunicação clara sobre cada etapa"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">Processo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Como funciona o atendimento
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Um processo estruturado para garantir os melhores resultados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative group bg-card p-8 rounded-xl shadow-card border border-border hover:shadow-elegant hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-accent-foreground">{step.number}</span>
                </div>
                <div className="pt-4">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
