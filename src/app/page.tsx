"use client";
import { Departments } from "@/components/Departments";
import { FeaturesSectionDemo } from "@/components/Events";
import Footer from "@/components/Footer";
import { HeroScrollDemo } from "@/components/Hero";
import { JoinUs } from "@/components/JoinUs";
import { NavbarDemo } from "@/components/Navbar";
import ReverseInfiniteScroll from "@/components/ReverseScrollingImages";
import ScrollingImages from "@/components/ScrollingImages";
import Image from "next/image";

import styled from 'styled-components';


const testimonials = [
  'Testimonial 1',
  'Testimonial 2',
  'Testimonial 3',
  // Add more testimonials as needed
];

export default function Home() {
  return (
    <main className="">
      <NavbarDemo />


      {/* hero */}
      <div className="container">
        <HeroScrollDemo />
      </div>

      {/* scroll */}
      <div className=" my-32">
        <div className="text-4xl md:text-xl lg:text-xl max-w-7xl mx-auto text-center mt-2 mb-12 relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 via-neutral-100 to-neutral-50 dark:from-neutral-800 dark:via-white dark:to-white ">
          The technologies we utilize and adore

        </div>
        <ScrollingImages />
      </div>

      {/* events */}
      <div className="container">
        <FeaturesSectionDemo />
      </div>

      {/* departments */}
      <div className="container">
        <Departments />
      </div>

      {/* final join us button */}
      <div className="container">
        <div className="px-8">
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white dark:text-white">
            You scrolled till here {'?'}
          </h4>

          <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            You might as well apply {`:)`}
          </p>
        </div>
        <JoinUs />
      </div>

      <br />
      {/* footer */}
      <footer className="container">
        <Footer />

      </footer>
    </main>
  );
}
