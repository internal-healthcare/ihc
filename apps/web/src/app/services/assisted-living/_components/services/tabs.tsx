import { InfoCard } from "@/app/services/in-home-care/_components/services";
import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent, CardHeader } from "@repo/ui/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs";
import { cn } from "@repo/ui/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  none?: string;
};

const services = [
  {
    title: "Assisted Living Services",
    icon: "/icons/home-smile.svg",
    value: "assisted",
    heading: {
      title: "Personalized and Assisted Support for Daily Living",
      description:
        "Assisted living is ideal for seniors who value independence but need help with daily activities such as bathing, dressing, medication management, or meal preparation.",
      image: "/images/assisted-living.jpg",
      color: "#B6965A",
    },
    body: {
      title: "Services Our partner Assisted Living facilities offer",
      list: [
        {
          title: "24/7 Care and Supervision",
          description:
            "Trained staff are available around the clock to ensure safety and well-being.",
          icon: (
            <Image
              src="/icons/247.svg"
              alt="Apartments"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Customizable Care Plans",
          description: "Services tailored to each resident’s unique needs and preferences.",
          icon: (
            <Image
              src="/icons/health-check.svg"
              alt="Care Plans"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Engaging Activities",
          description:
            "Social, recreational, and wellness programs designed to promote an active lifestyle.",
          icon: (
            <Image
              src="/icons/recreation.svg"
              alt="Activities"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Private or Shared Apartments",
          description: "Comfortable living spaces with housekeeping and laundry services included.",
          icon: (
            <Image
              src="/icons/home-smile-02.svg"
              alt="Apartments"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Nutritious Meals",
          description: "Chef-prepared, dietitian-approved meals served in a community dining area.",
          icon: (
            <Image
              src="/icons/meal.svg"
              alt="Meal Preparation"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Transportation Services",
          description:
            "Scheduled transportation for medical appointments, shopping, and social events.",
          icon: (
            <Image
              src="/icons/transport.svg"
              alt="Transportation Services"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
      ],
    },
  },
  {
    title: "Independent Living Services",
    icon: "/icons/user-03.svg",
    value: "independent",
    heading: {
      title: "Independent Living - Freedom and Community for Seniors",
      description:
        "For seniors who are self-sufficient but desire a maintenance-free lifestyle, independent living is the perfect choice.",
      image: "/images/independent-living.jpg",
      color: "bg-brand-primary3",
    },
    body: {
      title: "Services Our partner Independent Living services offer",
      list: [
        {
          title: "Convenient Living Spaces",
          description: "Apartments or cottages designed for comfort and accessibility.",
          icon: (
            <Image
              src="/icons/building-08.svg"
              alt="Convenient Living Spaces"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "No Chores or Maintenance",
          description: " Enjoy freedom from home upkeep, yard work, and daily chores.",
          icon: (
            <Image
              src="/icons/image-user-check.svg"
              alt="No Chores or Maintenance"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Social Connections",
          description:
            "A vibrant community with clubs, events, and activities to foster friendships.",
          icon: (
            <Image src="/icons/recreation.svg" alt="Social Connections" width={32} height={32} />
          ),
        },
        {
          title: "Wellness Amenities",
          description:
            "Access to fitness centers, walking trails, and wellness programs to support a healthy lifestyle.",
          icon: (
            <Image
              src="/icons/personal-care.svg"
              alt="Wellness Amenities"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Flexible Dining Options",
          description: "Restaurant-style dining with customizable meal plans.",
          icon: (
            <Image
              src="/icons/meal.svg"
              alt="Flexible Dining Options"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "On-Site Concierge Services",
          description: "Assistance with reservations, event coordination, and personal requests.",
          icon: (
            <Image
              src="/icons/errands.svg"
              alt="On-Site Concierge Services"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
      ],
    },
  },
  {
    title: "Memory Care",
    icon: "/icons/hugeicons_permanent-job.svg",
    value: "memory",
    heading: {
      title: "Memory Care - Support for Dementia and Alzheimer’s",
      description:
        "Seniors living with memory-related conditions deserve compassionate care in a safe, structured environment.",
      image: "/images/memory-care.jpg",
      color: "bg-black",
    },
    body: {
      title: "Services Our partner Memory Care Services offer",
      list: [
        {
          title: "Expertly Trained Staff",
          description: "Caregivers specialized in dementia and Alzheimer’s care.",
          icon: (
            <Image
              src="/icons/expert-trained.svg"
              alt="Expertly Trained Staff"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Secure Environment",
          description: "Features like secured entrances and monitored spaces to prevent wandering.",
          icon: (
            <Image
              src="/icons/building-07.svg"
              alt="Secure Environment"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Cognitive Enrichment Programs",
          description:
            "Activities like music therapy, puzzles, and reminiscence therapy to stimulate memory and improve quality of life.",
          icon: (
            <Image
              src="/icons/Desktop_Tower.svg"
              alt="Cognitive Enrichment Programs"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Individualized Care Plans",
          description: "Support tailored to the unique challenges of each resident. ",
          icon: (
            <Image
              src="/icons/file-heart-02.svg"
              alt="Individualized Care Plans"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "24/7 Monitoring and Assistance",
          description:
            "Round-the-clock care to address residents' changing needs and provide immediate help.",
          icon: (
            <Image
              src="/icons/247.svg"
              alt="24/7 Monitoring and Assistance"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Family Support",
          description:
            "Education and resources to help families navigate the challenges of memory loss.",
          icon: (
            <Image
              src="/icons/Users_Group.svg"
              alt="Family Support"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
      ],
    },
  },
  {
    title: "Senior Apartments",
    icon: "/icons/building-07.svg",
    value: "senior",
    heading: {
      title: "Affordable Senior Living Apartments",
      description:
        "Senior apartments offer an affordable and convenient housing option for active seniors who seek a supportive community without intensive care services.",
      image: "/images/senior-apartments.jpg",
      color: "#7A8D83",
    },
    body: {
      title: "Services Our partner facilities offer",
      list: [
        {
          title: "Age-Friendly Design",
          description:
            "Apartments with features like grab bars, step-free showers, and accessible layouts.",
          icon: (
            <Image
              src="/icons/building-06.svg"
              alt="Age-Friendly Design"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Affordable Rent Options",
          description: "Subsidized or market-rate options to fit various budgets.",
          icon: (
            <Image
              src="/icons/currency-dollar-circle.svg"
              alt="Affordable Rent Options"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Community Amenities",
          description:
            "Shared spaces like libraries, community rooms, and gardens for social engagement.",
          icon: (
            <Image
              src="/icons/book-open-02.svg"
              alt="Activities"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Proximity to Services",
          description: "Convenient access to shopping, healthcare, and public transportation.",
          icon: (
            <Image
              src="/icons/gift-02.svg"
              alt="Proximity to Services"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "Recreational Activities",
          description:
            "Organized events, fitness classes, and hobby groups to promote an active lifestyle.",
          icon: (
            <Image
              src="/icons/recreation.svg"
              alt="Recreational Activities"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
        {
          title: "On-Site Assistance",
          description:
            "Staff available for maintenance, security, and general support to enhance peace of mind.",
          icon: (
            <Image
              src="/icons/Moving_Desk.svg"
              alt="On-Site Assistance"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          ),
        },
      ],
    },
  },
];

export default function ServiceTabs({}: Props) {
  return (
    <div className="container">
      <Tabs defaultValue="assisted">
        <Card className="rounded-[57px] overflow-hidden">
          <CardHeader className="p-0 m-0 space-y-0 py-[1.5rem]">
            <TabsList className="flex w-full justify-center items-center gap-4 bg-transparent my-[1.5rem]">
              {services.map((service, index) => (
                <TabsTrigger
                  value={service.value}
                  key={index}
                  className="data-[state=active]:bg-[#F0F0F0] rounded-[500px] h-[4.375rem] text-[1.25rem] font-semibold py-4 px-8 flex items-center gap-4 shadow-none"
                >
                  <Image width={24} height={24} src={service.icon} alt={service.title} style={{ width: "auto", height: "auto" }} />
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </CardHeader>
          <CardContent className="p-0">
            {services.map((service, index) => (
              <TabsContent
                value={service.value}
                key={index}
                className="bg-[#F5F5F5] px-[5.625rem] pt-[5.625rem]"
              >
                <div
                  className={cn(
                    "flex gap-4 items-center p-[2.188rem] rounded-[30px]",
                    service.heading.color.startsWith("bg-")
                      ? service.heading.color
                      : `bg-[${service.heading?.color}]`
                  )}
                >
                  <div className="space-y-4 w-2/3 pl-4">
                    <h3 className="font-clash text-[3.125rem] leading-[3.844rem] font-medium text-white">
                      {service.heading.title}
                    </h3>
                    <p className="text-[#FFFDFA] max-w-xl">{service.heading.description}</p>
                    <Button
                      className="bg-[#FFFDFA] text-[#475467] text-[1rem] font-normal px-6 py-5"
                      size="lg"
                    >
                      Submit a Request
                    </Button>
                  </div>
                  <div className="relative min-h-[20rem] w-1/3 rounded-[40px] overflow-hidden border-white border-[9px]">
                    <Image
                      src={service.heading?.image ?? ""}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-[#141414] font-clash text-[1.75rem] font-medium my-[50px]">
                  {service.body?.title}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-8 justify-center pb-[6rem]">
                  {service.body?.list.map((service, index) => (
                    <InfoCard
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      desc={service.description}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}
