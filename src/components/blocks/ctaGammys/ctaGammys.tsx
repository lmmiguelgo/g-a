import Image from "next/image"
import Link from "next/link"
import { Pic } from "@/components/ui/pic/pic"


export default function CtaGammys() {
    return (
        <div id="cta-gammys" className="fixed w-full   hidden opacity-0 translate-y-400">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 p-4">
                <div className="relative isolate overflow-hidden bg-second-bg px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 h-200 lg:h-fit">
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
                            Make a secure, <br /> <span className="font-bold">Tax-deductible Donation Online</span>
                        </h2>
                        <p className="mt-6 text-lg/8 text-pretty text-foreground text-start">
                            Click on the <strong>“Donate Now”</strong> link below.


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
    )
}