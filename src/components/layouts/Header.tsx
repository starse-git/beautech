"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/img/logo.png'
import { Menu, X } from "lucide-react"
import SmoothScrollLink from "../common/SmoothScrollLink";
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navLinks = [
    {
      href: "/about",
      label: "企業情報",
      subNav: [
        { href: "/about#companyPhilosophy", label: "企業理念" },
        { href: "/about#ceoMessage", label: "社長メッセージ" },
        { href: "/about#history", label: "沿革" },
        { href: "/about#access", label: "アクセス" },
      ],
    },
    {
      href: "/business",
      label: "BEAUTECHのしごと",
      subNav: [
        { href: "/business#cosmetics", label: "コスメ事業" },
        { href: "/business#it", label: "IT事業" },
      ],
    },
    { href: "/recruit", label: "採用情報", subNav: [] },
    {
      href: "/contact",
      label: "お問い合わせ",
      subNav: [
        { href: "/contact", label: "法人のお客様" },
        { href: "/personalcontact", label: "個人のお客様" },
      ],
    },
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
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="px-4 md:px-6 lg:px-16 xl:px-20">
          <div className="flex justify-between items-center h-[60px] md:h-[100px]">
            <h1 className="w-[150px] md:w-[200px]">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="BEAUTECH"
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
                    className="relative flex items-center justify-center bg-pinkBrand transform -skew-x-12 cursor-pointer"
                    onMouseEnter={() =>
                      link.subNav && link.subNav.length > 0
                        ? setActiveIndex(index)
                        : setActiveIndex(null)
                    }
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <Link
                      href={link.href}
                      className="px-5 md:px-3 lg:px-5 py-2 -mt-[2px] md:text-[15px] lg:text-lg leading-none text-white inline-block transform skew-x-12"
                    >
                      {link.label}
                    </Link>

                    {activeIndex === index &&
                      link.subNav &&
                      link.subNav.length > 0 && (
                        <div
                          className={`absolute md:top-[31px] lg:top-[34px] z-50 block ${
                            index === navLinks.length - 1 ? "right-0" : "left-0"
                          }`}
                        >
                          <div className="min-w-[340px] bg-[#f2547d]/80 text-white rounded-md shadow-lg p-4 block mt-[20px]">
                            <ul className="grid grid-cols-2 gap-2 list-disc list-inside marker:text-[0.5rem]">
                              {link.subNav.map((sub, subIndex) => (
                                <li key={subIndex}>
                                  <SmoothScrollLink
                                    href={sub.href}
                                    className="inline-block hover:underline transform skew-x-12"
                                  >
                                    {sub.label}
                                  </SmoothScrollLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
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
                  <X size={28} color={"#f3547d"} />
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
        className={`fixed top-[61px] right-0 w-[65%] h-screen z-50 bg-white transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start gap-4 px-4 py-10 overflow-y-auto h-[calc(100vh-60px)]">
          <ul className="flex flex-col space-y-5 w-full">
            {navLinks.map((link, index) => (
              <li key={index} className="flex flex-col w-full">
                <Link
                  href={link.href}
                  className="text-base md:text-lg leading-none text-pinkBrand font-bold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>

                {link.subNav && link.subNav.length > 0 && (
                  <ul className="ml-4 mt-2 flex flex-col space-y-2 list-disc list-inside marker:text-[0.5rem]">
                    {link.subNav.map((sub, subIndex) => (
                      <li key={subIndex} onClick={() => setOpen(false)}>
                        <SmoothScrollLink 
                          href={sub.href}
                          className="text-sm text-darkText"
                        >
                          {sub.label}
                        </SmoothScrollLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
