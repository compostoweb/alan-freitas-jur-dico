import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar } from "lucide-react";
const FinalCTA = () => {
  return <section className="py-32 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-accent font-medium text-sm">Agende agora</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Sua empresa merece segurança, estratégia e um jurídico que pensa como o empresário
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
            Fale agora com o advogado Alan Freitas e receba um diagnóstico inicial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-7 h-auto shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              <Calendar className="w-5 h-5 mr-2" />
              Agende sua consulta empresarial
            </Button>
            
            <Button size="lg" variant="outline" className="font-semibold text-lg h-auto shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto bg-lime-50 text-slate-900 text-left my-0 py-[24px] px-0 mx-[24px]">
              <Phone className="w-5 h-5 mr-2" />
              Entre em contato
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTA;