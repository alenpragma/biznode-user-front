"use client";

import Link from "next/link";
import { Bell, LogOut, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MobileSidebar } from "./Sidebar";
import { ActivationModal } from "./ActivationModal";
import { useUserStore } from "@/lib/store/userStore";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string[];
}

export function Header({ title, subtitle, breadcrumb }: HeaderProps) {
  const handleLogout = () => {
    console.log("Logging out...");
  };

  const { userData } = useUserStore();

  return (
    <>
      <div className="flex justify-between items-center mb-6 lg:mb-8 px-3 py-2 text-white fixed right-0 md:left-[250px] left-0 border-b z-10 bg-gray-900">
        <div className="flex items-center gap-4">
          <MobileSidebar />
          <div>
            {breadcrumb && (
              <div className="flex items-center gap-2 text-gray-400 mb-2 text-sm">
                {breadcrumb.map((item, index) => (
                  <span key={index} className="flex items-center gap-2">
                    {item}
                    {index < breadcrumb.length - 1 && <span>→</span>}
                  </span>
                ))}
              </div>
            )}
            <h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
            {subtitle && (
              <p className="text-gray-400 mt-1 text-sm lg:text-base">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <Badge
            variant="outline"
            className={cn(
              " hidden sm:inline-flex",
              userData?.user?.is_active === "0"
                ? "text-red-500 bg-red-500/10 border-red-500/20"
                : "text-green-500 bg-green-500/10 border-green-500/20"
            )}
          >
            {userData?.user?.is_active === "0"
              ? "Inactive Account"
              : "Active Account"}
          </Badge>

          {/* Wrap "Activate Now" button with ActivationModal */}
          <ActivationModal>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium text-sm lg:text-base px-3 lg:px-4">
              Activate Now
            </Button>
          </ActivationModal>

          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white p-2"
          >
            <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-orange-500 text-black">
                    JD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-gray-800 border-gray-700"
              align="end"
              forceMount
            >
              <DropdownMenuLabel className="font-normal text-white">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-gray-400">
                    john.doe@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem
                asChild
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Link href="/profile" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem
                onClick={handleLogout}
                className="text-red-400 hover:text-red-300 hover:bg-gray-700"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
