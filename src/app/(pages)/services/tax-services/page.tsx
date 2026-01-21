import ServiceSingle from "@/components/blocks/serviceSingle/serviceSingle"
import { Pic } from "@/components/ui/pic/pic"

const TaxServicesPage = () => {
  return (
    <ServiceSingle
      Servicenumber={"02"}
      Title="Tax Services"
      Picture={Pic.TaxServicesMobile}>
      <div className="my-8">
        <p>
          Gordon & Associates provides year‑round tax planning alongside complete preparation of individual and business returns. Through consistent communication, we help clients navigate life changes and major decisions with tax implications. Our team monitors regulatory updates and conducts thorough reviews of deductions and credits to identify every possible savings opportunity. This proactive approach ensures clients stay compliant, minimize liabilities, and maximize financial benefits.
        </p>
      </div>
    </ServiceSingle>
  )
}

export default TaxServicesPage