import CBadge from "@/components/CBadge";
import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Information() {
  return (
    <div className="py-[5rem]">
      <div className="container space-y-[5rem]">
        <div className="text-center space-y-[2rem]">
          <CBadge>IN-HOME CARE RESOURCES</CBadge>
          <h4 className="text-[5rem] leading-[5.1rem] text-black font-clash font-medium text-center">Information Center and <span className="text-[#7A8D83] block">Helpful Guides</span></h4>
          <p className="text-[#475467] text-xl max-w-screen-md mx-auto">
            Our essential guides and resources is designed to support you every step of the way, and
            help you make confident, informed decisions on in-home care{" "}
          </p>
          <Button className="mx-auto h-[60px]" size="lg">View all resources</Button>
        </div>
        <div>
          <div className="flex gap-8">
            <div className="w-5/6 bg-[url('/images/78af89fb2ea76d49bd9668276da06595.png')] bg-cover rounded-[32px] overflow-hidden relative">
              <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-tr from-black to-black/0">
                <div className="flex items-center justify-between p-[2.5rem] absolute bottom-0 w-full">
                  <div className="text-white">
                    <p className="text-[2.625rem] font-medium leading-[2.988rem]">All about in-home care</p>
                    <p className="text-2xl font-medium">Dr. Eli Coleman, phD</p>
                  </div>
                  <div className="w-24 h-24 bg-black rounded-full grid justify-center items-center">
                    <Image src="/icons/Polygon-1.svg" width={28} height={28} alt="Play" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-[2.25rem]">
              <div className="bg-[#F6F3ED] rounded-[24px] border-[0.3px] border-[#B6965A] space-y-[2rem] p-[2.313rem]">
                <h4 className="text-[#B6965A] font-clash text-[3.938rem] leading-[4.843rem] font-medium">
                  10,000
                </h4>
                <p className="text-[1.563rem] text-[#262626]">
                  Of matched families seeking quality in-home care
                </p>
              </div>
              <div className="bg-[#EFF6F2] rounded-[24px] border-[0.3px] border-[#7A8D83] space-y-[2rem] p-[2.313rem]">
                <h4 className="text-[#7A8D83] font-clash text-[3.938rem] leading-[4.843rem] font-medium">
                  95%
                </h4>
                <p className="text-[1.563rem] text-[#262626]">
                  of families successfully matched with in-home caregivers
                </p>
              </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
