import CBadge from "@/components/CBadge";
import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";
import React from "react";

type Props = {
  title: string;
  description: string;
  list: {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    border: string;
  }[];
  style: "style1" | "style2";
  className?: string;
};

export default function ChooseUs({ title, description, list, style = "style1", className }: Props) {
  return (
    <div className="container py-[7.875rem] space-y-[7rem]">
      <div className="text-center space-y-[12px]">
        <CBadge>Why Choose Us</CBadge>
        <h3 className="text-black font-clash font-medium text-[5rem] max-w-[70%] leading-[5.063rem] mx-auto">
          {title}
        </h3>
        <p className="text-[#475467] text-xl max-w-screen-md mx-auto">{description}</p>
        <Button size="lg">Get Started Today</Button>
      </div>
      <div className={cn("grid md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
        {list.map((l, index) => (
          <InfoCard
            key={index}
            title={l.title}
            desc={l.description}
            color={l.color}
            icon={l.icon}
            border={l.border}
            style={style}
          />
        ))}
      </div>
    </div>
  );
}

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  border: string;
  style: "style1" | "style2";
};

function InfoCard({ icon, title, desc, color, border, style }: InfoCardProps) {
  return (
    <div
      className={cn(
        color.startsWith("bg-") ? color : `bg-[${color}]`,
        `border-[${border}]`,
        { "border-[0.3px]": style == "style2" },
        { border: style == "style1" },
        "rounded-[19px] p-[2.813rem] space-y-[20px]"
      )}
    >
      <div>
        <div
          className={cn(
            "w-[48px] h-[48px] bg-white border border-[#E4E7EC] shadow-lg shadow-[#1018280D] rounded-lg grid justify-center items-center"
          )}
        >
          {icon}
        </div>
      </div>
      <div className="space-y-[8px]">
        <p
          className={cn(
            "font-bold text-xl",
            { "text-[#FFFDFA]": style == "style2" },
            { "text-[#101828]": style == "style1" }
          )}
        >
          {title}
        </p>
        <p
          className={cn(
            { "text-[#FFFDFA]": style == "style2" },
            { "text-[#475467]": style == "style1" }
          )}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
