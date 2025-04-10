import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer>
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">
                <span className="text-white">Balaji</span>
                <span className="text-red-500">Honda</span>
              </h3>
              <p className="text-slate-300 mb-6">
                Balaji Honda is an authorized Honda dealership offering new cars, service, spare parts, and accessories
                with a customer-first approach.
              </p>
              {/* <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="h-10 w-10 rounded-full bg-slate-800 hover:bg-red-600 flex items-center justify-center transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{Icon.name}</span>
                  </Link>
                ))}
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/cars", label: "New Cars" },
                  { href: "/services", label: "Services" },
                  // { href: "/offers", label: "Offers & Promotions" },
                  { href: "/contact", label: "Contact Us" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-slate-300 hover:text-white flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-red-500" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-red-500 shrink-0" />
                  <span className="text-slate-300">+91 9840612345</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-red-500 shrink-0" />
                  <span className="text-slate-300">sm@balajihonda.in</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-500 shrink-0" />
                  <span className="text-slate-300">
                  Building No./Flat No.: 99/4BT
Name Of Premises/Building: BALAJI AUTO CARE
Road/Street: PERUMUGAI VILLAGE
City/Town/Village: VELLORE
District: Vellore
                    <br />
                    State:Tamil Nadu
                    Pin Code:632009
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-red-500 shrink-0" />
                  <div className="text-slate-300">
                    <p>Monday-Saturday: 9AM-7PM</p>
                    <p>Sunday: 10AM-6PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-6">Newsletter</h3>
              <p className="text-slate-300 mb-4">
                Subscribe to our newsletter for latest updates on new models, offers and automotive news.
              </p>
              <form className="space-y-3">
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-slate-800 border-slate-700 text-white rounded-r-none"
                  />
                  <Button className="bg-red-600 hover:bg-red-700 rounded-l-none">Send</Button>
                </div>
                <p className="text-xs text-slate-400">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white py-4">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© 2024 Balaji Honda. All rights reserved.</p>
            <div className="flex gap-4 text-sm">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/sitemap", label: "Sitemap" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-slate-400 hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
