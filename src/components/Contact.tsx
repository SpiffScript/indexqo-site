import React from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import { Container } from "../components/ui/Container";

export const Contact: React.FC = () => {
  return (
    <section className="bg-stone-50">
      <Container>
        {/* HERO (top) */}
        <ContactHero />

        {/* FORM (below) */}
        <div className="mt-12">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
