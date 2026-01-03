import Image from "next/image"
import { Pic } from "@/components/ui/pic/pic"

export default function Services() {
    return (
        <section id="services-section" className=" fixed w-full h-screen lg:h-fit opacity-0 scale-400 ">
            <div className="bg-background py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-base/7 font-semibold text-accent-secondary">Our Services</h2>
                    <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
                        <span className="font-light">Build Wealth</span> <br /> Protect your Future
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">


                        <div id="home-service1" className="relative lg:col-span-3 -translate-x-200 opacity-0">
                            <div className="absolute inset-0 rounded-lg bg-second-bg max-lg:rounded-t-2xl lg:rounded-tl-2xl" />


                            <div  className="  relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(1rem+1px)] lg:rounded-tl-[calc(1rem+1px)]">
                                <Image
                                    alt=""
                                    src={Pic.BusinessManagement}
                                    className="h-80 object-cover object-left opacity-80"
                                />


                                <div className=" p-10 pt-4">
                                    <h3 className="text-sm/4 font-semibold text-accent-secondary">Service 01</h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-foreground">Business Management</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-foreground/70">
                                       Holistic management for entertainers/athletes, including day-to-day operations and income strategy.
                                    </p>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-(--foreground)/15 max-lg:rounded-t-2xl lg:rounded-tl-2xl" />
                        </div>



                        <div id="home-service2" className="relative lg:col-span-3 translate-x-200 opacity-0">


                            <div className="absolute inset-0 rounded-lg bg-second-bg lg:rounded-tr-2xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(1rem+1px)]">
                                <Image
                                    alt=""
                                    src={Pic.TaxServices}
                                    className="h-80 object-cover object-left lg:object-right opacity-80"
                                />
                                <div className="p-10 pt-4">
                                    <h3 className="text-sm/4 font-semibold text-accent-secondary">Service 02</h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-foreground">Tax Services</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-foreground/70">
                                        Proactive planning, compliance, and liability minimization for individuals and businesses.
                                    </p>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-(--foreground)/15 lg:rounded-tr-2xl" />
                        </div>
                        <div className="relative lg:col-span-2">
                            <div className="absolute inset-0 rounded-lg bg-second-bg lg:rounded-bl-2xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(1rem+1px)]">
                                <Image
                                    alt=""
                                    src={Pic.ExecutiveMentorship}
                                    className="h-80 object-cover object-left lg:object-center opacity-80"
                                />
                                <div className="p-10 pt-4">
                                    <h3 className="text-sm/4 font-semibold text-accent-secondary">Service 03</h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-foreground">Executive Mentorship</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-foreground/70">
                                        Performance and wealth strategy mentorship for high-visibility careers.
                                    </p>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-(--foreground)/15 lg:rounded-bl-2xl" />
                        </div>
                        <div className="relative lg:col-span-2">
                            <div className="absolute inset-0 rounded-lg bg-second-bg" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                <Image
                                    alt=""
                                    src={Pic.SmallBusiness}
                                    className="h-80 object-cover opacity-80"
                                />
                                <div className="p-10 pt-4">
                                    <h3 className="text-sm/4 font-semibold text-accent-secondary">Service 04</h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-foreground">Small Business Consulting</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-foreground/70">
                                       Strategic development from early-stage planning to operational structure.
                                    </p>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-(--foreground)/15" />
                        </div>
                        <div className="relative lg:col-span-2">
                            <div className="absolute inset-0 rounded-lg bg-second-bg max-lg:rounded-b-2xl lg:rounded-br-2xl" />
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(1rem+1px)] lg:rounded-br-[calc(1rem+1px)]">
                                <Image
                                    alt=""
                                    src={Pic.FinancialPlanning}
                                    className="h-80 object-cover opacity-80"
                                />
                                <div className="p-10 pt-4">
                                    <h3 className="text-sm/4 font-semibold text-accent-secondary">Service 05</h3>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-foreground">Strategic Financial Planning</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-foreground/70">
                                        Align your financial resources with your long-term vision. Drive sustainable growth for your future.
                                    </p>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-(--foreground)/15 max-lg:rounded-b-2xl lg:rounded-br-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
