"use client";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Pic } from "@/components/ui/pic/pic"
import Image from "next/image"


gsap.registerPlugin(ScrollTrigger);
const pressItems = [
  {
    title: 'THR named Laura Gordon one of Hollywood’s Top Business Managers of 2025',
    href: 'https://www.hollywoodreporter.com/business/business-news/business-managers-2025-1236405950/',
    year: '2025',
    publication: 'The Hollywood Reporter',
  },
  {
    title: 'THR named Laura Gordon one of Hollywood’s Top Business Managers of 2024',
    href: 'https://www.hollywoodreporter.com/lists/hollywood-top-business-managers-accountants-stars-2024/',
    year: '2024',
    publication: 'The Hollywood Reporter',
  },
  {
    title: 'THR named Laura Gordon one of Hollywood\'s Top Business Managers of 2023',
    href: 'https://www.hollywoodreporter.com/business/business-news/hollywood-top-business-managers-2023-1235626557/',
    year: '2023',
    publication: 'The Hollywood Reporter',
  },
  {
    title: 'Laura Gordon named one of Variety\'s Business Managers Elite 2023',
    href: 'https://variety.com/lists/variety-business-managers-elite-2023/laura-gordon-4/',
    year: '2023',
    publication: 'Variety',
  },
  {
    title: 'THR named Laura Gordon one of Hollywood’s Top Business Managers of 2022',
    href: 'https://www.hollywoodreporter.com/lists/hollywood-power-business-managers-2022/harvey-gettleson-seth-gettleson-randy-oconnor-larry-witzer/',
    year: '2022',
    publication: 'The Hollywood Reporter',
  },
  {
    title: 'Good Advice Helped Showbiz Talent Survive Pandemic',
    href: 'https://variety.com/lists/good-advice-helped-showbiz-talent-survive-pandemic/laura-gordon-2/',
    year: '2021',
    publication: 'Variety',
  },
  {
    title: 'Variety Feature - Laura Gordon on Personal Success, Boosting Black Artists, and Giving Back to Her Community',
    href: 'https://variety.com/2021/biz/features/laura-gordon-personal-success-boosting-black-artists-1235113381/',
    year: '2021',
    publication: 'Variety',
  },
  {
    title: 'THR named Laura Gordon one of Hollywood\'s Top Business Managers of 2021',
    href: 'https://www.hollywoodreporter.com/lists/hollywood-power-business-managers-2021/harvey-gettleson-seth-gettleson-randy-oconnor-and-larry-witzer-gettleson-witzer-oconnor/',
    year: '2021',
    publication: 'The Hollywood Reporter',
  },
  {
    title: 'THR named Laura Gordon one of Hollywood\'s Top Business Managers of 2020',
    href: 'https://www.hollywoodreporter.com/lists/hollywoods-top-business-managers-of-2020/harvey-gettleson-seth-gettleson-and-randy-oconnor-gettleson-witzer-oconnor/',
    year: '2020',
    publication: 'The Hollywood Reporter',
  },
  {
    title: 'Laura Gordon named one of Variety\'s Business Managers Elite 2020',
    href: 'https://variety.com/lists/varietys-business-managers-elite-2020/laura-gordon/',
    year: '2020',
    publication: 'Variety',
  },
  {
    title: 'THR named Laura Gordon one of Hollywood\'s Top Business Managers of 2019',
    href: 'https://www.hollywoodreporter.com/lists/hollywoods-top-business-managers-2019-1246080/harvey-gettleson-and-randy-oconnor/',
    year: '2019',
    publication: 'The Hollywood Reporter',
  },
  {
    title: 'THR named Laura Gordon one of Hollywood\'s Top Business Managers of 2018',
    href: 'https://www.hollywoodreporter.com/lists/top-25-hollywood-business-managers-2018-1149414/harvey-gettleson/',
    year: '2018',
    publication: 'The Hollywood Reporter',
  },
  {
    title: 'THR - 6 Hollywood Business Managers to Watch',
    href: 'https://www.hollywoodreporter.com/business/business-news/6-hollywood-biz-managers-to-watch-1235044946/',
    year: '2021',
    publication: 'The Hollywood Reporter',
  },
]

export default function PressPage() {

   gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(() => {

    gsap.from("#press-intro", {
       scrollTrigger: {
        trigger: "#press-page",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      translateX: -800,
      duration: 0.8,
      ease: "circ"
    });
    gsap.from("#press-list", {
       scrollTrigger: {
        trigger: "#press-page",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "circ"
    });
    
    
   
   

  }, [])


  return (
    <div id="press-page" className=" bg-background py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-start justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div id="press-intro" className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-light tracking-tight  text-foreground sm:text-4xl">
              Press & <span className="font-semibold">Recognition</span>
            </h2>
            <p className="mt-6 text-xl/8 text-accent-secondary">
              Proud to be recognized by industry leaders.
            </p>
            <Image
              alt=""
              src={Pic.PressImage}
              className="mt-16 aspect-6/5 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-foreground/10 lg:aspect-auto lg:h-138"
            />
          </div>
          <div id="press-list" className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Press Articles</h3>
            <ul className="-my-8 divide-y divide-accent-secondary/20">
              {pressItems.map((article) => (
                <li key={article.href} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dt className="sr-only">Article</dt>
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-foreground">
                      <a href={article.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {article.title}
                        <span aria-hidden="true" className="absolute inset-0" />
                      </a>
                    </dd>
                    <dt className="sr-only">Year</dt>
                    <dd className="mt-4 text-base/7 font-semibold text-foreground">{article.year}</dd>
                    <dt className="sr-only">Publication</dt>
                    <dd className="mt-4 flex items-center gap-x-3 text-base/7 text-accent-secondary">
                      <svg viewBox="0 0 2 2" aria-hidden="true" className="size-0.5 flex-none fill-accent-secondary">
                        <circle r={1} cx={1} cy={1} />
                      </svg>
                      {article.publication}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}