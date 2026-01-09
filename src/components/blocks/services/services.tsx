import Image from "next/image"
import { Pic } from "@/components/ui/pic/pic"
import Link from "next/link"

export default function Services() {





    return (
        <section id="services-section" className=" fixed w-full h-screen lg:h-fit opacity-0 scale-400 z-10 ">
            <div className="bg-background py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-xl/7  font-bold text-accent-primary ">Our Services</h2>
                    <p className="mt-2  max-w-4xl text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl ">
                        <span className="font-light text-foreground">Build Wealth</span> Secure your Future
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-8 lg:grid-cols-6 lg:grid-rows-2">


                        <Link href="/services/business-management" id="home-service1" className="group relative lg:col-span-3 -translate-x-200 opacity-0">
                            <div className="absolute inset-0 rounded-lg bg-second-bg max-lg:rounded-t-2xl lg:rounded-tl-2xl" />


                            <div className="  relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(1rem+1px)] lg:rounded-tl-[calc(1rem+1px)]">
                                <Image
                                    alt=""
                                    src={Pic.BusinessManagement}
                                    className="h-80 object-cover object-left lg:grayscale-40 opacity-80 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-400 z-1"
                                />


                                <div className="bg-second-bg p-10 pt-4 z-2">
                                    
                                    <p className="mt-2 text-lg font-bold tracking-tight text-foreground">Business Management</p>
                                    <p className="mt-2 max-w-lg text-md/6 text-foreground">
                                        Holistic management for entertainers/athletes, including day-to-day operations and income strategy.
                                    </p>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-(--foreground)/15 max-lg:rounded-t-2xl lg:rounded-tl-2xl" />
                        </Link>



                        <Link href="/services/tax-services" id="home-service2" className="group relative lg:col-span-3 translate-x-200 opacity-0">


                            <div className="absolute inset-0 rounded-lg bg-second-bg lg:rounded-tr-2xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(1rem+1px)]">
                                <Image
                                    alt="Tax Services"
                                    src={Pic.TaxServices}
                                    className="h-80 object-cover object-left lg:object-right lg:grayscale-40 opacity-80 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-400 z-1"
                                />
                                <div className="bg-second-bg p-10 pt-4 z-2">
                                   
                                    <p className="mt-2 text-lg font-bold tracking-tight text-foreground">Tax Services</p>
                                    <p className="mt-2 max-w-lg text-md/6 text-foreground">
                                        Proactive planning, compliance, and liability minimization for individuals and businesses.
                                    </p>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-(--foreground)/15 lg:rounded-tr-2xl" />
                        </Link>



                        <Link href="/services/executive-mentorship" id="home-service3" className="group relative lg:col-span-2 -translate-x-200 opacity-0 lg:translate-x-0 lg:opacity-100 ">
                            <div className="absolute inset-0 rounded-lg bg-second-bg lg:rounded-bl-2xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(1rem+1px)]">
                                <Image
                                    alt="Executive Mentorship Service"
                                    src={Pic.ExecutiveMentorship}
                                    className="h-80 object-cover object-left lg:object-center opacity-80 group-hover:scale-110 lg:grayscale-40 group-hover:grayscale-0 transition-all duration-400 z-1"
                                />
                                <div className="bg-second-bg p-10 pt-4 z-2">
                                    
                                    <p className="mt-2 text-lg  font-bold tracking-tight text-foreground">Executive Mentorship</p>
                                    <p className="mt-2 max-w-lg text-md/6 text-foreground">
                                        Performance and wealth strategy mentorship for high-visibility careers.
                                    </p>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-(--foreground)/15 lg:rounded-bl-2xl" />
                        </Link>


                        <Link href="/services/small-business-consulting" id="home-service4" className="group relative lg:col-span-2 translate-x-200 opacity-0 lg:translate-x-0 lg:opacity-100 ">
                            <div className="absolute inset-0 rounded-lg bg-second-bg" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                <Image
                                    alt=""
                                    src={Pic.SmallBusiness}
                                    className="h-80 object-cover opacity-80 group-hover:scale-110 lg:grayscale-40 group-hover:grayscale-0 transition-all duration-400 z-1"
                                />
                                <div className="bg-second-bg p-10 pt-4 z-2">
                                    
                                    <p className="mt-2 text-lg font-bold tracking-tight text-foreground">Small Business Consulting</p>
                                    <p className="mt-2 max-w-lg text-md/6 text-foreground">
                                        Strategic development from early-stage planning to operational structure.
                                    </p>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-(--foreground)/15" />
                        </Link>


                        <Link href="/services/strategic-financial-planning" id="home-service5" className="group relative lg:col-span-2 -translate-x-200 opacity-0 lg:translate-x-0 lg:opacity-100 ">
                            <div className="absolute inset-0 rounded-lg bg-second-bg max-lg:rounded-b-2xl lg:rounded-br-2xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(1rem+1px)] lg:rounded-br-[calc(1rem+1px)]">
                                <Image
                                    alt="Financial Planning Service"
                                    src={Pic.FinancialPlanning}
                                    className="h-80 object-cover opacity-80 group-hover:scale-110 lg:grayscale-40 group-hover:grayscale-0 transition-all duration-400 z-1"
                                />
                                <div className="bg-second-bg p-10 pt-4 z-2">
                                    
                                    <p className="mt-2 text-lg font-bold tracking-tight text-foreground">Strategic Financial Planning</p>
                                    <p className="mt-2 max-w-lg text-md/6 text-foreground">
                                        Align your financial resources with your long-term vision. 
                                    </p>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-(--foreground)/15 max-lg:rounded-b-2xl lg:rounded-br-2xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
