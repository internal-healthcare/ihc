import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
};

export default function Connect({ title }: Props) {
  return (
    <div className="py-[5rem]">
      <div className="relative container px-0">
        <div className="green-morphe left-[25%] w-[300px] h-[300px]"></div>
        <div className="yellow-morphe left-[45%] w-[300px] h-[300px]"></div>
      </div>
      <div className="container bg-black rounded-[90px] text-white p-[8.5rem] space-y-[4.813rem] overflow-hidden">
        <h4 className="font-clash font-medium text-[3.938rem] text-center md:max-w-5xl mx-auto md:leading-[4.843rem] -mt-[2%]">
          {title}
        </h4>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/[0.14] rounded-[36px] overflow-hidden relative">
            <div className="green-morphe -left-[2rem] -top[20rem]"></div>
            <div className="px-[2rem] pt-[4rem]">
              <div>
                <p className="text-[2rem] font-semibold leading-[2.475rem]">
                  Submit a request for free!
                </p>
                <p className="text-white/[0.76] leading-[1.406rem] text-[1rem]">
                  Join hundreds of families nationwide who have found comfort, care, and joy through
                  our trusted services.
                </p>
              </div>
              <div className="mt-[4.063rem]">
                <Button className="bg-[#B6965A]">Get started today</Button>
              </div>
            </div>
            <div className="h-[138px] relative">
              <div className="absolute right-0 -bottom-10">
                <div className="yellow-morphe -left-[10%] -top-[25%]"></div>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.14] rounded-[36px] overflow-hidden relative">
            <Image
              src="/shades/morphYellow.svg"
              alt=""
              width={300}
              height={300}
              className="absolute top-0 left-0"
              style={{ width: "auto", height: "auto" }}
            />
            <div className="px-[2rem] pt-[4rem]">
              <div>
                <p className="text-[2rem] font-semibold leading-[2.475rem]">
                  Would you prefer to get a call from us?
                </p>
                <p className="text-white/[0.76] leading-[1.406rem] text-[1rem]">
                  Drop your number, and we’ll personally call to guide you through our services, and
                  match you with the best care providers for your loved ones
                </p>
              </div>
              <div className="mt-[1.688rem]">
                <div className="flex items-center gap-2">
                  <Input
                    className="border border-white/[0.76] rounded-[100px] h-[50px]"
                    placeholder="Enter your number"
                  />
                  <Button className="bg-[#B6965A] px-16 h-[50px]">Submit</Button>
                </div>
              </div>
              <div className="h-[148px] relative">
                <div className="absolute -right-10">
                  <Image
                    src="/icons/work-video-conference-01-7.svg"
                    width={146}
                    height={146}
                    alt=""
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
