import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import React from "react";

const data = {
  assisted: {
    list: [
      "Provides help with personal care and daily tasks.",
      "Access to healthcare professionals and medication management.",
      "Focuses on personal care, safety, and well-being.",
    ],
  },
  independent: {
    list: [
      "Designed for seniors who require minimal assistance.",
      "No built-in medical or support services.",
      "Prioritizes convenience, community, and recreational opportunities.",
    ],
  },
};

export default function Differences() {
  return (
    <div className="py-[5rem]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="max-w-5xl space-y-[1.563rem]">
            <h4 className="font-clash text-[#141414] text-[3.938rem] font-medium leading-[4.843rem]">
              Key Differences Between Assisted and Independent Living
            </h4>
            <p className="text-[#595959] text-[1.563rem] max-w-3xl">
              Both options prioritize creating a vibrant, supportive environment for seniors, but
              the right choice depends on the level of care and support needed.
            </p>
          </div>
          <div>
            <Button className="h-[60px] px-8" size="lg">
              Submit a Request
            </Button>
          </div>
        </div>
        <div className="flex justify-between rounded-[51px] overflow-hidden mt-[5.688rem]">
          <div className="bg-black text-white w-full text-center px-[3.125rem] py-8">
            <p className="text-[2rem] font-bold mb-12 leading-[2.421rem]">🚀 Services</p>
            <div className="space-y-4 mb-4">
              <div className="bg-white text-[#141414] font-bold font-aeonik p-8 rounded-[1rem]">
                <p className="flex items-center justify-center gap-8 text-[1.563rem]">
                  <span>👴</span> Level of Care
                </p>
              </div>
              <div className="bg-white text-[#141414] font-bold font-aeonik p-8 rounded-[1rem]">
                <p className="flex items-center justify-center gap-8 text-[1.563rem]">
                  <span>🏥</span> Medical Support
                </p>
              </div>
              <div className="bg-white text-[#141414] font-bold font-aeonik p-8 rounded-[1rem]">
                <p className="flex items-center justify-center gap-8 text-[1.563rem]">
                  <span>🌟</span> Lifestyle
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#B6965A] py-8 border-x-white border-x">
            <p className="text-[2rem] font-bold mb-12 leading-[2.421rem] text-center text-white">
              🟢 Assisted Living
            </p>
            <div className="space-y-4 mb-4">
              {data.assisted.list.map((value, index) => (
                <div key={index} className="relative">
                  <Image alt="" fill className="z-10 fixed w-[600px]" src="/icons/Arrow45.svg"/>
                  <div className="bg-white p-8 rounded-[1rem] z-50 mx-[3.125rem]">
                    <p className="flex items-center gap-4 text-[#141414] text-[1rem]">
                      <span className="bg-[#F0F0F0] p-3 rounded-xl">✅</span>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full bg-[#7A8D83] px-[3.125rem] py-8">
            <p className="text-[2rem] font-bold mb-12 leading-[2.421rem] text-center text-white">
              🔵 Independent Living
            </p>
            <div className="space-y-4 mb-4">
              {data.independent.list.map((value, index) => (
                <div className="bg-white p-8 rounded-[1rem]" key={index}>
                  <p className="flex items-center gap-4 text-[#141414] text-[1rem]">
                    <span className="bg-[#F0F0F0] p-3 rounded-xl">✅</span>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
