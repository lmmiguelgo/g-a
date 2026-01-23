"use client";

import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Pic } from "@/components/ui/pic/pic";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import "@/components/blocks/heroStatic/hero.css";



export const HeroStatic = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen  overflow-hidden w-screen">
      <Image id="mobile-background" src={Pic.BackgroundMobile} alt="Background" className="absolute -z-2 object-cover w-screen h-screen" />
      <div className="absolute -z-1 object-cover w-screen h-screen flex items-end justify-end">
        <div className="absolute  h-1/3 w-full bg-linear-to-t from-background to-transparent"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 p-2 ">
        <Image id='hero-logo-image-static' src={Pic.LogoWide} alt="Wide Logo" />
      <ChevronDown  className="animate-fade-down animate-infinite animate-duration-1800 animate-delay-400 text-white mt-4 " size={32} />
      </div>
    </section>
  )
}
