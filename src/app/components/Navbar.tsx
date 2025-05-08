"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import ScrollIndicator from "./ScrollIndicator";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBootcamps, setShowBootcamps] = useState(false);
  const [showResources, setShowResources] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <ScrollIndicator />
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <img
            src="https://framerusercontent.com/images/8HskUPXIyNNIIjgzBDrugj5RME.png"
            alt="Oysterr"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center text-xsm font-medium text-gray-800 relative">
          <Link href="#">Solidity Bootcamp</Link>

          {/* Bootcamps Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowBootcamps(true)}
            onMouseLeave={() => setShowBootcamps(false)}
          >
            <button className="flex items-center gap-1">
              Bootcamps <ChevronDown size={14} />
            </button>
            {showBootcamps && (
              <div className="absolute top-8 left-0 bg-white border rounded shadow-lg z-50 p-3 min-w-[220px]">
                <Link href="#" className="block py-1">
                  Web3 Solidity
                </Link>
                <Link href="#" className="block py-1">
                  Web3 Beginner
                </Link>
                <Link href="#" className="block py-1">
                  Web3 Rust
                </Link>
                <Link href="#" className="block py-1">
                  Full Stack Software Engineering
                </Link>
                <Link href="#" className="block py-1">
                  Advanced Software Engineering
                </Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowResources(true)}
            onMouseLeave={() => setShowResources(false)}
          >
            <button className="flex items-center gap-1">
              Resources <ChevronDown size={14} />
            </button>
            {showResources && (
              <div className="absolute top-8 left-0 bg-white border rounded shadow-lg z-50 p-3 min-w-[180px]">
                <Link href="#" className="block py-1">
                  Blog
                </Link>
                <Link href="#" className="block py-1">
                  Reviews
                </Link>
                <Link href="#" className="block py-1">
                  Job Guarantee
                </Link>
                <Link href="#" className="block py-1">
                  Events
                </Link>
                <Link href="#" className="block py-1">
                  Tuition
                </Link>
              </div>
            )}
          </div>

          <Link href="#">Blog</Link>

          {/* CTA */}
          {/* <Link
            href="/services-pricing-pdf"
            className="ml-4 bg-lime-300 hover:bg-lime-400 text-black font-semibold px-4 py-2 rounded-lg"
          >
            ⬇️ Services & Pricing PDF
          </Link> */}
          <Link
            href="/book-a-call"
            className="ml-4 bg-lime-300 hover:bg-lime-400 text-black font-semibold px-4 py-2 rounded-lg"
          >
            Book a call →
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pt-4 pb-10 shadow-lg">
          <div className="flex flex-col gap-4 text-blue-900">
            {/* <Link
              href="#"
              className="ml-4 bg-lime-300 hover:bg-lime-400 text-black font-semibold px-4 py-2 rounded-lg"
            >
              ⬇️ Services & Pricing PDF
            </Link> */}
            <Link
              href="#"
              className="ml-4 bg-lime-300 hover:bg-lime-400 text-black font-semibold px-4 py-2 rounded-lg"
            >
              Book a call →
            </Link>
            <div className="text-blue-900 font-bold text-lg">Bootcamps</div>
            <Link href="#">Web3 Solidity</Link>
            <Link href="#">Web3 Beginner</Link>
            <Link href="#">Web3 Rust</Link>
            <Link href="#">Full Stack Software</Link>
            <Link href="#">Advanced Software</Link>

            <div className="mt-6 text-blue-900 font-bold text-lg">
              Resources
            </div>
            <Link href="#">Blog</Link>
            <Link href="#">Reviews</Link>
            <Link href="#">Job Guarantee</Link>
            <Link href="#">Events</Link>
            <Link href="#">Tuition</Link>

            <div className="mt-6 text-sm text-gray-500">info@metana.io</div>
            <div className="flex gap-3 mt-2">
              <span>🌐</span>
              <span>🐦</span>
              <span>🔗</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
