import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { Search } from './search'

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold">
          AI Tools
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/categories" className="text-sm font-medium">
            Categories
          </Link>
          <Link href="/popular" className="text-sm font-medium">
            Popular
          </Link>
          <Link href="/new" className="text-sm font-medium">
            New
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Search />
          <ModeToggle />
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}