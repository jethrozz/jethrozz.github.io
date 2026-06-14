"use client";

import Link from "next/link";
import { GithubIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { motion } from "framer-motion";

export function PixelFooter() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <GithubIcon size={18} />, href: "https://github.com", label: "GitHub" },
    { icon: <TwitterIcon size={18} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <InstagramIcon size={18} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <LinkedinIcon size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary/10 border-t-4 border-black mt-16 pixel-grid py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Logo & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <Link href="/" className="flex items-center space-x-3 group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <rect x="2" y="3" width="20" height="14" fill="currentColor" />
              <rect x="4" y="5" width="16" height="10" fill="white" className="dark:fill-zinc-950" />
              <rect x="10" y="17" width="4" height="3" fill="currentColor" />
              <rect x="7" y="20" width="10" height="2" fill="currentColor" />
              <rect x="6" y="7" width="2" height="2" fill="currentColor" />
            </svg>
            <span className="text-lg font-bold">PixelPortfolio</span>
          </Link>
          <span className="hidden md:inline text-zinc-400">|</span>
          <p className="text-md text-muted-foreground">
            © {currentYear} PixelPortfolio. All rights reserved.
          </p>
        </div>

        {/* Right: Social media & Creator note */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-1.5 bg-white dark:bg-foreground border-2 border-black hover:bg-primary transition-colors dark:text-background"
                whileHover={{ y: -3 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-pixel">
            Crafted with burger and pixel love
          </p>
        </div>

      </div>
    </footer>
  );
}