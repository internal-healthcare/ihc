import React from "react";
import Hero from "./_components/hero";
import Information from "../in-home-care/_components/information";
import ChooseUs from "../in-home-care/_components/choose";
import { seniorDayCarechooseUs } from "../senior-day-care/data";
import Connect from "../in-home-care/_components/connect";
import Services from "./_components/services";
import Benefits from "./_components/benefits";
import Differences from "./_components/differences";

export default function page() {
  return (
    <>
      <Hero />
      <Services />
      <Benefits />
      <Connect title="Connect with a care advocate  for assisted living" />
      <Differences />
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
