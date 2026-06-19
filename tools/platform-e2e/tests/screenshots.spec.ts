import { test } from "@playwright/test";

const routes = [
  "/",
  "/dashboard",
  "/dashboard/composition",
  "/dashboard/customer",
  "/dashboard/billing",
  "/dashboard/analytics",
  "/dashboard/admin",
  "/dashboard/ai-assistant",
  "/dashboard/vue-commerce",
  "/dashboard/angular-ops",
  "/dashboard/design-system",
  "/dashboard/knowledge",
];

test.describe("Platform Screenshots", () => {
  routes.forEach((route) => {
    test(route, async ({ page }) => {
      await page.goto(route);

      await page.waitForLoadState("networkidle");

      const file = route === "/" ? "landing" : route.replace(/\//g, "-");

      await page.screenshot({
        path: `screenshots/${file}.png`,
        fullPage: true,
      });
    });
  });
});
