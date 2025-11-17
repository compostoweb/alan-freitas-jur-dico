import { Button } from "@/components/ui/button";
import { Scale, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-law-office.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(24, 41, 73, 0.96) 0%, rgba(38, 58, 92, 0.94) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
                <Scale className="w-4 h-4 text-accent" />
                <span className="text-accent font-medium text-sm">Advocacia Empresarial</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Advocacia Empresarial Estratégica
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed">
              Para empresas que buscam <span className="text-accent font-semibold">segurança</span>, <span className="text-accent font-semibold">crescimento</span> e <span className="text-accent font-semibold">blindagem jurídica</span>
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-primary-foreground font-semibold">Proteção</div>
                  <div className="text-primary-foreground/70 text-sm">Patrimonial</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-primary-foreground font-semibold">Prevenção</div>
                  <div className="text-primary-foreground/70 text-sm">de Riscos</div>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-7 h-auto shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105">
              Agende uma consulta empresarial
            </Button>
          </div>
          
          {/* Área para foto do Alan */}
          <div className="relative hidden lg:block animate-scale-in">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-4 border-accent/30 shadow-elegant">
              {/* Placeholder para foto do Alan */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-medium to-navy-deep flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <Scale className="w-16 h-16 text-accent" />
                  </div>
                  <p className="text-primary-foreground/60 text-sm">Área para foto do<br />Dr. Alan Freitas</p>
                </div>
              </div>
            </div>
            
            {/* Decorative card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-elegant border border-border max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Consultoria Ativa</span>
              </div>
              <p className="text-xs text-muted-foreground">Atendimento estratégico para sua empresa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
