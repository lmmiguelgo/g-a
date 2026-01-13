import { useEffect } from "react"
import { Pic } from "@/components/ui/pic/pic"
import Image from "next/image"
import { gsap } from "gsap"
import { ChevronDown } from "lucide-react"
import "@/components/blocks/hero/hero.css"

import HeroBg from "@/components/ui/hero-bg/hero-bg"


export const Hero = () => {

  //Entrance Animation

  useEffect(() => {
    //Registring ScrollTrigger Plugin
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      //Desktop Version animation

      mm.add("(min-width: 800px)", () => {

        gsap.from('#main-background', {
          ease: "circ",
          duration: 8,
          scale: 1,
        });


        gsap.from('#logo-hero', {
          duration: 1.4,
          ease: "expo.out",
          y: 400,
          opacity: 0,
        });

      })

      //Mobile Version animation

      mm.add("(max-width: 799px)", () => {

        gsap.from('#main-background', {
          delay: 0.4,
          duration: 200,
          translateX: 1000,
          
        });


        gsap.from('#logo-hero', {
          duration: 1.4,
          ease: "expo.out",
          y: 400,
          opacity: 0,
        });

      });

    });
    return () => ctx.revert();
  }, [])





  return (
    <>
      <HeroBg />
      <div id="logo-hero" className="fixed flex flex-col items-center justify-center w-full h-full">


        <Image id="hero-logo-image" className=" pointer-events-none px-4 lg:px-0 lg:max-w-2xl " src={Pic.LogoWide} alt="Wide Logo" loading="eager" />
        <ChevronDown id="hero-arrow-logo" className="animate-fade-down animate-infinite animate-duration-1800 animate-delay-1800 text-white mt-4" size={32} />

      </div>
    </>
  )
}
