import CBadge from "@/components/CBadge";
import Image from "next/image";
import React from "react";

const missionList = [
  {
    icon: "/icons/building-07.svg",
    title: "Who we are",
    description:
      "Internal Health Care was founded to make finding the right care for your loved ones simple and stress-free. We connect families with trusted providers, empowering them with expert advice and tailored resources.",
  },
  {
    icon: "/icons/users_group.svg",
    title: "What we stand for",
    description:
      "Our mission is to bridge the gap between families and compassionate care, offering personalized referrals and comprehensive options, including senior daycare, assisted living, and in-home care—all at no cost to you",
  },
];

export default function Mission() {
  return (
    <div className="py-[5rem] bg-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="space-y-[5.938rem]">
            <div className="space-y-[18px] max-w-[51.875rem]">
              <CBadge>OUR MISSION AND STORY</CBadge>
              <h4 className="text-black font-medium text-[4.875rem] font-clash leading-[4.875rem] ">
                We’re making senior healthcare accessible
              </h4>
              <p className="text-[#475467] text-xl leading-7">
                With a focus on compassion, support, and excellence, we’re here to guide you every
                step of the way.
              </p>
            </div>
            <div className="max-w-[47.75rem] space-y-[2rem]">
              {missionList.map((mission, index) => (
                <MissionCard {...mission} key={index} />
              ))}
            </div>
          </div>
          <div className="relative bg-[#F6F3ED] rounded-[40px] max-w-[38.423rem] grid justify-center items-center py-[4.563rem] px-[7.625rem]">
            <Image
              src="/images/logo_lg.png"
              alt="mission image"
              width={370}
              height={370}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type MissionCardProps = {
  icon: string;
  title: string;
  description: string;
};
function MissionCard({ icon, title, description }: MissionCardProps) {
  return (
    <div className="space-y-[1rem]">
      <div className="flex items-center gap-[1.25rem]">
        <div className="h-[48px] w-[48px] bg-[#F6F3ED] rounded-full grid justify-center items-center">
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className="object-contain w-[24px] h-[24px]"
          />
        </div>
        <p className="text-[#101828] font-clash text-[1.75rem] font-medium">{title}</p>
      </div>
      <p className="text-[#475467] text-[1.125rem]">{description}</p>
    </div>
  );
}
