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
            <strong>Gordon & Associates </strong>is proud to partner with <strong>Above the Neck, Inc</strong>, a leading platform dedicated to <strong>marketplace financial literacy, financial education, and empowerment.</strong> Through this collaboration, we expand our impact beyond traditional advisory services by offering accessible,<strong> culturally relevant programming </strong>focused on financial <strong>decision‑making, entrepreneurship, and long‑term life planning.</strong>
            </p> <br />
            <h2 className="text-xl text-foreground font-semibold">What does Above the Neck provide?</h2><br />
            <p><strong>Above the Neck, Inc.</strong> specializes in delivering <strong>financial literacy and education</strong> through a variety of engaging formats—including athlete entrepreneurship programs, small business workshops, keynote speeches, and panel discussions. These experiences are designed to <strong>meet audiences</strong> where they are, blending <strong>real‑world insight</strong> with <strong>practical guidance</strong> that can be applied to personal, professional, and financial growth.</p>
          </div>
        </ServiceSingle>
  )
}

export default AboveTheNeckPage