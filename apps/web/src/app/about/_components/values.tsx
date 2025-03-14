import CBadge from "@/components/CBadge";
import Image from "next/image";
import React from "react";

const valuesList = [
  {
    icon: "/icons/vcompassion.svg",
    title: "Compassion",
    description:
      "We approach every situation with empathy and understanding, ensuring that your loved one's well-being is our top priority",
  },
  {
    icon: "/icons/vreliability.svg",
    title: "Reliability",
    description:
      "You can count on us to be there when you need us most, providing consistent and dependable support throughout your care journey.",
  },
  {
    icon: "/icons/vintegrity.svg",
    title: "Integrity",
    description:
      "We believe in being your trusted partner, providing honest and transparent guidance in all our interactions.",
  },
  {
    icon: "/icons/vrespect.svg",
    title: "Respect",
    description:
      "We honor the dignity and individuality of every client and caregiver, fostering an environment where everyone is valued and heard.",
  },
  {
    icon: "/icons/vsupport.svg",
    title: "Support",
    description:
      "We are here to listen, guide, and connect you with the best providers, ensuring that every step of your caregiving journey is smooth",
  },
  {
    icon: "/icons/vexcellence.svg",
    title: "Excellence",
    description:
      "We are committed to connecting you with providers who deliver the highest standard of care.",
  },
];

export default function Values() {
  return (
    <div className="py-[5rem] bg-[#F5F5F5]">
      <div className="container space-y-[6.125rem]">
        <div className="text-center space-y-[1rem]">
          <CBadge>OUR VALUES</CBadge>
          <h4 className="font-clash text-[4.875rem] leading-[5.5rem] font-medium text-black max-w-[1005px] mx-auto">
            We are Your Trusted Partner in Senior Care.
          </h4>
          <p className="text-xl text-[#475467]">
            Our shared values keep us connected and guide us as one team.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[3.75rem]">
          {valuesList.map((values, index) => (
            <ValuesCard {...values} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

type ValuesCardProps = {
  icon: string;
  title: string;
  description: string;
};

function ValuesCard({ icon, title, description }: ValuesCardProps) {
  return (
    <div className="bg-white border border-[#D9D9D9] p-[2.875rem] rounded-[1.375rem] space-y-[2rem]">
      <div className="w-[48px] h-[48px] border border-[#E4E7EC] flex items-center justify-center relative rounded-lg shadow-sm shadow-[#1018280D]">
        <Image
          src={icon}
          alt="icon"
          className="object-contain w-[24px] h-[24px]"
          width={24}
          height={24}
        />
      </div>
      <div className="space-y-[12px]">
        <h5 className="font-bold font-aeonik text-[1.563rem] leading-[1.5rem] text-[#12141D]">
          {title}
        </h5>
        <p className="text-black text-[1.125rem] leading-[1.75rem]">{description}</p>
      </div>
    </div>
  );
}
