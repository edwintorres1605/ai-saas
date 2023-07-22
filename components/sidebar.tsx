'use client';

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { 
  Code,
  ImageIcon, 
  LayoutDashboard, 
  MessageSquare, 
  Music, 
  Settings, 
  VideoIcon
} from "lucide-react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"]
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-700",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  return (
    <div className="h-full space-y-4 py-4 flex flex-col bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link
          href="/dashboard"
          className="mb-14 pl-3 flex items-center"
        >
          <div className="relative w-8 h-8 mr-4">
            <Image
              fill
              alt="Logo"
              src="/images/logo.png"
            />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Genius
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="group w-full p-3 flex justify-start text-sm font-medium hover:bg-white/10 rounded-lg transition"
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;