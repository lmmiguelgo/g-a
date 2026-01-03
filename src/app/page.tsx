'use client';

import { Pic } from "@/components/ui/pic/pic";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { Hero } from "@/components/blocks/hero/hero";


export default function Home() {

  // GSAP Animation

  useEffect(() => {
        //Registring ScrollTrigger Plugin
        gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                start: "top top",
                end: "+=1000",
                trigger: "body",
            }
        });

        


        tl.to('#main-background', {
            scale: 1,
            opacity: 0,
            ease: "circ",

        }, );

       
        tl.to('#logo-hero', {
            scale: 4,
            opacity: 0,
            ease: "circ",

        }, "<");

         

        



    }, [])





  return (
    <>


    <div  className="fixed w-full h-screen overflow-hidden ">
      <Image id="main-background" className="w-full h-full scale-128 opacity-32 pointer-events-none object-cover " src={Pic.Background} alt="Background" />

      
    </div>

    <Hero />

    </>
  );
}
