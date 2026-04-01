"use client";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Initialize client-side state
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        signInRef.current &&
        !signInRef.current.contains(event.target as Node)
      ) {
        setIsSignInOpen(false);
      }
      if (
        signUpRef.current &&
        !signUpRef.current.contains(event.target as Node)
      ) {
        setIsSignUpOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        navbarOpen
      ) {
        setNavbarOpen(false);
      }
    },
    [navbarOpen]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setSticky((prev) => {
          const next = window.scrollY >= 80;
          return prev === next ? prev : next;
        });
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen, handleClickOutside]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isSignInOpen || isSignUpOpen || navbarOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  // Don't render until client-side hydration is complete
  if (!isClient) {
    return (
      <header className="fixed top-0 z-40 w-full transition-all duration-300 py-4 md:py-0">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
          <div className="flex items-center justify-between h-14 lg:h-16">
            <Logo />
            <nav className="hidden lg:flex items-center gap-1" />
            <div className="hidden lg:flex items-center gap-3" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 py-4 md:py-0 ${
        sticky
          ? "bg-primaryLight/20 backdrop-blur-md shadow-sm border-b border-primary/15"
          : "bg-primaryLight/15"
      }`}
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="flex items-center justify-between h-14 lg:h-16">
          <Logo />
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden lg:flex items-center font-medium text-16 text-midnight_text hover:text-primary px-4 py-2.5 rounded-xl transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                setIsSignInOpen(true);
              }}
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="hidden lg:flex items-center font-medium text-16 bg-primary text-white px-5 py-2.5 rounded-xl border border-primary hover:bg-primaryDark hover:border-primaryDark transition-all duration-200"
              onClick={(e) => {
                e.preventDefault();
                setIsSignUpOpen(true);
              }}
            >
              Sign Up
            </Link>
            {isSignInOpen && (
              <div className="fixed inset-0 bg-midnight_text/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div
                  ref={signInRef}
                  className="relative w-full max-w-md overflow-hidden rounded-2xl px-8 pt-14 pb-8 text-center bg-white shadow-2xl border border-border/50"
                >
                  <button
                    onClick={() => setIsSignInOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-grey transition-colors"
                    aria-label="Close Sign In"
                  >
                    <Icon icon="tabler:x" className="text-muted hover:text-midnight_text text-24" />
                  </button>
                  <Signin />
                </div>
              </div>
            )}
            {isSignUpOpen && (
              <div className="fixed inset-0 bg-midnight_text/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div
                  ref={signUpRef}
                  className="relative w-full max-w-md overflow-hidden rounded-2xl px-8 pt-14 pb-8 text-center bg-white shadow-2xl border border-border/50"
                >
                  <button
                    onClick={() => setIsSignUpOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-grey transition-colors"
                    aria-label="Close Sign Up"
                  >
                    <Icon icon="tabler:x" className="text-muted hover:text-midnight_text text-24" />
                  </button>
                  <SignUp />
                </div>
              </div>
            )}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex lg:hidden p-2.5 rounded-xl hover:bg-grey/50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className="block w-5 h-0.5 bg-midnight_text rounded-full" />
                <span className="block w-5 h-0.5 bg-midnight_text rounded-full" />
                <span className="block w-5 h-0.5 bg-midnight_text rounded-full" />
              </div>
            </button>
          </div>
        </div>
      </div>
      {navbarOpen && (
        <div className="fixed inset-0 bg-midnight_text/40 backdrop-blur-sm z-40 lg:hidden" onClick={() => setNavbarOpen(false)} />
      )}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50 border-l border-border/50`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-border/50">
            <Logo />
            <button
              onClick={() => setNavbarOpen(false)}
              className="p-2.5 rounded-xl hover:bg-grey/50 transition-colors"
              aria-label="Close menu"
            >
              <Icon icon="tabler:x" className="text-midnight_text text-24" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col gap-1">
              {headerData.map((item, index) => (
                <MobileHeaderLink key={index} item={item} onClose={() => setNavbarOpen(false)} />
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border/50 flex flex-col gap-3">
              <Link
                href="#"
                className="flex items-center justify-center font-medium text-16 text-midnight_text border border-border rounded-xl py-3 px-4 hover:border-primary hover:text-primary transition-colors"
                onClick={() => {
                  setIsSignInOpen(true);
                  setNavbarOpen(false);
                }}
              >
                Sign In
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center font-medium text-16 bg-primary text-white rounded-xl py-3 px-4 hover:bg-primaryDark transition-colors shadow-primary"
                onClick={() => {
                  setIsSignUpOpen(true);
                  setNavbarOpen(false);
                }}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
