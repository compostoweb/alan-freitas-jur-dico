import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="why-choose">
        <WhyChoose />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="contact">
        <FinalCTA />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
