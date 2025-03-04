import React from "react";
import Hero from "./_components/hero";
import Information from "../in-home-care/_components/information";
import ChooseUs from "../in-home-care/_components/choose";
import { seniorDayCarechooseUs } from "../senior-day-care/data";
import Connect from "../in-home-care/_components/connect";
import Services from "./_components/services"

export default function page() {
  return (
    <>
      <Hero />
      <Services />
      <Connect title="Connect with a care advocate  for assisted living"/>
      <Information heading="Assisted Living Resources" />
      <ChooseUs
        title="We create a safe haven for your loved ones"
        description="Families can trust that their loved ones are in a positive environment designed to enhance quality of life and promote dignity."
        list={seniorDayCarechooseUs}
        style="style2"
        className="lg:grid-cols-4"
      />
    </>
  );
}
