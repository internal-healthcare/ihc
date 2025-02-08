import CBadge from "@/components/CBadge";
import React from "react";

export default function Services() {
  return (
    <div>
      <div className="space-y-[2rem] container text-center py-[6rem]">
        <CBadge>In-home Services</CBadge>
        <h3 className="text-[2rem] md:text-[5rem] font-clash font-medium text-black leading-[2.438rem] md:leading-[5.063rem]">
          What You Can Get Through our <span className="md:block text-[#7A8D83]">In-Home Care Service</span>
        </h3>
        <p className="max-w-screen-lg mx-auto text-[#475467] text-xl">
          From basic non-medical support like help with bathing, dressing, meal preparation, and
          housekeeping, to more advanced services such as wound care, medication management,
          physical therapy and more.
        </p>
      </div>
    </div>
  );
}
