import { Pic } from "../pic/pic"
import Image from "next/image"
import SubtleWaveBackground from "@/components/blocks/background/background"

export default function HomeTitle({ children, Light, Bold, Id, IdTitle, IdSubtitle }: { children: React.ReactNode, Light?: string, Bold?: string, Id?: string, IdTitle?: string, IdSubtitle?: string }) {

    return (
        <>
        
        

            <div id={Id} className="hidden fixed  flex-col items-center justify-center h-full w-full    opacity-0 bg-background z-20">

                <SubtleWaveBackground />
                
            



                <h1 id={IdTitle} className="text-[1000rem]  -translate-x-180 font-semibold  font-secondary    "> {children}</h1>
                <h2 id={IdSubtitle} className="  text-xl lg:text-2xl font-light lg:bottom-20 opacity-0 px-8 text-center "> {Light} <span className="font-bold ">{Bold}</span></h2>

            </div>
        
        </>


    )
}