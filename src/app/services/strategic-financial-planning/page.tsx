import ServiceSingle from "@/components/blocks/serviceSingle/serviceSingle"
import { Pic } from "@/components/ui/pic/pic"

const StrategicFinancialPlanningPage = () => {
  return (
    <ServiceSingle
          Servicenumber={"05"}
          Title="Strategic Financial Planning"
          Picture={Pic.FinancialPlanningMobile}>
          <div className="my-8">
            <p>
            <strong>  Strategic Financial Planning</strong> turns your <strong>long‑term goals</strong> into a <strong>clear, actionable roadmap</strong>. We analyze your <strong>complete financial picture</strong> to design <strong>a strategy that adapts as your life evolves.</strong> Our team prioritizes risk management and wealth preservation, <strong>ensuring you are prepared</strong> for both market shifts and personal milestones. Whether <strong>building a legacy or planning for financial </strong>independence, <strong>we provide the disciplined oversight needed</strong> to turn ambition into reality.
            </p>
          </div>
        </ServiceSingle>
  )
}

export default StrategicFinancialPlanningPage