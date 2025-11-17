import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
}

const ServiceCard = ({ title, description, items }: ServiceCardProps) => {
  return (
    <Card className="h-full hover:shadow-elegant transition-shadow duration-300 border-border bg-card">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-muted-foreground flex items-start">
              <span className="text-accent mr-2 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
