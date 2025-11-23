/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

const astroVitestConfig = getViteConfig({
  test: {
    coverage: {
      enabled: true,
      exclude: ["**/*playwright.{ts,js,mts,mjs,cts,cjs}"],
      include: ["src/**/*.{astro,ts,tsx,js,jsx,cjs,mjs,cts,mts}"],
      provider: "v8",
      reportOnFailure: true,
      reportsDirectory: "./.unit_test_results/coverage",
      reporter: ["html", "json", "json-summary"],
    },
    reporters: [
      "default",
      ["github-actions"],
      ["junit", { outputFile: "./.unit_test_results/junit-results.xml" }],
    ],
  },
});

export default astroVitestConfig;
