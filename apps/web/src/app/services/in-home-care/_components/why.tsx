import { Button } from "@repo/ui/components/ui/button";
import React from "react";
import styles from "./why.module.css";
import { cn } from "@repo/ui/lib/utils";

export default function Why() {
  return (
    <div className="container py-[5rem] bg-black rounded-[37px] p-[120px]">
      <div className={cn(styles.content)}>
        <div className="text-white">
          <h3>We offer the best In-home care Services</h3>
          <p>
            A compassionate and customizable approach to caregiving, allowing seniors to receive the
            help they need without sacrificing their independence or comfort.
          </p>
          <Button>Get Started</Button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
