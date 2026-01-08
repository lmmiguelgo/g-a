import Image from "next/image"
import { Pic } from "@/components/ui/pic/pic"
import path from "path";

const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '37' },
    { label: 'Countries', value: '12' },
    { label: 'Raised', value: '$25M' },
]

export default function ServiceSingle({ Servicenumber, Title, Children, Picture }: { Servicenumber?: number ; Title?: string ; Children?: React.ReactNode ; Picture ?: any }) {
    return (
        <div className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-4">
                        <div className="relative overflow-hidden rounded-3xl bg-background px-6 pt-64 pb-9 after:pointer-events-none after:absolute after:inset-0 after:rounded-3xl after:inset-ring after:inset-ring-white/10 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 flex lg:h-180">
                           {Picture && (
                                <Image
                                    alt=""
                                    src={Picture}
                                    className="absolute inset-0 size-full rounded-3xl object-cover brightness-160 grayscale-100 "
                                    width={100}
                                />
                            )}
                            <div className="absolute inset-0 bg-background mix-blend-multiply" />
                            <div
                                aria-hidden="true"
                                className="absolute top-1/2 left-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                            >
                                <div
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                    }}
                                    className="aspect-square w-274.25 bg-linear-to-tr from-[#b00023e7] to-[#1a1a1a2e] opacity-40"
                                />
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="text-base/7 text-foreground/80 lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-accent-primary">Service {Servicenumber}</p>
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
                                {Title}
                            </h1>
                            <div className="max-w-xl">
                                {Children}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}