import React from "react";
import Hero from "./_components/hero";
import Contact from "./_components/contsct";
import ContactForm from "./_components/Form";
import Faq from "./_components/faq";

export default function page() {
  return (
    <>
      <Hero />  
      <Contact />
      <ContactForm />
      <Faq />
    </>
  );
}
