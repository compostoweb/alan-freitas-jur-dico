import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import ContactForm from "./ContactForm";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - CTA Text */}
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
                <Calendar className="w-4 h-4 text-accent" />
                <span className="text-accent font-medium text-sm">Agende agora</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Sua empresa merece segurança jurídica e estratégia
            </h2>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Fale agora com o advogado Alan Freitas e receba um diagnóstico inicial personalizado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                21 96409-2314
              </Button>
            </div>
          </div>
          
          {/* Right side - Contact Form */}
          <div className="bg-background/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl animate-scale-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envie sua mensagem
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FinalCTA;