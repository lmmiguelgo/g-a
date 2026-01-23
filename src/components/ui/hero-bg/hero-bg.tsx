import Image from "next/image"
import { Pic } from "../pic/pic"

const HeroBg = () => {
  return (
    <div  className="fixed w-full h-screen overflow-hidden flex items-end ">
      
      <Image id="main-background" className="w-full h-full pointer-events-none object-contain scale-600 lg:scale-none  lg:object-cover lg:object-center -translate-x-240 lg:translate-0  " src={Pic.Background} alt="Background"
      loading="eager" />

      
    </div>
  )
}

export default HeroBg