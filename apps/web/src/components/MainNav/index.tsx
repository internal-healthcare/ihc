import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@repo/ui/components/ui/navigation-menu";
import { cn } from "@repo/ui/lib/utils";

const links = [
  {
    title: "Company",
    href: "/",
    items: [
      {
        title: "About Internal Healthcare Group",
        href: "/about",
        icon: "/icons/ix_about.svg",
        iconColor: "#B6965A",
        color: "#F6F3ED",
        description:
          "Learn about our mission, values, and dedication to delivering exceptional healthcare solutions.",
      },
      {
        title: "Contact Us",
        href: "/contact",
        icon: "/icons/ep_phone.svg",
        iconColor: "#141414",
        color: "#F5F5F5",
        description:
          "Reach out for inquiries, support, or service information through various communication channels",
      },
    ],
  },
  {
    title: "Services",
    href: "/services",
    items: [
      {
        title: "In-home care",
        href: "/services/in-home-care",
        icon: "/icons/donate.svg",
        iconColor: "#B6965A",
        color: "#F6F3ED",
        description:
          "A platform for personalized support, helping seniors live safely and independently at home.",
      },
      {
        title: "Assisted living",
        icon: "/icons/building-07.svg",
        iconColor: "#141414",
        color: "#F5F5F5",
        href: "/services/assisted-living",
        description:
          "Our lively community blending personalized care with seniors' cherished independence and daily support.",
      },
      {
        title: "Senior day care",
        icon: "/icons/clarity.svg",
        iconColor: "#B6965A",
        color: "#F6F3ED",
        href: "/services/senior-day-care",
        description:
          "A caring haven with expert care, lively activities, and meaningful connections for your loved ones.",
      },
    ],
  },
  { title: "Directory", href: "/directory" },
  { title: "Donation", href: "/donation" },
];

export default function MainNav() {
  return (
    <div className="container">
      <NavigationMenu className="max-w-none">
        <div className="bg-[#F5F5F5] border border-[#D9D9D9] rounded-[65px] p-5 container mt-4 flex items-center justify-between relative">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Internal healthcare" width={45} height={45} />
            <p className="text-[1.375rem] font-bold font-clash text-[#101828]">Internal Health</p>
          </div>
          {/* <div className="hidden lg:flex items-center gap-4 text-[#475467] font-semibold text">
          {links.map((l, index) => (
            <Link key={index} href={l.href}>
              {l.title}
            </Link>
          ))}
        </div> */}
          <div className="hidden lg:flex items-center gap-4 ">
            <NavigationMenuList>
              {links.map((l, index) =>
                l.items && l.items.length > 0 ? (
                  <NavigationMenuItem key={index} className="relative w-full">
                    <NavigationMenuTrigger className="bg-transparent text-[#475467] font-semibold focus:bg-transparent">
                      {l.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="shadow-none overflow-hidden p-[28px] border-2 border-[#F0F0F0] bg-white shadow-transparent">
                      <div className="w-max max-w-[1450px] grid lg:grid-cols-3 gap-8">
                        {l.items.map((item, i) => (
                          <div
                            key={i}
                            className={cn(
                              "border border-[#F0F0F0] rounded-[25px] p-[10px]",
                              `bg-[${item.color}]`
                            )}
                          >
                            <NavigationMenuLink asChild>
                              <Link href={item.href} className="flex items-center gap-4">
                                <div
                                  className={cn(
                                    "!w-[60px] !h-[60px] flex justify-center items-center rounded-[18px]",
                                    `bg-[${item.iconColor}]`
                                  )}
                                >
                                  <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={24}
                                    height={24}
                                    className="filter brightness-0 invert"
                                    style={{ width: "auto", height: "auto" }}
                                  />
                                </div>
                                <div className="w-3/4">
                                  <p className="text-[#1F1F1F] text-[1rem] font-bold">
                                    {item.title}
                                  </p>
                                  <p className="text-[#595959] text-[0.813rem]">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={index} className="">
                    <Link href={l.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "text-[#475467] font-semibold focus:bg-transparent bg-transparent"
                        )}
                      >
                        {l.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
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
      </NavigationMenu>
    </div>
  );
}
