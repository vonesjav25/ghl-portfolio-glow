import { useEffect, useState } from "react";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (theme === "system" ? resolvedTheme === "dark" : theme === "dark") : true;

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-2 shadow-sm backdrop-blur">
      <SunMedium className="h-4 w-4 text-muted-foreground" />
      <Switch
        checked={isDark}
        aria-label="Toggle color theme"
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <Moon className="h-4 w-4 text-muted-foreground" />
    </div>
  );
};

export default ThemeToggle;