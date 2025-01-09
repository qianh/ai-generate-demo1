import { ToolCard } from '@/components/tool-card'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Discover the Best AI Tools
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Explore our curated collection of cutting-edge AI tools to enhance your workflow
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Browse Tools</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Grid */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Featured Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ToolCard
              title="AI Writer Pro"
              description="Advanced AI writing assistant for content creation"
              category="Content Creation"
              image="/placeholder.png"
            />
            <ToolCard
              title="ImageAI"
              description="Generate stunning images with AI"
              category="Image Generation"
              image="/placeholder.png"
            />
            <ToolCard
              title="CodeAssist"
              description="AI-powered code completion and suggestions"
              category="Development"
              image="/placeholder.png"
            />
          </div>
        </div>
      </section>
    </div>
  )
}