import ServiceSingle from "@/components/blocks/serviceSingle/serviceSingle"
import { Pic } from "@/components/ui/pic/pic"

const AboveTheNeckPage = () => {
  return (
    <ServiceSingle
          Servicenumber={"05"}
          Title="Above the Neck, Inc."
          Picture={Pic.FinancialPlanningMobile}>
          <div className="my-8">
            <p>
            Gordon & Associates is proud to partner with Above the Neck, Inc., a leading platform dedicated to marketplace financial literacy, financial education, and financial empowerment. Through this collaboration, we expand our impact beyond traditional advisory services by offering accessible, culturally relevant programming focused on financial decision‑making, entrepreneurship, and long‑term life planning.
            </p> <br />
            <h2 className="text-xl text-foreground font-semibold">What does Above the Neck provide?</h2><br />
            <p>Above the Neck, Inc. specializes in delivering financial literacy and education through a variety of engaging formats—including athlete entrepreneurship programs, small business workshops, keynote speeches, and panel discussions. These experiences are designed to meet audiences where they are, blending real‑world insight with practical guidance that can be applied to personal, professional, and financial growth.</p>
          </div>
        </ServiceSingle>
  )
}

export default AboveTheNeckPage