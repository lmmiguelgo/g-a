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
          <strong>Gordon & Associates</strong> delivers full‑service <strong>Business Management</strong> designed for the dynamic demands of <strong>Entertainers and Athletes.</strong> We oversee day‑to‑day financial operations, coordinate with agents, teams, and legal advisors, and <strong>provide clear strategies to navigate income fluctuation</strong>, major purchases, and <strong>Long‑term financial planning</strong>. Our proactive communication ensures <strong>Clients stay informed about decisions</strong> that impact taxes, career opportunities, and overall <strong>financial health</strong>. With a disciplined yet flexible approach, we <strong>help Clients </strong>maintain stability, <strong>Maximize earnings</strong>, and stay focused on performance—both on the field and on the screen.
        </p>
      </div>
      </ServiceSingle>

    </>
  )
}

export default BusinessManagementPage