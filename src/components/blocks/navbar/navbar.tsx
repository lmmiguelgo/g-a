'use client'

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
  Sparkles
} from 'lucide-react'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Pic } from '@/components/ui/pic/pic'
import { gsap } from 'gsap'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";





export default function Navbar() {
  const services = [
  { name: 'Business Management', description: 'Holistic management for Entertainers / Athletes', href: '/services/business-management', icon: Briefcase },
  { name: 'Tax Services', description: 'Proactive planning, compliance, and liability minimization', href: '/services/tax-services', icon: Calculator },
  { name: 'Executive Mentorship', description: 'Performance and wealth strategy mentorship for high-visibility careers', href: '/services/executive-mentorship', icon: GraduationCap },
  { name: 'Small Business Consulting', description: 'Development from early-stage planning to operational structure', href: '/services/small-business-consulting', icon: Store },
  { name: 'Strategic Financial Planning', description: 'Align your financial resources with your long-term vision.', href: '/services/strategic-financial-planning', icon: Handshake },
]

const callsToAction = [
  { name: 'Book Consultation', href: 'https://outlook.office365.com/book/GordonAssociates@gordonandassociates.biz/?ismsaljsauthenabled=true', icon: Calendar },
  
]

const company = [
  { name: 'Our Story', href: '#', description: 'Discover our journey and values', icon: BookOpen },
  { name: 'Our Standards', href: '#', description: 'Our commitment to excellence', icon: ShieldCheck },
  { name: 'Laura Gordon', href: '#', description: 'Our Founder and CEO', image: Pic.LauraGordon },
  { name: 'Isaac M', href: '#', description: 'Our Managing Partner', image: Pic.IsaacGordon },
  
]

const philanthropy = [
  { name: "Gammy's House", scrollTo() {scrollToGammys()}, description: "", image: Pic.GammysSingle },
  { name: "Back to Eden Global", scrollTo() {scrollToEdenGlobal()}, description: "", image: Pic.EdenGlobal },
]

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToHome = () => {
    gsap.to(window, {
      duration: 0,
      
      scrollTo: { y: "0"}
    })
  }
  const scrollToServices = () => {
    gsap.to(window, {
      duration: 2,
      
      scrollTo: { y: "2800"}
    })
  }
  const scrollToPhilanthropy = () => {
    gsap.to(window, {
      duration: 2,
      
      scrollTo: { y: "10200"}
    })
  }
  const scrollToGammys = () => {
    gsap.to(window, {
      duration: 2,
      
      scrollTo: { y: "14540"}
    })
  }
  const scrollToEdenGlobal = () => {
    gsap.to(window, {
      duration: 2,
      
      scrollTo: { y: "28000"}
    })
  }

  const pathname = usePathname();

    //Entrance Animation

      useEffect(() => {
        //Registring ScrollTrigger Plugin
        


        gsap.from('#header-nav', {
            duration: 1.8,
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
            <button onClick={() => { window.location.href = "/"; scrollToHome();}}  className="-m-1.5 p-1.5 cursor-pointer">
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
          <div className="flex lg:hidden">
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
            <button onClick={() => { window.location.href = "/"; scrollToHome();}}  className={`cursor-pointer ${pathname === '/' ? 'text-white text-md font-normal leading-6 py-2' : 'text-md font-normal leading-6 text-foreground/80 py-2 hover:text-white transition-colors duration-300'}`}>
              Home
            </button>
            {/* Service Dropdown (Hover) */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('service')}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={"/"} onClick={scrollToServices} className={`flex items-center gap-x-1 text-md font-normal leading-6 text-foreground/80 outline-none py-2  transition-colors duration-300 cursor-pointer ${hoveredDropdown === 'service' ? 'text-white ' : ''}`}>
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
                          className="group relative flex items-center gap-x-6 rounded-lg p-2 text-md leading-6 hover:bg-white/5 "
                        >
                          <div className="flex h-20 w-20 flex-none items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 ">
                            <item.icon className="h-16 w-6 text-foreground/70 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <Link href={item.href} className="block font-semibold text-foreground hover:text-white transition-colors duration-300">
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p id='hover-not-working' className="mt-1 text-foreground/70 group-hover:text-white ">{item.description}</p>
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

            {/* Philanthropy Dropdown (Hover) */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('philanthropy')}
              onMouseLeave={handleMouseLeave}
            >
              <Link onClick={scrollToPhilanthropy} href={"/"} className={`flex items-center gap-x-1 text-md font-normal leading-6 text-foreground/80 outline-none py-2 transition-colors duration-300 cursor-pointer  ${hoveredDropdown === 'philanthropy' ? 'text-white ' : ''}`}>
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
                          className="group relative flex items-center gap-x-6 rounded-lg p-2 text-md leading-6 hover:bg-white/5"
                        >
                          <div className="flex h-20 w-20 flex-none items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10">
                            <Image src={item.image} alt={item.name} className="h-8 w-8 object-contain group-hover:brightness-100 brightness-80 transition-all duration-300" />
                          </div>
                          <div className="flex-auto">
                            <Link onClick={item.scrollTo} href={"/"} className="block font-semibold text-foreground hover:text-white transition-colors duration-300">
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-foreground/70 group-hover:text-white">{item.description}</p>
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
            

            {/* Company Dropdown (Hover) */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-x-1 text-md font-normal leading-6 text-foreground/80 outline-none py-2 transition-colors duration-300 cursor-pointer  ${hoveredDropdown === 'company' ? 'text-white ' : ''}`}>
                Company
                <ChevronDown className={`h-5 w-5 flex-none text-foreground/60 transition-transform ${hoveredDropdown === 'company' ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {/* Company Flyout Menu */}
              {/* Added top-full and pt-4 to bridge the gap using padding instead of margin */}
              {hoveredDropdown === 'company' && (
                <div className="absolute left-1/2 top-full z-10 w-screen max-w-md -translate-x-1/2 pt-4">
                  <div className="overflow-hidden rounded-lg bg-second-bg/80 backdrop-blur-md ring-1 ring-white/10 shadow-2xl">
                    <div className="p-4">
                      {company.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-2 text-md leading-6 hover:bg-white/5"
                        >
                          <div className="flex h-20 w-20 flex-none items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10">
                            {'image' in item && item.image ? (
                                <Image 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="h-auto w-auto  object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                                />
                            ) : (
                                <item.icon className="h-16 w-6 text-foreground/70 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                            )}
                          </div>
                          <div className="flex-auto">
                            <Link href={item.href} className="block font-semibold text-foreground hover:text-white transition-colors duration-300">
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-foreground/70 group-hover:text-white">{item.description}</p>
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
            <Link href="/press" className={pathname === '/press' ? 'text-white text-md font-normal leading-6 py-2' : 'text-md font-normal leading-6 text-foreground/80 py-2 hover:text-white transition-colors duration-300'}>
              Press
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="#" className=" inline-flex items-center gap-x-2 rounded-md bg-accent-primary px-3.5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent-primary/88">
              Contact us <span aria-hidden="true">&rarr;</span>
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
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg px-3 py-1 text-base font-semibold leading-8 text-foreground hover:bg-white/5"
                    >
                      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10">
                        <item.icon className="h-6 w-6 text-foreground/70 group-hover:text-foreground" aria-hidden="true" />
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2 py-4">
                  <button
                    onClick={() => { scrollToPhilanthropy(); setMobileMenuOpen(false);}}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-white/5"
                  >
                    Philanthropy
                  </button>
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-white/5"
                  >
                    Press
                  </Link>

                  {company.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-white/5"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-1.4 text-base font-semibold leading-7 text-foreground hover:bg-white/5 transition-colors duration-300"
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