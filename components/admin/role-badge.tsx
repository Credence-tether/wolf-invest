"use client"

import { Badge } from "@/components/ui/badge"
import { getRoleDefinition, type AdminRole } from "@/lib/permissions"
import { Shield, Crown, Users, Headphones, BarChart3, Eye } from "lucide-react"

interface RoleBadgeProps {
  role: AdminRole
  showIcon?: boolean
  variant?: "default" | "outline" | "secondary"
}

export function RoleBadge({ role, showIcon = true, variant = "default" }: RoleBadgeProps) {
  const roleDefinition = getRoleDefinition(role)

  if (!roleDefinition) {
    return <Badge variant="secondary">Unknown Role</Badge>
  }

  const getIcon = () => {
    switch (role) {
      case "super_admin":
        return <Crown className="h-3 w-3" />
      case "admin":
        return <Shield className="h-3 w-3" />
      case "manager":
        return <Users className="h-3 w-3" />
      case "support":
        return <Headphones className="h-3 w-3" />
      case "analyst":
        return <BarChart3 className="h-3 w-3" />
      case "moderator":
        return <Eye className="h-3 w-3" />
      default:
        return <Shield className="h-3 w-3" />
    }
  }

  const getColorClass = () => {
    switch (roleDefinition.color) {
      case "red":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "orange":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      case "blue":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "green":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "purple":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "gray":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <Badge variant={variant} className={variant === "default" ? getColorClass() : ""}>
      {showIcon && getIcon()}
      <span className={showIcon ? "ml-1" : ""}>{roleDefinition.name}</span>
    </Badge>
  )
}
