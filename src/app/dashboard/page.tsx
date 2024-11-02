'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, User, Settings, CreditCard, HelpCircle, LogOut, Bell, Wallet, BarChart } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="w-full px-4 lg:px-6 h-28 flex items-center justify-center bg-white shadow-md">
        <div className="container flex justify-between items-center">
          <Link className="flex items-center justify-center" href="/">
            <Image 
              src="/images/wiswirgroup_logo.png" 
              alt="WISWIR GROUP Logo" 
              width={800} 
              height={400} 
              className="h-16 w-auto object-contain"
            />
          </Link>
          <nav className="flex items-center gap-8">
            <Button variant="ghost" className="text-lg font-semibold">
              <Bell className="mr-2 h-5 w-5" />
              Notifications
            </Button>
            <Button variant="outline" className="text-lg font-semibold px-5 py-1.5 border-2">
              <User className="mr-2 h-5 w-5" />
              John Doe
            </Button>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 w-full flex">
        <aside className="w-64 bg-gray-100 p-6 hidden md:block">
          <nav className="space-y-4">
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-lg font-semibold ${activeTab === 'overview' ? 'bg-purple-100 text-purple-600' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <BarChart className="mr-2 h-5 w-5" />
              Overview
            </Button>
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-lg font-semibold ${activeTab === 'wallet' ? 'bg-purple-100 text-purple-600' : ''}`}
              onClick={() => setActiveTab('wallet')}
            >
              <Wallet className="mr-2 h-5 w-5" />
              Wallet
            </Button>
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-lg font-semibold ${activeTab === 'courses' ? 'bg-purple-100 text-purple-600' : ''}`}
              onClick={() => setActiveTab('courses')}
            >
              <Layers className="mr-2 h-5 w-5" />
              Courses
            </Button>
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-lg font-semibold ${activeTab === 'settings' ? 'bg-purple-100 text-purple-600' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-lg font-semibold text-red-600"
            >
              <LogOut className="mr-2 h-5 w-5" />
              Log Out
            </Button>
          </nav>
        </aside>
        
        <div className="flex-1 p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <h1 className="text-3xl font-bold">Welcome back, John!</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Wallet Balance</h2>
                  <p className="text-3xl font-bold">$10,234.56</p>
                  <Button className="mt-4 gradient-primary text-white">
                    Add Funds
                  </Button>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Active Courses</h2>
                  <p className="text-3xl font-bold">3</p>
                  <Button className="mt-4 gradient-secondary text-white">
                    View Courses
                  </Button>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                  <p className="text-3xl font-bold">2</p>
                  <Button className="mt-4 gradient-primary text-white">
                    View Events
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'wallet' && (
            <div className="space-y-8">
              <h1 className="text-3xl font-bold">Wallet</h1>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
                {/* Add transaction history table or list here */}
                <p className="text-gray-600">No recent transactions</p>
              </div>
            </div>
          )}
          
          {activeTab === 'courses' && (
            <div className="space-y-8">
              <h1 className="text-3xl font-bold">My Courses</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Blockchain Fundamentals</h2>
                  <p className="text-gray-600 mb-4">Progress: 60%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <Button className="mt-4 gradient-primary text-white">
                    Continue Course
                  </Button>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Smart Contract Development</h2>
                  <p className="text-gray-600 mb-4">Progress: 30%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '30%'}}></div>
                  </div>
                  <Button className="mt-4 gradient-primary text-white">
                    Continue Course
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="space-y-8">
              <h1 className="text-3xl font-bold">Account Settings</h1>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                {/* Add form for updating personal information here */}
                <Button className="mt-4 gradient-primary text-white">
                  Update Profile
                </Button>
              </div>
            </div>
          )}
        </div>
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