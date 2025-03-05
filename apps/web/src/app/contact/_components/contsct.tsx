import { cn } from "@repo/ui/lib/utils";
import { ArrowUpRightIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

const list = [
  {
    icon: <MailIcon className="w-[24px] h-[24px]" color="#B6965A" />,
    color: "#B6965A26",
    title: "Chat to support via Email",
    description: "We respond in less than 24 hours",
    value: "Support@internalhealthcare.com",
  },
  {
    icon: <PhoneIcon className="w-[24px] h-[24px]" color="#000000" />,
    color: "#F0F0F0",
    title: "Call Us",
    description: "We’re available 24 hours for calls",
    value: "+1 (454) 677 7878",
  },
  {
    icon: <MapPinIcon className="w-[24px] h-[24px]" color="#7A8D83" />,
    color: "bg-green-50",
    title: "Office Address",
    description: "Not open to visits",
    value: "Wakefield, WF2 7AJ, United Kingdom",
  },
];

export default function Contact() {
  return (
    <div className="py-[5rem]">
      <div className="bg-[#F6F3ED] container rounded-[30px] p-[3.443rem] grid gap-8 lg:grid-cols-3">
        {list.map((data, index) => (
          <div className="bg-white rounded-[24px] p-[24px]" key={index}>
            <div className="mb-[5rem] flex justify-between items-center">
              <div
                className={cn(
                  "h-[48px] w-[48px] rounded-full  flex justify-center items-center",
                  data.color.startsWith("bg-") ? data.color : `bg-[${data.color}]`
                )}
              >
                {data.icon}
              </div>
              <div>
                <ArrowUpRightIcon className="w-[28px] h-[28px]" color="#B6965A" />
              </div>
            </div>
            <div>
              <div className="mb-[1.25rem]">
                <p className="font-cabinet font-bold text-[1.25rem] text-[#1F1F1F]">{data.title}</p>
                <p className="text-[#52575C] text-[1rem]">{data.description}</p>
              </div>
              <p className="text-black font-semibold text-[1.25rem]">{data.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
