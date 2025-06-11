export type Permission =
  // User Management
  | "users.view"
  | "users.create"
  | "users.edit"
  | "users.delete"
  | "users.suspend"
  | "users.activate"
  | "users.export"

  // Investment Management
  | "investments.view"
  | "investments.create"
  | "investments.edit"
  | "investments.pause"
  | "investments.resume"
  | "investments.cancel"
  | "investments.export"

  // Transaction Management
  | "transactions.view"
  | "transactions.approve"
  | "transactions.reject"
  | "transactions.export"
  | "transactions.refund"

  // Analytics & Reports
  | "analytics.view"
  | "analytics.export"
  | "reports.generate"
  | "reports.export"

  // Settings Management
  | "settings.view"
  | "settings.edit"
  | "settings.platform"
  | "settings.investment_plans"
  | "settings.security"
  | "settings.notifications"
  | "settings.financial"
  | "settings.email"

  // System Administration
  | "system.maintenance"
  | "system.backup"
  | "system.logs"
  | "system.audit"

  // Support & Communication
  | "support.view"
  | "support.respond"
  | "support.escalate"
  | "communication.send_notifications"
  | "communication.send_emails"

export type AdminRole = "super_admin" | "admin" | "manager" | "support" | "analyst" | "moderator"

export interface RoleDefinition {
  name: string
  description: string
  permissions: Permission[]
  color: string
  priority: number // Higher number = higher priority
}

export const ROLE_DEFINITIONS: Record<AdminRole, RoleDefinition> = {
  super_admin: {
    name: "Super Administrator",
    description: "Full system access with all permissions",
    color: "red",
    priority: 100,
    permissions: [
      // All permissions
      "users.view",
      "users.create",
      "users.edit",
      "users.delete",
      "users.suspend",
      "users.activate",
      "users.export",
      "investments.view",
      "investments.create",
      "investments.edit",
      "investments.pause",
      "investments.resume",
      "investments.cancel",
      "investments.export",
      "transactions.view",
      "transactions.approve",
      "transactions.reject",
      "transactions.export",
      "transactions.refund",
      "analytics.view",
      "analytics.export",
      "reports.generate",
      "reports.export",
      "settings.view",
      "settings.edit",
      "settings.platform",
      "settings.investment_plans",
      "settings.security",
      "settings.notifications",
      "settings.financial",
      "settings.email",
      "system.maintenance",
      "system.backup",
      "system.logs",
      "system.audit",
      "support.view",
      "support.respond",
      "support.escalate",
      "communication.send_notifications",
      "communication.send_emails",
    ],
  },
  admin: {
    name: "Administrator",
    description: "Full operational access, limited system settings",
    color: "orange",
    priority: 80,
    permissions: [
      "users.view",
      "users.create",
      "users.edit",
      "users.suspend",
      "users.activate",
      "users.export",
      "investments.view",
      "investments.create",
      "investments.edit",
      "investments.pause",
      "investments.resume",
      "investments.cancel",
      "investments.export",
      "transactions.view",
      "transactions.approve",
      "transactions.reject",
      "transactions.export",
      "transactions.refund",
      "analytics.view",
      "analytics.export",
      "reports.generate",
      "reports.export",
      "settings.view",
      "settings.edit",
      "settings.investment_plans",
      "settings.notifications",
      "settings.financial",
      "support.view",
      "support.respond",
      "support.escalate",
      "communication.send_notifications",
      "communication.send_emails",
    ],
  },
  manager: {
    name: "Manager",
    description: "User and investment management, limited settings access",
    color: "blue",
    priority: 60,
    permissions: [
      "users.view",
      "users.edit",
      "users.suspend",
      "users.activate",
      "users.export",
      "investments.view",
      "investments.edit",
      "investments.pause",
      "investments.resume",
      "investments.export",
      "transactions.view",
      "transactions.approve",
      "transactions.reject",
      "transactions.export",
      "analytics.view",
      "analytics.export",
      "reports.generate",
      "settings.view",
      "settings.investment_plans",
      "support.view",
      "support.respond",
      "communication.send_notifications",
    ],
  },
  support: {
    name: "Support Agent",
    description: "Customer support and basic user management",
    color: "green",
    priority: 40,
    permissions: [
      "users.view",
      "users.edit",
      "users.export",
      "investments.view",
      "investments.export",
      "transactions.view",
      "transactions.export",
      "analytics.view",
      "support.view",
      "support.respond",
      "communication.send_emails",
    ],
  },
  analyst: {
    name: "Data Analyst",
    description: "Analytics, reports, and read-only access",
    color: "purple",
    priority: 30,
    permissions: [
      "users.view",
      "users.export",
      "investments.view",
      "investments.export",
      "transactions.view",
      "transactions.export",
      "analytics.view",
      "analytics.export",
      "reports.generate",
      "reports.export",
    ],
  },
  moderator: {
    name: "Content Moderator",
    description: "Basic user management and content moderation",
    color: "gray",
    priority: 20,
    permissions: [
      "users.view",
      "users.suspend",
      "users.activate",
      "investments.view",
      "transactions.view",
      "support.view",
      "support.respond",
    ],
  },
}

export function hasPermission(userRole: AdminRole, permission: Permission): boolean {
  const roleDefinition = ROLE_DEFINITIONS[userRole]
  return roleDefinition?.permissions.includes(permission) || false
}

export function hasAnyPermission(userRole: AdminRole, permissions: Permission[]): boolean {
  return permissions.some((permission) => hasPermission(userRole, permission))
}

export function hasAllPermissions(userRole: AdminRole, permissions: Permission[]): boolean {
  return permissions.every((permission) => hasPermission(userRole, permission))
}

export function getRolePermissions(role: AdminRole): Permission[] {
  return ROLE_DEFINITIONS[role]?.permissions || []
}

export function getRoleDefinition(role: AdminRole): RoleDefinition | undefined {
  return ROLE_DEFINITIONS[role]
}

export function canAccessRoute(userRole: AdminRole, route: string): boolean {
  const routePermissions: Record<string, Permission[]> = {
    "/admin/dashboard": ["analytics.view"],
    "/admin/users": ["users.view"],
    "/admin/investments": ["investments.view"],
    "/admin/transactions": ["transactions.view"],
    "/admin/analytics": ["analytics.view"],
    "/admin/settings": ["settings.view"],
    "/admin/support": ["support.view"],
    "/admin/reports": ["reports.generate"],
    "/admin/system": ["system.logs"],
  }

  const requiredPermissions = routePermissions[route]
  if (!requiredPermissions) return true // Allow access if no specific permissions required

  return hasAnyPermission(userRole, requiredPermissions)
}

export function getAccessibleRoutes(userRole: AdminRole): string[] {
  const allRoutes = [
    "/admin/dashboard",
    "/admin/users",
    "/admin/investments",
    "/admin/transactions",
    "/admin/analytics",
    "/admin/settings",
    "/admin/support",
    "/admin/reports",
    "/admin/system",
  ]

  return allRoutes.filter((route) => canAccessRoute(userRole, route))
}
