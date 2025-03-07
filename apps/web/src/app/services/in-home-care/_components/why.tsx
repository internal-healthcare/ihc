import { Button } from "@repo/ui/components/ui/button";
import React from "react";
import { cn } from "@repo/ui/lib/utils";
import { CheckIcon } from "lucide-react";
import Image from "next/image";


const list = [
  {
    title: "Personalized and Tailored Care",
    border: "#7A8D83",
    mainBg: "#B6965A",
    checkBg: "#7A8D83",
    end: "Ellipse.svg",
  },
  {
    title: "Comfort and Familiarity of Home",
    border: "#999896",
    mainBg: "#FFFDFA",
    checkBg: "#999897",
    end: "Star-1.svg",
  },
  {
    title: "100% Independence",
    border: "#4A5450",
    mainBg: "#7A8D83",
    checkBg: "#4A5450",
    end: "Ellipse.svg",
  },
  {
    title: "One-on-One Attention",
    border: "#999897",
    mainBg: "#FFFDFA",
    checkBg: "#999897",
    end: "Star-1.svg",
  },
  {
    title: "Family Involvement & Peace",
    border: "#4A5450",
    mainBg: "#7A8D83",
    checkBg: "#4A5450",
    end: "Star-2.svg",
  },
  {
    title: "Cost-Effective Care Option",
    border: "#7A8D83",
    mainBg: "#B6965A",
    checkBg: "#7A8D83",
    end: "Ellipse.svg",
  },
];

export default function Why() {
  return (
    <div className="py-[5rem] px-4">
      <div className="container bg-black rounded-[37px] overflow-hidden px-0">
        <div className={cn("grid grid-cols-2 items-center ")}>
          <div className="">
            <div className="relative">
              <div className="img-shade -left-[20px] bottom-0 w-full bg-no-repeat"></div>
            </div>
            <div className="text-white p-[7.5rem] space-y-[1.125rem]">
              <h3 className="font-clash text-[3.125rem] leading-[3.844rem] font-medium">
                We offer the best <span className="text-[#B6965A]">In-home care</span> Services
              </h3>
              <p className="text-white text-lg">
                A compassionate and customizable approach to caregiving, allowing seniors to receive
                the help they need without sacrificing their independence or comfort.
              </p>
              <Button className="bg-white text-[#7A8D83]">Get Started</Button>
            </div>
          </div>
          <div className="bg-[#141414] border border-black rounded-[37px] p-[7.5rem] space-y-[1.25rem]">
            {list.map((clip, index) => (
              <Clip
                key={index}
                border={clip.border}
                mainBg={clip.mainBg}
                checkBg={clip.checkBg}
                end={clip.end}
                title={clip.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type ClipProps = {
  mainBg: string;
  title: string;
  end: string;
  border: string;
  checkBg: string;
};

function Clip({ mainBg, title, end, checkBg }: ClipProps) {
  const color = mainBg == "#FFFDFA" ? "bg-white" : `bg-[${mainBg}]`;
  const textColor = mainBg == "#FFFDFA" ? "text-black" : "text-white";
  const checkColor = ["#999897"].includes(checkBg) ? "bg-black/60" : `bg-[${checkBg}]`;
  return (
    <div className={cn(color, "rounded-[34px] p-2 flex items-center gap-4 justify-between border")}>
      <div
        className={cn(
          checkColor,
          "w-6 h-6 border-[1.5px] border-black grid justify-center items-center rounded-sm ml-5"
        )}
      >
        <CheckIcon className="w-4 h-4 stroke-[3] text-white" />
      </div>
      <p className={cn(textColor, "text-[1.25rem] font-medium")}>{title}</p>
      <Image src={`/icons/${end}`} alt="" width={47} height={47} />
    </div>
  );
}
