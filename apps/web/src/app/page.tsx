import MainNav from "@repo/ui/components/main-nav";
import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-500">
      <p className="">Hello</p>
      <Button variant="destructive">Button</Button>
    </div>
  );
}
