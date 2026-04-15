import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Events from "./pages/Events.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

/** GitHub Pages project URLs use /repo-name/; Vite sets import.meta.env.BASE_URL from `vite build --base`. */
const routerBasename = (() => {
  const base = import.meta.env.BASE_URL;
  if (base === "/" || base === "") return undefined;
  return base.endsWith("/") ? base.slice(0, -1) : base;
})();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;
