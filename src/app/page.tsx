'use client';

import { Pic } from "@/components/ui/pic/pic";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



import { Hero } from "@/components/blocks/hero/hero";
import Services from "@/components/blocks/services/services";
import PhilanthropyContent from "@/components/blocks/philanthropyContent/philanthropyContent";


export default function Home() {

  // GSAP Animation

  useEffect(() => {
    //Registring ScrollTrigger Plugin
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();



      // Desktop Version Animation
      mm.add("(min-width: 800px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            scrub: 1,
            start: "top top",
            end: "+=4000",
            trigger: "body",
          }
        });

        

        tl.to('#main-background', {
          scale: 1,
          opacity: 0,
          ease: "circ",
        });

        tl.to('#logo-hero', {
          scale: 4,
          translateY: 200,
          opacity: 0,
          ease: "circ",
        }, "<");
        tl.to('#hero-arrow-logo', {
          opacity: 0,
          ease: "circ",
        }, "<");

        tl.to('#services-section', {
          opacity: 1,
          scale: 1,
          ease: "circ",
        });

        tl.to('#home-service1', {
          translateX: 0,
          opacity: 1,
          ease: "circ",
        });

        tl.to('#home-service2', {
          translateX: 0,
          opacity: 1,
          ease: "circ",
        });

        tl.to('#services-section', {
          duration: 1.8,
          translateY: -680,
          scale: 1.2,
          ease: "circ.inOut",
        });
      });





      // Mobile Version Animation
      mm.add("(max-width: 799px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            scrub: 0.5,
            start: "top top",
            end: "+=4000",
            trigger: "body",
          }
        });

       

        tl.to('#main-background', {
          scale: 1,
          opacity: 0,
          ease: "circ",
        });
       

        tl.to('#logo-hero', {
          scale: 4,
          opacity: 0,
          ease: "circ",
        }, "<");

        tl.to('#services-section', {
          opacity: 1,
          scale: 1,
          ease: "circ.out",
          
        });

        tl.to('#home-service1', {
          translateX: 0,
          opacity: 1,
          
        });

        tl.to('#home-service2', {
          translateX: 0,
          opacity: 1,
          
        });

        tl.to('#services-section', {
          duration: 4,
          translateY: -2200,
          
        }, "<");

        tl.to('#home-service3', {
          translateX: 0,
          opacity: 1,
          
          delay: 0.4,
        }, "<");

        tl.to('#home-service4', {
          translateX: 0,
          opacity: 1,
          
          delay: 0.6,
        }, "<");

        tl.to('#home-service5', {
          translateX: 0,
          opacity: 1,
          
          delay: 0.8,
        }, "<");
      });
    });

    return () => ctx.revert();
  }, [])





  return (
    <>




      <Hero />
      <Services />
      

    </>
  );
}
