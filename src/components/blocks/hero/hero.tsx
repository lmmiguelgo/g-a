import { useEffect } from "react"
import { Pic } from "@/components/ui/pic/pic"
import Image from "next/image"
import { gsap } from "gsap"
import { ChevronDown } from "lucide-react"

import HeroBg from "@/components/ui/hero-bg/hero-bg"


export const Hero = () => {

  //Entrance Animation

  useEffect(() => {
    //Registring ScrollTrigger Plugin
    let ctx = gsap.context(() => {
      gsap.from('#logo-hero', {
        duration: 2,
        ease: "expo.out",
        y: 400,
        opacity: 0,
      });
    });
    return () => ctx.revert();
  }, [])





  return (
    <>
    <HeroBg />
    <div id="logo-hero" className="fixed flex flex-col items-center justify-center w-full h-full">

      
      <Image className=" pointer-events-none px-4 lg:px-0 lg:max-w-2xl" src={Pic.LogoWide} alt="Wide Logo" />
      <ChevronDown className="animate-fade-down animate-infinite animate-duration-1800 animate-delay-1800 text-white mt-4" size={32} />

    </div>
    </>
  )
}
