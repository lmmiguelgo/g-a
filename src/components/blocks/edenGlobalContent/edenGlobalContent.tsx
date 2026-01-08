import { Pic } from "@/components/ui/pic/pic"
import Image from "next/image"

export default function EdenGlobalContent() {
  return (
    <section id="philanthropy-section-eden" className="hidden opacity-0 fixed w-full overflow-hidden bg-background py-24 sm:py-32 ">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xl/7 font-bold text-accent-primary">Philanthropy</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
            <span className="font-light">Empowering Lives</span> Saving the Future
          </h1>

        </div>
        <section className="mt- lg:mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8 ">
          <div id="philanthropy-section-writing-eden" className="lg:pr-8 -translate-x-280 opacity-0  ">

            <div className="flex items-center justify-center">
              <h1 className="font-secondary font-bold text-4xl">BACK TO <br /> EDEN GLOBAL</h1>
              <Image className="w-60 pt-20" src={Pic.EdenGlobal} alt="Eden Global" />

            </div>

            <p className="mt-6 text-lg/7 text-accent-secondary">
              The mission of <strong>Back to Eden Global</strong> is to <strong>address the need for economic empowerment</strong>, using entrepreneurial opportunities on the continent of Africa, and throughout the diaspora. <br />

              It employs educational, agricultural, and ecological stewardship initiatives to <strong>activate agency and develop</strong> entrepreneurial opportunities at project sites in <strong>Uganda, Zambia, Ghana, Nigeria, and the USA.</strong> <br />



            </p>

          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8  grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8 hidden lg:grid ">
              <div id="Philanthropy-USExample" className="aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 ">
                <Image

                  alt=""
                  src={Pic.USExample}
                  className="block size-full object-cover"
                />
              </div>
              <div id="Philanthropy-ZambiaExample" className="-mt-8 aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 lg:-mt-40 ">
                <Image
                  alt=""
                  src={Pic.ZambiaExample}
                  className="block size-full object-cover"
                />
              </div>
              <div id="Philanthropy-KenyaExample" className="aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 ">
                <Image
                  alt=""
                  src={Pic.KenyaExample}
                  className="block size-full object-cover"
                />
              </div>
              <div id="Philanthropy-UgandaExample" className="-mt-8 aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 lg:-mt-40 ">
                <Image
                  alt=""
                  src={Pic.UgandaExample}
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>

        </section>
      </div>
    </section>
  )
}