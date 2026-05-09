import { expect, test } from "playwright/test";

const routes = [
  {
    path: "/",
    heading: "I build AI-native, production-minded products for the web.",
  },
  {
    path: "/about",
    heading:
      "Hi, I'm Tim. I got into software by rebuilding real systems until the delivery process finally made sense.",
  },
  {
    path: "/blog",
    heading: "Notes on AI workflow, rebuilds, and delivery quality.",
  },
  {
    path: "/projects",
    heading: "Selected builds and case studies.",
  },
  {
    path: "/stack",
    heading: "Capabilities, not just a tool list.",
  },
] as const;

for (const route of routes) {
  test(`${route.path} renders without error overlay`, async ({ page }) => {
    const runtimeErrors: string[] = [];

    page.on("pageerror", (error) => runtimeErrors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") runtimeErrors.push(message.text());
    });

    await page.goto(route.path, { waitUntil: "networkidle" });

    await expect(
      page.getByRole("heading", { level: 1, name: route.heading })
    ).toBeVisible();
    await expect(page.locator("[data-nextjs-dialog]")).toHaveCount(0);
    expect(runtimeErrors).toEqual([]);
  });
}

test("latest blog card opens the article detail page", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page
    .getByRole("link", { name: "AI tooling as infrastructure" })
    .click();

  await expect(page).toHaveURL(/\/blog\/ai-tooling-as-infrastructure$/);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Why I treat AI tooling as infrastructure",
    })
  ).toBeVisible();
});

test("mobile navigation opens and exposes core routes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Open navigation" }).click();

  const mobileNavigation = page.locator("#mobile-navigation-panel");

  await expect(mobileNavigation).toBeVisible();
  await expect(
    mobileNavigation.getByRole("link", { name: /^About$/ })
  ).toBeVisible();
  await expect(
    mobileNavigation.getByRole("link", { name: /^Projects$/ })
  ).toBeVisible();
  await expect(
    mobileNavigation.getByRole("link", { name: /^Stack$/ })
  ).toBeVisible();
});
