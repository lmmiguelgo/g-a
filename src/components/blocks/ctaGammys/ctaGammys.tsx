export default function CtaGammys() {
    return (
        <div id="cta-gammys" className="bg-background hidden">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-second-bg px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
                            click on the “Donate Now” link below.


                        </p>
                        <div className="mt-10 flex items-center  gap-x-6 justify-start">
                            <a
                                href="#"
                                className="rounded-md bg-accent-primary px-3.5 py-2.5 text-sm font-semibold inset-ring inset-ring-white/5 hover:bg-accent-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                {' '}
                                Donate Now{' '}
                            </a>
                            <a href="#" className="text-sm/6 font-semibold hover:text-white">
                                Contact us
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                        <p className="mt-8 text-lg/8 text-pretty text-foreground text-start">
                            You can Alternatively, send payable checks to the <strong>California Community Foundation</strong>, noting that the donation is for <strong>Gammy’s House</strong>. Checks should be mailed to: <br />
                        </p>

                        <address className="mt-8 not-italic">
                            <strong>Gammy’s House – Fund# D805</strong>
                            <br />
                            <strong>c/o California Community Foundation</strong>
                            <br />
                            221 S. Figueroa St., Suite 400
                            <br />
                            Los Angeles, CA 90012
                        </address>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img
                            alt="App screenshot"
                            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                            width={1824}
                            height={1080}
                            className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}