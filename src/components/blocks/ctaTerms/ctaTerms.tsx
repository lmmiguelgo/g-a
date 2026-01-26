"use client";


import Link from 'next/link';

export default function CtaTerms() {
    return (
        <div id="cta-terms" className="w-full lg:pt-40">
            <div className="mx-auto max-w-7xl  py-12 sm:px-6 sm:py-16 lg:px-8 p-4">
                <div className="relative isolate overflow-hidden bg-second-bg px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 pb-12 lg:pb-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute top-1/2 left-1/2 -z-10 w-5xl h-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#terms-gradient)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="terms-gradient">
                                <stop stopColor="var(--accent-primary)" />
                                <stop offset={1} stopColor="var(--accent-secondary)" />
                            </radialGradient>
                        </defs>
                    </svg>

                    <div className="mx-auto max-w-xl lg:mx-0 lg:flex-auto lg:py-32 text-left lg:w-1/2">
                        <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
                            Stay Connected <br /> <span className="font-semibold">Opt-in </span>
                        </h2>
                        <p className="mt-6 text-lg/8 text-pretty text-foreground/80 text-start">
                            Fill out the form to get started.
                            You can unsubscribe at any time.
                        </p>
                    </div>

                    <div className="relative mt-16 lg:mt-0 lg:flex-auto lg:py-16 lg:w-1/2">
                        <form action="https://formsubmit.co/info@gordonandassociates.biz" method="POST" className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_next" value="https://gordonandassociates.biz/thanks" />
                            <input type="hidden" name="_subject" value="New Opt-In Submission" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_autoresponse" value="Thank you for subscribing to updates from Gordon & Associates."></input>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-foreground">First name <span className="text-red-500">*</span></label>
                                    <div className="mt-2">
                                        <input required type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 bg-white/5 px-3 py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent-primary sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-foreground">Last name <span className="text-red-500">*</span></label>
                                    <div className="mt-2">
                                        <input required type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 bg-white/5 px-3 py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent-primary sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-foreground">Phone number <span className="text-red-500">*</span></label>
                                    <div className="mt-2">
                                        <input required type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 bg-white/5 px-3 py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent-primary sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex gap-x-3 items-start">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="sms-consent"
                                                name="sms-consent"
                                                type="checkbox"
                                                required
                                                className="h-4 w-4 rounded border-white/10 bg-white/5 text-accent-primary focus:ring-accent-primary"
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="sms-consent" className="font-medium text-foreground">
                                                I agree to receive SMS text messages from Gordon & Associates.
                                            </label>
                                            <p className="text-foreground/60 text-xs mt-1">
                                                By checking this box, you consent to receive text messages from Gordon & Associates.
                                                Msg frequency varies. Msg & data rates may apply.
                                                Reply STOP to opt out or HELP for help.
                                                View our <Link href="/terms#sms-terms" className="underline hover:text-accent-primary" target="_blank">Terms</Link>
                                                {' '}and{' '}
                                                <Link href="/terms#privacy-policy" className="underline hover:text-accent-primary" target="_blank">Privacy Policy</Link>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="w-full rounded-md bg-accent-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-accent-primary/80 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent-primary">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
