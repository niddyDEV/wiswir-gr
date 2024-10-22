'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Repeat, PieChart, Wallet, ShieldCheck, Layers, Calendar, Globe, Users } from "lucide-react"
import Link from "next/link"

export function Web3ServicesLanding() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Layers className="h-6 w-6 text-purple-600" />
          <span className="ml-2 text-lg font-bold">Web3 Services</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            DEX
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            DeFi
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Events
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Explore the World of Web3 Services
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover decentralized exchanges, innovative DeFi applications, and exciting events that are shaping the future of finance.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-purple-900 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Decentralized Exchanges (DEX)</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border border-purple-300 p-4 rounded-lg">
                <Repeat className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Instant Swaps</h3>
                <p className="text-center text-sm">Trade tokens instantly with low fees and high liquidity.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-purple-300 p-4 rounded-lg">
                <PieChart className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Liquidity Pools</h3>
                <p className="text-center text-sm">Provide liquidity and earn rewards on your idle assets.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-purple-300 p-4 rounded-lg">
                <ShieldCheck className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Non-Custodial</h3>
                <p className="text-center text-sm">Maintain full control of your assets at all times.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-700 to-purple-900 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Web3 Events</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border border-purple-300 p-4 rounded-lg">
                <Globe className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Online Webinars</h3>
                <p className="text-center text-sm">Join expert-led sessions on the latest Web3 trends and technologies.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-purple-300 p-4 rounded-lg">
                <Users className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Networking Meetups</h3>
                <p className="text-center text-sm">Connect with like-minded individuals and industry leaders in person.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-purple-300 p-4 rounded-lg">
                <Calendar className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Annual Conference</h3>
                <p className="text-center text-sm">Attend our flagship event featuring keynotes, workshops, and exhibitions.</p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                View All Events
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-black to-purple-900 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">DeFi Applications</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border border-purple-300 p-4 rounded-lg">
                <Wallet className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Yield Farming</h3>
                <p className="text-center text-sm">Maximize returns by providing liquidity across multiple platforms.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-purple-300 p-4 rounded-lg">
                <ArrowRight className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Lending & Borrowing</h3>
                <p className="text-center text-sm">Access decentralized lending markets with competitive rates.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-purple-300 p-4 rounded-lg">
                <ShieldCheck className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Insurance</h3>
                <p className="text-center text-sm">Protect your assets with decentralized insurance protocols.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to dive into Web3?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Start exploring decentralized finance today and take control of your financial future.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Launch App</Button>
                <Button variant="outline">Read Docs</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Web3 Services. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}