import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  { title: "Company", href: "/" },
  {
    title: "Services",
    href: "/services",
    items: [{ title: "In-home care", href: "/services/in-home-care" }],
  },
  { title: "Directory", href: "/directory" },
  { title: "Donation", href: "/donation" },
];

export default function MainNav() {
  return (
    <div className="container">
      <div className="bg-[#F5F5F5] border border-[#D9D9D9] rounded-[65px] p-5 container mt-4 flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Internal healthcare" width={45} height={45} />
          <p className="text-[1.375rem] font-bold font-clash text-[#101828]">Internal Health</p>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-[#475467] font-semibold text">
          {links.map((l, index) => (
            <Link key={index} href={l.href}>{l.title}</Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <ul className="text-white flex items-center gap-2 text-sm font-semibold">
            <li className="flex gap-2 items-center bg-[#F9FAFB] border-[1.2px] border-[#E4E7EC] py-[0.625rem] rounded-[29px] px-[1.25rem] ring-1 ring-offset-2 ring-[#E4E7EC]  text-[#344054] font-medium">
              <Phone size={20} color="#344054" /> +1-850-961-2701
            </li>
            <li className="bg-[#7A8D83] py-[0.625rem] px-[1.25rem] rounded-[29px] shadow-lg shadow-[#1018280D] border-[2px] border-[#FFFFFF1F]">
              Become a Provider
            </li>
            <li className="bg-[#B6965A] py-[0.625rem] px-[1.25rem] rounded-[29px] shadow-lg shadow-[#1018280D] border-[2px] border-[#FFFFFF1F]">
              Become a Caregiver
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
