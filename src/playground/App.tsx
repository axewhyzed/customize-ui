import { useState } from "react";
import { ThemeProvider, useTheme } from "../context/theme-provider";
import { CUButton } from "../components/button";
import { CUInput } from "../components/input";
import { CUCard, CUCardHeader, CUCardTitle, CUCardDescription, CUCardContent, CUCardFooter } from "../components/card";
import { CUSwitch } from "../components/switch";
import { CUSelect, CUSelectTrigger, CUSelectValue, CUSelectContent, CUSelectItem } from "../components/select";
// 1. Added CUDialogClose to imports
import { CUDialog, CUDialogTrigger, CUDialogContent, CUDialogHeader, CUDialogTitle, CUDialogDescription, CUDialogFooter, CUDialogClose } from "../components/dialog";
import { CUDropdownMenu, CUDropdownMenuTrigger, CUDropdownMenuContent, CUDropdownMenuItem, CUDropdownMenuLabel, CUDropdownMenuSeparator } from "../components/dropdown-menu";
import { CUTabs, CUTabsContent, CUTabsList, CUTabsTrigger } from "../components/tabs";
import { CUAvatar, CUAvatarFallback, CUAvatarImage } from "../components/avatar";
import { CUBadge } from "../components/badge";
import { CUTooltip, CUTooltipContent, CUTooltipProvider, CUTooltipTrigger } from "../components/tooltip";
import { Bell, CreditCard, LayoutDashboard, LogOut, Settings, User, Zap } from "lucide-react";

// --- 1. The Theme Controller (The "Brain" UI) ---
const ThemeControls = () => {
  const { setTheme } = useTheme();
  
  return (
    <div className="flex flex-wrap items-center gap-2 p-2 border rounded-lg bg-background/50 backdrop-blur-md shadow-sm">
      <span className="text-xs font-semibold text-muted-foreground px-2 uppercase tracking-widest">Theme Engine</span>
      
      {/* Standard Modes */}
      <div className="flex gap-1 border-r pr-3 mr-1">
        <CUButton size="sm" variant="ghost" onClick={() => setTheme("light")}>Light</CUButton>
        <CUButton size="sm" variant="ghost" onClick={() => setTheme("dark")}>Dark</CUButton>
      </div>

      {/* Preset: Corporate (Clean Blue) */}
      <CUButton 
        size="sm" 
        variant="outline"
        className="h-8 text-xs border-blue-200 hover:bg-blue-50 dark:border-blue-900 dark:hover:bg-blue-950/30"
        onClick={() => setTheme("custom", { 
          background: "#ffffff", 
          foreground: "#0f172a", 
          primary: "#2563eb", // Royal Blue
          "primary-foreground": "#ffffff",
          border: "#e2e8f0",
          input: "#e2e8f0",
          ring: "#2563eb",
          card: "#f8fafc",
          "card-foreground": "#0f172a",
          muted: "#f1f5f9",
          "muted-foreground": "#64748b"
        })}
      >
        Corporate
      </CUButton>

      {/* Preset: Neon (Cyberpunk Purple) */}
      <CUButton 
        size="sm" 
        variant="shimmer" // Uses the 'neon' preset animation
        className="h-8 text-xs"
        onClick={() => setTheme("custom", { 
          background: "#050505", 
          foreground: "#fafafa", 
          primary: "#d946ef", // Fuchsia 500
          "primary-foreground": "#ffffff",
          border: "#2a1b2e",
          input: "#2a1b2e",
          ring: "#d946ef",
          card: "#120814", 
          "card-foreground": "#fafafa",
          popover: "#050505",
          "popover-foreground": "#fafafa"
        })}
      >
        Neon Vibe
      </CUButton>

      {/* Preset: Rainbow (Deep Black + Gradient) */}
      <CUButton 
        size="sm" 
        variant="rainbow" // Uses the 'rainbow' preset animation
        className="h-8 text-xs"
        onClick={() => setTheme("custom", { 
          background: "#09090b", 
          foreground: "#fafafa", 
          primary: "#fafafa", 
          "primary-foreground": "#18181b",
          border: "#27272a",
          input: "#27272a",
          ring: "#a1a1aa",
          card: "#18181b", 
          "card-foreground": "#fafafa",
          popover: "#09090b",
          "popover-foreground": "#fafafa"
        })}
      >
        Rainbow Vibe
      </CUButton>
    </div>
  );
};

// --- 2. The Main Dashboard UI ---
const Dashboard = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl mx-auto">
      
      {/* LEFT SIDEBAR (Navigation & User) */}
      <aside className="w-full md:w-64 flex-shrink-0 space-y-6">
        <CUCard className="p-4 flex items-center gap-3 border-primary/20 bg-primary/5">
          <CUAvatar>
            <CUAvatarImage src="https://github.com/shadcn.png" />
            <CUAvatarFallback>MB</CUAvatarFallback>
          </CUAvatar>
          <div>
            <p className="text-sm font-medium leading-none">Mihir B.</p>
            <p className="text-xs text-muted-foreground">@axewhyzed</p>
          </div>
          <div className="ml-auto">
            <CUBadge variant="rainbow" className="text-[10px] h-5 px-1.5">PRO</CUBadge>
          </div>
        </CUCard>

        <nav className="space-y-1">
          <CUButton variant="ghost" className="w-full justify-start">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Overview
          </CUButton>
          <CUButton variant="secondary" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </CUButton>
          <CUButton variant="ghost" className="w-full justify-start">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </CUButton>
          <CUButton variant="ghost" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </CUButton>
        </nav>

        <CUCard className="bg-gradient-to-br from-primary/10 to-transparent border-0">
          <CUCardHeader className="pb-2">
            <CUCardTitle className="text-sm">Storage Used</CUCardTitle>
          </CUCardHeader>
          <CUCardContent>
            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[75%] rounded-full" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">75% of 10GB used</p>
          </CUCardContent>
        </CUCard>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">Manage your account settings and preferences.</p>
          </div>
          <div className="flex gap-2">
            <CUTooltipProvider>
              <CUTooltip>
                <CUTooltipTrigger asChild>
                  <CUButton variant="outline" size="icon">
                    <Bell className="h-4 w-4" />
                  </CUButton>
                </CUTooltipTrigger>
                <CUTooltipContent>
                  <p>No new notifications</p>
                </CUTooltipContent>
              </CUTooltip>
            </CUTooltipProvider>
            <CUButton>Save Changes</CUButton>
          </div>
        </div>

        {/* Tabs Section */}
        <CUTabs defaultValue="general" className="space-y-6">
          <CUTabsList>
            <CUTabsTrigger value="general">General</CUTabsTrigger>
            <CUTabsTrigger value="appearance">Appearance</CUTabsTrigger>
            <CUTabsTrigger value="notifications">Notifications</CUTabsTrigger>
          </CUTabsList>

          {/* TAB: General */}
          <CUTabsContent value="general" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <CUCard>
                <CUCardHeader>
                  <CUCardTitle>Profile Information</CUCardTitle>
                  <CUCardDescription>Update your public profile details.</CUCardDescription>
                </CUCardHeader>
                <CUCardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Username</label>
                    <CUInput defaultValue="axewhyzed" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <CUInput defaultValue="mihir@example.com" disabled />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Role</label>
                    <CUSelect>
                      <CUSelectTrigger>
                        <CUSelectValue placeholder="Select a role" />
                      </CUSelectTrigger>
                      <CUSelectContent>
                        <CUSelectItem value="admin">Administrator</CUSelectItem>
                        <CUSelectItem value="editor">Editor</CUSelectItem>
                        <CUSelectItem value="viewer">Viewer</CUSelectItem>
                      </CUSelectContent>
                    </CUSelect>
                  </div>
                </CUCardContent>
              </CUCard>

              <CUCard>
                <CUCardHeader>
                  <CUCardTitle>Delete Account</CUCardTitle>
                  <CUCardDescription>Permanently remove your account and all data.</CUCardDescription>
                </CUCardHeader>
                <CUCardContent>
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-sm text-destructive-foreground">
                    Warning: This action is not reversible. Please be certain.
                  </div>
                </CUCardContent>
                <CUCardFooter>
                  <CUDialog>
                    <CUDialogTrigger asChild>
                      <CUButton variant="destructive" className="w-full">Delete Account</CUButton>
                    </CUDialogTrigger>
                    <CUDialogContent>
                      <CUDialogHeader>
                        <CUDialogTitle>Are you absolutely sure?</CUDialogTitle>
                        <CUDialogDescription>
                          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                        </CUDialogDescription>
                      </CUDialogHeader>
                      <CUDialogFooter>
                        {/* 2. FIXED: Wrapped Cancel in CUDialogClose */}
                        <CUDialogClose asChild>
                          <CUButton variant="outline">Cancel</CUButton>
                        </CUDialogClose>
                        <CUButton variant="destructive">Yes, delete account</CUButton>
                      </CUDialogFooter>
                    </CUDialogContent>
                  </CUDialog>
                </CUCardFooter>
              </CUCard>
            </div>
          </CUTabsContent>

          {/* TAB: Appearance (Empty demo) */}
          <CUTabsContent value="appearance">
            <CUCard className="min-h-[300px] flex flex-col items-center justify-center text-center p-8 border-dashed">
              <div className="rounded-full bg-muted p-3 mb-4">
                <Zap className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-lg">Vibe Check</h3>
              <p className="text-sm text-muted-foreground max-w-sm mb-4">
                Use the Theme Controls in the header to switch between Corporate, Neon, and Rainbow modes instantly.
              </p>
              <CUButton variant="shimmer">Test Shimmer Effect</CUButton>
            </CUCard>
          </CUTabsContent>

          {/* TAB: Notifications */}
          <CUTabsContent value="notifications">
            <CUCard>
              <CUCardHeader>
                <CUCardTitle>Notification Preferences</CUCardTitle>
                <CUCardDescription>Choose what you want to be notified about.</CUCardDescription>
              </CUCardHeader>
              <CUCardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-0.5">
                    <label className="text-base font-medium">Email Notifications</label>
                    <p className="text-sm text-muted-foreground">Receive a digest of your weekly activity.</p>
                  </div>
                  <CUSwitch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-0.5">
                    <label className="text-base font-medium">Push Notifications</label>
                    <p className="text-sm text-muted-foreground">Real-time alerts on your device.</p>
                  </div>
                  <CUSwitch checked={pushNotifications} onCheckedChange={setPushNotifications} />
                </div>
              </CUCardContent>
            </CUCard>
          </CUTabsContent>
        </CUTabs>

        {/* Dropdown Demo Area */}
        <div className="flex justify-end">
          <CUDropdownMenu>
            <CUDropdownMenuTrigger asChild>
              <CUButton variant="outline">
                More Actions <span className="ml-2">▼</span>
              </CUButton>
            </CUDropdownMenuTrigger>
            <CUDropdownMenuContent align="end" className="w-56">
              <CUDropdownMenuLabel>Actions</CUDropdownMenuLabel>
              <CUDropdownMenuSeparator />
              <CUDropdownMenuItem>
                <User className="mr-2 h-4 w-4" /> Profile
              </CUDropdownMenuItem>
              <CUDropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" /> Billing
              </CUDropdownMenuItem>
              <CUDropdownMenuSeparator />
              <CUDropdownMenuItem className="text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" /> Log out
              </CUDropdownMenuItem>
            </CUDropdownMenuContent>
          </CUDropdownMenu>
        </div>

      </main>
    </div>
  );
};

// --- 3. The Root App ---
const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-40">
          <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">C</div>
              <span className="font-bold text-lg tracking-tight">Customise UI</span>
            </div>
            <ThemeControls />
          </div>
        </header>
        
        <div className="p-4 sm:p-8">
          <Dashboard />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;