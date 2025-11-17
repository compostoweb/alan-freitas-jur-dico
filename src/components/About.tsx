import { GraduationCap, BookOpen, Award } from "lucide-react";

const About = () => {
  const academicFormation = [
    "Mestre em Direito Econômico pela Universidade Cândido Mendes",
    "LL.M em Direito Tributário pela Escola Superior do Ministério Público",
    "LL.M em Direito dos Negócios pela Escola Superior do Ministério Público",
    "Especialista em Direito Empresarial pela PUC-Rio",
    "MBA em Gestão Tributária pela Universidade Cândido Mendes",
    "MBA em Administração e Gestão do Negócio Jurídico pela Legale",
    "Pós-graduação em Direito Empresarial pela Universidade Cândido Mendes",
    "Pós-graduação em Direito Tributário pela Universidade Cândido Mendes",
    "Pós-graduação em Direito Civil e Processo Civil pela Universidade Gama Filho",
    "Pós-graduação em Direito Bancário pela Legale",
    "Pós-graduação em Neurociência do Comportamento",
    "Extensão em Finanças pelo IBMEC",
    "Extensão em Contabilidade Financeira pela Fundação Getulio Vargas"
  ];

  const academicWork = [
    "Professor de Direito Tributário na Escola Superior da Advocacia da OAB/RJ",
    "Professor convidado de Economia Empresarial na Universidade Federal Rural",
    "Ex-professor convidado de Direito Administrativo e Constitucional na Estácio de Sá, na UCAM e na SUAM",
    "Ex-professor titular de Direito Administrativo e Constitucional no Curso Gilmar Rosa"
  ];

  const publications = [
    "Autor do livro A Fazenda Pública e a falência por débito fiscal à luz dos princípios constitucionais",
    "Coautor dos livros Temas de Direito Público e Temas de Direitos Fundamentais",
    "Ex-autor de artigos jurídicos para a revista Proteste"
  ];

  const differentials = [
    "Decisões empresariais tomadas com segurança",
    "Redução expressiva de riscos jurídicos",
    "Blindagem patrimonial",
    "Estruturação eficiente de operações, contratos e reorganizações",
    "Atuação preventiva para evitar litígios",
    "Suporte contínuo para crescimento e expansão empresarial"
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">Especialista</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quem é o advogado Alan Freitas
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Área para foto profissional do Alan */}
            <div className="relative animate-scale-in order-2 lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-accent/20 shadow-elegant bg-gradient-to-br from-navy-medium to-navy-deep">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <GraduationCap className="w-24 h-24 text-accent mx-auto mb-4 opacity-50" />
                    <p className="text-primary-foreground/60 text-sm">Área para foto profissional<br />Dr. Alan Freitas</p>
                  </div>
                </div>
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-elegant border border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">13+</div>
                    <div className="text-xs text-muted-foreground">Especializações</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">3</div>
                    <div className="text-xs text-muted-foreground">Livros</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-slide-up order-1 lg:order-2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                O advogado Alan Freitas é reconhecido pela atuação estratégica em Direito Empresarial, Tributário e Societário. Sua formação reúne Direito, Economia, Finanças, Gestão e Neurociência do Comportamento, oferecendo uma visão completa e precisa para orientar empresas em decisões estruturais.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                A experiência acadêmica e profissional consolida sua autoridade e entrega segurança às empresas atendidas.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-foreground">Mestre em Direito</span>
                </div>
                <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-foreground">Professor OAB/RJ</span>
                </div>
                <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-foreground">Autor Publicado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16"
            <div className="bg-card p-8 rounded-xl shadow-card border border-border hover:shadow-elegant transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Formação Acadêmica</h3>
              </div>
              <ul className="space-y-3">
                {academicFormation.map((item, index) => (
                  <li key={index} className="text-muted-foreground flex items-start">
                    <span className="text-accent mr-2 flex-shrink-0 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-card border border-border hover:shadow-elegant transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Atuação Acadêmica</h3>
              </div>
                <ul className="space-y-3">
                  {academicWork.map((item, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="text-accent mr-2 flex-shrink-0 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-card border border-border hover:shadow-elegant transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Publicações</h3>
              </div>
                <ul className="space-y-3">
                  {publications.map((item, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="text-accent mr-2 flex-shrink-0 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-navy-deep p-10 rounded-lg text-primary-foreground">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Por que essa experiência faz diferença para sua empresa
            </h3>
            <p className="text-primary-foreground/90 mb-6 text-center">
              A combinação entre conhecimento técnico, vivência prática e atuação estratégica resulta em:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-accent mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-primary-foreground/95">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
