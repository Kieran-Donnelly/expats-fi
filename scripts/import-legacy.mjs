import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const endpoint = 'https://expats.fi/wp-json/wp/v2/posts?per_page=100&_fields=slug,date,title,excerpt,content,link';
const response = await fetch(endpoint);
if (!response.ok) throw new Error(`Legacy import failed: ${response.status}`);
const posts = await response.json();

const decode = (value = '') => value
  .replace(/&#8211;|&#x2013;/g, '–')
  .replace(/&#8212;|&#x2014;/g, '—')
  .replace(/&#8217;|&#x2019;/g, '’')
  .replace(/&#8220;|&#x201C;/g, '“')
  .replace(/&#8221;|&#x201D;/g, '”')
  .replace(/&#038;|&amp;/g, '&')
  .replace(/&nbsp;|\u00a0/g, ' ')
  .replace(/&hellip;/g, '…')
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));

const textOnly = (html = '') => decode(html)
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const cleanHtml = (html = '') => decode(html)
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/\sclass=("[^"]*"|'[^']*')/gi, '')
  .replace(/\sstyle=("[^"]*"|'[^']*')/gi, '')
  .replace(/<p>\s*<h([2-6])>/gi, '<h$1>')
  .replace(/<\/h([2-6])>\s*<\/p>/gi, '</h$1>')
  .replace(/<p>\s*<\/p>/gi, '')
  .replace(/<p>\s*(\d+\.[\s\S]*?)<\/p>/gi, '<p>$1</p>')
  .trim();

const categoryFor = (title) => {
  const lower = title.toLowerCase();
  if (/permit|residence|embassy|visa|citizen|migri/.test(lower)) return 'Immigration & permits';
  if (/dental|teeth|health|doctor|care/.test(lower)) return 'Health & wellbeing';
  if (/train|bag|transport|travel|drive/.test(lower)) return 'Getting around';
  if (/work|job|business|salary/.test(lower)) return 'Work & money';
  return 'Everyday life';
};

const imported = posts.map((post) => {
  const title = decode(post.title.rendered);
  const bodyText = textOnly(post.content.rendered);
  let description = textOnly(post.excerpt.rendered).replace(/\s*\[…\]$/, '');
  if (description.length > 190) description = `${description.slice(0, 187).replace(/\s+\S*$/, '')}…`;
  return {
    slug: post.slug,
    title,
    description,
    category: categoryFor(title),
    publishedAt: post.date.slice(0, 10),
    readingMinutes: Math.max(3, Math.ceil(bodyText.split(/\s+/).length / 220)),
    html: cleanHtml(post.content.rendered),
    sourceUrl: post.link,
  };
}).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title));

const here = dirname(fileURLToPath(import.meta.url));
await writeFile(resolve(here, '../src/data/articles.json'), `${JSON.stringify(imported, null, 2)}\n`, 'utf8');
console.log(`Imported ${imported.length} articles from expats.fi`);
