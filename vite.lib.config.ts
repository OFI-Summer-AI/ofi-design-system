import { resolve } from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      tsconfigPath: "./tsconfig.lib.json",
      entryRoot: "src",
      include: ["src"],
      exclude: [
        "src/App.tsx",
        "src/LandingPage.tsx",
        "src/main.tsx",
        "src/docs/**",
        "src/**/*.test.*",
        "src/**/*.stories.*",
      ],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
    },
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        /^@radix-ui\//,
        "@hookform/resolvers",
        "class-variance-authority",
        "clsx",
        "cmdk",
        "date-fns",
        "input-otp",
        "lucide-react",
        "react-day-picker",
        "react-hook-form",
        "recharts",
        "sonner",
        "tailwind-merge",
        "tailwindcss-animate",
        "vaul",
        "zod",
      ],
      output: [
        {
          format: "es",
          dir: "dist",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].mjs",
          exports: "named",
        },
        {
          format: "cjs",
          dir: "dist",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].cjs",
          exports: "named",
        },
      ],
    },
  },
})
