"use client";

import { CheckCircle, Info } from 'lucide-react'
import { Pic } from '@/components/ui/pic/pic'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function CompanyPage() {
  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(() => {

    gsap.from("#company-page-header", {
       scrollTrigger: {
        trigger: "#company-page-header",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      translateX: -400,
      duration: 0.8,
      ease: "circ"
    });
   
    gsap.from("#company-content-s1-page", {
       scrollTrigger: {
        trigger: "#company-page-header",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      delay: 0.4,
      opacity: 0,

      translateX: 800,
      duration: 0.8,
      ease: "power3.out"
    });
    gsap.from("#company-content-s2-page", {
       scrollTrigger: {
        trigger: "#company-page-header",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      delay: 0.8,
      opacity: 0,
      translateX: 800,
      duration: 0.8,
      ease: "power3.out"
    });
    gsap.from("#company-content-s3-page", {

       scrollTrigger: {
        trigger: "#company-page-header",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      delay: 1.2,
      opacity: 0,
      translateX: 800,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from("#company-content-s4-page", {
      scrollTrigger: {
        trigger: "#company-page-header",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      
      delay: 1.6,
      opacity: 0,
      translateX: 800,
      duration: 0.8,
      ease: "power3.out"
    
    });
    gsap.from("#company-page-laura-pic", {
      
      scrollTrigger: {
        trigger: "#company-page-laura",
        start: "top 80%",
        toggleActions: "play none none none",

      },
      opacity: 0,
      translateX: -400,
      duration: 0.8,
    });
    gsap.from("#company-content-laura-bio", {
      
      scrollTrigger: {
        trigger: "#company-page-laura",
        start: "top 80%",
        toggleActions: "play none none none",

      },
      opacity: 0,
      translateX: 400,
      duration: 0.8,
    });
    gsap.from("#company-content-isaac-pic", {
      
      scrollTrigger: {
        trigger: "#company-page-isaac",
        start: "top 80%",
        toggleActions: "play none none none",

      },
      opacity: 0,
      translateX: 400,
      duration: 0.8,
    });
    gsap.from("#company-content-isaac-bio", {
      
      scrollTrigger: {
        trigger: "#company-page-isaac",
        start: "top 80%",
        toggleActions: "play none none none",

      },
      opacity: 0,
      translateX: -400,
      duration: 0.8,
    });

  }, [])

  return (
    <div id='company-content-page' className=" bg-background pb-24 pt-24 sm:pb-32 sm:pt-32 overflow-hidden n">
      {/* 1. COMPANY OVERVIEW SECTION */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div id='company-page-header' className="mx-auto max-w-7xl lg:mx-0 ">
          <h2 className="text-lg/7 font-bold text-accent-primary">The Company</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
            Gordon & Associates
          </p>
          <div className="mt-6 text-lg/8 text-foreground space-y-4">
            <p>
              <strong className="text-foreground">Gordon & Associates</strong> is a business management firm representing <strong className="text-foreground">elite entertainers, professional athletes, small business owners, executives, and high net worth individuals.</strong>
            </p>
            <p>
              <strong className="text-foreground">Gordon & Associates</ strong> has emerged as a premiere boutique firm with an <strong className="text-foreground">internationally renowned clientele.</strong> Clients include award winning <strong className="text-foreground">actors, comedians, recording artists, writers, directors, and producers.</strong> Clients have won multiple awards including <strong className="text-foreground">Oscars, Emmys, Golden Globes, Grammys, Image Awards, Stellar Awards, and Video Music Awards.</strong>
            </p>
            <p>
              <strong className="text-foreground">Gordon & Associates</strong> also provides <strong className="text-foreground">accounting, tax, executive mentoring, and small business consulting services.</strong> The firm helps clients <strong className="text-foreground">build wealth, protect assets, and secure their financial future.</strong> The firm’s comprehensive financial services include: <strong className="text-foreground">wealth management, small business development, management consulting, strategic budgeting, tax planning, and tax preparation.</strong>
            </p>
            <p>
              <strong className="text-foreground">Gordon & Associates</strong> is committed to conducting business at the highest standards of <strong className="text-foreground">integrity, professionalism, and excellence.</strong> To maintain that standard, the firm recruits and employs high caliber professional staff consisting of <strong className="text-foreground">CPAs, MBAs, MDivs, DMins, MBTs, and JDs</strong> with over <strong className="text-foreground">125 years of combined experience.</strong>
            </p>
            <p>
              <strong className="text-foreground">Gordon & Associates</strong> mission is to provide business management, accounting, and tax services at the highest level of professionalism and integrity, based on sound business practices and <strong className="text-foreground">biblical principles.</strong>
            </p>
          </div>
        </div>
        
        {/* Services Checklist */}
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-xl/7 font-bold text-foreground sm:grid-cols-2 md:flex lg:gap-x-10">
            <div id='company-content-s1-page' className="flex gap-x-3 items-center  ">
              <CheckCircle aria-hidden="true" className="mt-1 size-12 flex-none text-accent-primary" />
              Wealth Management
            </div>
            <div id='company-content-s2-page' className="flex gap-x-3 items-center  ">
              <CheckCircle aria-hidden="true" className="mt-1 size-12 flex-none text-accent-primary" />
              Tax Planning & Prep
            </div>
            <div id='company-content-s3-page' className="flex gap-x-3 items-center  ">
              <CheckCircle aria-hidden="true" className="mt-1 size-12 flex-none text-accent-primary" />
              Business Consulting
            </div>
            <div id='company-content-s4-page' className="flex gap-x-3 items-center  ">
              <CheckCircle aria-hidden="true" className="mt-1 size-12 flex-none text-accent-primary" />
              Executive Mentoring
            </div>
          </div>
          
        </div>
      </div>

      {/* DIVIDER */}
      <div  id='company-page-laura' className="mx-auto my-20 max-w-7xl border-t border-accent-secondary/20 px-6 lg:my-32 lg:px-8" />

      {/* 2. LEADERSHIP: LAURA W. GORDON (Left Image / Right Text) */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Laura's Image */}
          <div id='company-page-laura-pic' className="relative aspect-8/9 w-full lg:aspect-auto lg:h-full - ">
            <Image
              alt="Laura W. Gordon"
              src={Pic.LauraGordonFull}
              className="absolute inset-0 size-full rounded-2xl bg-second-bg object-cover object-top shadow-2xl"
            />
            {/* Floating Mission Quote overlapping the image */}
            <div className="absolute -bottom-12 left-6 right-6 rounded-xl bg-accent-primary p-6 shadow-lg sm:left-12 sm:right-auto sm:max-w-sm">
               <blockquote className="text-sm/6 font-medium text-white">
                "Our mission is to provide services at the highest level of professionalism and integrity, based on sound business practices and biblical principles."
              </blockquote>
            </div>
          </div>

          {/* Laura's Bio */}
          <div id='company-content-laura-bio' className="pt-10 lg:pt-0 lg:pl-8  ">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Laura W. Gordon</h2>
            <p className="mt-2 text-lg/7 font-bold text-accent-primary">Founder and CEO</p>
            
            <div className="mt-6 space-y-6 text-lg/7 text-foreground">
              <p>
                <strong className="text-foreground">Laura W. Gordon</strong> is a <strong className="text-foreground">Certified Public Accountant</strong> licensed in the state of California and is a <strong className="text-foreground">licensed minister</strong> in the marketplace.
              </p>
              <p>
                In 1992, Laura founded <strong className="text-foreground">Gordon & Associates, An Accountancy Corporation,</strong> a boutique business management firm which represents award winning comedians, actors, writers, directors, producers, recording artists, athletes, and industry executives. The firm also provides small business development, wealth management, tax planning and preparation services. It helps entertainers, professional athletes, small business owners, executives, and other high net worth individuals build wealth, protect assets, and secure their financial futures.
              </p>
              <p>
                Laura was named among <strong className="text-foreground">The Hollywood Reporter’s “Hollywood’s Top Business Managers”</strong> of 2018 through 2025 and <strong className="text-foreground">Variety’s “Business Manager Elite”</strong> of 2020 through 2023. For six years, Laura served on the board of <strong className="text-foreground">Women in Film, Los Angeles,</strong> an organization that advocates for and advances the careers of women working in the screen industries to achieve parity and transform culture.
              </p>
              <p>
                In 2003, Laura founded <strong className="text-foreground">Gammy’s House</strong> (inspired by her late grandmother), a corporate foundation of Gordon & Associates, dedicated to <strong className="text-foreground">educating, equipping, and empowering</strong> the next generation of Black entrepreneurs. It also supports education initiatives, scholarships, and micro-lending programs.
              </p>
              <p>
                As a third-generation entrepreneur, Laura’s life mission expands beyond servicing just her clients. In 2022, she partnered with other ministries to establish <strong className="text-foreground">Back to Eden Global</strong>, in which she employs her business skills and ministry gifts to develop economic opportunities for project sites in Africa and in the diaspora.
              </p>
               <p className="border-l-2 border-accent-primary pl-4 italic text-foreground/80">
                Laura holds a Bachelor of Arts in Economics from UCLA, a Masters of Divinity from The King’s University, and a Doctorate of Ministry from Jakes Divinity School. She has been married to her college sweetheart for 39 years and they have 3 adult children and 5 grandchildren.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" id='company-page-isaac'></div>
      {/* 3. LEADERSHIP: ISAAC M. GORDON (Text Left / Image Right) */}
      <div id='company-page-isaac'  className="mx-auto mt-32 max-w-7xl px-6 lg:px-8 ">
        <div  className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Isaac's Bio - Order 2 on mobile, Order 1 on Desktop */}
          <div id='company-content-isaac-bio' className="order-2 lg:order-1 lg:pr-8 - ">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Isaac M. Gordon</h2>
            <p className="mt-2 text-lg/7 font-bold text-accent-primary">Managing Partner</p>
            
            <div className="mt-6 space-y-6 text-lg/7 text-foreground">
              <p>
                <strong className="text-foreground">Isaac M. Gordon’s</strong> career has been shaped by a rare mix of athletic discipline, academic excellence, and a genuine commitment to helping people navigate their financial lives with confidence. After spending his collegiate years at UTEP as a <strong className="text-foreground">scholar‑athlete</strong> and playing professional basketball in Europe, he transitioned into the financial world with the same drive that defined him on the court. Today, he serves as <strong className="text-foreground">Managing Partner</strong> of Gordon & Associates, An Accountancy Corporation where he advises high‑profile and high‑net‑worth clients on everything from tax strategy to long‑term financial planning.
              </p>
              <p>
                 What truly sets Isaac apart is the personal side of his professional journey. One of the greatest joys of his career has been the chance to work alongside his mother, Laura—building a family legacy while serving the firm’s clients with integrity, accountability, and a shared commitment to excellence. Isaac brings a thoughtful, strategic approach to every relationship he manages, and his background as both a <strong className="text-foreground">CPA and an MBA graduate with First Class Honors</strong> further anchors the trust clients place in him.
              </p>
              <p>
                Beyond his work, Isaac remains dedicated to <strong className="text-foreground">mentorship and community service</strong>, continuing to invest in others just as mentors invested in him. His story is one of growth, gratitude, and a steady belief in doing the right thing—for clients, for family, and for the next generation coming up behind him.
              </p>
              <p className="border-l-2 border-accent-primary pl-4 italic text-foreground/80">
                Isaac holds a Bachelor’s degree in Finance from the University of Texas at El Paso UTEP, an MBA in International Business from Griffith College, and is a licensed CPA. He was recently married to his wife, Kristen, who brings tremendous joy, love, and support into every area of his life.
              </p>
              
            </div>
          </div>

          {/* Isaac's Image - Order 1 on mobile, Order 2 on Desktop */}
          <div id='company-content-isaac-pic' className="order-1 relative aspect-8/9 w-full lg:order-2 lg:aspect-auto lg:h-full  ">
            <Image
              alt="Isaac M. Gordon"
              src={Pic.IsaacGordonFull}
              className="absolute inset-0 size-full rounded-2xl bg-second-bg object-cover shadow-2xl"
            />
            {/* Floating Mission Quote overlapping the image */}
            <div className="absolute -bottom-12 left-6 right-6 rounded-xl bg-accent-primary p-6 shadow-lg sm:left-12 sm:right-auto sm:max-w-sm">
               <blockquote className="text-sm/6 font-medium text-white">
                "His story is one of growth, gratitude, and a steady belief in doing the right thing—for clients, for family, and for the next generation."
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}