import CBadge from "@/components/CBadge";
import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const blogs: BlogProps[] = [
  {
    author: "Alec Whitten",
    date: "17 Jan 2024",
    title: "In-home care weekly success stories",
    description:
      "Expert insights and guides to help you find the best day care programs for your loved ones",
    categories: ["In-home care", "Management", "Category 3"],
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2024",
    title: "Comprehensive home care articles ",
    description:
      "Expert insights and guides to help you find the best day care programs for your loved ones",
    categories: ["In-home care", "Management"],
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2024",
    title: "Comprehensive home care articles ",
    description:
      "Expert insights and guides to help you find the best day care programs for your loved ones",
    categories: ["In-home care", "Management"],
  },
];

type Props = {
  heading: string;
};

export default function Information({ heading }: Props) {
  return (
    <div className="py-[5rem] pb-[10rem]">
      <div className="container space-y-[5rem]">
        <div className="text-center space-y-[2rem]">
          <CBadge>{heading}</CBadge>
          <h4 className="text-[5rem] leading-[5.1rem] text-black font-clash font-medium text-center">
            Information Center and <span className="text-[#7A8D83] block">Helpful Guides</span>
          </h4>
          <p className="text-[#475467] text-xl max-w-screen-md mx-auto">
            Our essential guides and resources is designed to support you every step of the way, and
            help you make confident, informed decisions on in-home care{" "}
          </p>
          <Button className="mx-auto h-[60px]" size="lg">
            View all resources
          </Button>
        </div>
        <div className="space-y-[48px]">
          <div className="flex gap-8">
            <div className="w-5/6 bg-[url('/images/78af89fb2ea76d49bd9668276da06595.png')] bg-cover rounded-[32px] overflow-hidden relative">
              <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-tr from-black to-black/0">
                <div className="flex items-center justify-between p-[2.5rem] absolute bottom-0 w-full">
                  <div className="text-white">
                    <p className="text-[2.625rem] font-medium leading-[2.988rem]">
                      All about in-home care
                    </p>
                    <p className="text-2xl font-medium">Dr. Eli Coleman, phD</p>
                  </div>
                  <div className="w-24 h-24 bg-black rounded-full grid justify-center items-center">
                    <Image src="/icons/Polygon-1.svg" width={28} height={28} alt="Play" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-[2.25rem]">
              <div className="bg-[#F6F3ED] rounded-[24px] border-[0.3px] border-[#B6965A] space-y-[2rem] p-[2.313rem]">
                <h4 className="text-[#B6965A] font-clash text-[3.938rem] leading-[4.843rem] font-medium">
                  10,000
                </h4>
                <p className="text-[1.563rem] text-[#262626]">
                  Of matched families seeking quality in-home care
                </p>
              </div>
              <div className="bg-[#EFF6F2] rounded-[24px] border-[0.3px] border-[#7A8D83] space-y-[2rem] p-[2.313rem]">
                <h4 className="text-[#7A8D83] font-clash text-[3.938rem] leading-[4.843rem] font-medium">
                  95%
                </h4>
                <p className="text-[1.563rem] text-[#262626]">
                  of families successfully matched with in-home caregivers
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-evenly">
            {blogs.map((blog, index) => (
              <Blog key={index} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type BlogProps = {
  author: string;
  date: string;
  title: string;
  description: string;
  categories: string[];
};

function Blog(props: BlogProps) {
  return (
    <div className="max-w-[480px] space-y-[20px]">
      <div className="bg-[#F0F0F0] h-[280px] w-full rounded-2xl"></div>
      <div className="space-y-[10px]">
        <div className="flex items-center gap-4 text-sm font-semibold text-[#7A8D83]">
          <p>{props.author}</p>
          <p>•</p>
          <p>{props.date}</p>
        </div>
        <div className="text-[#101828] flex items-center gap-4 justify-between">
          <p className="font-semibold text-xl overflow-ellipsis max-w-[80%]">{props.title}</p>
          <ArrowUpRight className="w-6 h-6 stroke-2" />
        </div>
        <p className="text-[1rem]">{props.description}</p>
        <div className="flex items-center gap-2">
          {props.categories.map((cat, index) => (
            <div
              key={index}
              className={cn(
                index == 0
                  ? "bg-[#F6F3ED] text-[#B6965A] border-[#B6965A]"
                  : "bg-[#F8F9FC] text-[#363F72] border-[#D5D9EB]",
                "font-medium text-sm rounded-full border  px-3 py-1"
              )}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
