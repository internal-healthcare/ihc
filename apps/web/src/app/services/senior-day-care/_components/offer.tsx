import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Offer() {
  return (
    <div className="bg-[#F5F5F5] mx-[2rem] py-[5.625rem] rounded-[70px]">
      <div className="container">
        <div className="space-y-[1.25rem]">
          <h3 className="font-clash font-medium text-[3.938rem] leading-[4.844rem] text-[#141414]">
            Our Senior Day Center doesn’t just support seniors, it’s a lifeline for families
            worldwide
          </h3>
          <p className="text-[#475467] text-xl max-w-3xl">
            We connect home care agencies with families actively seeking in-home support. We provide
            not just leads – but long-term opportunities ensuring ongoing engagement between you and
            the families you serve.
          </p>
        </div>
        <div className="flex gap-4 h-[250px]">
          <div className="w-1/2 flex gap-4 pt-[3rem]">
            <Button size="lg" className="h-[60px]">
              Submit a request
            </Button>
            <Button size="lg" className="h-[60px] bg-white text-black shadow-sm shadow-[#1018280D]">
              Contact Us
            </Button>
          </div>
          <div className="relative w-1/2">
            <Image src="/images/map-base.svg" alt="" fill className="object-cover object-top" />
          </div>
        </div>
        <div className="bg-white w-full rounded-[50px] flex items-center">
          <div className="px-[3.563rem] py-[6.25rem] space-y-[20px]">
            <Clip title="Seniors seeking companionship and social interaction." />
            <Clip title="Those needing supervision or help with daily tasks." />
            <Clip title="Families juggling caregiving with other responsibilities." />
            <Clip title="Seniors with memory loss benefiting from structured care." />
          </div>
          <div className="w-[40%] m-[1rem]">
            <div className="relative overflow-hidden rounded-[26px] h-[500px]">
              <Image
                src="/images/offer1.jpg"
                alt="Offer"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type ClipProps = {
  title: string;
};

function Clip({ title }: ClipProps) {
  return (
    <div className="flex bg-light2 rounded-[22px] px-[1rem] py-[0.5rem] items-center gap-4">
      <div className="bg-white w-[3.5rem] h-[3.5rem] relative rounded-[1rem] grid items-center justify-center">
        <Image
          src="/icons/check-circle.svg"
          width={31}
          height={31}
          alt="Check"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <p className="text-[#454545] font-aeonik text-[1.563rem] leading-[2rem] font-medium">
        {title}
      </p>
    </div>
  );
}
