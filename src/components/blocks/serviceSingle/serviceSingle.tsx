"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image"
import Link from "next/link";
import { gsap } from 'gsap'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '37' },
    { label: 'Countries', value: '12' },
    { label: 'Raised', value: '$25M' },
]

export default function ServiceSingle({ Servicenumber, Title, children, Picture }: { Servicenumber?: string; Title?: string; children?: React.ReactNode; Picture?: any }) {


    gsap.registerPlugin(ScrollToPlugin);

    useGSAP(() => {
        gsap.from("#service-image-container", {
            translateX: -400,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
        gsap.from("#service-text-portion", {

            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
    }, []);


    const scrollToServices = () => {
        gsap.set(window, {
            scrollTo: { y: "2800" }
        })
        gsap.to(window, {
            delay: 1,
            duration: 2,
            scrollTo: { y: "5400" }
        })
    }

    return (
        <div className="fixed max-h-screen overflow-scroll lg:overflow-hidden w-full bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div id="service-image-container" className="lg:pr-4">
                        <div className="relative overflow-hidden rounded-3xl bg-background px-6 pt-64 pb-9 after:pointer-events-none after:absolute after:inset-0 after:rounded-3xl after:inset-ring after:inset-ring-white/10 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 flex lg:h-180">
                            {Picture && (
                                <Image
                                    alt=""
                                    src={Picture}
                                    className="absolute inset-0 size-full rounded-3xl object-cover"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            )}
                            <div className="absolute inset-0 bg-background/12 mix-blend-multiply" />
                            <div
                                aria-hidden="true"
                                className="absolute top-1/2 left-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                            >

                            </div>


                        </div>
                    </div>
                    <div id="service-text-portion">
                        <div className="text-lg/7 text-foreground/80 lg:max-w-lg">
                            <p className="text-lg/7 font-bold text-accent-primary">Services</p>
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
                                {Title}
                            </h1>
                            <div className="max-w-xl text-foreground">
                                {children}
                            </div>
                        </div>
                        <div className="mt-10 flex items-center  gap-x-6 justify-start">
                            <Link
                                href="/contact"
                                className="rounded-md bg-accent-primary px-3.5 py-2.5 text-sm font-semibold inset-ring inset-ring-white/5 hover:bg-accent-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white animate-jump animate-once animate-delay-2000 animate-duration-2000 "
                            >
                                {' '}
                                Contact us{' '}
                                <span className="pl-2" aria-hidden="true">→</span>
                            </Link>
                            <Link onClick={() => { scrollToServices() }} href={"/"} className="text-sm/6 font-semibold hover:text-white">
                                Other Services

                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}