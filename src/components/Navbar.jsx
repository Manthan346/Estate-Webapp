import React, { useEffect, useState } from 'react'
import { Home, Menu, X } from 'lucide-react'
import { Button } from '../components/ui/button'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300
        ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Home
            className={`w-5 h-5 sm:w-6 sm:h-6 ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          />
          <span
            className={`font-semibold text-base sm:text-lg ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            Realteek
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {['Home', 'Properties', 'About', 'Contact Us'].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm transition-colors ${
                scrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white hover:text-gray-100'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant={scrolled ? 'default' : 'outline'}
            className={`hidden sm:flex rounded-full px-6 text-sm ${
              scrolled
                ? 'bg-primary text-primary-foreground'
                : 'bg-background/80 text-primary'
            }`}
          >
            Login
          </Button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-card/95 backdrop-blur-sm lg:hidden shadow-lg px-4">
          <div className="flex flex-col p-4 space-y-3">
            {['Home', 'Buy', 'Sell', 'Rent', 'About Us', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-card-foreground text-sm py-2 hover:text-primary"
              >
                {item}
              </a>
            ))}
            <Button className="sm:hidden bg-primary text-primary-foreground rounded-full mt-2">
              Login
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
