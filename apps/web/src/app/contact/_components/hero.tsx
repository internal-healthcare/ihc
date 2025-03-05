import CBadge from "@/components/CBadge";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="py-[5rem]">
      <div className="container">
        <div>
          <CBadge>Contact Us</CBadge>
        </div>
        <div className="bg-[url('/images/v_map.svg')] bg-no-repeat">
          <div className="flex items-center gap-8">
            <div className="space-y-8 py-8 w-full">
              <h4 className="font-clash text-[4.875rem] leading-[5.996rem] font-medium max-w-3xl">
                We’re always within your reach
              </h4>
              <p className="text-[#475467] text-xl leading-[1.875rem] max-w-4xl">
                We’re spread across several countries and would love to hear from you! Whether you
                have questions, feedback, or just want to connect, our team is here to assist you.
              </p>
            </div>
            <div className="relative min-h-[300px] w-1/4">
              <Image src="/images/contactus1.svg" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
