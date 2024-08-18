"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function JoinUs() {
  return (
    <div className="mt-10 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2"
      >
        
        <span>Join Us{`  ->`}</span>
      </HoverBorderGradient>
    </div>
  );
};
