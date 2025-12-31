'use client';

import { Pic } from "@/components/ui/pic/pic";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Home() {

  // GSAP Animation

  useEffect(() => {
        //Registring ScrollTrigger Plugin
        gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                start: "top top",
                end: "+=2000",
                trigger: "body",
            }
        });

        


        tl.to('#main-background', {
            scale: 1,
            opacity: 0,
            ease: "circ",

        }, "<");

         

        



    }, [])





  return (
    <>


    <div  className="fixed w-full h-screen overflow-hidden ">
      <Image id="main-background" className="w-full h-full scale-125 opacity-88 pointer-events-none  " src={Pic.Background} alt="Background" />

      
    </div>


    </>
  );
}
