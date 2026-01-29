import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from "lucide-react"

export function DemoSection() {
  return (
    <section id="demo" className="py-20 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Product Preview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prototype demo showcasing the intended experience. Final output may vary.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-border overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Interactive Demo</CardTitle>
            <CardDescription className="text-base">
              Coming Soon
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="aspect-video bg-muted/50 flex flex-col items-center justify-center p-8">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Play className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Interactive Demo
              </h3>
              <p className="text-muted-foreground text-center max-w-md">
                Upload your photo → Select a saree or dress → See it on yourself instantly
                <br />
                <span className="text-sm mt-2 block">
                  Contact us to see a live demo tailored to your catalog
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
