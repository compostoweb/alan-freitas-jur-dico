import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, items, icon: Icon }: ServiceCardProps) => {
  return (
    <Card className="h-full group hover:shadow-elegant transition-all duration-300 border-border bg-card hover:border-accent/30 hover:-translate-y-1">
      <CardHeader>
        <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
          <Icon className="w-7 h-7 text-accent" />
        </div>
        <CardTitle className="text-2xl text-foreground group-hover:text-accent transition-colors">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2.5">
          {items.map((item, index) => (
            <li key={index} className="text-muted-foreground flex items-start text-sm">
              <span className="text-accent mr-2 flex-shrink-0 font-bold">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
