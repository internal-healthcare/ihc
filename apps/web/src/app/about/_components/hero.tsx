import CBadge from "@/components/CBadge";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-[#141414] py-[9.375rem] m-[1.25rem] rounded-[4.5rem]">
      <div className="container">
        <div>
          <div>
            <CBadge>About Us</CBadge>
            <div className="text-white">
              <h4 className="font-medium font-clash text-[5rem] leading-[5.063rem]">Connecting Families to Trusted Care Solutions</h4>
              <p className="text-[1.125rem] leading-[1.75rem]">
                At Internal Health Care, we connect families with trusted, compassionate care
                providers tailored to their needs. With expert guidance and a directory of vetted
                options, we make finding quality senior care simple, reliable, and free.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
