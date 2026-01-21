import ServiceSingle from "@/components/blocks/serviceSingle/serviceSingle"
import { Pic } from "@/components/ui/pic/pic"

const ExecutiveMentorshipPage = () => {
  return (
    <ServiceSingle
      Servicenumber={"03"}
      Title="Executive Mentorship"
      Picture={Pic.ExecutiveMentorshipMobile}>
      <div className="my-8">
        <p>
          Executive Performance & Wealth Strategy Mentorship delivers elite guidance for individuals navigating high‑pressure, high‑visibility careers. We help you sharpen leadership habits, optimize your decision‑making process, and implement financial systems that protect and grow your wealth. By blending practical business strategy with tailored financial insight, this service equips you to manage complexity with confidence. Ideal for creators, executives, and entrepreneurs, it provides a trusted partner committed to your long‑term performance and prosperity.
        </p>
      </div>
    </ServiceSingle>
  )
}

export default ExecutiveMentorshipPage