import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const WhyChoose = () => {
  const benefits = [
    "Comunicação clara",
    "Estratégias sólidas e comprovadas",
    "Visão multidisciplinar em Direito, Economia, Finanças e Gestão",
    "Atendimento ágil e confidencial"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Por que empresas escolhem o advogado Alan Freitas
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Administrar uma empresa exige decisões estratégicas constantes e, para isso, é fundamental contar com segurança jurídica. O advogado Alan Freitas atua com foco na prevenção de riscos, redução de custos, estruturação de negócios e resolução de conflitos empresariais de alta complexidade.
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            O atendimento é consultivo, direto ao ponto e completamente personalizado para as necessidades da sua empresa.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 h-auto">
              Fale agora com o advogado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
