import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-background border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <h2 className="text-xl font-semibold tracking-tight">PrimeNest Reality</h2>
            <p className="text-sm text-muted-foreground">
              Building trust through premium property solutions.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <h4 className="font-medium">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground hover:cursor-pointer">
              <li onClick={() => navigate("/property")}>Residential</li>
              <li onClick={() => navigate("/property")}>Commercial</li>
              <li>Rental Services</li>
              <li>Investment Advisory</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 ">
            <h4 className="font-medium">Company</h4>
            <ul className="space-y-2 text-sm  text-muted-foreground hover:cursor-pointer">
              <li onClick={()=>navigate("/aboutus")}>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Partner With Us</li>
            </ul>
          </div>

          {/* Resources */}
    
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RealEstatePro. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
