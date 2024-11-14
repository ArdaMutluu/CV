// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '10px' }}>Theme: {theme}</span>
      <button onClick={() => setTheme('light')} style={{ marginRight: '5px', background: 'none', border: 'none', cursor: 'pointer' }}>
        🌞 {/* Sun emoji for light mode */}
      </button>
      <button onClick={() => setTheme('dark')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        🌙 {/* Half-moon emoji for dark mode */}
      </button>
    </div>
  );
}
