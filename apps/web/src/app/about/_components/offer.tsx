import CBadge from "@/components/CBadge";
import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import React from "react";

const focusList = [
  {
    icon: "/icons/users-plus.svg",
    title: "Personalized Referrals",
    description:
      "Our expert advisors take the time to understand your specific needs, preferences, and budget, connecting you with the most suitable care providers who align with your expectations.",
  },
  {
    icon: "/icons/coins-hand.svg",
    title: "Vetted and Trusted Providers",
    description:
      "Our network of care providers is carefully vetted, ensuring they meet the highest standards of care, have the necessary insurance, and employ qualified caregivers who truly care.",
  },
  {
    icon: "/icons/data.svg",
    title: "No-Cost Support",
    description:
      "Our resources are provided at no charge to you. We believe that finding the right care should be accessible to everyone, and we are committed to making your search as stress-free as possible.",
  },
  {
    icon: "/icons/heart-octagon.svg",
    title: "Comprehensive Care Information",
    description:
      "We offer extensive directories of senior living and care options, including independent living, assisted living, senior day care, and in-home care.",
  },
];

export default function Offer() {
  return (
    <div className="py-[5rem] bg-[#F6F3ED]">
      <div className="container space-y-[5.375rem]">
        <div className="flex justify-between gap-10 items-center">
          <div className="space-y-[20px] w-3/5">
            <CBadge>Our Focus</CBadge>
            <h4 className="text-black text-[4.875rem] font-medium font-clash">What we offer</h4>
            <p className="text-[#475467] text-xl leading-[30px] max-w-[788px]">
              At Internal Health Care, we are dedicated to providing you with the information and
              connections you need to ensure your loved one receives the best care possible. Here’s
              what we offer.{" "}
            </p>
            <div className="flex items-center gap-4">
              <Button
                className="h-[60px] px-[22px] py-[1rem] border border-white bg-[#F5F5F5]"
                size="lg"
                variant="secondary"
              >
                Become a Provider
              </Button>
              <Button className="h-[60px] px-[22px] py-[1rem]" size="lg">
                Submit a Request
              </Button>
            </div>
          </div>
          <div className="relative w-2/5">
            <div className="relative max-w-[570px] min-h-[361px] rounded-[30px] overflow-hidden">
              <Image src="/images/offer-1.jpg" alt="" sizes="" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-[4.375rem]">
            {focusList.map((focus, index) => (
              <FocusCard {...focus} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type FocusCardProps = {
  icon: string;
  title: string;
  description: string;
};
function FocusCard({ icon, title, description }: FocusCardProps) {
  return (
    <div className="flex gap-4">
      <div>
        <div className="w-[48px] h-[48px] bg-white rounded-[10px] grid justify-center items-center border border-[#E4E7EC] shadow-sm shadow-[#1018280D]">
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className="object-contain w-[24px] h-[24px]"
          />
        </div>
      </div>
      <div>
        <p className="text-[#101828] text-[1.25rem] font-semibold">{title}</p>
        <p className="text-[#454545] text-[1rem] leading-[24px]">{description}</p>
      </div>
    </div>
  );
}
