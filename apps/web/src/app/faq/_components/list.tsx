import { FaqCard, faqData } from "@/app/contact/_components/faq";
import CBadge from "@/components/CBadge";
import Image from "next/image";
import React from "react";

const categoryList = [
  {
    image: "/icons/qlementine-icons_faq-16.svg",
    title: "General",
  },
  {
    image: "/icons/payment.svg",
    title: "Payment",
  },
  {
    image: "/icons/group.svg",
    title: "For Seniors and Families",
  },
  {
    image: "/icons/like-user.svg",
    title: "For Senior Care Providers",
  },
  {
    image: "/icons/processes.svg",
    title: "About services and processes",
  },
  {
    image: "/icons/subscription.svg",
    title: "Payments and subscriptions",
  },
  {
    image: "/icons/care.svg",
    title: "Finding and managing care",
  },
  {
    image: "/icons/fluent-mdl2_join-online-meeting.svg",
    title: "Joining the network and managing services",
  },
];

export default function ListFaq() {
  return (
    <>
      <div className="py-[6.938rem]">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-[4.875rem]">
            {categoryList.map((category, index) => (
              <FaqCategoryCard {...category} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="py-[6.688rem]">
        <div className="container space-y-[5.938rem]">
          <div className="text-center">
            <CBadge>FREQUENTY ASKED QUESTIONS</CBadge>
            <h4 className="text-black text-[4.875rem] font-medium font-clash">General Questions</h4>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-8">
              {faqData.map((faq, index) => (
                <FaqCard {...faq} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type FaqCategoryCardProps = {
  image: string;
  title: string;
};
function FaqCategoryCard({ image, title }: FaqCategoryCardProps) {
  return (
    <div className="mx-w-[20rem] py-[3.25rem] px-[2rem] border border-[#D9D9D9] rounded-[2.5rem] bg-[#FCFCFC] text-center">
      <div className="mb-[1.25rem]">
        <Image src={image} width={47} height={47} className="object-contain mx-auto" alt="" />
      </div>
      <p className="text-[#454545] font-medium text-[1.375rem]">{title}</p>
    </div>
  );
}
