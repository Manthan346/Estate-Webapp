import React, { useEffect, useState } from 'react'
import { Home, Menu, X } from 'lucide-react'
import { Button } from '../components/ui/button'
import { NavLink, useLocation } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isPropertyPage = location.pathname === '/property'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showWhiteBg = !isHomePage && !isPropertyPage || scrolled

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/property' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${showWhiteBg ? 'bg-white shadow-md' : 'bg-transparent'}
        `}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Home className={`w-6 h-6 ${showWhiteBg ? 'text-primary' : 'text-background'}`} />
            <span className={`font-semibold ${showWhiteBg ? 'text-gray-900' : 'text-background'}`}>
              Realteek
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition ${
                    isActive
                      ? 'text-primary font-medium'
                      : showWhiteBg
                      ? 'text-gray-700 hover:text-primary'
                      : 'text-background'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
           

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${showWhiteBg ? 'text-gray-900' : 'text-background'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${showWhiteBg ? 'text-foreground' : 'text-background'}`} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t shadow-md">
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 text-sm font-medium hover:text-primary"
                >
                  {item.name}
                </NavLink>
              ))}

             
            </div>
          </div>
        )}
      </nav>

      {/* PAGE OFFSET */}
    
    </>
  )
}

export default Navbar
