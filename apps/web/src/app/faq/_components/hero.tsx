import CBadge from "@/components/CBadge";
import Link from "next/link";
import React from "react";
import Search from "./search";

export default function Hero() {
  return (
    <div className='py-[6.125rem] bg-[url("/icons/hero17.svg")] bg-cover bg-no-repeat bg-[#F6F3ED] mt-[1.25rem]'>
      <div className="container">
        <div className="text-center space-y-[1.688rem]">
          <CBadge>FREQUENTLY ASKED QUESTIONS</CBadge>
          <div className="space-y-[1.688rem]">
            <h4 className="text-black font-clash font-medium text-[4.875rem]">
              Frequently asked questions
            </h4>
            <p className="text-black text-[1.125rem] leading-[1.75rem]">
              Everything you need to know about our product and billing. If you can’t find the
              answer you’re looking for{" "}
              <Link href="/contact" className="underline">
                Contact us
              </Link>
            </p>
          </div>
          <div className="max-w-[42.313rem] mx-auto">
            <Search />
          </div>
          <div className="flex justify-center gap-4 text-[0.875rem] items-center text-[#1F1F1F]">
            <p>Common Searches: </p>
            {["Internal health care services", "Facility type", "In-home care subscription"].map(
              (search, index) => (
                <p key={index} className="bg-[#4C535026] py-[0.313rem] px-[1.375rem] rounded-[3.438rem] ">{search}</p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
