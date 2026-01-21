"use client";

import Image from "next/image"
import Link from "next/link"
import { Pic } from "@/components/ui/pic/pic"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function PhilanthropyPage() {

   gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(() => {

    gsap.from("#Philanthropy-USExample-page", {
       scrollTrigger: {
        trigger: "#philanthropy-page",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      translateY: 800,
      duration: 0.8,
      ease: "circ"
    });
    gsap.from("#Philanthropy-UgandaExample-page", {
       scrollTrigger: {
        trigger: "#philanthropy-page",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      delay: 0.4,
      opacity: 0,
      translateY: -800,
      duration: 0.8,
      ease: "circ"
    });
    gsap.from("#Philanthropy-KenyaExample-page", {
       scrollTrigger: {
        trigger: "#philanthropy-page",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      delay: 0.8,
      opacity: 0,
      translateY: 800,
      duration: 0.8,
      ease: "circ"
    });
    gsap.from("#Philanthropy-ZambiaExample-page", {
       scrollTrigger: {
        trigger: "#philanthropy-page",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      delay: 1.2,
      opacity: 0,
      translateY: -800,
      duration: 0.8,
      ease: "circ"
    });


    
    gsap.from("#Philanthropy-USExample", {
       scrollTrigger: {
        trigger: "#philanthropy-page-eden",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      translateY: 800,
      duration: 0.8,
      ease: "circ"
    });
    gsap.from("#Philanthropy-UgandaExample", {
       scrollTrigger: {
        trigger: "#philanthropy-page-eden",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      delay: 0.4,
      opacity: 0,
      translateY: -800,
      duration: 0.8,
      ease: "circ"
    });
    gsap.from("#Philanthropy-KenyaExample", {
       scrollTrigger: {
        trigger: "#philanthropy-page-eden",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      delay: 0.8,
      opacity: 0,
      translateY: 800,
      duration: 0.8,
      ease: "circ"
    });
    gsap.from("#Philanthropy-ZambiaExample", {
       scrollTrigger: {
        trigger: "#philanthropy-page-eden",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      delay: 1.2,
      opacity: 0,
      translateY: -800,
      duration: 0.8,
      ease: "circ"
    });
    
   
   

  }, [])
    return (
       <>

       <section id="philanthropy-page" className=" bg-background py-24 sm:py-32 overflow-hidden ">
             <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
               <div className="max-w-4xl">
                 <p className="text-xl/7 font-bold text-accent-primary">Philanthropy</p>
                 <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
                   <span className="font-light">Empowering Lives</span> Saving the Future
                 </h1>
                 
               </div>
               <section className="mt- lg:mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8">
                 <div id="philanthropy-page-writing" className="lg:pr-8 ">
       
                   <Image className="w-120 pt-20" src={Pic.GammysHouse} alt="Gammy's House" />
       
                   <p className="mt-6 text-lg/7 text-foreground">
                     Founded in 2003 by Laura Gordon and inspired by her late grandmother. Gammy’s House is a corporate foundation of Gordon & Associates. It is
                       a philanthropic organization dedicated to educating, equipping, and empowering the next generation of Black entrepreneurs.
                        Gammy’s House operates as a component fund of the California Community Foundation.
                   </p>
                   <p className="mt-8 text-lg/7 text-foreground">
                     Gammy’s House has invested in global initiatives that foster equity in education and entrepreneurship, including:
                   </p>
                 </div>
                 <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                   <div className="-mx-8 hidden lg:grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8  ">
                     <div id="Philanthropy-USExample-page" className="aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 ">
                       <Image
                         
                         alt=""
                         src={Pic.USExample}
                         className="block size-full object-cover"
                       />
                     </div>
                     <div id="Philanthropy-ZambiaExample-page" className="-mt-8 aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 lg:-mt-40 ">
                       <Image
                         alt=""
                         src={Pic.ZambiaExample}
                         className="block size-full object-cover"
                       />
                     </div>
                     <div id="Philanthropy-KenyaExample-page" className="aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 ">
                       <Image
                         alt=""
                         src={Pic.KenyaExample}
                         className="block size-full object-cover"
                       />
                     </div>
                     <div id="Philanthropy-UgandaExample-page" className="-mt-8 aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 lg:-mt-40 ">
                       <Image
                         alt=""
                         src={Pic.UgandaExample}
                         className="block size-full object-cover"
                       />
                     </div>
                   </div>
                 </div>
                 <div id="philanthropy-page-flags" className="max-lg:mt-16 lg:col-span-1  ">
                  
                   <hr className=" border-t border-second-bg" />
                   <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                     <div className="flex flex-col gap-y-2 border-b border-dotted border-second-bg pb-4">
                       <dt className="text-md/6 text-foreground">Building water wells in Zambia.</dt>
                       <Image className="rounded-lg border-4 border-foreground/20 aspect-video" src={Pic.ZambiaFlag} alt="Zambia Flag" />
                     </div>
                     <div className="flex flex-col gap-y-2 border-b border-dotted border-second-bg pb-4">
                       <dt className="text-md/6 text-foreground">Building schools in Kenya.</dt>
                       <Image className="rounded-lg border-4 border-foreground/20 aspect-video" src={Pic.KenyaFlag} alt="Kenya Flag" />
                     </div>
                     <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-second-bg max-sm:pb-4">
                       <dt className="text-md/6 text-foreground">Providing micro-lending and scholarships in the United States.</dt>
                       <Image className="rounded-lg border-4 border-foreground/20 aspect-video" src={Pic.UnitedStatesFlag} alt="United States Flag" />
                     </div>
                     <div className="flex flex-col gap-y-2">
                       <dt className="text-md/6 text-foreground">Empowering business owners in Uganda.</dt>
                       <Image className="rounded-lg border-4 border-foreground/20 aspect-video" src={Pic.UgandaFlag} alt="Uganda Flag" />
                     </div>
                   </dl>
                 </div>
               </section>
             </div>
           </section>



















        <div id="cta-gammys" className="h-140  flex flex-col items-center justify-center ">
            <div id="cta-gammys-container" className="mx-auto max-w-7xl w-full py-24 sm:px-6 sm:py-32 lg:px-8 p-4">
                <div className="relative isolate overflow-hidden bg-second-bg h-200 lg:h-auto px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="var(--accent-primary)" />
                                <stop offset={1} stopColor="var(--accent-secondary)" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-xl  lg:mx-0 lg:flex-auto lg:py-32 text-left">
                        <h2 className="text-3xl font-light tracking-tight text-balance sm:text-4xl">
                            Make a secure, <br />  <span className="font-semibold">tax-deductible donation online</span>
                        </h2>
                        <p className="mt-6 text-lg/8 text-pretty text-foreground text-start">
                            Click on the “Donate Now” link below.


                        </p>
                        <div className="mt-10 flex items-center  gap-x-6 justify-start">
                            <Link
                                href="https://www.calfund.org/funds/gammys-house/"
                                className="rounded-md bg-accent-primary px-3.5 py-2.5 text-sm font-semibold inset-ring inset-ring-white/5 hover:bg-accent-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white animate-jump animate-once animate-delay-2000 animate-duration-2000 "
                            >
                                {' '}
                                Donate Now{' '}
                            </Link>
                            <Link href="/contact" className="text-sm/6 font-semibold hover:text-white">
                                Contact us
                                <span className="pl-2" aria-hidden="true">→</span>
                            </Link>
                        </div>
                     
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-0">
                        <Image
                            alt="Gammy's House Logo Solo"
                            src={Pic.GammysSingle}
                            width={1824}
                            height={1080}
                            className="absolute top-20 left-10 w-70 max-w-none rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>




         <section id="philanthropy-page-eden" className=" overflow-hidden bg-background py-24 sm:py-32 ">
              <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                  <p className="text-xl/7 font-bold text-accent-primary">Philanthropy</p>
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
                    <span className="font-light">Empowering Lives</span> Saving the Future
                  </h1>
        
                </div>
                <section className="mt- lg:mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8 ">
                  <div id="philanthropy-page-writing-eden" className="lg:pr-8  ">
        
                    <div className="flex items-center justify-center">
                      <h1 className="font-secondary font-bold text-4xl">BACK TO <br /> EDEN GLOBAL</h1>
                      <Image className="w-60 pt-20" src={Pic.EdenGlobal} alt="Eden Global" />
        
                    </div>
        
                    <p className="mt-6 text-lg/7 text-foreground">
                      The mission of Back to Eden Global is to address the need for economic empowerment, using entrepreneurial opportunities on the continent of Africa, and throughout the diaspora. <br />
        
                      It employs educational, agricultural, and ecological stewardship initiatives to activate agency and develop entrepreneurial opportunities at project sites in Uganda, Zambia, Ghana, Nigeria, and the USA. <br />
        
        
        
                    </p>
        
                  </div>
                  <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                    <div className="-mx-8  grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8 hidden lg:grid ">
                      <div id="Philanthropy-USExample" className="aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 ">
                        <Image
        
                          alt=""
                          src={Pic.USExample}
                          className="block size-full object-cover"
                        />
                      </div>
                      <div id="Philanthropy-ZambiaExample" className="-mt-8 aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 lg:-mt-40 ">
                        <Image
                          alt=""
                          src={Pic.ZambiaExample}
                          className="block size-full object-cover"
                        />
                      </div>
                      <div id="Philanthropy-KenyaExample" className="aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 ">
                        <Image
                          alt=""
                          src={Pic.KenyaExample}
                          className="block size-full object-cover"
                        />
                      </div>
                      <div id="Philanthropy-UgandaExample" className="-mt-8 aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 lg:-mt-40 ">
                        <Image
                          alt=""
                          src={Pic.UgandaExample}
                          className="block size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
        
                </section>
              </div>
            </section>


             <div id="cta-eden-global" className="h-140  flex flex-col items-center justify-center ">
            <div className="mx-auto max-w-7xl w-full py-24 sm:px-6 sm:py-32 lg:px-8 p-4">
                <div className="relative isolate overflow-hidden bg-second-bg px-6 h-200 lg:h-auto pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute top-1/2 left-1/2 -z-10 w-5xl h-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#eden-global-gradient)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="eden-global-gradient">
                                <stop stopColor="var(--accent-primary)" />
                                <stop offset={1} stopColor="var(--accent-secondary)" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-xl  lg:mx-0 lg:flex-auto lg:py-32 text-left">
                        <h2 className="text-3xl font-light tracking-tight text-balance sm:text-4xl">
                            Make a secure, <br />  <span className="font-semibold">tax-deductible donation online</span>
                        </h2>
                        <p className="mt-6 text-lg/8 text-pretty text-foreground text-start">
                            Click on the “Donate Now” link below.


                        </p>
                        <div className="mt-10 flex items-center  gap-x-6 justify-start">
                            <Link
                                href="https://www.calfund.org/funds/back-to-eden-global/"
                                className="rounded-md bg-accent-primary px-3.5 py-2.5 text-sm font-semibold inset-ring inset-ring-white/5 hover:bg-accent-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white animate-jump animate-once animate-delay-2000 animate-duration-2000 "
                            >
                                {' '}
                                Donate Now{' '}
                            </Link>
                            <Link href="/contact" className="text-sm/6 font-semibold hover:text-white">
                                Contact us
                                <span className="pl-2" aria-hidden="true">→</span>
                            </Link>
                        </div>
                       
                    </div>
                     <div className="relative mt-16 h-80 lg:mt-0">
                        <Image
                            alt="Gammy's House Logo Solo"
                            src={Pic.EdenGlobal}
                            width={1824}
                            height={1080}
                            className="absolute top-20 left-10 w-70 max-w-none rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}