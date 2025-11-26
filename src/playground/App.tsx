import { useState } from "react";
import { ThemeProvider, useTheme } from "../context/theme-provider";

// Component Imports
import { CUButton } from "../components/button";
import { CUInput } from "../components/input";
import { CUCard, CUCardHeader, CUCardTitle, CUCardDescription, CUCardContent } from "../components/card";
import { CUSwitch } from "../components/switch";
import { CUSelect, CUSelectTrigger, CUSelectValue, CUSelectContent, CUSelectItem } from "../components/select";
import { CUDialog, CUDialogTrigger, CUDialogContent, CUDialogHeader, CUDialogTitle, CUDialogDescription, CUDialogFooter, CUDialogClose } from "../components/dialog";
import { CUTabs, CUTabsContent, CUTabsList, CUTabsTrigger } from "../components/tabs";
import { CUAvatar, CUAvatarFallback, CUAvatarImage } from "../components/avatar";
import { CUBadge } from "../components/badge";
import { CUTooltip, CUTooltipContent, CUTooltipProvider, CUTooltipTrigger } from "../components/tooltip";
import { CUToaster } from "../components/sonner";
import { toast } from "sonner";
import { CUSheet, CUSheetContent, CUSheetDescription, CUSheetHeader, CUSheetTitle, CUSheetTrigger } from "../components/sheet";
import { CUAccordion, CUAccordionContent, CUAccordionItem, CUAccordionTrigger } from "../components/accordion";
import { CUPopover, CUPopoverContent, CUPopoverTrigger } from "../components/popover";
import { CUSkeleton } from "../components/skeleton";

// Icons
import {
  CreditCard, LayoutDashboard, LogOut, Settings,
  Zap, Menu, Sun, Moon, Palette,
} from "lucide-react";

// --- 1. The Theme Controller (The "Brain" UI) ---
const ThemeControls = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex gap-1 border rounded-md bg-background p-1">
        <CUTooltipProvider>
          <CUTooltip>
            <CUTooltipTrigger asChild>
              <CUButton size="icon" variant="ghost" className="h-8 w-8" onClick={() => setTheme("light")}>
                <Sun className="h-4 w-4" />
              </CUButton>
            </CUTooltipTrigger>
            <CUTooltipContent><p>Light Mode</p></CUTooltipContent>
          </CUTooltip>
        </CUTooltipProvider>

        <CUTooltipProvider>
          <CUTooltip>
            <CUTooltipTrigger asChild>
              <CUButton size="icon" variant="ghost" className="h-8 w-8" onClick={() => setTheme("dark")}>
                <Moon className="h-4 w-4" />
              </CUButton>
            </CUTooltipTrigger>
            <CUTooltipContent><p>Dark Mode</p></CUTooltipContent>
          </CUTooltip>
        </CUTooltipProvider>
      </div>

      <div className="flex gap-2">
        <CUButton
          size="sm"
          variant="outline"
          className="h-8 text-xs"
          onClick={() => setTheme("custom", {
            background: "#ffffff",
            foreground: "#0f172a",
            primary: "#2563eb",
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

        <CUButton
          size="sm"
          variant="shimmer"
          className="h-8 text-xs"
          onClick={() => setTheme("custom", {
            background: "#050505",
            foreground: "#fafafa",
            primary: "#d946ef",
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

        <CUButton
          size="sm"
          variant="rainbow"
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
    </div>
  );
};

// --- 2. Sidebar Component (Sheet on Mobile, Static on Desktop) ---
const SidebarContent = () => (
  <div className="h-full flex flex-col gap-6">
    <CUCard className="p-4 flex items-center gap-3 border-primary/20 bg-primary/5 shadow-sm">
      <CUAvatar>
        <CUAvatarImage src="[https://github.com/shadcn.png](https://github.com/shadcn.png)" />
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

    <nav className="space-y-1 flex-1">
      <CUButton variant="ghost" className="w-full justify-start">
        <LayoutDashboard className="mr-2 h-4 w-4" /> Overview
      </CUButton>
      <CUButton variant="secondary" className="w-full justify-start">
        <Settings className="mr-2 h-4 w-4" /> Settings
      </CUButton>
      <CUButton variant="ghost" className="w-full justify-start">
        <CreditCard className="mr-2 h-4 w-4" /> Billing
      </CUButton>
    </nav>

    <div className="mt-auto space-y-4">
      <CUAccordion type="single" collapsible className="w-full">
        <CUAccordionItem value="help">
          <CUAccordionTrigger className="text-xs text-muted-foreground py-2">Need Help?</CUAccordionTrigger>
          <CUAccordionContent>
            <p className="text-xs text-muted-foreground">Contact support at help@customise.ui</p>
          </CUAccordionContent>
        </CUAccordionItem>
      </CUAccordion>

      <CUButton variant="ghost" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
        <LogOut className="mr-2 h-4 w-4" /> Logout
      </CUButton>
    </div>
  </div>
);

// --- 3. Main Dashboard Content ---
const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  // Simulate a loading state for the Skeleton demo
  const refreshData = () => {
    setLoading(true);
    toast("Refreshing Data...", { description: "Fetching latest analytics" });
    setTimeout(() => {
      setLoading(false);
      toast.success("Data Updated", { description: "Your dashboard is now current." });
    }, 2000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl mx-auto h-full">

      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 flex-shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile Header with Sheet */}
      <div className="md:hidden flex items-center justify-between mb-4">
        <CUSheet>
          <CUSheetTrigger asChild>
            <CUButton variant="outline" size="icon"><Menu className="h-4 w-4" /></CUButton>
          </CUSheetTrigger>
          <CUSheetContent side="left">
            <CUSheetHeader>
              <CUSheetTitle>Menu</CUSheetTitle>
              <CUSheetDescription>Navigate through your dashboard.</CUSheetDescription>
            </CUSheetHeader>
            <div className="mt-4 h-full">
              <SidebarContent />
            </div>
          </CUSheetContent>
        </CUSheet>
        <span className="font-bold text-lg">Dashboard</span>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 space-y-8">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              Settings
              <CUPopover>
                <CUPopoverTrigger asChild>
                  <CUButton variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                    <Zap className="h-3 w-3 text-yellow-500" />
                  </CUButton>
                </CUPopoverTrigger>
                <CUPopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Power User</h4>
                      <p className="text-sm text-muted-foreground">You have unlocked advanced settings.</p>
                    </div>
                  </div>
                </CUPopoverContent>
              </CUPopover>
            </h1>
            <p className="text-muted-foreground">Manage your account settings and preferences.</p>
          </div>
          <div className="flex gap-2">
            <CUButton variant="outline" onClick={refreshData}>Refresh</CUButton>
            <CUButton onClick={() => toast.success("Changes Saved!")}>Save Changes</CUButton>
          </div>
        </div>

        <CUTabs defaultValue="general" className="space-y-6">
          <CUTabsList>
            <CUTabsTrigger value="general">General</CUTabsTrigger>
            <CUTabsTrigger value="notifications">Notifications</CUTabsTrigger>
            <CUTabsTrigger value="advanced">Advanced</CUTabsTrigger>
          </CUTabsList>

          <CUTabsContent value="general" className="space-y-6">
            {loading ? (
              <div className="space-y-4">
                <CUSkeleton className="h-[200px] w-full rounded-xl" />
                <div className="space-y-2">
                  <CUSkeleton className="h-4 w-[250px]" />
                  <CUSkeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ) : (
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
                      <label className="text-sm font-medium">Role</label>
                      <CUSelect>
                        <CUSelectTrigger><CUSelectValue placeholder="Select role" /></CUSelectTrigger>
                        <CUSelectContent>
                          <CUSelectItem value="admin">Administrator</CUSelectItem>
                          <CUSelectItem value="editor">Editor</CUSelectItem>
                          <CUSelectItem value="viewer">Viewer</CUSelectItem>
                        </CUSelectContent>
                      </CUSelect>
                    </div>
                  </CUCardContent>
                </CUCard>

                <CUCard className="border-destructive/20 bg-destructive/5">
                  <CUCardHeader>
                    <CUCardTitle className="text-destructive">Danger Zone</CUCardTitle>
                    <CUCardDescription>Irreversible actions.</CUCardDescription>
                  </CUCardHeader>
                  <CUCardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Deleting your account will remove all data.
                    </p>
                    <CUDialog>
                      <CUDialogTrigger asChild>
                        <CUButton variant="destructive" className="w-full">Delete Account</CUButton>
                      </CUDialogTrigger>
                      <CUDialogContent>
                        <CUDialogHeader>
                          <CUDialogTitle>Are you sure?</CUDialogTitle>
                          <CUDialogDescription>This action cannot be undone.</CUDialogDescription>
                        </CUDialogHeader>
                        <CUDialogFooter>
                          <CUDialogClose asChild>
                            <CUButton variant="outline">Cancel</CUButton>
                          </CUDialogClose>
                          <CUButton variant="destructive" onClick={() => toast.error("Account Deleted")}>
                            Yes, delete
                          </CUButton>
                        </CUDialogFooter>
                      </CUDialogContent>
                    </CUDialog>
                  </CUCardContent>
                </CUCard>
              </div>
            )}
          </CUTabsContent>

          <CUTabsContent value="notifications">
            <CUCard>
              <CUCardHeader>
                <CUCardTitle>Notification Preferences</CUCardTitle>
              </CUCardHeader>
              <CUCardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-0.5">
                    <label className="text-base font-medium">Email Notifications</label>
                    <p className="text-sm text-muted-foreground">Receive a digest of your weekly activity.</p>
                  </div>
                  <CUSwitch />
                </div>
              </CUCardContent>
            </CUCard>
          </CUTabsContent>

          <CUTabsContent value="advanced">
            <CUCard className="min-h-[300px] flex flex-col items-center justify-center text-center p-8 border-dashed">
              <div className="rounded-full bg-muted p-3 mb-4">
                <Palette className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-lg">Vibe Check</h3>
              <p className="text-sm text-muted-foreground max-w-sm mb-4">
                Use the Theme Controls in the header to switch between Corporate, Neon, and Rainbow modes instantly.
              </p>
              <div className="flex gap-2">
                <CUButton variant="shimmer">Shimmer Vibe</CUButton>
                <CUButton variant="rainbow">Rainbow Vibe</CUButton>
              </div>
            </CUCard>
          </CUTabsContent>
        </CUTabs>

      </main>
    </div>
  );
};

// --- 4. Root App ---
const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <CUToaster />
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500 flex flex-col">
        <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-40">
          <div className="max-w-7xl mx-auto p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/20">C</div>
              <span className="font-bold text-lg tracking-tight">Customise UI</span>
              <CUBadge variant="outline" className="ml-2 text-[10px]">v1.0</CUBadge>
            </div>
            <ThemeControls />
          </div>
        </header>

        <div className="p-4 sm:p-8 flex-1">
          <Dashboard />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;