import CBadge from "@/components/CBadge";
import Image from "next/image";
import React from "react";

const faqData = [
  {
    image: "/icons/like.svg",
    title: "Is there a free trial available?",
    description:
      "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
  },
  {
    image: "/icons/like.svg",
    title: "Can I change my plan later?",
    description:
      "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
  },
  {
    image: "/icons/like.svg",
    title: "What is your cancellation policy?",
    description:
      "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.",
  },
  {
    image: "/icons/like.svg",
    title: "Can other info be added to an invoice?",
    description:
      "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.",
  },
  {
    image: "/icons/like.svg",
    title: "How does billing work?",
    description:
      "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
  },
  {
    image: "/icons/like.svg",
    title: "How do I change my account email?",
    description:
      "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
  },
];

export default function Faq() {
  return (
    <div className="py-[5rem]">
      <div className="container space-y-[5.938rem]">
        <div className="text-center space-y-4">
          <CBadge>FREQUENTY ASKED QUESTIONS</CBadge>
          <h4 className="text-[4.875rem] font-clash font-medium max-w-4xl mx-auto leading-[5.996rem]">
            We’ve answered a few questions
          </h4>
          <p className="text-xl text-[#475467] max-w-3xl mx-auto">
            Everything you need to know about our product and billing. If you can’t find the answer
            you’re looking for, Please write to us on the form above.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {faqData.map((faq, index) => (
            <FaqCard {...faq} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

type FaqCardProps = {
  image: string;
  title: string;
  description: string;
};
function FaqCard({ image, title, description }: FaqCardProps) {
  return (
    <div className="max-w-[30.625rrem] bg-[#F5F5F5] rounded-[1.25rem] px-[2rem] py-[3.125rem] space-y-[2rem]">
      <div className="w-[3rem] h-[3rem] bg-white mx-auto rounded-lg border border-[#E4E7EC] grid items-center justify-center">
        <Image src={image} alt="" width={24} height={24} className="object-contain" />
      </div>
      <div className="text-center ">
        <p className="text-[#101828] font-semibold text-[1.25rem]">{title}</p>
        <p className="text-[1rem] leading-[1.5rem] text-[#475467]">{description}</p>
      </div>
    </div>
  );
}
