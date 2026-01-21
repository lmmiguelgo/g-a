import ServiceSingle from "@/components/blocks/serviceSingle/serviceSingle"
import { Pic } from "@/components/ui/pic/pic"

const SmallBusinessConsultingPage = () => {
  return (
    <ServiceSingle
      Servicenumber={"04"}
      Title="Small Business Consulting"
      Picture={Pic.SmallBusinessMobile}>
      <div className="my-8">
        <p>
          Gordon & Associates guides small business owners through the full lifecycle of building a business—from early‑stage planning to everyday operational structure. We help clarify your vision, streamline your processes, and strengthen the foundation of your organization. Our team ensures you have the systems needed to make informed decisions and achieve consistent growth. With a structured approach, we transform concepts into sustainable, well‑run businesses.
        </p>
      </div>
    </ServiceSingle>
  )
}

export default SmallBusinessConsultingPage