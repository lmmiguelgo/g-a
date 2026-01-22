

import Link from "next/link"
import { CheckCircle } from "lucide-react"

const ThanksPage = () => {
  return (
    <div className="relative isolate min-h-screen bg-background flex flex-col items-center justify-center">
        {/* Background decoration matching contact page style */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-1155/678 can be written as `w-288.75 bg-linear-to-br from-accent-primary to-accent-secondary opacity-20"
                />
            </div>
        </div>

      <div className="px-6 py-24 sm:py-32 lg:px-8 text-center max-w-2xl mx-auto">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-primary/10">
            <CheckCircle className="h-28 w-28 text-accent-primary" aria-hidden="true" />
        </div>
        
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Thank you!</h1>
        <p className="mt-6 text-lg leading-7 text-foreground">
          We have received your message and will be in touch shortly. A confirmation email has been sent to the address you provided.
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-accent-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-primary/80 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-accent-primary transition-all duration-300"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThanksPage