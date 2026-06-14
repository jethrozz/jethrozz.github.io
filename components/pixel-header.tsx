"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NavMenu } from "@/components/nav-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function PixelHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out", 
        scrolled ? "py-2 bg-white shadow-md dark:bg-black" : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <rect x="2" y="3" width="20" height="14" fill="currentColor" />
                <rect x="4" y="5" width="16" height="10" fill="white" className="dark:fill-zinc-950" />
                <rect x="10" y="17" width="4" height="3" fill="currentColor" />
                <rect x="7" y="20" width="10" height="2" fill="currentColor" />
                <rect x="6" y="7" width="2" height="2" fill="currentColor" />
              </svg>
            </motion.div>
            <h1 className="text-xl md:text-2xl font-pixel tracking-tight">
              <span className="text-primary font-bold">Pixel</span>
              <span className="text-black dark:text-white">Portfolio</span>
            </h1>
          </Link>
        </motion.div>

        <div className="flex items-center space-x-4">
          <NavMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}