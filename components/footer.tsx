import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col md:flex-row py-10 md:py-12 gap-8 md:gap-12">
        <div className="md:w-1/3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/wolv-invest-logo.png" alt="WOLV-INVEST" width={32} height={32} className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-blue-600">WOLV-INVEST</span>
              <span className="text-xs text-gray-500">Invest Smarter</span>
            </div>
          </Link>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            A cryptocurrency investment platform offering competitive returns with daily ROI of 2-5%. Powered by
            blockchain technology for secure and transparent investments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 md:flex-1">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Investments</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/investment-plans"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/risk-disclosure"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  Risk Disclosure
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/risk-disclosure"
                  className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  Risk Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container border-t py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} WOLV-INVEST. All rights reserved. Cryptocurrency investments carry significant
            risks.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
              <span className="sr-only">Telegram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a205.66 205.66 0 0 1-2.849 1.09c-.81.294-1.573.56-2.418.84-.422.14-.787.335-1.051.62-.264.284-.434.656-.434 1.084 0 .428.17.8.434 1.084.264.285.629.48 1.051.62.845.28 1.608.546 2.418.84.81.294 1.573.56 2.849 1.09 1.591.612 3.656 1.41 5.724 2.21l8.609 3.33c.315.122.66.185 1.022.215.362.03.738-.022 1.071-.215.333-.193.602-.48.771-.84.169-.36.238-.778.238-1.215V3.648c0-.437-.069-.855-.238-.1.215.333-.193.602-.48.771-.84a2.18 2.18 0 0 0-1.071-.215z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
