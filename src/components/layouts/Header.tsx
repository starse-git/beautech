"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/img/logo.png'
import { Menu, X } from "lucide-react"
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { href: "/", label: "企業情報" },
    { href: "/", label: "BEAUTECHのしごと" },
    { href: "/", label: "採用情報" },
    { href: "/", label: "お問い合わせ" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "bg-white md:bg-transparent" : "bg-transparent"
        }`}
      >
        <div className="px-4 md:px-6 lg:px-16 xl:px-20">
          <div className="flex justify-between items-center h-[60px] md:h-[100px]">
            <h1 className="w-[150px] md:w-[200px]">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Beautech"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  priority
                />
              </Link>
            </h1>
            <div className="hidden md:block">
              <ul className="flex space-x-5">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center bg-pinkBrand transform -skew-x-12"
                  >
                    <Link
                      href={link.href}
                      className="px-5 py-2 -mt-[2px] text-base md:text-lg leading-none text-white inline-block transform skew-x-12"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:hidden flex items-center">
              {/* Mobile Menu Button */}
              {open ? (
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="cursor-pointer ml-5"
                >
                  <X size={28} color={"#f3547d"}/>
                </button>
              ) : (
                <button
                  onClick={() => setOpen(true)}
                  aria-label="Open menu"
                  className="cursor-pointer ml-5"
                >
                  <Menu size={28} color={"#f3547d"} />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed top-[60px] inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Mobile Menu */}
      <div
        className={`fixed top-[61px] right-0 w-[80%] h-screen z-50 bg-white transition-transform duration-300 ease-in-out md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-start gap-4 px-4 py-10 overflow-y-auto h-[calc(100vh-60px)]">
          <ul className="flex flex-col space-y-5">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="flex flex-col"
              >
                <Link
                  href={link.href}
                  className="text-base md:text-lg leading-none text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
