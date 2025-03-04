import CBadge from "@/components/CBadge";
import { cn } from "@repo/ui/lib/utils";
import Image from "next/image";
import React from "react";

const list = [
  {
    image: "/images/benefit-1.jpg",
    title: "Vibrant Social Life",
    description:
      "Group activities, holiday celebrations, and hobby clubs ensure residents stay active and connected",
    color: "#F6F3ED",
  },
  {
    image: "/images/benefit-2.jpg",
    title: "Focus on Health and Wellness",
    description:
      "Programs like fitness classes, health screenings, and preventive care keep residents in optimal health.",
    color: "#F5F5F5",
  },
  {
    image: "/images/benefit-3.jpg",
    title: "Comprehensive Amenities",
    description:
      "From fitness centers and dining halls to on-site healthcare services, every community is designed to provide a well-rounded lifestyle.",
    color: "#EFF6F2",
  },
];

export default function Benefits() {
  return (
    <div className="py-[5rem]">
      <div className="container">
        <div className="text-center space-y-[2rem]">
          <CBadge>Assisted Living Benefits</CBadge>
          <h4 className="font-clash font-medium text-black text-[4.875rem] leading-[5.996rem]">
            Experience Compassionate Independence with the Right Help
          </h4>
          <p className="text-xl text-[#475467] max-w-3xl mx-auto">
            From vibrant social activities to comprehensive health and wellness programs, we provide
            a well-rounded lifestyle with Our Assisted Living Options ensuring a safe and supportive
            environment while promoting quality of life
          </p>
        </div>
        <div className="grid justify-center lg:grid-cols-3 gap-8 items-start mt-[8rem]">
          {list.map((service, index) => (
            <div
              className={cn(
                " max-w-[486px] p-[2.25rem] space-y-[2rem] rounded-[26px]",
                service.color.startsWith("bg-") ? service.color : `bg-[${service.color}]`
              )}
              key={index}
            >
              <div className="relative h-[318px] max-w-[414px] rounded-[26px] overflow-hidden">
                <Image className="object-cover" fill alt={service.title} src={service.image} />
              </div>
              <div className="space-y-[17px]">
                <p className="font-aeonik font-bold text-[#27272E] text-[1.563rem]">
                  {service.title}
                </p>
                <p className="text-[#425466] text-[1.125rem]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
