import React from 'react';
import { 
  Calendar, 
  CreditCard, 
  TrendingUp, 
  UploadCloud, 
  FileCheck, 
  ArrowUpRight 
} from 'lucide-react';

/**
 * ClientLinks Component
 * * A responsive Next.js component for client login shortcuts.
 * Matches the Gordon & Associates design system:
 * - bg-background, text-foreground
 * - text-accent-primary for highlights
 * - Max-width 7xl containers
 */
export default function LoginPage() {
  const categories = [
    {
      title: "General",
      links: [
        {
          name: "Online Calendar",
          description: "Book a Meeting with Our Team",
          icon: <Calendar className="size-6" />,
          href: "https://outlook.office365.com/book/GordonAssociates@gordonandassociates.biz/?ismsaljsauthenabled=true", // Add actual URL here
        }
      ]
    },
    {
      title: "Business Management / Consulting",
      links: [
        {
          name: "AgilLink",
          description: "Online Bill Pay and Invoice Approval",
          icon: <CreditCard className="size-6" />,
          href: "https://idp.agillink.com/Account/Login?ReturnUrl=https%3A%2F%2Fidp.agillink.com%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dagillink%26redirect_uri%3Dhttps%253A%252F%252Flogin.agillink.com%252Fsignin-oidc%26response_type%3Dcode%26scope%3Dopenid%2520profile%26state%3DOpenIdConnect.AuthenticationProperties%253DupdngBxlHknNIjxZthTTzvk_yh8Bl_zBT3ZrBWcN5pQB5nWhJoQmYRR1NGJP84vK3O6bLk6SOajiUrMmkYZT94cb8WTSdGPBFPbkaBN02PL3kmp6Tq7Ahzvl-0LduZ-ZyvvbrlFanu39n82w2svd6huId-0o7UPYlIR7gU4vEePon2nMQnrcnNbjCLf5uW-m5PKxW5IE-Owod4SftKLMZk1qdpA%26response_mode%3Dform_post%26nonce%3D638767222741027579.MWY3YmJjZDYtNGY3NC00M2Q0LWE5ZDktOTQ2MTBkNTAyZWVmMDhmZGVhMjktODkzOC00OWZmLWI2YTItOGVmMTkzNmQyMzhl%26x-client-SKU%3DID_NET472%26x-client-ver%3D8.3.0.0",
        },
        {
          name: "eMoney",
          description: "Wealth Management Portal",
          icon: <TrendingUp className="size-6" />,
          href: "https://wealth.emaplan.com/ema/SignIn?ema%2Fria%2Fgordonandassociates",
        }
      ]
    },
    {
      title: "Tax Services",
      links: [
        {
          name: "Intuit",
          description: "Secure Tax Document Upload",
          icon: <UploadCloud className="size-6" />,
          href: "https://accounts.intuit.com/app/sign-in?app_group=ProConnectTaxOnline&asset_alias=Intuit.tax.shoebox.browser.client&redirect_uri=https%3A%2F%2Flink.intuit.com%2Fhome%2F#%2Frequest%2Fquestions",
        },
        {
          name: "SafeSend",
          description: "Secure Tax Return Portal",
          icon: <FileCheck className="size-6" />,
          href: "https://gordonassociatesanaccountancycorporation.ssportal.com",
        }
      ]
    }
  ];

  return (
    <div className="w-full bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-lg/7 font-bold text-accent-primary">Client Portals</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Online Access
          </p>
          <p className="mt-6 text-lg/8 text-foreground">
            Securely manage your finances, upload documents, and schedule consultations 
            through our dedicated client service platforms.
          </p>
        </div>

        {/* LINKS GRID */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category.title} className="space-y-8">
                {/* Category Title */}
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-bold text-foreground border-l-4 border-accent-primary pl-4">
                    {category.title}
                  </h3>
                  <div className="h-px flex-auto bg-foreground/10" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col justify-between rounded-2xl bg-second-bg p-8 transition-all hover:bg-accent-primary/5 hover:ring-2 hover:ring-accent-primary/50 ring-1 ring-foreground/5 shadow-sm"
                    >
                      <div>
                        {/* Icon/Logo Container */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-primary text-white shadow-md transition-transform group-hover:scale-110">
                          {link.icon}
                        </div>
                        
                        <div className="mt-6">
                          <h4 className="text-xl font-bold text-foreground group-hover:text-accent-primary transition-colors">
                            {link.name}
                          </h4>
                          <p className="mt-2 text-md/6 text-foreground">
                            {link.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center text-md font-semibold text-accent-primary">
                        Access Portal
                        <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}