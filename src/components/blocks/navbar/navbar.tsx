"use client"

import { useState, useEffect } from 'react'
import {
  Briefcase,
  Calculator,
  GraduationCap,
  Store,
  Handshake,
  Calendar,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  ShieldCheck,
  UserStar,
  Sparkles,
  User
} from 'lucide-react'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Pic } from '@/components/ui/pic/pic'
import { gsap } from 'gsap'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";


export default function Navbar() {
  const services = [
    { name: 'Business Management', description: 'Holistic management for Entertainers / Athletes', href: '/services/business-management', icon: Briefcase },
    { name: 'Tax Services', description: 'Proactive planning, compliance, and liability minimization', href: '/services/tax-services', icon: Calculator },
    { name: 'Executive Mentorship', description: 'Performance and wealth strategy mentorship for high-visibility careers', href: '/services/executive-mentorship', icon: GraduationCap },
    { name: 'Small Business Consulting', description: 'Development from early-stage planning to operational structure', href: '/services/small-business-consulting', icon: Store },
    { name: 'Above the Neck, Inc.', description: 'Gordon & Associates is proud to partner with Above the Neck, Inc.', href: '/services/above-the-neck', icon: Handshake },
  ]

  const callsToAction = [
    { name: 'Book Consultation', href: 'https://outlook.office365.com/book/GordonAssociates@gordonandassociates.biz/?ismsaljsauthenabled=true', icon: Calendar },

  ]

  const company = [
    { name: 'Our Story & Standards', href: '/company#company-content', description: 'Discover our journey, commitment and values', icon: BookOpen, action() { }, actionMobile() {} },
    { name: 'Laura Gordon', href: '/company#company-page-laura', description: 'Our Founder and CEO', image: Pic.LauraGordon, action() {}, actionMobile() {} },
    { name: 'Isaac M', href: '/company#company-page-isaac', description: 'Our Managing Partner', image: Pic.IsaacGordon, action() {}, actionMobile() {} },

  ]

  const philanthropy = [
    { name: "Gammy's House", scrollTo() { }, description: "", image: Pic.GammysSingle , href: "/philanthropy#philanthropy-section"},
    { name: "Back to Eden Global", scrollTo() { }, description: "", image: Pic.EdenGlobal, href: "/philanthropy#philanthropy-section-eden" },
  ]

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToHome = () => {
    gsap.to(window, {
      duration: 0,

      scrollTo: { y: "0" }
    })
  }
  const scrollToServices = () => {
    gsap.set(window, {
      scrollTo: { y: "2400" }
    })
    gsap.to(window, {
      delay: 1,
      duration: 2,
      scrollTo: { y: "4800" }
      
    })
  }
  const scrollToCompany = () => {
    gsap.set(window, {
      scrollTo: { y: "8800" }
    })
    gsap.to(window, {
      delay: 1,
      duration: 2,
      scrollTo: { y: "12140" }
      
    })
  }
  const scrollToLaura = () => {
    gsap.set(window, {
      
      scrollTo: { y: "12760" }
    })
   
  }
  const scrollToIsaac = () => {
    gsap.set(window, {
      
      scrollTo: { y: "14000" }
    })
   
  }
  const scrollToPhilanthropy = () => {
    gsap.set(window, {

      scrollTo: { y: "17800" }
    })
    gsap.to(window, {
      delay: 1,
      duration: 2,
      scrollTo: { y: "21300" }
    })
  }
  const scrollToGammys = () => {
    
    gsap.set(window, {
      scrollTo: { y: "21800" }
    })
    
  }
  const scrollToEdenGlobal = () => {
    gsap.set(window, {

      scrollTo: { y: "21300" }
    })
    gsap.to(window, {
      delay: 1,
      duration: 2,
      scrollTo: { y: "29000" }
    })
  }



  //Mobile Scroll Functions

  const navToPhilanthropy = () => {
      gsap.set(window, {
        
        scrollTo: { y: "14000" }
      })
      gsap.set(window, {
        
        scrollTo: { y: "15300" }
      })
    }

    const navToStandards = () => {
        
        gsap.set(window, {
         
          scrollTo: { y: "7480" }
          
        })
      }

      const navToLaura = () => {
          gsap.set(window, {
            scrollTo: { y: "9250" }
          })
         
        }

        const navToIsaac = () => {
            gsap.set(window, {
              
              scrollTo: { y: "11420" }
            })
           
          }

  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    setCurrentHash(window.location.hash);
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  const isActive = (href: string) => (pathname + currentHash) === href;

  //Entrance Animation

  useGSAP(() => {

    gsap.from('#header-nav', {
      duration: 1.4,
      ease: "expo.out",
      y: -250,
      opacity: 0,
    });
  }, [])











  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredDropdown, setHoveredDropdown] = useState(null)

  // Handlers for hover state
  const handleMouseEnter = (menu: any) => {
    setHoveredDropdown(menu)
  }

  const handleMouseLeave = () => {
    setHoveredDropdown(null)
  }

  return (
    <>
      <header id='header-nav' className="bg-second-bg/80 fixed w-full z-50 shadow-2xl">
        <nav aria-label="Global" className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-12">
          <div className="flex lg:flex-1 ">
            <button onClick={() => { window.location.href = "/"; scrollToHome(); }} className="-m-1.5 p-1.5 cursor-pointer">
              <span className="sr-only">Your Company</span>
              <Image
                alt="Your Company"
                src={Pic.LogoSquare}
                className=" transition-all duration-300 w-10 lg:w-12 hover:brightness-140"
                width={50}
                loading="eager"

              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-x-4">

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground/70 hover:text-foreground"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            <button onClick={() => { window.location.href = "/"; scrollToHome(); }} className={`cursor-pointer text-md font-normal leading-6 py-2 transition-colors duration-300 ${pathname === "/" ? "text-white" : "text-foreground/80 hover:text-white"}`}>
              Home
            </button>
            {/* Service Dropdown (Hover) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('service')}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={"/services"} onClick={scrollToHome} className={`flex items-center gap-x-1 text-md font-normal leading-6 outline-none py-2 transition-colors duration-300 cursor-pointer ${hoveredDropdown === 'service' || pathname.startsWith('/services') ? 'text-white' : 'text-foreground/80 hover:text-white'}`}>
                Services
                <ChevronDown className={`h-5 w-5 flex-none text-foreground/60 transition-transform ${hoveredDropdown === 'service' ? 'rotate-180' : ''}`} aria-hidden="true" />
              </Link>

              {/* Service Flyout Menu */}
              {/* Added top-full and pt-4 to bridge the gap using padding instead of margin */}
              {hoveredDropdown === 'service' && (
                <div className="absolute left-1/2 top-full z-10 w-screen max-w-md -translate-x-1/2 pt-4">
                  <div className=" overflow-hidden rounded-lg bg-second-bg/80 backdrop-blur-md ring-1 ring-white/10 shadow-2xl">
                    <div className="p-4">
                      {services.map((item) => (
                        <div
                          key={item.name}
                          className={`group relative flex items-center gap-x-6 rounded-lg p-2 text-md leading-6 hover:bg-white/5 ${pathname === item.href ? 'bg-white/5' : ''}`}
                        >
                          <div className={`flex h-20 w-20 flex-none items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 ${pathname === item.href ? 'bg-white/10' : ''}`}>
                            <item.icon className={`h-16 w-6 transition-colors duration-300 ${pathname === item.href ? 'text-white' : 'text-foreground/70 group-hover:text-white'}`} aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <Link href={item.href} className={`block font-semibold transition-colors duration-300 ${pathname === item.href ? 'text-white' : 'text-foreground hover:text-white'}`}>
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p id='hover-not-working' className={`mt-1 group-hover:text-white ${pathname === item.href ? 'text-white' : 'text-foreground/70'}`}>{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 divide-x divide-white/10 bg-white/5">
                      {callsToAction.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className=" group flex items-center justify-center gap-x-2.5 p-3 text-md font-normal leading-6 text-foreground hover:bg-white/10 hover:text-white "
                        >
                          <item.icon className="h-5 w-5 flex-none text-foreground/60 group-hover:text-white " aria-hidden="true" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            
           


            {/* Company Dropdown (Hover) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <Link onClick={scrollToHome} href={'/company'} className={`flex items-center gap-x-1 text-md font-normal leading-6 outline-none py-2 transition-colors duration-300 cursor-pointer  ${hoveredDropdown === 'company' || pathname.startsWith('/company') ? 'text-white ' : 'text-foreground/80 hover:text-white'}`}>
                Company
                <ChevronDown className={`h-5 w-5 flex-none text-foreground/60 transition-transform ${hoveredDropdown === 'company' ? 'rotate-180' : ''}`} aria-hidden="true" />
              </Link>

              {/* Company Flyout Menu */}
              {/* Added top-full and pt-4 to bridge the gap using padding instead of margin */}
              {hoveredDropdown === 'company' && (
                <div className="absolute left-1/2 top-full z-10 w-screen max-w-md -translate-x-1/2 pt-4">
                  <div className="overflow-hidden rounded-lg bg-second-bg/80 backdrop-blur-md ring-1 ring-white/10 shadow-2xl">
                    <div className="p-4">
                      {company.map((item) => (
                        <div
                          key={item.name}
                          className={`group relative flex items-center gap-x-6 rounded-lg p-2 text-md leading-6 hover:bg-white/5 ${isActive(item.href) ? 'bg-white/5' : ''}`}
                        >
                          <div className={`flex h-20 w-20 flex-none items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 ${isActive(item.href) ? 'bg-white/10' : ''}`}>
                            {'image' in item && item.image ? (
                              <Image
                                src={item.image}
                                alt={item.name}
                                className={`h-auto w-auto object-cover group-hover:grayscale-0 transition-all duration-300 ${isActive(item.href) ? 'grayscale-0' : 'grayscale'}`}
                              />
                            ) : (
                              <item.icon className={`h-16 w-6 transition-colors duration-300 ${isActive(item.href) ? 'text-white' : 'text-foreground/70 group-hover:text-white'}`} aria-hidden="true" />
                            )}
                          </div>
                          <div className="flex-auto">
                            <Link onClick={() => { item.action(); setTimeout(() => setCurrentHash(window.location.hash), 100); }} href={item.href} className={`block font-semibold transition-colors duration-300 ${isActive(item.href) ? 'text-white' : 'text-foreground hover:text-white'}`}>
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className={`mt-1 group-hover:text-white ${isActive(item.href) ? 'text-white' : 'text-foreground/70'}`}>{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 divide-x divide-white/10 bg-white/5">
                      {callsToAction.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex items-center justify-center gap-x-2.5 p-3 text-md font-normal leading-6 text-foreground hover:bg-white/10 hover:text-white"
                        >
                          <item.icon className="h-5 w-5 flex-none text-foreground/60 group-hover:text-white" aria-hidden="true" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              

            </div>



{/* Philanthropy Dropdown (Hover) */}
             <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('philanthropy')}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/philanthropy" onClick={scrollToHome} className={`flex items-center gap-x-1 text-md font-normal leading-6 outline-none py-2 transition-colors duration-300 cursor-pointer  ${hoveredDropdown === 'philanthropy'  || pathname.startsWith('/philanthropy') ? 'text-white ' : 'text-foreground/80 hover:text-white'}`}>
                Philanthropy
                <ChevronDown className={`h-5 w-5 flex-none text-foreground/60 transition-transform ${hoveredDropdown === 'philanthropy' ? 'rotate-180' : ''}`} aria-hidden="true" />
              </Link>

              {/* Philanthropy Flyout Menu */}
              {hoveredDropdown === 'philanthropy' && (
                <div className="absolute left-1/2 top-full z-10 w-screen max-w-md -translate-x-1/2 pt-4">
                  <div className="overflow-hidden rounded-lg bg-second-bg/80 backdrop-blur-sm ring-1 ring-white/10 shadow-2xl">
                    <div className="p-4">
                      {philanthropy.map((item) => (
                        <div
                          key={item.name}
                          className={`group relative flex items-center gap-x-6 rounded-lg p-2 text-md leading-6 hover:bg-white/5 ${isActive(item.href) ? 'bg-white/5' : ''}`}
                        >
                          <div className={`flex h-20 w-20 flex-none items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 ${isActive(item.href) ? 'bg-white/10' : ''}`}>
                            <Image src={item.image} alt={item.name} className={`h-8 w-8 object-contain transition-all duration-300 ${isActive(item.href) ? 'brightness-100' : 'group-hover:brightness-100 brightness-80'}`} />
                          </div>
                          <div className="flex-auto">
                            <Link onClick={() => { item.scrollTo(); setTimeout(() => setCurrentHash(window.location.hash), 100); }} href={item.href} className={`block font-semibold transition-colors duration-300 ${isActive(item.href) ? 'text-white' : 'text-foreground hover:text-white'}`}>
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className={`mt-1 group-hover:text-white ${isActive(item.href) ? 'text-white' : 'text-foreground/70'}`}>{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 divide-x divide-white/10 bg-white/5">
                      {callsToAction.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex items-center justify-center gap-x-2.5 p-3 text-md font-normal leading-6 text-foreground hover:bg-white/10 hover:text-white"
                        >
                          <item.icon className="h-5 w-5 flex-none text-foreground/60 group-hover:text-white" aria-hidden="true" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link onClick={scrollToHome} href="/press" className={`text-md font-normal leading-6 py-2 transition-colors duration-300 ${pathname.startsWith('/press') ? 'text-white' : 'text-foreground/80 hover:text-white'}`}>
              Press
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-6">
            <Link onClick={scrollToHome} href="/contact" className=" inline-flex items-center gap-x-2 rounded-md bg-accent-primary px-3.5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent-primary/88">
              Contact us <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="/login" className="rounded-full bg-white/20 p-2 text-foreground hover:bg-white/10 hover:text-white transition-all duration-300 border border-foreground/40">
              <span className="sr-only">Log in</span>
              <User className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>

        </nav>

      </header>


      {/* Mobile Menu (Manual implementation replacing Dialog) */}
      <div
        className={`relative z-50 lg:hidden  ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/60 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-[80%] rounded-l-lg shadow-2xl overflow-y-auto bg-second-bg/80 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt="Your Company"
                src={Pic.LogoWide}
                className=" transition-colors duration-300"
                width={240}
                loading="eager"

              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.4  rounded-md -translate-y-2 text-foreground/70 hover:text-foreground"
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <Link
                  onClick={() => { setMobileMenuOpen(false) }}
                  href="/login"
                  className={`group -mx-3 flex items-center gap-x-6 rounded-lg px-3 py-1 text-base font-semibold leading-8 hover:bg-white/5 ${pathname.startsWith('/login') ? 'bg-white/5 text-white' : 'text-foreground'}`}
                >
                  <div className={`flex h-12 w-12 flex-none items-center justify-center rounded-full border border-foreground/40 group-hover:bg-white/10 ${pathname.startsWith('/login') ? 'bg-white/10' : 'bg-white/20'}`}>
                    <User className={`h-6 w-6 group-hover:text-foreground ${pathname.startsWith('/login') ? 'text-white' : 'text-foreground/70'}`} aria-hidden="true" />
                  </div>
                  Log in
                </Link>
                {services.map((item) => (
                  <Link
                    onClick={() => { setMobileMenuOpen(false) }}
                    key={item.name}
                    href={item.href}
                    className={`group -mx-3 flex items-center gap-x-6 rounded-lg px-3 py-1 text-base font-semibold leading-8 hover:bg-white/5 ${isActive(item.href) ? 'bg-white/5 text-white' : 'text-foreground'}`}
                  >
                    <div className={`flex h-12 w-12 flex-none items-center justify-center rounded-lg group-hover:bg-white/10 ${isActive(item.href) ? 'bg-white/10' : 'bg-white/5'}`}>
                      <item.icon className={`h-6 w-6 group-hover:text-foreground ${isActive(item.href) ? 'text-white' : 'text-foreground/70'}`} aria-hidden="true" />
                    </div>
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-2 py-4">
                {philanthropy.map((item) => (
                   <Link
                   onClick={() => { 
                     item.scrollTo();
                     setMobileMenuOpen(false);
                     setTimeout(() => setCurrentHash(window.location.hash), 100);
                   }}
                   key={item.name}
                   href={item.href}
                   className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-white/5 ${isActive(item.href) ? 'bg-white/5 text-white' : 'text-foreground'}`}
                 >
                   {item.name}
                 </Link>
                ))}
                
                <Link
                onClick={() => {setMobileMenuOpen(false); scrollToHome();}}
                  href="/press"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-white/5 ${pathname.startsWith('/press') ? 'bg-white/5 text-white' : 'text-foreground'}`}
                >
                  Press
                </Link>

                {company.map((item) => (
                  <Link
                    onClick={() => { 
                      item.actionMobile();
                      setMobileMenuOpen(false);
                      setTimeout(() => setCurrentHash(window.location.hash), 100);
                    }}
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-white/5 ${isActive(item.href) ? 'bg-white/5 text-white' : 'text-foreground'}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                onClick={() => {setMobileMenuOpen(false);}}
                  href="/contact"
                  className={`-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 hover:bg-white/5 transition-colors duration-300 ${pathname.startsWith('/contact') ? 'bg-white/5 text-white' : 'text-foreground'}`}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Calls to Action */}
          <div className="mt-6 grid grid-cols-1 divide-x divide-white/5 bg-white/5 text-center rounded-lg">
            {callsToAction.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="p-3 text-base font-semibold leading-7 text-foreground hover:bg-white/10 w-full "
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}