const { chromium } = require("playwright");
const OUT = process.argv[2] || ".";
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  for (const id of ["services", "coverage", "contact"]) {
    await page.evaluate((i) => {
      document.getElementById(i)?.scrollIntoView({ block: "start" });
    }, id);
    await page.waitForTimeout(900);
    await page.screenshot({ path: `${OUT}/diag-${id}.png` });
  }

  // Report any elements still hidden by Reveal (opacity 0) after scrolling all
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 200));
    }
  });
  await page.waitForTimeout(500);
  const hidden = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll("*"));
    return all.filter((el) => {
      const s = getComputedStyle(el);
      return parseFloat(s.opacity) < 0.1 && el.textContent.trim().length > 10;
    }).length;
  });
  console.log("Elements still near-invisible after full scroll:", hidden);
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
