"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-xs mx-auto z-50", className)}
        >

            <Menu setActive={setActive}>
                <div className="flex">
                    <Image src={'https://cyscomvit.com/assets/images/logo.png'} alt="logo" width={30} height={30} />


                </div>
                <MenuItem setActive={setActive} active={active} item="CYSCOM">
                </MenuItem>
                <div className="flex">
                    <MenuItem setActive={setActive} active={active} item="Departments">

                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Join">

                    </MenuItem>

                </div>
            </Menu>
        </div>
    );
}
