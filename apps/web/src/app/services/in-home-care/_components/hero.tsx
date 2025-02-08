import CBadge from "@/components/CBadge";
import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className='bg-white bg-[url("/images/bg-pattern-1.png")] bg-no-repeat py-[9.375rem]'>
      <div className="container grid gap-8 items-center lg:grid-cols-2 overflow-hidden">
        <div className="space-y-[24px]">
          <CBadge>In-home care</CBadge>
          <h1 className="font-clash text-[2rem] md:text-[3.5rem] lg:text-[4.875rem] font-medium text-black leading-[2.438rem] md:leading-[3.638rem] lg:leading-[5.938rem]">
            Comfort and Care,<span className="block text-[#B6965A]">Right at Home</span>
          </h1>
          <p className="text-[#475467] max-w-3xl text-xl">
            Personalized in-home support for seniors to live safely and independently in familiar
            surroundings
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
        <div className="mt-[3rem] md:mt-0">
          <div className="w-full h-full mx-auto relative">
            <Image
              src="/images/hero-1.png"
              width={657} height={548}
              className="object-cover rounded-[30px] md:rounded-[60px] mx-auto "
              alt="in-home care"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
