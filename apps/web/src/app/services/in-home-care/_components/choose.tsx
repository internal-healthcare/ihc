import CBadge from "@/components/CBadge";
import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";
import Image from "next/image";
import React from "react";

const list = [
  {
    title: "Affordable",
    description:
      "We work hard to connect you with caregivers and agencies that fit within your budget, without sacrificing the level of care you deserve.",
    icon: (
      <Image
        src="/icons/message-chat-circle.svg"
        width={24}
        height={24}
        alt="Affordable"
        style={{ width: "auto", height: "auto" }}
      />
    ),
    color: "bg-primary3",
    border: "#B6965A",
  },
  {
    title: "Experts",
    description:
      "Our providers are not only compassionate but also highly skilled and experienced in providing the care you need. e connect you with professionals who are trained to deliver expert in-home care.",
    icon: (
      <Image
        src="/icons/message-smile-circle.svg"
        width={24}
        height={24}
        alt="Affordable"
        style={{ width: "auto", height: "auto" }}
      />
    ),
    color: "bg-shade1",
    border: "#7A8D83",
  },
  {
    title: "Trustworthy",
    description:
      "Every caregiver and agency in our network has been carefully vetted to ensure they meet our high standards of integrity, reliability, and professionalism. ",
    icon: (
      <Image
        src="/icons/break-out-square.svg"
        width={24}
        height={24}
        alt="Affordable"
        style={{ width: "auto", height: "auto" }}
      />
    ),
    color: "#F5F5F5",
    border: "#595959",
  },
];

export default function ChooseUs() {
  return (
    <div className="container py-[7.875rem] space-y-[7rem]">
      <div className="text-center space-y-[12px]">
        <CBadge>Why Choose Us</CBadge>
        <h3 className="text-black font-clash font-medium text-[5rem]">We’re Highly Reliable </h3>
        <p className="text-[#475467] text-xl max-w-screen-md mx-auto">
          At Internal Health Care, we pride ourselves on connecting you with the highest quality of
          in-home caregivers and agencies to ensure you receive not just care, but the right care,
          tailored to your needs.
        </p>
        <Button size="lg">Get Started Today</Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((l, index) => (
          <InfoCard
            key={index}
            title={l.title}
            desc={l.description}
            color={l.color}
            icon={l.icon}
            border={l.border}
          />
        ))}
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  desc,
  color,
  border,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  border: string;
}) {
  return (
    <div
      className={cn(
        color.startsWith("bg-") ? color : `bg-[${color}]`,
        `border-[${border}]`,
        "border rounded-[19px] p-[2.813rem] space-y-[20px]"
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
        <p className="text-[#101828] font-bold text-xl">{title}</p>
        <p className="text-[#475467]">{desc}</p>
      </div>
    </div>
  );
}
