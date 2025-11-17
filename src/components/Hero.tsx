import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-law-office.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 bg-gradient-hero opacity-95"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(24, 41, 73, 0.95) 0%, rgba(38, 58, 92, 0.92) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Advocacia Empresarial Estratégica para Empresas que Buscam Segurança, Crescimento e Blindagem Jurídica
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Atuação consultiva e contenciosa com foco em proteção patrimonial, prevenção de riscos e solidez empresarial.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 h-auto">
            Agende uma consulta empresarial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
