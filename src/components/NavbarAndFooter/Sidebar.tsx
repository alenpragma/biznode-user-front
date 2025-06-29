"use client"

import { useState } from "react"
import { Home, Zap, Award, TrendingUp, Wallet, FileText, User, Network, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface SidebarProps {
  className?: string
}

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Buy Node", href: "/buy-node", icon: Zap },
  { name: "Rewards", href: "/rewards", icon: Award },
  { name: "Rank", href: "/rank", icon: TrendingUp },
  { name: "Wallet", href: "/wallet", icon: Wallet },
  { name: "Network", href: "/network", icon: Network },
  { name: "Node Report", href: "/node-report", icon: FileText },
  { name: "Profile", href: "/profile", icon: User },
]

function SidebarContent() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
            <Network className="w-5 h-5 text-black" />
          </div>
          BIZ Node
        </h1>
      </div>

      <nav className="space-y-2 flex-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-3 rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${
                isActive ? "bg-yellow-500 text-black" : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className={isActive ? "font-medium" : ""}>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={`p-4 ${className}`}>
      <SidebarContent />
    </div>
  )
}

export function MobileSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden p-2 text-white hover:bg-gray-700">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 bg-gray-800 border-gray-700 p-4">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  )
}
