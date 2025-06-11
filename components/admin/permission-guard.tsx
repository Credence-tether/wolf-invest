"use client"

import type React from "react"
import { useAuth } from "@/components/auth-provider"
import { hasPermission, hasAnyPermission, type Permission } from "@/lib/permissions"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield } from "lucide-react"

interface PermissionGuardProps {
  children: React.ReactNode
  permission?: Permission
  permissions?: Permission[]
  requireAll?: boolean
  fallback?: React.ReactNode
  showError?: boolean
}

export function PermissionGuard({
  children,
  permission,
  permissions = [],
  requireAll = false,
  fallback,
  showError = true,
}: PermissionGuardProps) {
  const { user } = useAuth()

  if (!user || user.role !== "admin") {
    return showError ? (
      <Alert className="border-red-500 bg-red-50 dark:bg-red-950">
        <Shield className="h-4 w-4" />
        <AlertDescription className="text-red-700 dark:text-red-300">
          Access denied. Admin privileges required.
        </AlertDescription>
      </Alert>
    ) : (
      fallback || null
    )
  }

  const userRole = (user as any).adminRole || "admin"
  let hasAccess = false

  if (permission) {
    hasAccess = hasPermission(userRole, permission)
  } else if (permissions.length > 0) {
    hasAccess = requireAll
      ? permissions.every((p) => hasPermission(userRole, p))
      : hasAnyPermission(userRole, permissions)
  } else {
    hasAccess = true // No specific permissions required
  }

  if (!hasAccess) {
    return showError ? (
      <Alert className="border-yellow-500 bg-yellow-50 dark:bg-yellow-950">
        <Shield className="h-4 w-4" />
        <AlertDescription className="text-yellow-700 dark:text-yellow-300">
          Insufficient permissions to access this feature.
        </AlertDescription>
      </Alert>
    ) : (
      fallback || null
    )
  }

  return <>{children}</>
}

interface PermissionButtonProps {
  children: React.ReactNode
  permission?: Permission
  permissions?: Permission[]
  requireAll?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
}

export function PermissionButton({
  children,
  permission,
  permissions = [],
  requireAll = false,
  disabled = false,
  className = "",
  onClick,
  ...props
}: PermissionButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { user } = useAuth()

  if (!user || user.role !== "admin") {
    return null
  }

  const userRole = (user as any).adminRole || "admin"
  let hasAccess = false

  if (permission) {
    hasAccess = hasPermission(userRole, permission)
  } else if (permissions.length > 0) {
    hasAccess = requireAll
      ? permissions.every((p) => hasPermission(userRole, p))
      : hasAnyPermission(userRole, permissions)
  } else {
    hasAccess = true
  }

  if (!hasAccess) {
    return null
  }

  return (
    <button className={className} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
