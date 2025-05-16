
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/Profile";
import PreferencesPage from "./pages/Preferences";
import ReportsPage from "./pages/Reports";
import InvoicesPage from "./pages/Invoices";
import MessagesPage from "./pages/Messages";
import CalendarPage from "./pages/Calendar";
import SettingsPage from "./pages/Settings";
import LimitBreachesPage from "./pages/risk/LimitBreaches";
import CounterpartiesPage from "./pages/risk/Counterparties";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <NextThemeProvider attribute="class">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/preferences" element={<PreferencesPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/invoices" element={<InvoicesPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            {/* Risk Management Routes */}
            <Route path="/risk/limit-breaches" element={<LimitBreachesPage />} />
            <Route path="/risk/counterparties" element={<CounterpartiesPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </NextThemeProvider>
  </QueryClientProvider>
);

export default App;
