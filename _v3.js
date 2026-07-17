const { chromium } = require("playwright");
const OUT = process.argv[2];
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errs = [];
  page.on("console", (m) => { if (m.type() === "error") errs.push(m.text()); });
  page.on("pageerror", (e) => errs.push(String(e)));
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.8);
    for (let y = 0; y <= document.body.scrollHeight; y += step) { window.scrollTo(0, y); await new Promise(r=>setTimeout(r,200)); }
    window.scrollTo(0,0);
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/v3-full.png`, fullPage: true });
  for (const id of ["services","network"]) {
    await page.evaluate((i)=>document.getElementById(i)?.scrollIntoView({block:"start"}), id);
    await page.waitForTimeout(700);
    await page.screenshot({ path: `${OUT}/v3-${id}.png` });
  }
  const nonImg = errs.filter(e => !/404|Failed to load|image|photo-/i.test(e));
  console.log("total console errors:", errs.length, "| non-image errors:", nonImg.length);
  nonImg.slice(0,6).forEach(e=>console.log("  ERR:", e.slice(0,140)));
  await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
