import { Pic } from "../pic/pic"
import Image from "next/image"

export default function HomeTitle({children, Light, Bold, Id, IdTitle, IdSubtitle}: {children: React.ReactNode, Light?: string, Bold?: string, Id?: string, IdTitle?: string, IdSubtitle?: string}) {

    return (
        <div id={Id} className="hidden fixed  flex-col items-center justify-center h-full w-full gap-100 opacity-0 ">
            


            <h1 id={IdTitle} className="text-[1000rem] -translate-x-180 font-semibold  font-secondary    "> {children}</h1>
            <h2 id={IdSubtitle} className="absolute text-4xl font-light bottom-20 opacity-0 "> {Light} <span className="font-bold">{Bold}</span></h2>

        </div>
    )
}