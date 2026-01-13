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
          Executive <strong>Performance & Wealth Strategy Mentorship</strong> delivers <strong>elite guidance for individuals</strong> navigating high‑pressure, high‑visibility careers. We help you sharpen leadership habits, <strong>optimize your decision‑making process</strong>, and implement <strong>financial systems</strong> that <strong>protect and grow your wealth</strong>. By blending <strong>practical business strategy</strong> with tailored financial insight, this service equips you to <strong>manage complexity with confidence.</strong> Ideal for <strong>creators, executives, and entrepreneurs,</strong> it provides a <strong>trusted partner</strong> committed to your <strong>long‑term performance and prosperity.</strong>
        </p>
      </div>
    </ServiceSingle>
  )
}

export default ExecutiveMentorshipPage