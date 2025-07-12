"use client";

import { useState } from "react";
import {
  Home,
  Zap,
  Wallet,
  FileText,
  User,
  Network,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

interface SidebarProps {
  className?: string;
}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Buy Node", href: "/dashboard/buy-node", icon: Zap },
  { name: "Wallet", href: "/dashboard/wallet", icon: Wallet },
  { name: "Network", href: "/dashboard/network", icon: Network },
  { name: "Node Report", href: "/dashboard/node-report", icon: FileText },
  { name: "Transaction", href: "/dashboard/transaction", icon: FileText },
  { name: "Deposit History", href: "/dashboard/deposit-history", icon: FileText },
  // { name: "Rewards", href: "/dashboard/rewards", icon: Award },
  // { name: "Rank", href: "/dashboard/rank", icon: TrendingUp },
  { name: "Profile", href: "/dashboard/profile", icon: User },
];

// ✅ Accepts optional onLinkClick
function SidebarContent({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      <Link href="/dashboard">
        <Image
          className="md:w-44 w-28 mb-4"
          src="/logo.png"
          alt="img"
          width={500}
          height={500}
        />
      </Link>

      <nav className="space-y-2 flex-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onLinkClick} // ✅ close on click
              className={`px-4 py-3 rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${
                isActive
                  ? "bg-yellow-500 text-black"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className={isActive ? "font-medium" : ""}>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={`p-4 ${className}`}>
      <SidebarContent />
    </div>
  );
}

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="lg:hidden p-2 text-white hover:bg-gray-700"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-64 bg-gray-800 border-gray-700 p-4"
      >
        {/* 👇 Pass the close function */}
        <SidebarContent onLinkClick={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
