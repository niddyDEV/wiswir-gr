import { Button } from "@/components/ui/button"
import { ArrowRight, Repeat, PieChart, Wallet, ShieldCheck, Calendar, Globe, Users, ChevronDown, Layers } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] items-center">
      <header className="w-full px-4 lg:px-6 h-28 flex items-center justify-center bg-white shadow-md">
        <div className="container flex justify-between items-center">
          <Link className="flex items-center justify-center" href="#">
            <Image 
              src="/images/wiswirgroup_logo.png" 
              alt="WISWIR GROUP Logo" 
              width={800} 
              height={400} 
              className="h-16 w-auto object-contain"
            />
          </Link>
          <nav className="flex items-center gap-8">
            <Link className="nav-text text-xl font-bold hover:text-purple-600 transition-colors" href="#wbsc">WBSC</Link>
            <Link className="nav-text text-xl font-bold hover:text-purple-600 transition-colors" href="#dex">WISDEX</Link>
            <Link className="nav-text text-xl font-bold hover:text-purple-600 transition-colors" href="#events">Events</Link>
            <Link className="nav-text text-xl font-bold hover:text-purple-600 transition-colors" href="#about">About</Link>
            <Link className="nav-text text-xl font-bold hover:text-purple-600 transition-colors" href="#contact">Contact</Link>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="text-lg font-semibold px-5 py-1.5 border-2">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button className="text-lg font-semibold text-white gradient-primary px-5 py-1.5">
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1 w-full flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 text-center flex justify-center">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Provide and explore all fields of Web3 industry.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  WISWIR Group provides system consisted of exchanging platform, educational courses, and exciting events that are shaping the future of finance and decentralized world.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="text-white gradient-primary text-lg font-bold py-4 px-8">
                  Get Started
                </Button>
                <Button size="lg" className="text-white gradient-secondary text-lg font-bold py-4 px-8">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* WISWIR BSC section */}
        <section id="wbsc" className="w-full py-4 md:py-6 lg:py-8 flex justify-center">
          <div className="container px-4 md:px-6 max-w-7xl">
            <div className="animated-gradient-purple text-white text-center rounded-3xl p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl font-bold tracking-widest sm:text-4xl md:text-5xl mb-8">WISWIR Business Education</h2>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 border border-purple-300 p-8 rounded-lg bg-white bg-opacity-20">
                  <Layers className="h-12 w-12 mb-2 text-white" />
                  <h3 className="text-xl font-bold">Comprehensive Courses</h3>
                  <p className="text-center text-sm">
                    Short-term and long-term courses in various blockchain careers, from smart-contract engineering to project management.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-purple-300 p-8 rounded-lg bg-white bg-opacity-20">
                  <Users className="h-12 w-12 mb-2 text-white" />
                  <h3 className="text-xl font-bold">Skill Enhancement</h3>
                  <p className="text-center text-sm">
                    Upgrade your team's experience with new case studies, extraordinary problems, and collaborations with top companies.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-purple-300 p-8 rounded-lg bg-white bg-opacity-20">
                  <ArrowRight className="h-12 w-12 mb-2 text-white" />
                  <h3 className="text-xl font-bold">Personalized Guidance</h3>
                  <p className="text-center text-sm">
                    Whether you're new to blockchain or exploring new horizons, we'll help you choose the right course for your needs.
                  </p>
                </div>
              </div>
              <div className="mt-10 text-center">
                <Button size="lg" className="bg-white text-black hover:bg-purple-100 text-lg font-bold py-4 px-8">
                  Visit WISWIR BSC
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* DEX section */}
        <section id="dex" className="w-full py-4 md:py-6 lg:py-8 flex justify-center">
          <div className="container px-4 md:px-6 max-w-7xl">
            <div className="animated-gradient-blue text-gray-800 text-center rounded-3xl p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Decentralized Exchange</h2>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 border border-blue-300 p-8 rounded-lg bg-white bg-opacity-50">
                  <Repeat className="h-12 w-12 mb-2 text-blue-600" />
                  <h3 className="text-xl font-bold">Instant Swaps</h3>
                  <p className="text-center text-sm">Trade tokens instantly with low fees and high liquidity.</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-blue-300 p-8 rounded-lg bg-white bg-opacity-50">
                  <PieChart className="h-12 w-12 mb-2 text-blue-600" />
                  <h3 className="text-xl font-bold">Liquidity Pools</h3>
                  <p className="text-center text-sm">Provide liquidity and earn rewards on your idle assets.</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-blue-300 p-8 rounded-lg bg-white bg-opacity-50">
                  <ShieldCheck className="h-12 w-12 mb-2 text-blue-600" />
                  <h3 className="text-xl font-bold">Non-Custodial</h3>
                  <p className="text-center text-sm">Maintain full control of your assets at all times.</p>
                </div>
              </div>
              <div className="mt-10 text-center">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-lg font-bold py-4 px-8">
                  Visit WISDEX
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Web3 Events section */}
        <section id="events" className="w-full py-4 md:py-6 lg:py-8 flex justify-center">
          <div className="container px-4 md:px-6 max-w-7xl">
            <div className="animated-gradient-indigo text-white text-center rounded-3xl p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Web3 Events</h2>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 border border-purple-300 p-8 rounded-lg bg-white bg-opacity-20">
                  <Globe className="h-12 w-12 mb-2 text-white" />
                  <h3 className="text-xl font-bold text-white">Online Webinars</h3>
                  <p className="text-center text-sm text-purple-100">Join expert-led sessions on the latest Web3 trends and technologies.</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-purple-300 p-8 rounded-lg bg-white bg-opacity-20">
                  <Users className="h-12 w-12 mb-2 text-white" />
                  <h3 className="text-xl font-bold text-white">Networking Meetups</h3>
                  <p className="text-center text-sm text-purple-100">Connect with like-minded individuals and industry leaders in person.</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-purple-300 p-8 rounded-lg bg-white bg-opacity-20">
                  <Calendar className="h-12 w-12 mb-2 text-white" />
                  <h3 className="text-xl font-bold text-white">Annual Conference</h3>
                  <p className="text-center text-sm text-purple-100">Attend our flagship event featuring keynotes, workshops, and exhibitions.</p>
                </div>
              </div>
              <div className="mt-10 text-center">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100 text-lg font-bold py-4 px-8">
                  Explore WISWIR Events
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 text-center flex justify-center">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to dive into Web3?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Start exploring blockchain technology today and take control of your financial future.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-white text-black border-purple-600 hover:bg-gray-500 text-lg font-bold py-4 px-8">Read Docs</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center justify-center px-4 md:px-6 border-t text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 WISWIR GROUP. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 justify-center">
          <Link className="text-xs hover:underline underline-offset-4" href="/termsofprivacy">Terms of Privacy</Link>
        </nav>
      </footer>
    </div>
  )
}
