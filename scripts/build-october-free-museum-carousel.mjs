import { mkdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const WIDTH = 1080
const HEIGHT = 1350
const outputDirectory = path.resolve('public/social/2026-10-free-museum-days')

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
  const buffer = await sharp(await readFile(pathname)).jpeg({ quality: 90 }).toBuffer()
  return `data:image/jpeg;base64,${buffer.toString('base64')}`
}

function mark(x = 70, y = 62, scale = 1) {
  const size = 62 * scale
  const bar = 10 * scale
  const gap = 7 * scale
  return `
    <g transform="translate(${x} ${y})">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${colours.deepBlue}"/>
      <rect x="${14 * scale}" y="${12 * scale}" width="${bar}" height="${16 * scale}" fill="${colours.white}"/>
      <rect x="${14 * scale}" y="${(28 + gap) * scale}" width="${bar}" height="${16 * scale}" fill="${colours.white}"/>
      <rect x="${(24 + gap) * scale}" y="${12 * scale}" width="${22 * scale}" height="${16 * scale}" fill="${colours.white}"/>
      <rect x="${(24 + gap) * scale}" y="${(28 + gap) * scale}" width="${22 * scale}" height="${16 * scale}" fill="${colours.white}"/>
    </g>`
}

function footer(number, total = 8, dark = false) {
  const colour = dark ? colours.white : colours.ink
  return `
    <text x="70" y="1288" class="footer" fill="${colour}">EXPATS.FI</text>
    <text x="1010" y="1288" class="footer" fill="${colour}" text-anchor="end">${String(number).padStart(2, '0')} / ${String(total).padStart(2, '0')}</text>`
}

function sharedStyles() {
  return `<style>
    .display { font-family: 'Avenir Next Condensed', 'Arial Narrow', sans-serif; font-weight: 800; letter-spacing: -2px; }
    .sans { font-family: 'Avenir Next', Arial, sans-serif; }
    .eyebrow { font-family: 'Avenir Next', Arial, sans-serif; font-size: 24px; font-weight: 700; letter-spacing: 4px; }
    .footer { font-family: 'Avenir Next', Arial, sans-serif; font-size: 22px; font-weight: 800; letter-spacing: 2px; }
    .body { font-family: 'Avenir Next', Arial, sans-serif; font-size: 34px; font-weight: 500; }
    .small { font-family: 'Avenir Next', Arial, sans-serif; font-size: 25px; font-weight: 600; }
  </style>`
}

function svg(contents) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">${sharedStyles()}${contents}</svg>`
}

function ring(cx, cy, radius, colour, opacity = 1, width = 2) {
  return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="${colour}" stroke-width="${width}" opacity="${opacity}"/>`
}

function infoSlide({ number, date, month = 'OCT', title, time, address, noteLines, accent = colours.green, reverse = false }) {
  const background = reverse ? colours.deepBlue : colours.cream
  const primary = reverse ? colours.white : colours.ink
  const secondary = reverse ? colours.paleBlue : colours.deepBlue
  return svg(`
    <rect width="1080" height="1350" fill="${background}"/>
    <path d="M0 0H1080V230C825 310 480 300 0 195Z" fill="${reverse ? colours.blue : colours.paleBlue}"/>
    ${ring(920, 180, 210, accent, 0.52, 4)}
    ${ring(920, 180, 158, accent, 0.4, 3)}
    ${mark()}
    <text x="151" y="101" class="eyebrow" fill="${secondary}">FREE IN HELSINKI</text>
    <text x="70" y="410" class="display" font-size="220" fill="${accent}">${escapeXml(date)}</text>
    <text x="75" y="480" class="eyebrow" fill="${secondary}">${escapeXml(month)} 2026</text>
    <line x1="70" y1="530" x2="1010" y2="530" stroke="${accent}" stroke-width="5"/>
    <text x="70" y="655" class="display" font-size="88" fill="${primary}">${escapeXml(title)}</text>
    <text x="70" y="748" class="display" font-size="62" fill="${accent}">${escapeXml(time)}</text>
    <text x="70" y="825" class="body" fill="${primary}">${escapeXml(address)}</text>
    <rect x="70" y="905" width="940" height="205" rx="34" fill="${reverse ? colours.blue : '#ffffff'}" opacity="${reverse ? 0.78 : 1}"/>
    <text x="112" y="975" class="eyebrow" fill="${reverse ? colours.paleBlue : colours.blue}">GOOD TO KNOW</text>
    <text x="112" y="1030" class="small" font-size="28" fill="${primary}">
      ${noteLines.map((line, index) => `<tspan x="112" dy="${index === 0 ? 0 : 38}">${escapeXml(line)}</tspan>`).join('')}
    </text>
    ${footer(number, 6, reverse)}
  `)
}

async function build() {
  await mkdir(outputDirectory, { recursive: true })
  const station = await imageData('public/images/heroes/start-here-helsinki-station.webp')
  const cityMuseum = await imageData('public/images/family-kids/helsinki-city-museum-kids.webp')
  const tram = await imageData('public/images/family-kids/tram-museum-helsinki.webp')
  const tiger = await imageData('public/images/family-kids/korkeasaari-tiger.webp')

  const slides = [
    svg(`
      <defs><linearGradient id="cover" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${colours.deepBlue}" stop-opacity=".18"/><stop offset=".58" stop-color="${colours.deepBlue}" stop-opacity=".64"/><stop offset="1" stop-color="${colours.ink}" stop-opacity=".95"/></linearGradient></defs>
      <image href="${station}" width="1080" height="1350" preserveAspectRatio="xMidYMid slice"/>
      <rect width="1080" height="1350" fill="url(#cover)"/>
      <path d="M0 0H1080V160C765 245 420 225 0 130Z" fill="${colours.paleBlue}" opacity=".94"/>
      ${mark()}
      <text x="151" y="101" class="eyebrow" fill="${colours.deepBlue}">SAVE THE DATES</text>
      ${ring(910, 520, 250, colours.green, 0.62, 4)}
      ${ring(910, 520, 190, colours.green, 0.48, 3)}
      <text x="66" y="565" class="display" font-size="175" fill="${colours.white}">FREE</text>
      <text x="66" y="718" class="display" font-size="142" fill="${colours.white}">DAYS</text>
      <text x="66" y="868" class="display" font-size="122" fill="${colours.white}">COMING UP</text>
      <rect x="68" y="925" width="690" height="62" rx="31" fill="${colours.orange}"/>
      <text x="413" y="968" class="eyebrow" fill="${colours.ink}" text-anchor="middle">HELSINKI · OCT + EARLY NOV</text>
      <text x="70" y="1100" class="body" fill="${colours.white}">The zoo, museums and a few useful regulars.</text>
      <text x="70" y="1150" class="small" fill="${colours.paleBlue}">Swipe for times, addresses and the useful bits →</text>
      ${footer(1, 8, true)}
    `),
    infoSlide({ number: 2, date: '02', title: 'KIASMA', time: 'FRIDAY · 10–20', address: 'Mannerheiminaukio 2', noteLines: ['Free entry all day, plus an English guided tour at 18.00.', 'No advance booking. Sign up for the tour at the info desk.'], accent: colours.orange }),
    svg(`
      <defs><linearGradient id="zooFade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${colours.deepBlue}" stop-opacity=".02"/><stop offset=".68" stop-color="${colours.deepBlue}" stop-opacity=".68"/><stop offset="1" stop-color="${colours.ink}" stop-opacity=".96"/></linearGradient></defs>
      <image href="${tiger}" width="1080" height="1350" preserveAspectRatio="xMidYMid slice"/>
      <rect width="1080" height="1350" fill="url(#zooFade)"/>
      <path d="M0 0H1080V180C760 245 420 220 0 140Z" fill="${colours.paleBlue}" opacity=".94"/>
      ${mark()}
      <text x="151" y="101" class="eyebrow" fill="${colours.deepBlue}">THE BIG FAMILY ONE</text>
      <text x="70" y="550" class="display" font-size="205" fill="${colours.orange}">05</text>
      <text x="75" y="620" class="eyebrow" fill="${colours.white}">OCTOBER 2026</text>
      <text x="70" y="758" class="display" font-size="86" fill="${colours.white}">KORKEASAARI ZOO</text>
      <text x="70" y="842" class="display" font-size="58" fill="${colours.orange}">MONDAY · 10–16</text>
      <rect x="70" y="900" width="940" height="205" rx="34" fill="${colours.cream}" opacity=".96"/>
      <text x="112" y="970" class="eyebrow" fill="${colours.blue}">GOOD TO KNOW</text>
      <text x="112" y="1025" class="small" font-size="28" fill="${colours.ink}">
        <tspan x="112">No advance booking. Last entry is at 15.00 and visitor</tspan>
        <tspan x="112" dy="38">numbers may be limited, so arriving early is sensible.</tspan>
      </text>
      ${footer(3, 8, true)}
    `),
    infoSlide({ number: 4, date: '09', title: 'NATURAL HISTORY', time: 'FRIDAY · 10–17', address: 'Pohjoinen Rautatiekatu 13', noteLines: ['Free admission for private visitors. Register at the ticket', 'desk when you arrive. Earlier is usually the calmer shout.'], accent: colours.green, reverse: true }),
    svg(`
      <rect width="1080" height="1350" fill="${colours.cream}"/>
      <rect width="1080" height="250" fill="${colours.paleBlue}"/>
      ${mark()}
      <text x="151" y="101" class="eyebrow" fill="${colours.deepBlue}">TWO IN ONE DAY</text>
      <text x="70" y="400" class="display" font-size="205" fill="${colours.orange}">30</text>
      <text x="75" y="468" class="eyebrow" fill="${colours.deepBlue}">OCTOBER 2026</text>
      <line x1="70" y1="518" x2="1010" y2="518" stroke="${colours.orange}" stroke-width="5"/>
      <rect x="70" y="575" width="940" height="232" rx="36" fill="#ffffff"/>
      <text x="112" y="655" class="display" font-size="74" fill="${colours.ink}">HAM</text>
      <text x="112" y="720" class="display" font-size="50" fill="${colours.blue}">11–19</text>
      <text x="955" y="683" class="small" fill="${colours.ink}" text-anchor="end">Eteläinen Rautatiekatu 8</text>
      <rect x="70" y="835" width="940" height="232" rx="36" fill="${colours.deepBlue}"/>
      <text x="112" y="915" class="display" font-size="66" fill="${colours.white}">SINEBRYCHOFF</text>
      <text x="112" y="980" class="display" font-size="50" fill="${colours.orange}">15–18</text>
      <text x="955" y="943" class="small" fill="${colours.white}" text-anchor="end">Bulevardi 40</text>
      <text x="70" y="1150" class="body" fill="${colours.ink}">Both museums are free on the final Friday of October.</text>
      ${footer(5)}
    `),
    svg(`
      <rect width="1080" height="1350" fill="${colours.deepBlue}"/>
      <path d="M0 0H1080V250C760 330 410 290 0 195Z" fill="${colours.blue}"/>
      ${ring(900, 200, 235, colours.green, 0.55, 4)}
      ${ring(900, 200, 175, colours.green, 0.38, 3)}
      ${mark()}
      <text x="151" y="101" class="eyebrow" fill="${colours.white}">KEEP THE CALENDAR OUT</text>
      <text x="70" y="425" class="display" font-size="110" fill="${colours.white}">EARLY NOVEMBER</text>
      <rect x="70" y="505" width="940" height="145" rx="30" fill="${colours.cream}"/>
      <text x="105" y="568" class="display" font-size="58" fill="${colours.orange}">02 NOV</text>
      <text x="375" y="568" class="display" font-size="50" fill="${colours.ink}">KORKEASAARI ZOO</text>
      <text x="375" y="613" class="small" fill="${colours.ink}">Monday · 10–16 · no booking</text>
      <rect x="70" y="680" width="940" height="180" rx="30" fill="#ffffff"/>
      <text x="105" y="743" class="display" font-size="58" fill="${colours.orange}">06 NOV</text>
      <text x="375" y="743" class="display" font-size="50" fill="${colours.ink}">ATENEUM + KIASMA</text>
      <text x="375" y="790" class="small" fill="${colours.ink}">Ateneum 10–18 · Kiasma 10–20</text>
      <rect x="70" y="890" width="940" height="180" rx="30" fill="${colours.green}"/>
      <text x="105" y="953" class="display" font-size="58" fill="${colours.deepBlue}">11 NOV</text>
      <text x="375" y="953" class="display" font-size="49" fill="${colours.white}">NATURAL HISTORY</text>
      <text x="375" y="1000" class="small" fill="${colours.white}">Wednesday · 10–17</text>
      <text x="70" y="1160" class="small" fill="${colours.paleBlue}">All three are free-admission dates for private visitors.</text>
      ${footer(6, 8, true)}
    `),
    svg(`
      <defs><linearGradient id="photoFade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${colours.deepBlue}" stop-opacity=".88"/><stop offset=".72" stop-color="${colours.deepBlue}" stop-opacity=".18"/><stop offset="1" stop-color="${colours.deepBlue}" stop-opacity=".04"/></linearGradient></defs>
      <rect width="1080" height="1350" fill="${colours.cream}"/>
      <image href="${cityMuseum}" x="0" y="0" width="1080" height="520" preserveAspectRatio="xMidYMid slice"/>
      <rect x="0" y="0" width="1080" height="520" fill="url(#photoFade)"/>
      ${mark()}
      <text x="151" y="101" class="eyebrow" fill="${colours.white}">NO SPECIAL DATE NEEDED</text>
      <text x="70" y="640" class="display" font-size="104" fill="${colours.ink}">ALWAYS FREE</text>
      <rect x="70" y="705" width="940" height="118" rx="28" fill="#ffffff"/>
      <text x="105" y="765" class="display" font-size="46" fill="${colours.deepBlue}">HELSINKI CITY MUSEUM</text>
      <text x="105" y="802" class="small" fill="${colours.ink}">Aleksanterinkatu 16 · open every day</text>
      <rect x="70" y="847" width="940" height="118" rx="28" fill="#ffffff"/>
      <text x="105" y="907" class="display" font-size="46" fill="${colours.deepBlue}">TRAM MUSEUM</text>
      <text x="105" y="944" class="small" fill="${colours.ink}">Töölönkatu 51 A · daily 11–17</text>
      <rect x="70" y="989" width="940" height="136" rx="28" fill="${colours.deepBlue}"/>
      <text x="105" y="1049" class="display" font-size="46" fill="${colours.white}">WORKER’S MUSEUM</text>
      <text x="105" y="1088" class="small" fill="${colours.paleBlue}">Kirstinkuja 4 · Wed–Sun 11–17 · through 1 Nov</text>
      <text x="70" y="1190" class="small" fill="${colours.ink}">Check exceptional hours before setting off.</text>
      ${footer(7)}
    `),
    svg(`
      <defs><linearGradient id="tramFade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${colours.deepBlue}" stop-opacity=".18"/><stop offset=".58" stop-color="${colours.deepBlue}" stop-opacity=".75"/><stop offset="1" stop-color="${colours.ink}" stop-opacity=".98"/></linearGradient></defs>
      <image href="${tram}" width="1080" height="1350" preserveAspectRatio="xMidYMid slice"/>
      <rect width="1080" height="1350" fill="url(#tramFade)"/>
      ${ring(855, 285, 250, colours.orange, 0.7, 4)}
      ${ring(855, 285, 185, colours.orange, 0.54, 3)}
      ${mark()}
      <text x="151" y="101" class="eyebrow" fill="${colours.white}">KEEP THIS ONE HANDY</text>
      <text x="70" y="640" class="display" font-size="132" fill="${colours.white}">SAVE IT.</text>
      <text x="70" y="765" class="display" font-size="112" fill="${colours.white}">SEND IT ON.</text>
      <rect x="70" y="842" width="850" height="176" rx="34" fill="${colours.cream}" opacity=".95"/>
      <text x="110" y="907" class="eyebrow" fill="${colours.blue}">ONE LAST THING</text>
      <text x="110" y="958" class="small" font-size="29" fill="${colours.ink}">
        <tspan x="110">Times can change, so check the organiser</tspan>
        <tspan x="110" dy="39">before heading out.</tspan>
      </text>
      <text x="70" y="1110" class="body" fill="${colours.white}">More useful Helsinki finds at expats.fi</text>
      <text x="70" y="1160" class="small" fill="${colours.paleBlue}">@expats_fi</text>
      ${footer(8, 8, true)}
    `),
  ]

  for (const [index, slide] of slides.entries()) {
    await sharp(Buffer.from(slide)).png().toFile(path.join(outputDirectory, `${String(index + 1).padStart(2, '0')}.png`))
  }

  const thumbWidth = 270
  const thumbHeight = Math.round(thumbWidth * HEIGHT / WIDTH)
  const thumbnails = await Promise.all(slides.map((slide) => sharp(Buffer.from(slide)).resize(thumbWidth, thumbHeight).png().toBuffer()))
  await sharp({ create: { width: thumbWidth * 4, height: thumbHeight * 2, channels: 4, background: '#e8edf2' } })
    .composite(thumbnails.map((input, index) => ({ input, left: (index % 4) * thumbWidth, top: Math.floor(index / 4) * thumbHeight })))
    .png()
    .toFile(path.join(outputDirectory, 'preview.png'))

  const newsHero = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
    ${sharedStyles()}
    <defs>
      <linearGradient id="heroFade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${colours.ink}" stop-opacity=".96"/>
        <stop offset=".58" stop-color="${colours.deepBlue}" stop-opacity=".72"/>
        <stop offset="1" stop-color="${colours.deepBlue}" stop-opacity=".18"/>
      </linearGradient>
    </defs>
    <image href="${station}" width="1600" height="900" preserveAspectRatio="xMidYMid slice"/>
    <rect width="1600" height="900" fill="url(#heroFade)"/>
    <path d="M0 0H1600V120C1120 200 600 180 0 105Z" fill="${colours.paleBlue}" opacity=".94"/>
    ${mark(65, 36, 1)}
    <text x="148" y="77" class="eyebrow" fill="${colours.deepBlue}">SAVE THE DATES · OCT + EARLY NOV</text>
    ${ring(1330, 300, 245, colours.green, 0.62, 4)}
    ${ring(1330, 300, 175, colours.green, 0.48, 3)}
    <text x="70" y="390" class="display" font-size="158" fill="${colours.white}">FREE DAYS</text>
    <text x="70" y="545" class="display" font-size="132" fill="${colours.white}">COMING UP</text>
    <rect x="72" y="610" width="730" height="72" rx="36" fill="${colours.orange}"/>
    <text x="437" y="659" class="eyebrow" fill="${colours.ink}" text-anchor="middle">ZOO · MUSEUMS · FAMILY FAVOURITES</text>
    <text x="72" y="770" class="body" fill="${colours.white}">Times, addresses and the useful bits before you go.</text>
    <text x="72" y="834" class="footer" fill="${colours.paleBlue}">EXPATS.FI</text>
  </svg>`

  await sharp(Buffer.from(newsHero))
    .webp({ quality: 88 })
    .toFile('public/images/news/free-days-helsinki-october-november-2026.webp')
}

await build()
