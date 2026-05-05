"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";

type Theme = "light" | "dark";
const THEME_STORAGE_KEY = "theme";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

function readTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const notify = () => onStoreChange();
  const handleStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY) notify();
  };

  mediaQuery.addEventListener("change", notify);
  window.addEventListener("storage", handleStorage);
  window.addEventListener("themechange", notify);

  return () => {
    mediaQuery.removeEventListener("change", notify);
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("themechange", notify);
  };
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore<Theme>(
    subscribe,
    readTheme,
    () => "light"
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function setTheme(nextTheme: Theme) {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
    window.dispatchEvent(new Event("themechange"));
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
}
