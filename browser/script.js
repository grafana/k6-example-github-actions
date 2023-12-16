import { browser } from "k6/experimental/browser";
import { check } from "k6";

export const options = {
  scenarios: {
    ui: {
      executor: "shared-iterations",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },
};

export default async function () {
  const page = browser.newPage();

  try {
    await page.goto('https://test.k6.io/');
    check(page, {
      header:
        page.locator("title").textContent() ==
        "Demo website for load testing",
    });

  } finally {
    page.close();
  }
}
