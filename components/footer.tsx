import Link from 'next/link'
import { Input } from './ui/input'
import { Button } from './ui/button'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold">AI Tools Directory</h3>
            <p className="text-sm text-muted-foreground">
              Your go-to resource for discovering the latest and best AI tools.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/categories">Categories</Link></li>
              <li><Link href="/submit">Submit Tool</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Twitter</Link></li>
              <li><Link href="#">LinkedIn</Link></li>
              <li><Link href="#">GitHub</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Stay updated with the latest AI tools and news.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" type="email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AI Tools Directory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}