import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Salman Khan</h3>
              <p className="text-muted-foreground">Performance Marketing Consultant</p>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Helping businesses achieve exceptional growth through data-driven digital marketing strategies and
              performance optimization.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Google Ads Management</li>
              <li>Social Media Advertising</li>
              <li>Performance Marketing</li>
              <li>Programmatic Advertising</li>
              <li>E-Commerce Marketing</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Expertise</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Strategic Planning</li>
              <li>Analytics & Reporting</li>
              <li>Landing Page Optimization</li>
              <li>Client Management</li>
              <li>Team Leadership</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+92 333 3251441</li>
              <li>salmankhan1@outlook.com</li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Salman Khan. All rights reserved.</p>
          <div className="flex gap-2">
            <Badge variant="outline" className="text-xs">
              Google Certified
            </Badge>
            <Badge variant="outline" className="text-xs">
              Facebook Partner
            </Badge>
            <Badge variant="outline" className="text-xs">
              HubSpot Certified
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  )
}
