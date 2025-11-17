import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Sua empresa merece segurança, estratégia e um jurídico que pensa como o empresário
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10">
            Fale agora com o advogado Alan Freitas e receba um diagnóstico inicial.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-7 h-auto">
            Agende sua consulta empresarial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
