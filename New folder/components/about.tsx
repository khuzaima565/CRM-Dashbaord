import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Target, BarChart3 } from "lucide-react"

export function About() {
  const certifications = [
    "Google Analytics Certified",
    "Google Ads Certified",
    "Google Digital Guru",
    "HubSpot Email Marketing",
    "Facebook Social Guru",
    "Google Search 360",
    "Display & Video 360",
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                About Salman Khan
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Digital Marketing Strategist & Performance Expert
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                With over a decade of experience in digital marketing, I specialize in creating data-driven campaigns
                that deliver exceptional results. My expertise spans across performance marketing, programmatic
                advertising, and strategic campaign optimization.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Strategic Planning</h3>
                  <p className="text-sm text-muted-foreground">Data-driven campaign strategies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Performance Focus</h3>
                  <p className="text-sm text-muted-foreground">ROI-driven optimization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Team Leadership</h3>
                  <p className="text-sm text-muted-foreground">Cross-functional collaboration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Industry Expert</h3>
                  <p className="text-sm text-muted-foreground">Multiple certifications</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Certifications & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4f100f8f-c0a8-4d4d-a327-1659e608f10f-s2ikNARWHVBbZXUb6fMt1TOOEkNYkT.png"
                  alt="Salman Khan - Performance Marketing Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold">Salman Khan</h3>
                <p className="text-muted-foreground">Performance Marketing Consultant</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Bachelor of Business Administration (Hons.)
                  <br />
                  Iqra University Karachi
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
