import { Button } from "@/components/ui/button";
import { CheckCircle, MessageSquare, Target, TrendingUp, Clock } from "lucide-react";

const WhyChoose = () => {
  const benefits = [
    {
      icon: MessageSquare,
      title: "Comunicação clara",
      description: "Sem juridiquês, direto ao ponto"
    },
    {
      icon: Target,
      title: "Estratégias sólidas e comprovadas",
      description: "Baseadas em anos de experiência"
    },
    {
      icon: TrendingUp,
      title: "Visão multidisciplinar",
      description: "Direito, Economia, Finanças e Gestão"
    },
    {
      icon: Clock,
      title: "Atendimento ágil e confidencial",
      description: "Prioridade para sua empresa"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">Excelência</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Por que empresas escolhem o advogado Alan Freitas
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Administrar uma empresa exige decisões estratégicas constantes e, para isso, é fundamental contar com segurança jurídica. O advogado Alan Freitas atua com foco na prevenção de riscos, redução de custos, estruturação de negócios e resolução de conflitos empresariais de alta complexidade.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                O atendimento é consultivo, direto ao ponto e completamente personalizado para as necessidades da sua empresa.
              </p>
            </div>
            
            {/* Área para imagem de escritório ou equipe */}
            <div className="relative animate-scale-in">
              <div className="aspect-video rounded-xl overflow-hidden border border-border shadow-card bg-gradient-to-br from-muted to-muted/50">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-muted-foreground text-sm text-center px-4">
                    Área para imagem:<br />Escritório / Equipe / Alan atendendo
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group bg-card p-6 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-7 h-auto shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105">
              Fale agora com o advogado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
