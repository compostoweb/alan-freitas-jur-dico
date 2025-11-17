import ServiceCard from "./ServiceCard";
import { Building2, FileText, Calculator, Users, ShieldCheck, Landmark, Copyright, Home, Scale, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Societário e Governança",
      description: "Organização segura e estruturada para empresas que precisam de estabilidade e clareza nas relações internas.",
      items: [
        "Constituição de empresas",
        "Reorganizações societárias",
        "Acordos de sócios",
        "Entrada e saída de sócios",
        "Due diligence societária",
        "Planejamento sucessório empresarial",
        "Governança corporativa e compliance",
        "Proteção patrimonial dos sócios"
      ]
    },
    {
      icon: FileText,
      title: "Contratos Empresariais",
      description: "Contratos claros, completos e pensados para evitar litígios e prejuízos.",
      items: [
        "Elaboração e revisão de contratos",
        "Compra e venda, distribuição, representação e fornecimento",
        "Contratos de investimento, incluindo angel, seed e venture capital",
        "Contratos de franquia",
        "Acordos de confidencialidade",
        "Aditivos, notificações e renegociações",
        "Rescisões contratuais"
      ]
    },
    {
      icon: Calculator,
      title: "Tributário Empresarial",
      description: "Atuação estratégica para redução de custos tributários e defesa contra autuações.",
      items: [
        "Planejamento tributário",
        "Definição do regime ideal",
        "Defesa em autos de infração e execuções fiscais",
        "Recuperação de créditos e compensações",
        "Teses tributárias e repetição de indébito",
        "Tributação em reorganizações societárias",
        "Benefícios fiscais"
      ]
    },
    {
      icon: Users,
      title: "Trabalhista Empresarial",
      description: "Prevenção de passivos e proteção da empresa em litígios trabalhistas.",
      items: [
        "Consultoria e compliance trabalhista",
        "Auditorias internas",
        "Políticas internas",
        "Defesa em ações trabalhistas",
        "Acidentes de trabalho",
        "Gestão de passivos"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Consumidor Empresarial",
      description: "Segurança jurídica em relações com consumidores.",
      items: [
        "Defesa em reclamações e processos",
        "Políticas de atendimento ao consumidor",
        "Revisão de cláusulas contratuais"
      ]
    },
    {
      icon: Landmark,
      title: "Recuperação de Crédito e Bancário",
      description: "Recuperação eficiente de valores e renegociação de dívidas.",
      items: [
        "Cobranças extrajudiciais e judiciais",
        "Execução de títulos",
        "Revisão de dívidas bancárias",
        "Garantias reais e fidejussórias",
        "Ações de busca e apreensão"
      ]
    },
    {
      icon: Copyright,
      title: "Propriedade Intelectual e Marca",
      description: "Proteção da identidade e do patrimônio imaterial da empresa.",
      items: [
        "Registro de marcas no INPI",
        "Defesa contra uso indevido",
        "Licenciamento de marca",
        "Proteção de know-how e segredos comerciais"
      ]
    },
    {
      icon: Home,
      title: "Infraestrutura e Imobiliário Empresarial",
      description: "Segurança em operações imobiliárias corporativas.",
      items: [
        "Contratos de locação comercial",
        "Regularização imobiliária",
        "Due diligence imobiliária",
        "Compra e venda de imóveis empresariais"
      ]
    },
    {
      icon: Scale,
      title: "Contencioso Empresarial Geral",
      description: "Atuação firme e estratégica em conflitos comerciais.",
      items: [
        "Ações de cobrança",
        "Rescisões contratuais",
        "Ações indenizatórias",
        "Disputas societárias",
        "Litígios com fornecedores e clientes"
      ]
    },
    {
      icon: TrendingUp,
      title: "Fusões, Aquisições e Reestruturação (M&A)",
      description: "Suporte completo em operações complexas.",
      items: [
        "Compra e venda de empresas",
        "Due diligence completa",
        "Estruturação societária e tributária",
        "Contratos e negociação",
        "Auditoria pós-fechamento"
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções jurídicas completas para proteger e fazer crescer sua empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
