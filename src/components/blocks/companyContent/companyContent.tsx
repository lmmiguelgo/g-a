import { CheckCircle, Info } from 'lucide-react'
import { Pic } from '@/components/ui/pic/pic'
import Image from 'next/image'

export default function CompanyContent() {
  return (
    <div id='company-content' className="fixed hidden opacity-0 w-full bg-background pb-24 pt-24 sm:pb-32 sm:pt-32">
      {/* 1. COMPANY OVERVIEW SECTION */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div id='company-content-header' className="mx-auto max-w-7xl lg:mx-0 -translate-x-400">
          <h2 className="text-lg/7 font-bold text-accent-primary">The Company</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
            Gordon & Associates
          </p>
          <div className="mt-6 text-lg/8 text-foreground space-y-4">
            <p>
              Gordon & Associates is a business management firm representing elite entertainers, professional athletes, small business owners, executives, and high net worth individuals.
            </p>
            <p>
              Gordon & Associates has emerged as a premiere boutique firm with an internationally renowned clientele. Clients include award winning actors, comedians, recording artists, writers, directors, and producers. Clients have won multiple awards including Oscars, Emmys, Golden Globes, Grammys, Image Awards, Stellar Awards, and Video Music Awards.
            </p>
            <p>
              Gordon & Associates also provides accounting, tax, executive mentoring, and small business consulting services. The firm helps clients build wealth, protect assets, and secure their financial future. The firm’s comprehensive financial services include: wealth management, small business development, management consulting, strategic budgeting, tax planning, and tax preparation.
            </p>
            <p>
              Gordon & Associates is committed to conducting business at the highest standards of integrity, professionalism, and excellence. To maintain that standard, the firm recruits and employs high caliber professional staff consisting of CPAs, MBAs, MDivs, DMins, MBTs, and JDs with over 125 years of combined experience.
            </p>
            <p>
              Gordon & Associates mission is to provide business management, accounting, and tax services at the highest level of professionalism and integrity, based on sound business practices and biblical principles.
            </p>
          </div>
        </div>
        
        {/* Services Checklist */}
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-xl/7 font-bold text-foreground sm:grid-cols-2 md:flex lg:gap-x-10">
            <div id='company-content-s1' className="flex gap-x-3 items-center translate-x-400 opacity-0">
              <CheckCircle aria-hidden="true" className="mt-1 size-12 flex-none text-accent-primary" />
              Wealth Management
            </div>
            <div id='company-content-s2' className="flex gap-x-3 items-center translate-x-400 opacity-0">
              <CheckCircle aria-hidden="true" className="mt-1 size-12 flex-none text-accent-primary" />
              Tax Planning & Prep
            </div>
            <div id='company-content-s3' className="flex gap-x-3 items-center translate-x-400 opacity-0">
              <CheckCircle aria-hidden="true" className="mt-1 size-12 flex-none text-accent-primary" />
              Business Consulting
            </div>
            <div id='company-content-s4' className="flex gap-x-3 items-center translate-x-400 opacity-0">
              <CheckCircle aria-hidden="true" className="mt-1 size-12 flex-none text-accent-primary" />
              Executive Mentoring
            </div>
          </div>
          
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mx-auto my-20 max-w-7xl border-t border-accent-secondary/20 px-6 lg:my-32 lg:px-8" />

      {/* 2. LEADERSHIP: LAURA W. GORDON (Left Image / Right Text) */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Laura's Image */}
          <div id='company-content-laura-pic' className="relative aspect-8/9 w-full lg:aspect-auto lg:h-full -translate-x-400 opacity-0">
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
          <div id='company-content-laura-bio' className="pt-10 lg:pt-0 lg:pl-8 translate-x-400 opacity-0">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Laura W. Gordon</h2>
            <p className="mt-2 text-lg/7 font-bold text-accent-primary">Founder and CEO</p>
            
            <div className="mt-6 space-y-6 text-lg/7 text-foreground">
              <p>
                Laura W. Gordon is a Certified Public Accountant licensed in the state of California and is a licensed minister in the marketplace.
              </p>
              <p>
                In 1992, Laura founded Gordon & Associates, a boutique business management firm which represents award winning comedians, actors, writers, directors, producers, recording artists, athletes, and industry executives. The firm also provides small business development, wealth management, tax planning and tax preparation services. It helps entertainers, professional athletes, small business owners, executives, and other high net worth individuals build wealth, protect assets, and secure their financial futures.
              </p>
              <p>
                Laura was named among The Hollywood Reporter’s “Hollywood’s Top Business Managers” of 2018 through 2025 and Variety’s “Business Manager Elite” of 2020 through 2023. For six years, Laura served on the board of Women in Film, Los Angeles, an organization that advocates for and advances the careers of women working in the screen industries to achieve parity and transform culture.
              </p>
              <p>
                In 2003, Laura founded Gammy’s House (inspired by her late grandmother), a corporate foundation of Gordon & Associates, dedicated to educating, equipping, and empowering the next generation of black entrepreneurs. It also supports education initiatives, scholarships, and micro-lending programs.
              </p>
              <p>
                As a third-generation entrepreneur, Laura’s life mission expands beyond servicing just her clients. In 2022, she partnered with other ministries to establish Back to Eden Global, in which she employs her business skills and ministry gifts to develop economic opportunities for project sites in Africa and in the diaspora.
              </p>
               <p className="border-l-2 border-accent-primary pl-4 italic text-foreground/80">
                Laura holds a Bachelor of Arts in Economics from UCLA, a Masters of Divinity from The King’s University, and a Doctorate of Ministry from Jakes Divinity School. She has been married to her college sweetheart for 40 years and they have 3 adult children and 5 grandchildren.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. LEADERSHIP: ISAAC M. GORDON (Text Left / Image Right) */}
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Isaac's Bio - Order 2 on mobile, Order 1 on Desktop */}
          <div id='company-content-isaac-bio' className="order-2 lg:order-1 lg:pr-8 -translate-x-400 opacity-0">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Isaac M. Gordon</h2>
            <p className="mt-2 text-lg/7 font-bold text-accent-primary">Managing Partner</p>
            
            <div className="mt-6 space-y-6 text-lg/7 text-foreground">
              <p>
                Isaac M. Gordon’s career has been shaped by a rare mix of athletic discipline, academic excellence, and a genuine commitment to helping people navigate their financial lives with confidence. After spending his collegiate years at UTEP as a scholar‑athlete and playing professional basketball in Europe, he transitioned into the financial world with the same drive that defined him on the court. Today, he serves as managing partner of Gordon & Associates, where he advises high‑profile and high‑net‑worth clients on everything from tax strategy to long‑term financial planning.
              </p>
              <p>
                 What truly sets Isaac apart is the personal side of his professional journey. One of the greatest joys of his career has been the chance to work alongside his mother, Laura—building a family legacy while serving the firm’s clients with integrity, accountability, and a shared commitment to excellence. Isaac brings a thoughtful, strategic approach to every relationship he manages, and his background as both a CPA and an MBA graduate with first class honors further anchors the trust clients place in him.
              </p>
              <p>
                Beyond his work, Isaac remains dedicated to mentorship and community service, continuing to invest in others just as mentors invested in him.
              </p>
              <p className="border-l-2 border-accent-primary pl-4 italic text-foreground/80">
                Isaac holds a Bachelor’s degree in Finance from the University of Texas at El Paso (UTEP), an MBA in International Business from Griffith College - Dublin, and is a licensed CPA. He was recently married to his wife, Kristen, who brings tremendous joy, love, and support into every area of his life.
              </p>
            </div>
          </div>

          {/* Isaac's Image - Order 1 on mobile, Order 2 on Desktop */}
          <div id='company-content-isaac-pic' className="order-1 relative aspect-8/9 w-full lg:order-2 lg:aspect-auto lg:h-full translate-x-400 opacity-0">
            <Image
              alt="Isaac M. Gordon"
              src={Pic.IsaacGordonFull}
              className="absolute inset-0 size-full rounded-2xl bg-second-bg object-cover shadow-2xl"
            />
            {/* Floating Mission Quote overlapping the image */}
            <div className="absolute -bottom-12 left-6 right-6 rounded-xl bg-accent-primary p-6 shadow-lg sm:left-12 sm:right-auto sm:max-w-sm">
               <blockquote className="text-sm/6 font-medium text-white">
                "Our story is one of growth, gratitude, and a steady belief in doing the right thing—for clients, for family, and for the next generation."
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}