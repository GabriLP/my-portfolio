"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class" // Apply theme as a class to the HTML element
      defaultTheme="system" // Default to system theme
      enableSystem // Enable system theme detection
      disableTransitionOnChange // Disable transition when theme changes
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}