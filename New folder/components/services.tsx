import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Target, BarChart3, Globe, ShoppingCart, Users, TrendingUp, Monitor, PieChart } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Search,
      title: "Google Ads Management",
      description:
        "Complete Google Ads campaign management including Search, Display, Video, and Shopping campaigns with advanced optimization techniques.",
      features: ["Search Campaigns", "Display Advertising", "Video Campaigns", "Shopping Ads", "Performance Max"],
    },
    {
      icon: Target,
      title: "Facebook & Social Media Ads",
      description:
        "Strategic social media advertising across Facebook, Instagram, Snapchat, and other platforms with precise audience targeting.",
      features: ["Facebook Ads", "Instagram Marketing", "Snapchat Ads", "Audience Targeting", "Creative Optimization"],
    },
    {
      icon: BarChart3,
      title: "Performance Marketing",
      description:
        "Data-driven performance marketing strategies focused on measurable results, ROI optimization, and conversion tracking.",
      features: [
        "ROI Optimization",
        "Conversion Tracking",
        "Attribution Modeling",
        "Performance Analysis",
        "KPI Monitoring",
      ],
    },
    {
      icon: Globe,
      title: "Programmatic Advertising",
      description:
        "Advanced programmatic buying and planning using cutting-edge technology for precise audience targeting and optimization.",
      features: [
        "Programmatic Buying",
        "Real-time Bidding",
        "Audience Segmentation",
        "Cross-platform Campaigns",
        "Advanced Analytics",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Marketing",
      description:
        "Comprehensive e-commerce marketing strategies including platform optimization, conversion rate improvement, and sales funnel development.",
      features: [
        "Shopify Optimization",
        "WordPress/WooCommerce",
        "Conversion Rate Optimization",
        "Sales Funnel Design",
        "Product Feed Management",
      ],
    },
    {
      icon: TrendingUp,
      title: "Strategic Planning",
      description:
        "Comprehensive digital marketing strategy development with market analysis, competitive research, and growth planning.",
      features: ["Market Analysis", "Competitive Research", "Growth Strategy", "Budget Planning", "Campaign Roadmaps"],
    },
    {
      icon: PieChart,
      title: "Analytics & Reporting",
      description:
        "Advanced analytics setup, custom dashboard creation, and comprehensive reporting using Google Analytics and Looker Studio.",
      features: [
        "Google Analytics Setup",
        "Custom Dashboards",
        "Looker Studio Reports",
        "Data Visualization",
        "Performance Insights",
      ],
    },
    {
      icon: Monitor,
      title: "Landing Page Optimization",
      description:
        "High-converting landing page design and optimization with A/B testing and user experience improvements.",
      features: [
        "Landing Page Design",
        "A/B Testing",
        "Conversion Optimization",
        "User Experience",
        "Mobile Optimization",
      ],
    },
    {
      icon: Users,
      title: "Client Servicing & Management",
      description:
        "Dedicated account management with regular communication, strategy sessions, and performance reviews.",
      features: [
        "Account Management",
        "Strategy Sessions",
        "Regular Reporting",
        "Performance Reviews",
        "Consultation Calls",
      ],
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">
            Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Comprehensive Digital Marketing Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            From strategy to execution, I provide end-to-end digital marketing services that drive growth and deliver
            measurable results for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-pretty">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Features</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
