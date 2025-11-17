const Footer = () => {
  return (
    <footer className="py-8 bg-navy-deep border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="text-center text-primary-foreground/70">
          <p className="text-sm">
            © {new Date().getFullYear()} Advogado Alan Freitas. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2">
            Advocacia Empresarial Estratégica
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
