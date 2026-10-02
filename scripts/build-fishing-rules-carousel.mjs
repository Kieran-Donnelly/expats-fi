import { mkdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const WIDTH = 1080
const HEIGHT = 1350
const TOTAL = 7
const outputDirectory = path.resolve('public/social/2026-10-fishing-rules')

const colours = {
  blue: '#0063ad',
  deepBlue: '#003f78',
  paleBlue: '#cce8f5',
  cream: '#f7f2e8',
  ink: '#172332',
  green: '#6caf62',
  orange: '#f4a14a',
  white: '#fffdf8',
}

function escapeXml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

async function imageData(pathname) {
  const buffer = await sharp(await readFile(pathname)).jpeg({ quality: 92 }).toBuffer()
  return `data:image/jpeg;base64,${buffer.toString('base64')}`
}

function styles() {
  return `<style>
    .display { font-family: 'Avenir Next Condensed', 'Arial Narrow', sans-serif; font-weight: 800; letter-spacing: -2px; }
    .sans { font-family: 'Avenir Next', Arial, sans-serif; }
    .eyebrow { font-family: 'Avenir Next', Arial, sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 4px; }
    .footer { font-family: 'Avenir Next', Arial, sans-serif; font-size: 22px; font-weight: 800; letter-spacing: 2px; }
    .body { font-family: 'Avenir Next', Arial, sans-serif; font-size: 34px; font-weight: 500; }
    .small { font-family: 'Avenir Next', Arial, sans-serif; font-size: 27px; font-weight: 600; }
  </style>`
}

function svg(contents) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">${styles()}${contents}</svg>`
}

function mark(x = 70, y = 62, scale = 1) {
  const size = 62 * scale
  const bar = 10 * scale
  const gap = 7 * scale
  return `<g transform="translate(${x} ${y})">
    <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${colours.deepBlue}"/>
    <rect x="${14 * scale}" y="${12 * scale}" width="${bar}" height="${16 * scale}" fill="${colours.white}"/>
    <rect x="${14 * scale}" y="${(28 + gap) * scale}" width="${bar}" height="${16 * scale}" fill="${colours.white}"/>
    <rect x="${(24 + gap) * scale}" y="${12 * scale}" width="${22 * scale}" height="${16 * scale}" fill="${colours.white}"/>
    <rect x="${(24 + gap) * scale}" y="${(28 + gap) * scale}" width="${22 * scale}" height="${16 * scale}" fill="${colours.white}"/>
  </g>`
}

function footer(number, dark = false) {
  const colour = dark ? colours.white : colours.ink
  return `<text x="70" y="1288" class="footer" fill="${colour}">EXPATS.FI</text>
    <text x="1010" y="1288" class="footer" fill="${colour}" text-anchor="end">${String(number).padStart(2, '0')} / ${String(TOTAL).padStart(2, '0')}</text>`
}

function ring(cx, cy, radius, colour, opacity = 1, width = 2) {
  return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="${colour}" stroke-width="${width}" opacity="${opacity}"/>`
}

function header(label, dark = false) {
  return `${mark()}<text x="151" y="101" class="eyebrow" fill="${dark ? colours.white : colours.deepBlue}">${escapeXml(label)}</text>`
}

function lineText(lines, { x = 90, y = 780, size = 36, colour = colours.ink, leading = 50, klass = 'body' } = {}) {
  return `<text x="${x}" y="${y}" class="${klass}" font-size="${size}" fill="${colour}">${lines
    .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : leading}">${escapeXml(line)}</tspan>`)
    .join('')}</text>`
}

async function build() {
  await mkdir(outputDirectory, { recursive: true })
  const fishing = await imageData('public/images/heroes/fishing-licence-finland.avif')

  const slides = [
    svg(`
      <defs><linearGradient id="cover" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${colours.deepBlue}" stop-opacity=".12"/><stop offset=".5" stop-color="${colours.deepBlue}" stop-opacity=".58"/><stop offset="1" stop-color="${colours.ink}" stop-opacity=".96"/></linearGradient></defs>
      <image href="${fishing}" width="1080" height="1350" preserveAspectRatio="xMidYMid slice"/>
      <rect width="1080" height="1350" fill="url(#cover)"/>
      <path d="M0 0H1080V175C760 250 420 230 0 140Z" fill="${colours.paleBlue}" opacity=".95"/>
      ${header('THE SIMPLE VERSION')}
      ${ring(910, 500, 255, colours.green, .62, 4)}
      ${ring(910, 500, 190, colours.green, .45, 3)}
      <text x="66" y="570" class="display" font-size="125" fill="${colours.white}">CAN YOU JUST</text>
      <text x="66" y="710" class="display" font-size="145" fill="${colours.white}">GO FISHING</text>
      <text x="66" y="850" class="display" font-size="126" fill="${colours.white}">IN FINLAND?</text>
      <rect x="68" y="910" width="760" height="66" rx="33" fill="${colours.orange}"/>
      <text x="448" y="955" class="eyebrow" fill="${colours.ink}" text-anchor="middle">FREE FISHING · FEES · LOCAL PERMITS</text>
      <text x="70" y="1082" class="body" fill="${colours.white}">It depends on the rod, your age and the water.</text>
      <text x="70" y="1134" class="small" fill="${colours.paleBlue}">Swipe before you cast →</text>
      ${footer(1, true)}
    `),
    svg(`
      <rect width="1080" height="1350" fill="${colours.cream}"/>
      <path d="M0 0H1080V245C760 320 420 295 0 195Z" fill="${colours.paleBlue}"/>
      ${header('USUALLY FREE')}
      ${ring(890, 215, 210, colours.green, .55, 4)}
      <text x="70" y="450" class="display" font-size="112" fill="${colours.ink}">ONE SIMPLE POLE</text>
      <text x="70" y="550" class="display" font-size="84" fill="${colours.green}">NO REEL. NO LURE.</text>
      <line x1="70" y1="610" x2="1010" y2="610" stroke="${colours.green}" stroke-width="5"/>
      ${lineText(['One pole, one hook, a float and bait is basic', 'hook-and-line fishing, known as onginta.', '', 'It is normally free, regardless of age.'], { y: 700, size: 35, leading: 50 })}
      <rect x="70" y="980" width="940" height="150" rx="32" fill="#ffffff"/>
      <text x="110" y="1042" class="eyebrow" fill="${colours.blue}">THE CATCH</text>
      ${lineText(['Some waters still have local restrictions.'], { x: 110, y: 1095, size: 29, leading: 42, klass: 'small' })}
      ${footer(2)}
    `),
    svg(`
      <rect width="1080" height="1350" fill="${colours.deepBlue}"/>
      <path d="M0 0H1080V245C760 320 420 290 0 190Z" fill="${colours.blue}"/>
      ${header('THE NATIONAL FEE', true)}
      ${ring(900, 230, 215, colours.orange, .62, 4)}
      <text x="70" y="440" class="display" font-size="105" fill="${colours.white}">ONE SPINNING</text>
      <text x="70" y="545" class="display" font-size="105" fill="${colours.white}">OR LURE ROD</text>
      <rect x="70" y="625" width="940" height="175" rx="36" fill="${colours.cream}"/>
      <text x="110" y="700" class="display" font-size="64" fill="${colours.orange}">AGED 18–69?</text>
      <text x="110" y="755" class="small" fill="${colours.ink}">You normally need the fisheries management fee.</text>
      ${lineText(['The fee usually covers one rod and lure in many', 'mainland waters, but it does not cancel local rules.'], { y: 900, colour: colours.white, size: 34, leading: 50 })}
      <text x="70" y="1075" class="small" fill="${colours.paleBlue}">Under 18 and over 70 are normally exempt.</text>
      <text x="70" y="1120" class="small" fill="${colours.paleBlue}">A grandfathered exemption also applies to people born in 1958 or earlier.</text>
      ${footer(3, true)}
    `),
    svg(`
      <rect width="1080" height="1350" fill="${colours.cream}"/>
      <path d="M0 0H1080V235C760 315 420 290 0 190Z" fill="${colours.paleBlue}"/>
      ${header('2026 PRICES')}
      <text x="70" y="415" class="display" font-size="102" fill="${colours.ink}">FISHERIES</text>
      <text x="70" y="515" class="display" font-size="102" fill="${colours.ink}">MANAGEMENT FEE</text>
      <rect x="70" y="600" width="280" height="320" rx="38" fill="#ffffff"/>
      <text x="210" y="715" class="display" font-size="88" fill="${colours.orange}" text-anchor="middle">€6</text>
      <text x="210" y="780" class="eyebrow" fill="${colours.deepBlue}" text-anchor="middle">ONE DAY</text>
      <rect x="400" y="600" width="280" height="320" rx="38" fill="${colours.deepBlue}"/>
      <text x="540" y="715" class="display" font-size="88" fill="${colours.white}" text-anchor="middle">€16</text>
      <text x="540" y="780" class="eyebrow" fill="${colours.paleBlue}" text-anchor="middle">7 DAYS</text>
      <rect x="730" y="600" width="280" height="320" rx="38" fill="${colours.green}"/>
      <text x="870" y="715" class="display" font-size="88" fill="${colours.white}" text-anchor="middle">€47</text>
      <text x="870" y="780" class="eyebrow" fill="${colours.white}" text-anchor="middle">YEAR</text>
      ${lineText(['The fee is personal. One payment does not cover', 'a couple, family or group.'], { y: 1020, size: 34, leading: 49 })}
      ${footer(4)}
    `),
    svg(`
      <rect width="1080" height="1350" fill="${colours.deepBlue}"/>
      <path d="M0 0H1080V250C760 330 420 295 0 195Z" fill="${colours.blue}"/>
      ${header('EXTRA PERMISSION', true)}
      <text x="70" y="430" class="display" font-size="105" fill="${colours.white}">MORE GEAR?</text>
      <text x="70" y="530" class="display" font-size="92" fill="${colours.orange}">MORE RULES.</text>
      <rect x="70" y="610" width="940" height="300" rx="38" fill="${colours.cream}"/>
      <text x="112" y="687" class="eyebrow" fill="${colours.blue}">YOU NORMALLY NEED THE OWNER’S PERMIT FOR</text>
      ${lineText(['• more than one rod', '• nets or traps', '• crayfishing equipment', '• managed or special fishing destinations'], { x: 112, y: 755, size: 31, leading: 46, klass: 'small' })}
      ${lineText(['If you are 18–69, the national fee is usually', 'required as well. These are two separate things.'], { y: 1015, colour: colours.white, size: 34, leading: 49 })}
      ${footer(5, true)}
    `),
    svg(`
      <rect width="1080" height="1350" fill="${colours.cream}"/>
      <path d="M0 0H1080V235C760 315 420 290 0 190Z" fill="${colours.paleBlue}"/>
      ${header('CHECK THE EXACT WATER')}
      ${ring(905, 250, 205, colours.orange, .58, 4)}
      <text x="70" y="435" class="display" font-size="105" fill="${colours.ink}">PAID DOES NOT</text>
      <text x="70" y="540" class="display" font-size="102" fill="${colours.ink}">MEAN EVERYWHERE.</text>
      <rect x="70" y="630" width="940" height="205" rx="36" fill="#ffffff"/>
      <text x="112" y="700" class="eyebrow" fill="${colours.blue}">BEFORE YOU GO</text>
      ${lineText(['Open Kalastusrajoitus.fi, zoom into the exact spot', 'and read any signs when you arrive.'], { x: 112, y: 760, size: 29, leading: 42, klass: 'small' })}
      ${lineText(['Rapids, migratory-fish waters, protected areas and', 'special destinations can all have extra restrictions.'], { y: 935, size: 34, leading: 50 })}
      <rect x="70" y="1070" width="940" height="95" rx="28" fill="${colours.orange}"/>
      <text x="540" y="1132" class="small" font-size="29" fill="${colours.ink}" text-anchor="middle">Åland has its own rules and permits.</text>
      ${footer(6)}
    `),
    svg(`
      <defs><linearGradient id="end" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${colours.deepBlue}" stop-opacity=".25"/><stop offset=".5" stop-color="${colours.deepBlue}" stop-opacity=".76"/><stop offset="1" stop-color="${colours.ink}" stop-opacity=".98"/></linearGradient></defs>
      <image href="${fishing}" width="1080" height="1350" preserveAspectRatio="xMidYMid slice"/>
      <rect width="1080" height="1350" fill="url(#end)"/>
      ${header('BEFORE YOU CAST', true)}
      <text x="70" y="430" class="display" font-size="110" fill="${colours.white}">CHECK FIVE THINGS</text>
      <rect x="70" y="505" width="940" height="480" rx="38" fill="${colours.cream}" opacity=".96"/>
      ${lineText(['01  YOUR AGE', '02  THE EQUIPMENT', '03  THE EXACT WATER', '04  EVERY PERMIT YOU NEED', '05  CATCH SIZES + CLOSED SEASONS'], { x: 112, y: 585, size: 31, leading: 70, klass: 'eyebrow', colour: colours.deepBlue })}
      <text x="70" y="1080" class="body" fill="${colours.white}">The full plain-English guide is on expats.fi</text>
      <text x="70" y="1138" class="small" fill="${colours.paleBlue}">Save this now. Check the official map before heading out.</text>
      ${footer(7, true)}
    `),
  ]

  for (const [index, slide] of slides.entries()) {
    await sharp(Buffer.from(slide)).png().toFile(path.join(outputDirectory, `${String(index + 1).padStart(2, '0')}.png`))
  }

  const thumbWidth = 270
  const thumbHeight = Math.round((thumbWidth * HEIGHT) / WIDTH)
  const thumbnails = await Promise.all(slides.map((slide) => sharp(Buffer.from(slide)).resize(thumbWidth, thumbHeight).png().toBuffer()))
  await sharp({ create: { width: thumbWidth * 4, height: thumbHeight * 2, channels: 4, background: '#e8edf2' } })
    .composite(thumbnails.map((input, index) => ({ input, left: (index % 4) * thumbWidth, top: Math.floor(index / 4) * thumbHeight })))
    .png()
    .toFile(path.join(outputDirectory, 'preview.png'))
}

await build()
