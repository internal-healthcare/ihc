import React from "react";
import Hero from "./_components/hero";
import Services from "./_components/services";
import Why from "./_components/why";
import Works from "./_components/works";
import ChooseUs from "./_components/choose";
import Connect from "./_components/connect";
import Information from "./_components/information";
import { inHomeCarechooseUs, inHomeCareServicesWeOffer } from "./data";

export default function page() {
  return (
    <>
      <Hero />
      <Services
        list={inHomeCareServicesWeOffer}
        heading="In-Home Services"
        title="What You Can Get Through our"
        title2="In-Home Care Service"
        description="From basic non-medical support like help with bathing, dressing, meal preparation, and housekeeping, to more advanced services such as wound care, medication management, physical therapy and more."
      />
      <Why />
      <Works />
      <Connect title="Connect with the perfect caregiver for in-home care services today" />
      <ChooseUs
        title="We’re Highly Reliable"
        description="At Internal Health Care, we pride ourselves on connecting you with the highest quality of in-home caregivers and agencies to ensure you receive not just care, but the right care, tailored to your needs."
        list={inHomeCarechooseUs}
        style="style1"
      />
      <Information heading="IN-HOME CARE RESOURCES" />
    </>
  );
}
