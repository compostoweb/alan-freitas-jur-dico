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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
            Quem é o advogado Alan Freitas
          </h2>
          
          <div className="space-y-8 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              O advogado Alan Freitas é reconhecido pela atuação estratégica em Direito Empresarial, Tributário e Societário. Sua formação reúne Direito, Economia, Finanças, Gestão e Neurociência do Comportamento, oferecendo uma visão completa e precisa para orientar empresas em decisões estruturais.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              A experiência acadêmica e profissional consolida sua autoridade e entrega segurança às empresas atendidas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg shadow-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Formação Acadêmica</h3>
              <ul className="space-y-3">
                {academicFormation.map((item, index) => (
                  <li key={index} className="text-muted-foreground flex items-start">
                    <span className="text-accent mr-2 flex-shrink-0 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Atuação Acadêmica</h3>
                <ul className="space-y-3">
                  {academicWork.map((item, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="text-accent mr-2 flex-shrink-0 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Publicações</h3>
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
