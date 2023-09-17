import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2 p-4">
      <Image src='/logo.png' width={300} height={300} alt="logo"/>
      </Link>
    </div>
  )
}