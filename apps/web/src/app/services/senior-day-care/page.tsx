import React from "react";
import Hero from "./_components/hero";
import Services from "../in-home-care/_components/services";
import { seniorDayCarechooseUs, seniorDayServicesWeOffer } from "./data";
import Works from "../in-home-care/_components/works";
import Connect from "../in-home-care/_components/connect";
import Information from "../in-home-care/_components/information";
import ChooseUs from "../in-home-care/_components/choose";
import Offer from "./_components/offer";

export default function page() {
  return (
    <>
      <Hero />
      <Services
        list={seniorDayServicesWeOffer}
        title="Comprehensive Services for Seniors and Families"
        description="Our Senior Day Center services are designed to offer a perfect balance of professional care, meaningful activities, and social interaction for your loved ones, ensuring they thrive physically, mentally, and emotionally."
        heading="SERVICES WE OFFER"
      />
      <Works />
      <Connect title="Connect with the Perfect Provider for Senior Day Care Services" />
      <ChooseUs
        title="We create a safe haven for your loved ones"
        description="Families can trust that their loved ones are in a positive environment designed to enhance quality of life and promote dignity. "
        list={seniorDayCarechooseUs}
        style="style2"
        className="lg:grid-cols-4"
      />
      <Offer />
      <Information heading="SENIOR DAY CARE RESOURCES" />
    </>
  );
}
