"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-none rounded-full w-50 py-5 px-4 mt-10">
      <nav className="container mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-16 border-slate-900 rounded-full shadow-xl border-gray-800">
        <Link href="/" className="flex items-center ml-5">
          <Image
            src="/images/African-Music-Summit-Final-04.png"
            alt="Logo"
            width={150}
            height={150}
            className="size-38 md:size-40"
          />
        </Link>
        <div className="hidden md:flex space-x-12 text-xl font-bold">
          <Link
            href="/"
            className="text-white hover:text-yellow-700 transition-colors"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-yellow-700 transition-colors"
          >
            ABOUT
          </Link>
          <Link
            href="/sponsors"
            className="text-white hover:text-yellow-700 transition-colors"
          >
            SPONSORS
          </Link>
          <Link
            href="/gallery"
            className="text-white hover:text-yellow-700 transition-colors"
          >
            GALLERY
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-yellow-700 transition-colors"
          >
            CONTACT
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-400 hover:text-slate-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
          <div className="hidden md:flex space-x-6 mt-4 md:mt-0 pr-0 mr-0">
            <Link
              href="https://www.facebook.com/amusicsummit/"
              target="_blank"
              className="text-slate-400 hover:text-yellow-700 transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/amusicsummit/"
              target="_blank"
              className="text-slate-400 hover:text-yellow-700 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="https://twitter.com/amusicsummit"
              target="_blank"
              className="text-slate-400 hover:text-yellow-700 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/@amusicsummit"
              target="_blank"
              className="text-slate-400 hover:text-yellow-700 transition-colors"
            >
              <span className="sr-only">YouTube</span>
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a2.986 2.986 0 00-2.101-2.108C19.735 3.5 12 3.5 12 3.5s-7.736 0-9.397.578a2.987 2.987 0 00-2.101 2.108A31.111 31.111 0 000 12c0 2.188.258 4.369.502 5.813a2.988 2.988 0 002.101 2.108C4.263 20.5 12 20.5 12 20.5s7.736 0 9.397-.578a2.987 2.987 0 002.101-2.108c.244-1.444.502-3.625.502-5.813s-.258-4.369-.502-5.813zM9.75 15.525v-7.05L15.5 12l-5.75 3.525z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/amusicsummit/?viewAsMember=true"
              target="_blank"
              className="text-slate-400 hover:text-yellow-700 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.281c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.281h-3v-5.604c0-1.333-.025-3.048-1.859-3.048-1.859 0-2.144 1.452-2.144 2.953v5.699h-3v-10h2.882v1.367h.04c.402-.76 1.382-1.56 2.847-1.56 3.046 0 3.608 2.003 3.608 4.606v5.587z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black backdrop-blur-sm border-t border-slate-800 shadow-lg mt-2">
          <div className="text-center container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/about"
              className="text-slate-400 hover:text-yellow-700 transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/sponsors"
              className="text-slate-400 hover:text-yellow-700 transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsors
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-yellow-700 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-slate-400 hover:text-yellow-700 transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="justify-center flex space-x-6 mt-4 md:mt-0 pr-0 mr-0">
              <Link
                href="https://www.facebook.com/amusicsummit/"
                target="_blank"
                className="text-slate-400 hover:text-yellow-700 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/amusicsummit/"
                target="_blank"
                className="text-slate-400 hover:text-yellow-700 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://twitter.com/amusicsummit"
                target="_blank"
                className="text-slate-400 hover:text-yellow-700 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@amusicsummit"
                target="_blank"
                className="text-slate-400 hover:text-yellow-700 transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a2.986 2.986 0 00-2.101-2.108C19.735 3.5 12 3.5 12 3.5s-7.736 0-9.397.578a2.987 2.987 0 00-2.101 2.108A31.111 31.111 0 000 12c0 2.188.258 4.369.502 5.813a2.988 2.988 0 002.101 2.108C4.263 20.5 12 20.5 12 20.5s7.736 0 9.397-.578a2.987 2.987 0 002.101-2.108c.244-1.444.502-3.625.502-5.813s-.258-4.369-.502-5.813zM9.75 15.525v-7.05L15.5 12l-5.75 3.525z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/amusicsummit/?viewAsMember=true"
                target="_blank"
                className="text-slate-400 hover:text-yellow-700 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.281c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.281h-3v-5.604c0-1.333-.025-3.048-1.859-3.048-1.859 0-2.144 1.452-2.144 2.953v5.699h-3v-10h2.882v1.367h.04c.402-.76 1.382-1.56 2.847-1.56 3.046 0 3.608 2.003 3.608 4.606v5.587z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
