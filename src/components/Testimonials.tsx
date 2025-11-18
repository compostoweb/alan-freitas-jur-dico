import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente",
    text: "Excelente profissional! A assessoria jurídica foi fundamental para resolver meu caso de forma rápida e eficiente. Recomendo!",
    rating: 5,
    date: "Há 2 meses",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
  },
  {
    name: "João Santos",
    role: "Cliente",
    text: "Atendimento impecável e muito profissional. Dr. Alan demonstrou amplo conhecimento e me deixou muito seguro durante todo o processo.",
    rating: 5,
    date: "Há 1 mês",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao"
  },
  {
    name: "Ana Paula",
    role: "Cliente",
    text: "Serviço de altíssima qualidade. Fui muito bem atendida e meu problema foi resolvido com toda a atenção aos detalhes.",
    rating: 5,
    date: "Há 3 semanas",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana"
  },
  {
    name: "Carlos Mendes",
    role: "Cliente",
    text: "Profissional extremamente competente e dedicado. Resolveu minha questão jurídica com excelência e agilidade.",
    rating: 5,
    date: "Há 1 semana",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos"
  },
  {
    name: "Fernanda Costa",
    role: "Cliente",
    text: "Recomendo de olhos fechados! Atendimento humanizado e resultados concretos. Muito satisfeita com o trabalho.",
    rating: 5,
    date: "Há 2 semanas",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fernanda"
  },
  {
    name: "Roberto Lima",
    role: "Cliente",
    text: "Profissionalismo impecável! Dr. Alan foi essencial para garantir meus direitos. Super indico!",
    rating: 5,
    date: "Há 4 semanas",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto"
  }
];

const Testimonials = () => {
  const averageRating = 5.0;
  const totalReviews = 52;

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
