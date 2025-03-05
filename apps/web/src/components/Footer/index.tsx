import React from "react";
import CBadge from "../CBadge";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@repo/ui/lib/utils";

type FooterLinks = {
  title: string;
  type: "links" | "images";
  links: {
    title: string;
    href: string | null;
    className?: string;
  }[];
}[];

const footerLinks: FooterLinks = [
  {
    title: "Categories",
    type: "links",
    links: [
      { title: "For Providers", href: "" },
      { title: "For Donors", href: "" },
      { title: "For Caregivers", href: "" },
      { title: "For Families", href: "" },
    ],
  },
  {
    title: "Services",
    type: "links",
    links: [
      { title: "In-home care", href: "/services/in-home-care" },
      { title: "Assisted Living", href: "" },
      { title: "Senior Care", href: "" },
      { title: "Senior Day Center", href: "" },
      { title: "Job Posting", href: "" },
      { title: "Senior Phone Companionship", href: "" },
      { title: "Internal Health Practitioner", href: "" },
      { title: "Private Caregivers", href: "" },
    ],
  },
  {
    title: "Contact Us",
    type: "links",
    links: [
      { title: "+1 850-961-2701", href: "tel:+18509612701", className: "underline" },
      {
        title: "Support@internalhealthcare.com",
        href: "email:Support@internalhealthcare.com",
        className: "underline",
      },
      { title: "Tampa, Florida", href: null },
    ],
  },
  {
    title: "Company",
    type: "links",
    links: [
      { title: "FAQs", href: "" },
      { title: "Privacy Policy", href: "" },
      { title: "Terms of Service", href: "" },
      { title: "About Us", href: "" },
    ],
  },
  {
    title: "Get the caregiver app",
    type: "images",
    links: [
      { title: "App Store", href: "/icons/app-store.svg", className: "object-contain" },
      { title: "Play Store", href: "/icons/play-store.svg", className: "object-contain" },
    ],
  },
];

export default function index() {
  return (
    <div className="py-[5rem] bg-black">
      <div className="relative">
        <div className="green-morphe left-[30%] -top-[30px]"></div>
        <div className="yellow-morphe left-[60%] -top-[30px]"></div>
      </div>

      <div className="text-center container text-white space-y-[8rem]">
        <div className="px-[4rem] space-y-6">
          <CBadge>Get Started</CBadge>
          <h3 className="font-clash text-[4.875rem] text-center font-medium leading-[5.996rem]">
            Ready to find the perfect care solution for your loved one?{" "}
          </h3>
          <p>Submit your Request and let us help you make the best decision for your family.</p>
          <div className="flex items-center gap-4 justify-center">
            <Button className="bg-[#B6965A] hover:bg-[#B6965A]/90 h-[60px] px-10">
              Submit a care request
            </Button>
            <Button variant="outline" className="bg-transparent h-[60px] px-10">
              Become a provider
            </Button>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-r from-[#B6965A]/50 to-[#7A8D83]/50 rounded-[40px] p-[1px]">
            <div className="bg-[#141414] rounded-[40px] p-[4.25rem]">
              <div className="grid md:grid-cols-2 items-center">
                <div className="text-left">
                  <p className="text-white font-poppins font-bold text-[1.5rem]">
                    Join our newsletter
                  </p>
                  <p className="text-[#BFBFBF]">
                    For expert advice, helpful resources, and the latest updates on senior care
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 justify-end">
                    <Input
                      placeholder="Enter your email"
                      className="max-w-md border border-white/25 rounded-[100px] h-[52px] px-6"
                    />
                    <Button className="h-[52px] px-6">Subscrible</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={cn("flex gap-4 flex-wrap lg:flex-nowrap")}>
            <div className="text-left space-y-[2.5rem] max-w-[250px]">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="Internal healthcare"
                  width={39}
                  height={39}
                  className="bg-white rounded-full"
                />
                <p className="font-clash font-bold text-[1.5rem]">Internalhealth</p>
              </div>
              <p className="text-[#BFBFBF]">
                Your trusted resource for connecting with top-quality senior care providers
              </p>
            </div>
            <div
              className={cn(
                "grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
                `lg:grid-cols-${footerLinks.length}`
              )}
            >
              {footerLinks.map((l1, i1) => (
                <div key={i1} className="text-left space-y-[1.125rem] min-w-[200px]">
                  <p className="font-bold text-white/[0.88]">{l1.title}</p>
                  <ul className="relative space-y-[1.125rem]">
                    {l1.links.map((l2, index) => (
                      <li key={index} className="relative text-left">
                        {l1.type == "links" ? (
                          l2.href ? (
                            <Link className={cn("text-[#BFBFBF]", l2.className)} href={l2.href}>
                              {l2.title}
                            </Link>
                          ) : (
                            <p className={cn("text-[#BFBFBF]", l2.className)}>{l2.title}</p>
                          )
                        ) : l1.type == "images" ? (
                          l2.href ? (
                            <Image
                              src={l2.href}
                              alt={l2.title}
                              width={135}
                              height={40}
                              className={cn(l2.className)}
                            />
                          ) : null
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
