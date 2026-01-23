import { Pic } from "@/components/ui/pic/pic"
import Image from "next/image"

export default function GammysContent() {
  return (
    <section id="philanthropy-section" className="hidden fixed opacity-0 w-full overflow-hidden bg-background py-24 sm:py-32 scale-400">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xl/7 font-bold text-accent-primary">Philanthropy</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
            <span className="font-light">Empowering Lives</span> Saving the Future
          </h1>

        </div>
        <section className="mt- lg:mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8">
          <div id="philanthropy-section-writing" className="lg:pr-8 -translate-x-280 opacity-0 ">

            <Image className="w-120 pt-20" src={Pic.GammysHouse} alt="Gammy's House" />

            <p className="mt-6 text-lg/7 text-foreground">
              Founded in 2003 by Laura Gordon and inspired by her late grandmother. Gammy’s House is a corporate foundation of Gordon & Associates. It is
              a philanthropic organization dedicated to educating, equipping, and empowering the next generation of Black entrepreneurs.
              Gammy’s House operates as a component fund of the California Community Foundation.
            </p>
            <p className="mt-8 text-lg/7 text-foreground">
              Gammy’s House has invested in global initiatives that foster equity in education and entrepreneurship, including:
            </p>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
              <div id="Philanthropy-USExample" className="aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 -translate-x-80 lg:translate-x-0 lg:translate-y-200 opacity-0">
                <Image

                  alt=""
                  src={Pic.USExample}
                  className="block size-full object-cover"
                />
              </div>
              <div id="Philanthropy-ZambiaExample" className="-mt-8 aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 lg:-mt-40 translate-x-80  lg:translate-x-0 lg:-translate-y-200 lg:opacity-0">
                <Image
                  alt=""
                  src={Pic.ZambiaExample}
                  className="block size-full object-cover"
                />
              </div>
              <div id="Philanthropy-KenyaExample" className="aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 -translate-x-80 lg:translate-x-0 lg:translate-y-200 lg:opacity-0">
                <Image
                  alt=""
                  src={Pic.KenyaExample}
                  className="block size-full object-cover"
                />
              </div>
              <div id="Philanthropy-UgandaExample" className="-mt-8 aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-foreground/10 lg:-mt-40 translate-x-80 lg:translate-x-0 lg:-translate-y-200 lg:opacity-0">
                <Image
                  alt=""
                  src={Pic.UgandaExample}
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
          <div id="philanthropy-section-flags" className="max-lg:mt-16 lg:col-span-1 lg:-translate-x-280 lg:opacity-0 ">

            <hr className=" border-t border-second-bg" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 font-semibold">
              <div className="flex flex-col gap-y-2 border-b border-dotted border-second-bg pb-4">
                <dt className="text-lg/6 text-foreground">Building water wells in Zambia.</dt>
                <Image className="rounded-lg border-4 border-foreground/20 aspect-video" src={Pic.ZambiaFlag} alt="Zambia Flag" />
              </div>
              <div className="flex flex-col gap-y-2 border-b border-dotted border-second-bg pb-4">
                <dt className="text-lg/6 text-foreground">Building schools in Kenya.</dt>
                <Image className="rounded-lg border-4 border-foreground/20 aspect-video" src={Pic.KenyaFlag} alt="Kenya Flag" />
              </div>
              <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-second-bg max-sm:pb-4">
                <dt className="text-lg/6 text-foreground">Providing micro-lending and scholarships in the United States.</dt>
                <Image className="rounded-lg border-4 border-foreground/20 aspect-video" src={Pic.UnitedStatesFlag} alt="United States Flag" />
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-lg/6 text-foreground">Empowering business owners in Uganda.</dt>
                <Image className="rounded-lg border-4 border-foreground/20 aspect-video" src={Pic.UgandaFlag} alt="Uganda Flag" />
              </div>
            </dl>
          </div>
        </section>
      </div>
    </section>
  )
}