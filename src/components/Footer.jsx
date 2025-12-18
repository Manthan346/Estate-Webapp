import React from "react";
import { Button } from "./ui/button";
import { Navigate, useNavigate } from "react-router-dom";
function Footer() {
    const navigate = useNavigate()
  return (
    <footer className="w-full bg-background border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <h2 className="text-xl font-semibold tracking-tight">
             Name
            </h2>
            <p className="text-sm text-muted-foreground">
              Building trust through premium property solutions.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <h4 className="font-medium">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground hover:cursor-pointer">
              <li onClick={()=>navigate("/property")}>Residential</li>
              <li onClick={()=>navigate("/property")}>Commercial</li>
              <li>Rental Services</li>
              <li>Investment Advisory</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-medium">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground hover:cursor-pointer">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Partner With Us</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="font-medium">Resources</h4>
            <ul className="space-y-2 text-sm hover:cursor-pointer text-muted-foreground">
              <li>Blog</li>
              <li>Market Insights</li>
              <li>Buying Guides</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* CTA Card */}
      
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t pt-8">
          {/* Socials */}
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="text-sm">Follow us</span>
            <div className="flex gap-4">
              <a className="hover:text-foreground transition">Facebook</a>
              <a className="hover:text-foreground transition">Instagram</a>
              <a className="hover:text-foreground transition">Twitter</a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RealEstatePro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
