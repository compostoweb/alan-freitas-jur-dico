import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "Ricardo Azevedo",
    role: "Cliente",
    text: "Atuação impecável. O Dr. Alan analisou todos os detalhes do meu caso empresarial e apresentou soluções que fizeram total diferença na tomada de decisão. Muito competente e comprometido.",
    rating: 5,
    date: "Há 3 semanas",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80"
  },
  {
    name: "Juliana Prado",
    role: "Cliente",
    text: "Transparência, segurança e conhecimento técnico acima da média. Recebi uma orientação estratégica que me ajudou a reorganizar meu negócio de forma segura e eficiente. Excelente profissional.",
    rating: 5,
    date: "Há 1 mês",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80"
  },
  {
    name: "Eduardo Matos",
    role: "Cliente",
    text: "Profissional extremamente preparado. O Dr. Alan conduziu todo o processo com clareza e me deixou muito confiante em cada etapa. Atendimento cuidadoso e altamente qualificado.",
    rating: 5,
    date: "Há 2 meses",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80"
  },
  {
    name: "Beatriz Nogueira",
    role: "Cliente",
    text: "Agilidade e precisão. Meu contrato empresarial foi revisado rapidamente e com observações essenciais que eu não teria percebido. O serviço superou minhas expectativas.",
    rating: 5,
    date: "Há 2 semanas",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80"
  },
  {
    name: "Marcelo Farias",
    role: "Cliente",
    text: "O Dr. Alan demonstrou profundo conhecimento em Direito Tributário e ofereceu uma consultoria valiosa para a empresa. Excelente experiência, recomendo sem dúvidas.",
    rating: 5,
    date: "Há 4 semanas",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80"
  },
  {
    name: "Patrícia Gonçalves",
    role: "Cliente",
    text: "Atendimento humanizado e extremamente técnico. Fui orientada com clareza em um momento delicado da empresa. Sou muito grata pela ajuda e pelos resultados alcançados.",
    rating: 5,
    date: "Há 5 semanas",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&q=80"
  },
  {
    name: "Henrique Duarte",
    role: "Cliente",
    text: "O trabalho foi preciso e eficiente. Recebi todo suporte necessário para uma reestruturação societária complexa. Profissional sério e muito competente.",
    rating: 5,
    date: "Há 1 mês",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80"
  },
  {
    name: "Carolina Antunes",
    role: "Cliente",
    text: "Senti total segurança desde o primeiro atendimento. O Dr. Alan explicou todos os riscos e adotou as medidas necessárias para proteger a empresa. Atendimento exemplar.",
    rating: 5,
    date: "Há 3 semanas",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80"
  },
  {
    name: "Leonardo Pires",
    role: "Cliente",
    text: "Profissional extremamente estratégico. O Dr. Alan analisou o cenário da empresa com profundidade e ofereceu soluções jurídicas que realmente impactaram no nosso crescimento. Atendimento excelente e visão diferenciada.",
    rating: 5,
    date: "Há 2 semanas",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80"
  }
];

const Testimonials = () => {
  const averageRating = 5.0;
  const totalReviews = 72;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google" 
              className="h-6"
            />
            <span className="text-muted-foreground">Avaliações</span>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl font-bold text-foreground">{averageRating}</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground">
            Baseado em {totalReviews} avaliações do Google
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-elegant transition-all duration-300 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
