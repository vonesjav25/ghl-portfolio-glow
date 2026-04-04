import { useEffect, useState } from "react";
import { Moon, Palette } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isGraphite = mounted ? theme === "graphite" : false;

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-2 shadow-sm backdrop-blur">
      <Moon className="h-4 w-4 text-muted-foreground" />
      <Switch
        checked={isGraphite}
        aria-label="Toggle between midnight and graphite themes"
        onCheckedChange={(checked) => setTheme(checked ? "graphite" : "midnight")}
      />
      <Palette className="h-4 w-4 text-muted-foreground" />
    </div>
  );
};

export default ThemeToggle;