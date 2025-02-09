import CBadge from "@/components/CBadge";
import { cn } from "@repo/ui/lib/utils";
import Image from "next/image";
import React from "react";

const list = [
  {
    title: "Immediate consultation",
    description:
      "Allows clients to quickly access care via channels, reducing delays for chronic conditions, urgent health needs.",
    icon: (
      <Image src="/icons/consultation.svg" alt="Immediate consultation" width={48} height={48} style={{ width: "auto", height: "auto" }} />
    ),
    color: "#7A8D83",
  },
  {
    title: "Match with professionals",
    description:
      "Clients are matched with the right healthcare professionals based on their specific needs and preferences.",
    icon: (
      <Image src="/icons/professional.svg" alt="Match with professionals" width={48} height={48} style={{ width: "auto", height: "auto" }} />
    ),
    color: "#000000",
  },
  {
    title: "Ongoing support",
    description:
      " Regular follow-ups and educational resources to empower patients to manage their health effectively.",
    icon: <Image src="/icons/support.svg" alt="Immediate consultation" width={48} height={48} style={{ width: "auto", height: "auto" }} />,
    color: "#B6965A",
  },
];

export default function Works() {
  return (
    <div className="container py-[6.75rem]">
      <div className="text-center space-y-[2rem]">
        <CBadge>How it works</CBadge>
        <h3 className="font-clash text-[5rem] leading-[5.063rem]">
          Our three step approach <span className="text-[#B6965A] block">to home care</span>
        </h3>
        <p>Follow up copy on the simple step by step process</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 mx-auto mt-[7.25rem]">
        {list.map((l, index) => (
          <InfoCard
            key={index}
            title={l.title}
            color={l.color}
            desc={l.description}
            icon={l.icon}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  index: number;
}

function InfoCard({ icon, title, desc, color, index }: InfoCardProps) {
  return (
    <div className="p-4 space-y-[1rem]">
      <div
        className={cn(
          color == "#000000" ? "bg-black" : `bg-[${color}]`,
          "w-[150px] h-[150px] border-[3px] border-white rounded-full grid items-center justify-center mx-auto relative"
        )}
      >
        {icon}
        <div
        className={cn(
          color == "#000000" ? "bg-black" : `bg-[${color}]`,
          "w-[40px] h-[40px] border-[3px] border-white rounded-full absolute top-0 right-0 text-[1.125rem] text-white grid items-center justify-center"
        )}
      >
        {index}
      </div>
      </div>
     
      <div className="text-black text-center space-y-[1rem]">
        <p className="font-clash font-semibold text-[1.75rem]">{title}</p>
        <p className="text-[1.125rem]">{desc}</p>
      </div>
    </div>
  );
}
