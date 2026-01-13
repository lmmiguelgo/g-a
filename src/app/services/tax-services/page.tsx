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
          <strong>Gordon & Associates</strong> provides year‑round tax planning alongside complete <strong>preparation of individual and Business returns</strong>. Through consistent communication, <strong>we help Clients navigate life</strong> changes and <strong>major decisions with tax implications.</strong> Our team monitors regulatory updates and conducts thorough reviews of deductions and credits to identify every possible <strong>savings opportunity</strong>. This <strong>proactive approach</strong> ensures clients stay compliant, minimize liabilities, and <strong>maximize financial benefits</strong>.
        </p>
      </div>
    </ServiceSingle>
  )
}

export default TaxServicesPage