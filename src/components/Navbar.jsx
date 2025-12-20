import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import realestatelogo from "../assets/realestatelogo.jpg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const naviagte = useNavigate()

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isPropertyPage = location.pathname === "/property";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showWhiteBg = (!isHomePage && !isPropertyPage) || scrolled;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/property" },
    { name: "About", path: "/aboutus" },
    { name: "Contact", path: "/contactus" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300
        ${showWhiteBg ? "bg-background shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-15 py-4">
          
          {/* LOGO — LEFT END */}
          <div className="flex items-center gap-3">
            <img
              src={realestatelogo}
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
            <h1
              className={`font-semibold cursor-pointer ${
                showWhiteBg ? "text-foreground" : "text-background"
              }`} onClick={()=>naviagte("/")}
            >
              PrimeNest Reality
            </h1>
          </div>

          {/* DESKTOP NAV — RIGHT END */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition ${
                    isActive
                      ? "text-primary font-medium"
                      : showWhiteBg
                      ? "text-gray-700 hover:text-primary"
                      : "text-background hover:text-primary"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  showWhiteBg ? "text-foreground" : "text-background"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  showWhiteBg ? "text-foreground" : "text-background"
                }`}
              />
            )}
          </button>
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
    </>
  );
}

export default Navbar;
