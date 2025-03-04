import CBadge from "@/components/CBadge";
import React from "react";
import ServiceTabs from "./tabs";

export default function index() {
  return (
    <div className="bg-white">
      <div className="space-y-[2rem] container text-center py-[6rem]">
        <CBadge>Assisted Living Services</CBadge>
        <h3 className="text-[2rem] md:text-[5rem] font-clash font-medium text-black leading-[2.438rem] md:leading-[5.063rem]">
          Tailored Living Options for Seniors at Every Stage of Life
          <span className="md:block text-[#7A8D83]"></span>
        </h3>
        <p className="max-w-screen-lg mx-auto text-[#475467] md:text-xl">
          We provide seniors with a range of living options that promote independence, dignity, and
          comfort. We connect families with the perfect environment to meet their needs.
        </p>
      </div>
      <ServiceTabs />
    </div>
  );
}
