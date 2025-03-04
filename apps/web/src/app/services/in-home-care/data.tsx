import { CarFrontIcon } from "lucide-react";
import Image from "next/image";

export const inHomeCareServicesWeOffer = [
  {
    title: "Live-in/24 Hour Home Care",
    description: "24/7 assistance for seniors with monitoring, medical care, and companionship",
    icon: <Image src="/icons/247.svg" alt="Apartments" width={32} height={32} />,
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

export const inHomeCarechooseUs = [
  {
    title: "Affordable",
    description:
      "We work hard to connect you with caregivers and agencies that fit within your budget, without sacrificing the level of care you deserve.",
    icon: (
      <Image
        src="/icons/message-chat-circle.svg"
        width={24}
        height={24}
        alt="Affordable"
        style={{ width: "auto", height: "auto" }}
      />
    ),
    color: "bg-primary3",
    border: "#B6965A",
  },
  {
    title: "Experts",
    description:
      "Our providers are not only compassionate but also highly skilled and experienced in providing the care you need. e connect you with professionals who are trained to deliver expert in-home care.",
    icon: (
      <Image
        src="/icons/message-smile-circle.svg"
        width={24}
        height={24}
        alt="Affordable"
        style={{ width: "auto", height: "auto" }}
      />
    ),
    color: "bg-shade1",
    border: "#7A8D83",
  },
  {
    title: "Trustworthy",
    description:
      "Every caregiver and agency in our network has been carefully vetted to ensure they meet our high standards of integrity, reliability, and professionalism. ",
    icon: (
      <Image
        src="/icons/break-out-square.svg"
        width={24}
        height={24}
        alt="Affordable"
        style={{ width: "auto", height: "auto" }}
      />
    ),
    color: "#F5F5F5",
    border: "#595959",
  },
];
