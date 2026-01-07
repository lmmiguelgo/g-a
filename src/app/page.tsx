'use client';

import { Pic } from "@/components/ui/pic/pic";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



import { Hero } from "@/components/blocks/hero/hero";
import Services from "@/components/blocks/services/services";
import HomeTitle from "@/components/ui/homeTitle/homeTitle";
import GammysContent from "@/components/blocks/gammysContent/gammysContent";
import CtaGammys from "@/components/blocks/ctaGammys/ctaGammys";
import EdenGlobalContent from "@/components/blocks/edenGlobalContent/edenGlobalContent";


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
            end: "+=14000",
            trigger: "body",
          }
        });

        
      // Scroll animation Start

        tl.to('#main-background', {
          scale: 1,
          opacity: 0,
          display: 'none',
          ease: "circ",
        });

        tl.to('#logo-hero', {
          scale: 4,
          translateY: 200,
          opacity: 0,
          display: 'none',
          ease: "circ",
        }, "<");

        tl.to('#hero-arrow-logo', {
          opacity: 0,
          display: 'none',
          ease: "circ",
        }, "<");


        tl.to('#home-title-Services', {
          display: 'flex',
          opacity: 1,
          ease: "circ.in",
        });

        tl.to('#home-title-Services-h1', {
          fontSize: '8rem',
          translateX: 0,
        }, );

        tl.to('#home-subtitle-Services-h2', {
          opacity: 1,
        }, );

        tl.to('#home-subtitle-Services-h2', {
          
          color: '#ffffff',
        }, );

        tl.to('#home-title-Services', {
          display: 'none',
          opacity: 0,
        });

        

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

        tl.to('#services-section', {
          display: 'none',
          opacity: 0,
          ease: "circ.in",
        }, );

         tl.to('#home-title-Philanthropy', {
          display: 'flex',
          opacity: 1,
          ease: "circ.in",
        });

         

         tl.to('#home-title-Philanthropy-h1', {
          fontSize: '8rem',
          translateX: 0,
        }, );

        tl.to('#home-subtitle-Philanthropy-h2', {
          opacity: 1,
        }, );

        tl.to('#home-subtitle-Philanthropy-h2', {
          
          color: '#ffffff',
        }, );

        tl.to('#home-title-Philanthropy', {
          display: 'none',
          opacity: 0,
        });

        tl.to('#philanthropy-section', {
          display: 'block',
          opacity: 1,
          scale: 1,
          ease: "circ",
        });

        tl.to('#Philanthropy-USExample', {
          translateY: 0,
          opacity: 1,
          ease: "circ",
        });

        tl.to('#Philanthropy-UgandaExample', {
          translateY: 0,
          opacity: 1,
          ease: "circ",
        });

        tl.to('#Philanthropy-KenyaExample', {
          translateY: 0,
          opacity: 1,
          ease: "circ",
        });

         

        tl.to('#Philanthropy-ZambiaExample', {
          translateY: 0,
          opacity: 1,
          ease: "circ",
        });

        tl.to('#philanthropy-section-writing', {
          translateX: 0,
          opacity: 1,
          ease: "circ",
        });

        tl.to('#philanthropy-section-flags', {
          translateX: 0,
          opacity: 1,
          ease: "circ",
        } , "<");

        tl.to('#philanthropy-section', {
          duration: 2,
          scale: 1.2,
          translateX: 400,
          translateY: -80,
          ease: "circ",
        } );

        tl.to('#philanthropy-section', {
          duration: 4,
          translateY: -600,
          ease: "circ",
        } );

        tl.to('#philanthropy-section', {
          display: 'none',
          opacity: 0,
          ease: "circ",
        } );

        tl.to('#cta-gammys', {
          duration: 1.4,
          display : 'block',
          opacity: 1,
          translateY: 0,
          ease: "circ",
        }, "<" );

        tl.to('#cta-gammys', {
          duration : 1.4,
          scale: 1.04,
          ease: "circ",
        },);

        tl.to('#cta-gammys', {
          opacity: 0,
          display: 'none',
          ease: "circ",
        },);

        tl.to('#philanthropy-section-eden', {
          opacity: 1,
          display: 'block',
          ease: "circ",
        },);


       

        
      });





      // Mobile Version Animation
      mm.add("(max-width: 799px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            scrub: 0.5,
            start: "top top",
            end: "+=8000",
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

        tl.to('#home-title-Services', {
          display: 'flex',
          opacity: 1,
          ease: "circ.in",
        });

        tl.to('#home-title-Services-h1', {
          fontSize: '3.2rem',
          translateX: 0,
        }, );

        tl.to('#home-subtitle-Services-h2', {
          opacity: 1,
        }, );

        tl.to('#home-subtitle-Services-h2', {
          color: '#ffffff',
        }, );

        tl.to('#home-title-Services', {
          display: 'hidden',
          opacity: 0,
          ease: "circ.in",
        });


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

        tl.to('#services-section', {
          display: 'none',
          opacity: 0,
          ease: "circ.in",
        }, );

         tl.to('#home-title-Philanthropy', {
          display: 'flex',
          opacity: 1,
          ease: "circ.in",
        });

    

    
         tl.to('#home-title-Philanthropy-h1', {
          fontSize: '3.2rem',
          translateX: 0,
        }, );

        tl.to('#home-subtitle-Philanthropy-h2', {
          opacity: 1,
        }, );

        tl.to('#home-subtitle-Philanthropy-h2', {
          
          color: '#ffffff',
        }, );

        tl.to('#home-title-Philanthropy', {
          display: 'none',
          opacity: 0,
        });

//Philanthropy Start

         tl.to('#philanthropy-section', {
          display: 'block',
          opacity: 1,
          scale: 1,
          ease: "circ",
        });

         tl.to('#philanthropy-section-writing', {
          translateX: 0,
          opacity: 1,
          ease: "circ",
        });

        tl.to('#philanthropy-section', {
          duration: 8,
          translateY: -1800,
          ease: "circ",
        });

         tl.to('#Philanthropy-USExample', {
          
          translateX: 0,
          opacity: 1,
          ease: "circ",
        }, "<");
         tl.to('#Philanthropy-ZambiaExample', {
          delay: 0.1,
          translateX: 0,
          opacity: 1,
          ease: "circ",
        }, "<");
         tl.to('#Philanthropy-KenyaExample', {
          delay: 0.1,
          translateX: 0,
          opacity: 1,
          ease: "circ",
        }, "<");
         tl.to('#Philanthropy-UgandaExample', {
          delay: 0.1,
          translateX: 0,
          opacity: 1,
          ease: "circ",
        }, "<");

        tl.to('#philanthropy-section', {
          display: 'none',
          opacity: 0,
          ease: "circ",
        } );

        tl.to('#cta-gammys', {
          display : 'block',
          opacity: 1,
          translateY: 0,
          ease: "circ",
        }, "<" );



       
        


      });
    });

    return () => ctx.revert();
  }, [])





  return (
    <>




      <Hero />

      <HomeTitle Id="home-title-Services" IdTitle="home-title-Services-h1" IdSubtitle="home-subtitle-Services-h2" Light="Build Wealth" Bold="Secure Your Future">SERVICES</HomeTitle>

      <Services />

      <HomeTitle Id="home-title-Philanthropy" IdTitle="home-title-Philanthropy-h1" IdSubtitle="home-subtitle-Philanthropy-h2" Light="Empowering Lives" Bold="Saving the Future">PHILANTHROPY</HomeTitle>

      <GammysContent />
      <CtaGammys />

      <EdenGlobalContent />
      

      

      

      

    </>
  );
}
