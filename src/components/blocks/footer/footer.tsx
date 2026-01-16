import Link from 'next/link'
import Image from 'next/image'
import { Pic } from '@/components/ui/pic/pic'

const navigation = {
  services: [
    { name: 'Business Management', href: '/services/business-management' },
    { name: 'Tax Services', href: '/services/tax-services' },
    { name: 'Executive Mentorship', href: '/services/executive-mentorship' },
    { name: 'Small Business Consulting', href: '/services/small-business-consulting' },
    { name: 'Above the Neck, Inc.', href: '/services/above-the-neck' },
  ],
  company: [
    { name: 'Our Story & Standards', href: '/company#company-content' },
    { name: 'Laura Gordon', href: '/company#company-page-laura' },
    { name: 'Isaac M', href: '/company#company-page-isaac' },
  ],
  philanthropy: [
    { name: "Gammy's House", href: "/philanthropy#philanthropy-section" },
    { name: "Back to Eden Global", href: "/philanthropy#philanthropy-page-eden" },
  ],
  connect: [
    { name: 'Contact', href: '/contact' },
    { name: 'Press', href: '/press' },
    { name: 'Client Portal', href: '/login' },
    { name: 'Terms', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-second-bg border-t border-accent-secondary/20">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="block">
              <Image
                alt="Gordon & Associates"
                src={Pic.LogoWide}
                className="h-20 w-auto"
              />
            </Link>
            
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-accent-secondary hover:text-accent-primary transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-accent-secondary hover:text-accent-primary transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Philanthropy</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.philanthropy.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-accent-secondary hover:text-accent-primary transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Connect</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.connect.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-accent-secondary hover:text-accent-primary transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-accent-secondary/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-accent-secondary">
            &copy; {new Date().getFullYear()} Gordon & Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}