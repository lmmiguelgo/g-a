'use client'

import { useState, useEffect } from 'react'
import {
  Briefcase,
  Calculator,
  GraduationCap,
  Store,
  Handshake,
  Calendar,
  Phone,
  Menu,
  X,
  ChevronDown
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Pic } from '@/components/ui/pic/pic'
import { gsap } from 'gsap'



const services = [
  { name: 'Business Management', description: 'Holistic management for entertainers/athletes, including day-to-day operations and income strategy', href: '#', icon: Briefcase },
  { name: 'Tax Services', description: 'Proactive planning, compliance, and liability minimization for individuals and businesses', href: '#', icon: Calculator },
  { name: 'Executive Mentorship', description: 'Performance and wealth strategy mentorship for high-visibility careers', href: '#', icon: GraduationCap },
  { name: 'Small Business Consulting', description: 'Strategic development from early-stage planning to operational structure', href: '#', icon: Store },
  { name: 'Partnership', description: 'Information on the financial literacy partnership, workshops, and Masterclass series', href: '#', icon: Handshake },
]

const callsToAction = [
  { name: 'Schedule a Meeting', href: '#', icon: Calendar },
  { name: 'Contact Us', href: '#', icon: Phone },
]

const company = [
  { name: 'Our Story', href: '#', description: '' },
  { name: 'Our Standards', href: '#', description: '' },
  { name: 'Leaderships', href: '#', description: '' },
  
]

export default function Navbar() {

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
      <header id='header-nav' className="bg-second-bg/80 fixed w-full z-50">
        <nav aria-label="Global" className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-12">
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt="Your Company"
                src={Pic.LogoSquare}
                className="brightness-200 hover:brightness-280 transition-all duration-300 w-10 lg:w-12"
                width={50}
                priority
             
            />
            </Link>
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
            {/* Product Dropdown (Hover) */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('service')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-x-1 text-md font-normal leading-6 text-foreground/80 outline-none py-2  transition-colors duration-300 ${hoveredDropdown === 'service' ? 'text-white ' : ''}`}>
                Services
                <ChevronDown className={`h-5 w-5 flex-none text-foreground/60 transition-transform ${hoveredDropdown === 'service' ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {/* Product Flyout Menu */}
              {/* Added top-full and pt-4 to bridge the gap using padding instead of margin */}
              {hoveredDropdown === 'service' && (
                <div className="absolute left-1/2 top-full z-10 w-screen max-w-md -translate-x-1/2 pt-4">
                  <div className="overflow-hidden rounded-lg bg-second-bg shadow-lg ring-1 ring-white/10">
                    <div className="p-4">
                      {services.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-white/5"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10">
                            <item.icon className="h-6 w-6 text-foreground/70 group-hover:text-foreground" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <Link href={item.href} className="block font-normal text-foreground">
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-foreground/70">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-white/10 bg-white/5">
                      {callsToAction.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-md font-normal leading-6 text-foreground hover:bg-white/10"
                        >
                          <item.icon className="h-5 w-5 flex-none text-foreground/60" aria-hidden="true" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="#" className="text-md font-normal leading-6 text-foreground/80 py-2 hover:text-white transition-colors duration-300">
              Philanthropy
            </Link>
            <Link href="#" className="text-md font-normal leading-6 text-foreground/80 py-2 hover:text-white transition-colors duration-300">
              Press
            </Link>

            {/* Company Dropdown (Hover) */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-x-1 text-md font-normal leading-6 text-foreground/80 outline-none py-2 transition-colors duration-300  ${hoveredDropdown === 'company' ? 'text-white ' : ''}`}>
                Company
                <ChevronDown className={`h-5 w-5 flex-none text-foreground/60 transition-transform ${hoveredDropdown === 'company' ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {/* Company Flyout Menu */}
              {/* Added top-full and pt-4 to bridge the gap using padding instead of margin */}
              {hoveredDropdown === 'company' && (
                <div className="absolute left-1/2 top-full z-10 w-96 -translate-x-1/2 pt-4">
                  <div className="overflow-hidden rounded-xl bg-second-bg p-4 shadow-lg ring-1 ring-white/10">
                    {company.map((item) => (
                      <div key={item.name} className="relative rounded-lg p-4 hover:bg-white/5">
                        <Link href={item.href} className="block text-md font-normal leading-6 text-foreground">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-sm leading-6 text-foreground/70">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="#" className=" text-md font-normal leading-6 text-foreground/80 hover:text-white py-2 transition-colors duration-300">
              Contact us <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu (Manual implementation replacing Dialog) */}
      {mobileMenuOpen && (
        <div className="relative z-50 lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-second-bg/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          
          {/* Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-second-bg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  alt="Your Company"
                  src={Pic.LogoWide}
                  className="brightness-200 hover:brightness-100 transition-colors duration-300"
                  width={240}
                  priority
                    
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-foreground/70 hover:text-foreground"
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
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-foreground hover:bg-white/5"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10">
                        <item.icon className="h-6 w-6 text-foreground/70 group-hover:text-foreground" aria-hidden="true" />
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-white/5"
                  >
                    Philanthropy
                  </Link>
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
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground hover:bg-white/5 transition-colors duration-300"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Mobile Calls to Action */}
            <div className="mt-6 grid grid-cols-2 divide-x divide-white/5 bg-white/5 text-center rounded-lg">
              {callsToAction.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="p-3 text-base font-semibold leading-7 text-foreground hover:bg-white/10"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}