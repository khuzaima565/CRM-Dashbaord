"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

export function Clients() {
  const clients = [
    { name: "Pepsi" },
    { name: "Coca-Cola" },
    { name: "Colgate Palmolive" },
    { name: "Bayer International" },
    { name: "Pfizer Pakistan" },
    { name: "Proton Pakistan" },
    { name: "Amreli Steels" },
    { name: "FOGG Pakistan" },
    { name: "Molfix Pakistan" },
    { name: "IGLOO Pakistan" },
    { name: "SnackVideo" },
    { name: "Dvago Pharmacy" },
    { name: "BOLD Pakistan" },
    { name: "Transworld" },
    { name: "Mercantile Pakistan" },
    { name: "ALZOHAIB Textile" },
    { name: "Naveena Steels" },
    { name: "Viking Waffles USA" },
    { name: "Saylani Trust" },
    { name: "VGO tel Pakistan" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 5

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerView >= clients.length ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [clients.length])

  const visibleClients = []
  for (let i = 0; i < itemsPerView; i++) {
    const index = (currentIndex + i) % clients.length
    visibleClients.push(clients[index])
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">
            Trusted by Leading Brands
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">50+ Brands Trust My Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            From global corporations to emerging startups, I've helped diverse brands achieve their marketing goals
            across multiple industries and markets.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {visibleClients.map((client, index) => (
              <Card
                key={`${client.name}-${currentIndex}-${index}`}
                className="group hover:shadow-md transition-all duration-300 bg-card/50 backdrop-blur-sm flex-shrink-0 w-1/5"
              >
                <CardContent className="p-6 text-center">
                  <div className="h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                    <span className="font-bold text-lg text-primary group-hover:scale-110 transition-transform">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm text-balance">{client.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(clients.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / itemsPerView) === index ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card/50 backdrop-blur-sm px-8 py-6 rounded-2xl border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Brands Served</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Industries</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
