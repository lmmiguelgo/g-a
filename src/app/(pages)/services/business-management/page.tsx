import ServiceSingle from "@/components/blocks/serviceSingle/serviceSingle"
import { Pic } from "@/components/ui/pic/pic"


const BusinessManagementPage = () => {
  return (
    <>
      <ServiceSingle 
      Servicenumber={"01"}
      Title="Business Management"
      Picture={Pic.BusinessManagementMobile}>
      <div className="my-8">
        <p>
          Gordon & Associates delivers full‑service business management designed for the dynamic demands of entertainers and athletes. We oversee day‑to‑day financial operations, coordinate with agents, teams, and legal advisors, and provide clear strategies to navigate income fluctuation, major purchases, and long‑term financial planning. Our proactive communication ensures clients stay informed about decisions that impact taxes, career opportunities, and overall financial health. With a disciplined yet flexible approach, we help clients maintain stability, maximize earnings, and stay focused on performance—both on the field and on the screen.
        </p>
      </div>
      </ServiceSingle>

    </>
  )
}

export default BusinessManagementPage