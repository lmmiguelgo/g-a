"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        start: "top top",
        end: "+=400",
        trigger: "body",
      }
    });

    tl.to('#contact-page', {
      duration: 1,
      translateY: -100,
    });
  }, []);

  
  return (
    <div id="contact-page" className="fixed w-full flex flex-col-reverse lg:block  bg-background">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          className="h-screen w-full bg-second-bg object-cover sm:h-80 lg:absolute lg:h-full opacity-80"
        />
      </div>
      <div className="pt-32 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
              Let's work together
            </h2>
            
            <form action="#" method="POST" className="mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-foreground">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-foreground/10 placeholder:text-accent-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-accent-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold text-foreground">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-foreground/10 placeholder:text-accent-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-accent-primary"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-foreground">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-foreground/10 placeholder:text-accent-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-accent-primary"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm/6 font-semibold text-foreground">
                    Company
                  </label>
                  
                  <div className="mt-2.5">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-foreground/10 placeholder:text-accent-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-accent-primary"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label htmlFor="phone" className="block font-semibold text-foreground">
                      Phone
                    </label>
                    
                  </div>
                  <div className="mt-2.5">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-foreground/10 placeholder:text-accent-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-accent-primary"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm/6">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-foreground">
                      How can we help you?
                    </label>
                    <p id="message-description" className="text-accent-secondary">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-foreground/10 placeholder:text-accent-secondary focus:outline-2 focus:-outline-offset-2 focus:outline-accent-primary"
                      defaultValue={''}
                    />
                  </div>
                </div>
                
              </div>
              <div className="mt-10 flex justify-end border-t border-foreground/10 pt-8">
                <button
                  type="submit"
                  className="rounded-md bg-accent-primary px-3.5 py-2.5 text-center text-sm font-semibold text-foreground shadow-xs hover:bg-accent-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}