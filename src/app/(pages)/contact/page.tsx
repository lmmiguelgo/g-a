"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  
  useGSAP(() => {
    gsap.from("#contact-form", {
      scrollTrigger: {
        trigger: "#contact-page",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      translateX: 800,
      duration: 0.8,
      ease: "circ",
    });

   
  }, []);

  return (
    <div id="contact-page" className="relative isolate min-h-screen bg-background">
      <div  className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column: Contact Info */}
        <div   className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48 ">
          <div  className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            
            {/* Background decoration for left column */}
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-second-bg ring-1 ring-white/5 lg:w-1/2 ">
              <div
                aria-hidden="true"
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.5%, 97.2% 73.3%, 45.5% 100%, 27.4% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 56.1%)',
                  }}
                  className="aspect-1155/678 w-288.75 bg-linear-to-br from-accent-primary to-accent-primary opacity-20 "
                />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Get in touch</h2>
            <p className="mt-6 text-lg leading-8 text-foreground">
              Our corporate office is located on Camden Dr. in Beverly Hills, CA near Rodeo. If you'd like a personal consultation concerning any of our services please don't hesitate to call or email and we will contact you soon.
            </p>
            
            <dl className="mt-10 space-y-4 text-base leading-7 text-foreground/80">
              {/* Corporate Office */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Corporate Office</span>
                  <MapPin className="h-7 w-6 text-accent-secondary" aria-hidden="true" />
                </dt>
                <dd>
                  <strong className="text-foreground">Corporate Office:</strong><br/>
                  468 N Camden Drive, Suite 400A,<br/>
                  Beverly Hills, CA 90210
                </dd>
              </div>

               {/* Creative Workspace */}
               <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Creative Workspace</span>
                  <Building2 className="h-7 w-6 text-accent-secondary" aria-hidden="true" />
                </dt>
                <dd>
                  <strong className="text-foreground">Creative Workspace:</strong><br/>
                  Studio City, CA
                </dd>
              </div>

               {/* Executive Office */}
               <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Executive Office</span>
                  <Building2 className="h-7 w-6 text-accent-secondary" aria-hidden="true" />
                </dt>
                <dd>
                  <strong className="text-foreground">Executive Office:</strong><br/>
                  Atlanta, GA
                </dd>
              </div>

              {/* Email */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail className="h-7 w-6 text-accent-secondary" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-accent-primary" href="mailto:info@gordonandassociates.biz">
                    info@gordonandassociates.biz
                  </a>
                </dd>
              </div>

              {/* Phone & Fax */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Phone</span>
                  <Phone className="h-7 w-6 text-accent-secondary" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-accent-primary" href="tel:+18183776300">
                  (818) 377-6300
                  </a>
                  <span className="mx-2 text-accent-secondary">|</span>
                  <span>Fax: (818) 377-6301</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Right Column: Form */}
        <form id="contact-form" action="https://formsubmit.co/info@gordonandassociates.biz" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
             {/* FormSubmit Configuration */}
             <input type="hidden" name="_next" value="https://gordonandassociates.biz/thanks" />
             <input type="hidden" name="_subject" value="New Contact Form Submission" />
             <input type="hidden" name="_captcha" value="true" />

          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              
              {/* First Name */}
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-foreground">
                  First name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-foreground">
                  Last name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-foreground">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <textarea
                    required
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent-primary sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <input type="hidden" name="_autoresponse" value="Thank you for contacting Gordon & Associates. We have received your message and will get back to you shortly."></input>
            <input type="hidden" name="_subject" value="New Message From Gordon & Associates Contact Form!"></input>
            <input type="hidden" name="_next" value="https://gordonandassociates.biz/thanks"></input>

            {/* Submit Button */}
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-accent-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-accent-primary/80 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}