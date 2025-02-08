import React from "react";

export default function CBadge({ children }: { children: React.ReactNode }) {
  return (
    <p className="bg-[#F9FAFB] border border-[#E4E7EC] rounded-full p-2 px-4 text-xs uppercase text-[#344054] ring-1 ring-offset-2 ring-[#E4E7EC] inline-block font-medium">
      {children}
    </p>
  );
}
