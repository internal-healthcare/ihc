import CBadge from "@/components/CBadge";
import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className='bg-white bg-[url("/images/bg-pattern-1.png")] bg-no-repeat bg-center'>
      <div className="container grid gap-8 justify-center overflow-hidden py-[9.375rem]">
        <div className="space-y-[24px] text-center">
          <CBadge>Assisted Living</CBadge>
          <h1 className="font-clash text-[2rem] md:text-[3.5rem] lg:text-[4.875rem] font-medium text-black leading-[2.438rem] md:leading-[3.638rem] lg:leading-[5.938rem]">
            Find the Right Assisted Living Community
          </h1>
          <p className="text-[#475467] max-w-4xl text-xl mx-auto">
            We offer a harmonious blend of autonomy and personalized care, specially designed for
            seniors who value their independence but need some help with daily activities.
          </p>
          <div>
            <Button
              size="lg"
              className="min-h-[3.75rem] bg-[#7A8D83] border-2 border-[#FFFFFF1F] hover:bg-[#7A8D83s] rounded-[29px] shadow-md shadow-[#1018280D] text-lg font-bold"
            >
              Submit a request
            </Button>
          </div>
        </div>
        <div className="mt-[3rem]">
          <div className="w-full h-[743px] mx-auto relative">
            <Image
              src="/images/hero-assisted-living.jpg"
              fill
              className="object-cover rounded-[30px] md:rounded-[60px] mx-auto "
              alt="in-home care"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
