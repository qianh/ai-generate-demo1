import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface ToolCardProps {
  title: string
  description: string
  category: string
  image: string
}

export function ToolCard({ title, description, category, image }: ToolCardProps) {
  return (
    <Link href={`/tool/${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:scale-[1.02]">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={image || '/placeholder.png'}
              alt={title}
              width={400}
              height={200}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="inline-block px-2 py-1 mb-2 text-xs font-medium rounded-full bg-primary/10 text-primary">
            {category}
          </div>
          <CardTitle className="mb-2">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}