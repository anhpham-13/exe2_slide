const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

(async () => {
  const executablePath = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ].find(p => fs.existsSync(p));

  if (!executablePath) {
    console.error('No Chrome or Edge browser found.');
    process.exit(1);
  }

  console.log(`Using browser executable: ${executablePath}`);

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });

  const page = await browser.newPage();
  
  // A4 Landscape ratio 297mm x 210mm (1.414:1)
  await page.setViewport({ width: 1414, height: 1000, deviceScaleFactor: 2 });

  const htmlPath = path.join(__dirname, 'index.html');
  console.log(`Loading HTML from: ${htmlPath}`);
  
  await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, {
    waitUntil: ['load', 'networkidle0']
  });

  // Wait for Google Fonts to render
  await page.evaluate(async () => {
    await document.fonts.ready;
  });

  await new Promise(r => setTimeout(r, 2000));

  let pdfPath = path.join(__dirname, 'HomeMind_Pitch_Deck_A4.pdf');
  
  // Try writing to HomeMind_Pitch_Deck.pdf if not locked, otherwise HomeMind_Pitch_Deck_A4.pdf
  const primaryPath = path.join(__dirname, 'HomeMind_Pitch_Deck.pdf');
  try {
    const handle = fs.openSync(primaryPath, 'r+');
    fs.closeSync(handle);
    pdfPath = primaryPath;
  } catch (err) {
    console.log(`Primary PDF locked/busy, outputting to: ${pdfPath}`);
  }

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
    preferCSSPageSize: true
  });

  console.log(`A4 Landscape PDF successfully saved to: ${pdfPath}`);

  await browser.close();
})();
