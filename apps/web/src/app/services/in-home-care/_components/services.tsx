import CBadge from "@/components/CBadge";
import React from "react";

type Props = {
  list: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  heading: string;
  title: string;
  title2?: string;
  description: string;
};

export default function Services({ list, heading, title, title2, description }: Props) {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="space-y-[2rem] container text-center py-[6rem]">
        <CBadge>{heading}</CBadge>
        <h3 className="text-[2rem] md:text-[5rem] font-clash font-medium text-black leading-[2.438rem] md:leading-[5.063rem]">
          {title} <span className="md:block text-[#7A8D83]">{title2}</span>
        </h3>
        <p className="max-w-screen-lg mx-auto text-[#475467] md:text-xl">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-8 justify-center py-[6rem]">
        {list.map((service, index) => (
          <InfoCard
            key={index}
            icon={service.icon}
            title={service.title}
            desc={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export function InfoCard({ icon, title, desc }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#D9D9D9] rounded-[22px] p-[2.5rem] w-full md:max-w-[470px] space-y-[2rem]">
      <div className="bg-[#FAFAFA] border border-[#E3E3E3] rounded-full w-[56px] h-[56px] grid items-center justify-center">
        {icon}
      </div>
      <div className="space-y-[12px]">
        <p className="text-[1.063rem] sm:text-[1.563rem] font-bold font-aeonik leading-[1.781rem]">{title}</p>
        <p className="text-[0.794rem] sm:text-sm text-[#262626]">{desc}</p>
      </div>
    </div>
  );
}
