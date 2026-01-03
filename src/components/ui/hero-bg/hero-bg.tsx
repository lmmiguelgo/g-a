import Image from "next/image"
import { Pic } from "../pic/pic"

const HeroBg = () => {
  return (
    <div  className="fixed w-full h-screen overflow-hidden flex items-end ">
      
      <Image id="main-background" className="w-full h-full scale-132 opacity-80 pointer-events-none object-cover " src={Pic.Background} alt="Background" />

      
    </div>
  )
}

export default HeroBg