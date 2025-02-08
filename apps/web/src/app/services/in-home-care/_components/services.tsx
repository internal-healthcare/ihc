import CBadge from "@/components/CBadge";
import { CarFrontIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const list = [
  {
    title: "Live-in/24 Hour Home Care",
    description: "24/7 assistance for seniors with monitoring, medical care, and companionship",
    icon: <CarFrontIcon size={32} color="#262626" />,
  },
  {
    title: "Veterans Home Service",
    description:
      "Specialized care tailored to veterans, offering support with daily activities and medical needs.",
    icon: <Image src="/icons/house.svg" alt="Veterans Home Service" width={32} height={32} />,
  },
  {
    title: "Companion Care",
    description:
      "Emotional support and companionship to reduce loneliness and promote socializing.",
    icon: <Image src="/icons/companion.svg" alt="Companion Care" width={32} height={32} />,
  },
  {
    title: "Respite Care",
    description: "Temporary relief for family caregivers, allowing them time to rest and recharge.",
    icon: <Image src="/icons/respite.svg" alt="Respite Care" width={32} height={32} />,
  },
  {
    title: "Medication Reminders",
    description: "Assistance with staying on track with prescribed medications.",
    icon: <Image src="/icons/medication.svg" alt="Medication Reminders" width={32} height={32} />,
  },
  {
    title: "Light Housekeeping",
    description: "Basic cleaning tasks ensure a safe, clean, and comfortable home.",
    icon: <Image src="/icons/lighthouse.svg" alt="Light Housekeeping" width={32} height={32} />,
  },
  {
    title: "Meal Preparation",
    description:
      "Nutritious, home-cooked meals prepared according to dietary needs and preferences.",
    icon: <Image src="/icons/meal.svg" alt="Meal Preparation" width={32} height={32} />,
  },
  {
    title: "Running Errands",
    description: "Help with errands like prescriptions and groceries, reducing stress for clients.",
    icon: <Image src="/icons/errands.svg" alt="Running Errands" width={32} height={32} />,
  },
  {
    title: "Driving to Appointments",
    description:
      "Reliable transportation ensures clients reach medical appointments safely and on time.",
    icon: <CarFrontIcon size={32} color="#262626" />,
  },
];

export default function Services() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="space-y-[2rem] container text-center py-[6rem]">
        <CBadge>In-home Services</CBadge>
        <h3 className="text-[2rem] md:text-[5rem] font-clash font-medium text-black leading-[2.438rem] md:leading-[5.063rem]">
          What You Can Get Through our{" "}
          <span className="md:block text-[#7A8D83]">In-Home Care Service</span>
        </h3>
        <p className="max-w-screen-lg mx-auto text-[#475467] md:text-xl">
          From basic non-medical support like help with bathing, dressing, meal preparation, and
          housekeeping, to more advanced services such as wound care, medication management,
          physical therapy and more.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-8 justify-center py-[6rem]">
        {list.map((service, index) => (
          <InfoCard
            key={index}
            icon={service.icon}
            title={service.title}
            desc={service.description}
          />
        ))}
      </div>
    </div>
  );
}

function InfoCard({ icon, title, desc }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#D9D9D9] rounded-[22px] p-[2.5rem] w-full md:max-w-[470px] space-y-[2rem]">
      <div className="bg-[#FAFAFA] border border-[#E3E3E3] rounded-full w-[56px] h-[56px] grid items-center justify-center">
        {icon}
      </div>
      <div className="space-y-[12px]">
        <p className="text-[1.063rem] sm:text-[1.563rem] font-bold font-aeonik">{title}</p>
        <p className="text-[0.794rem] sm:text-sm text-[#262626]">{desc}</p>
      </div>
    </div>
  );
}
