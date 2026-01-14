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
          <strong>Gordon & Associates</strong> guides <strong>small business owners</strong> through the full lifecycle of <strong>building a business—from early‑stage</strong> planning to <strong>everyday operational structure.</strong> We help clarify your vision, streamline your processes, and strengthen the <strong>foundation of your organization.</strong> Our team ensures you have the systems needed to <strong>make informed decisions</strong> and <strong>achieve consistent growth.</strong> With a structured approach,<strong> we transform concepts into sustainable, well‑run businesses.</strong>
        </p>
      </div>
    </ServiceSingle>
  )
}

export default SmallBusinessConsultingPage