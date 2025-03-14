import CBadge from "@/components/CBadge";
import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";
import Image from "next/image";
import React from "react";

const imageList = [
  {
    image: "/images/about-1.jpg",
    alt: "about-1",
    className: "rounded-tr-[78px] rounded-tl-[78px] rounded-bl-[78px]",
  },
  {
    image: "/images/about-2.jpg",
    alt: "about-2",
    className: "rounded-tr-[78px] rounded-tl-[78px] rounded-br-[78px]",
  },
  {
    image: "/images/about-3.jpg",
    alt: "about-3",
    className: "rounded-br-[78px] rounded-tl-[78px] rounded-bl-[78px]",
  },
  {
    image: "/images/about-4.jpg",
    alt: "about-4",
    className: "rounded-bl-[78px] rounded-tr-[78px] rounded-br-[78px]",
  },
];

const stats = [
  { count: "10,000 +", title: "Caregivers Matched" },
  { count: "95%", title: "Match within 24 hours." },
  { count: "25,000 +", title: "Families Connected" },
  { count: "750+", title: "Licensed Medical Partners" },
  { count: "85%", title: "Visited within 48hrs" },
  { count: "2.5M +", title: "Care Hours Delivered" },
];

export default function Hero() {
  return (
    <div className="bg-[#141414] py-[9.375rem] m-[1.25rem] rounded-[4.5rem]">
      <div className="container">
        <div className="lg:flex justify-between items-center">
          <div className="max-w-[50.125rem] w-3/5 space-y-[2.75rem]">
            <CBadge>About Us</CBadge>
            <div className="text-white space-y-[2.75rem]">
              <h4 className="font-medium font-clash text-[5rem] leading-[5.063rem]">
                Connecting Families to Trusted Care Solutions
              </h4>
              <p className="text-[1.125rem] leading-[1.75rem]">
                At Internal Health Care, we connect families with trusted, compassionate care
                providers tailored to their needs. With expert guidance and a directory of vetted
                options, we make finding quality senior care simple, reliable, and free.
              </p>
              <Button className="text-[1.125rem] px-[1.375rem] py-[1rem] h-[60px] font-semibold">
                Submit a request
              </Button>
            </div>
          </div>
          <div className="w-2/5">
            <div className="grid grid-cols-2 gap-[1.75rem]">
              {imageList.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-[284px] h-[252px] overflow-hidden border relative",
                    image.className
                  )}
                >
                  <Image
                    key={index}
                    src={image.image}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[10rem] space-y-[2.313rem]">
          <p className="text-white text-[2rem] font-medium">Internal healthcare in numbers</p>
          <div className="flex gap-4 items-start overflow-y-scroll no-scrollbar">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#1F2123] rounded-[100px] inline-block py-[1.375rem] px-[3.125rem]"
              >
                <p className="text-[#B6965A] text-[2rem] font-bold whitespace-nowrap">{stat.count}</p>
                <p className="text-white text-[1rem] leading-[1.5rem] whitespace-nowrap">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
