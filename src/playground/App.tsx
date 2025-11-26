import { useState } from "react";
import { ThemeProvider, useTheme } from "../context/theme-provider";
import { CUButton } from "../components/button";
import { CUInput } from "../components/input";
import { CUCard, CUCardHeader, CUCardTitle, CUCardDescription, CUCardContent, CUCardFooter } from "../components/card";
import { CUSwitch } from "../components/switch";
import { 
  CUSelect, CUSelectTrigger, CUSelectValue, CUSelectContent, CUSelectItem 
} from "../components/select";
import {
  CUDialog, CUDialogTrigger, CUDialogContent, CUDialogHeader, CUDialogTitle, CUDialogDescription, CUDialogFooter
} from "../components/dialog";
import {
  CUDropdownMenu, CUDropdownMenuTrigger, CUDropdownMenuContent, CUDropdownMenuItem, CUDropdownMenuLabel, CUDropdownMenuSeparator
} from "../components/dropdown-menu";

const ThemeControls = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex gap-4 p-4 border rounded-lg bg-card text-card-foreground shadow-sm items-center">
      <span className="text-sm font-medium">Theme:</span>
      <CUButton size="sm" variant="outline" onClick={() => setTheme("light")}>Light</CUButton>
      <CUButton size="sm" variant="outline" onClick={() => setTheme("dark")}>Dark</CUButton>
      <CUButton size="sm" variant="shimmer" onClick={() => setTheme("custom", { primary: "#8b5cf6", background: "#0f172a", foreground: "#f8fafc", ring: "#8b5cf6" })}>
        Purple Vibe
      </CUButton>
    </div>
  );
};

const Dashboard = () => {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* 1. Account Card */}
      <CUCard>
        <CUCardHeader>
          <CUCardTitle>Account Settings</CUCardTitle>
          <CUCardDescription>Manage your preferences here.</CUCardDescription>
        </CUCardHeader>
        <CUCardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Email Notifications</span>
            <CUSwitch checked={notifications} onCheckedChange={setNotifications} />
          </div>
          <div className="space-y-2">
            <span className="text-sm font-medium">Language</span>
            <CUSelect>
              <CUSelectTrigger><CUSelectValue placeholder="English" /></CUSelectTrigger>
              <CUSelectContent>
                <CUSelectItem value="en">English</CUSelectItem>
                <CUSelectItem value="fr">French</CUSelectItem>
                <CUSelectItem value="de">German</CUSelectItem>
              </CUSelectContent>
            </CUSelect>
          </div>
        </CUCardContent>
      </CUCard>

      {/* 2. Actions Card */}
      <CUCard>
        <CUCardHeader>
          <CUCardTitle>Quick Actions</CUCardTitle>
        </CUCardHeader>
        <CUCardContent className="space-y-4">
          <CUDialog>
            <CUDialogTrigger asChild>
              <CUButton className="w-full">Edit Profile (Dialog)</CUButton>
            </CUDialogTrigger>
            <CUDialogContent>
              <CUDialogHeader>
                <CUDialogTitle>Edit Profile</CUDialogTitle>
                <CUDialogDescription>Make changes to your profile here.</CUDialogDescription>
              </CUDialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Username</label>
                  <CUInput placeholder="@johndoe" />
                </div>
              </div>
              <CUDialogFooter>
                <CUButton type="submit">Save changes</CUButton>
              </CUDialogFooter>
            </CUDialogContent>
          </CUDialog>

          <CUDropdownMenu>
            <CUDropdownMenuTrigger asChild>
              <CUButton variant="outline" className="w-full">More Options (Dropdown)</CUButton>
            </CUDropdownMenuTrigger>
            <CUDropdownMenuContent>
              <CUDropdownMenuLabel>My Account</CUDropdownMenuLabel>
              <CUDropdownMenuSeparator />
              <CUDropdownMenuItem>Profile</CUDropdownMenuItem>
              <CUDropdownMenuItem>Billing</CUDropdownMenuItem>
              <CUDropdownMenuSeparator />
              <CUDropdownMenuItem className="text-red-500">Logout</CUDropdownMenuItem>
            </CUDropdownMenuContent>
          </CUDropdownMenu>
        </CUCardContent>
      </CUCard>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background text-foreground p-8 space-y-8 transition-colors duration-300">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <ThemeControls />
        </header>
        <Dashboard />
      </div>
    </ThemeProvider>
  );
};

export default App;