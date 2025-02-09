import React from "react";
import Hero from "./_components/hero";
import Services from "./_components/services";
import Why from "./_components/why";
import Works from "./_components/works";
import ChooseUs from "./_components/choose";

export default function page() {
  return (
    <>
      <Hero />
      <Services />
      <Why />
      <Works />
      <ChooseUs />
    </>
  );
}
