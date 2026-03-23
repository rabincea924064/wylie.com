import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import https from 'https';

const slugs = [
  "contact-us",
  "hvac-maintenance-plan-cornwall-on",
  "canada-greener-homes-grant",
  "heat-pump-installation-cornwall-on",
  "ac-repair-cornwall-on",
  "gallery",
  "tankless-water-heaters-cornwall-on",
  "ductless-mini-split-installation-cornwall-on",
  "water-heaters-cornwall-on",
  "humidifiers-cornwall-on",
  "ac-replacement-cornwall-on",
  "hrvs-cornwall-on",
  "ventilation-cornwall-on",
  "gas-lines-cornwall-on",
  "hvac-near-me",
  "heat-pump-services-cornwall-on",
  "who-we-serve-cornwall-on",
  "hvac-resources-cornwall-on",
  "request-estimate",
  "schedule-hvac-service",
  "hvac-financing-cornwall-on",
  "furnace-repair-cornwall-on",
  "heating-services-cornwall-on",
  "furnace-replacement-cornwall-on",
  "our-hvac-services-cornwall-on",
  "ductless-mini-splits-services-cornwall-on",
  "hvac-troubleshooter",
  "new-construction-cornwall-on",
  "residential-hvac-services-cornwall-on",
  "reviews",
  "hvac-promotions-cornwall-on",
  "indoor-air-quality-cornwall-on",
  "air-conditioning-services-cornwall-on",
  "about-us",
  "seer-calculator"
];

const fetchHtml = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', err => reject(err));
  });
};

const run = async () => {
  const innerPagesDir = path.join(process.cwd(), 'app', '(inner-pages)');
  if (!fs.existsSync(innerPagesDir)) fs.mkdirSync(innerPagesDir, { recursive: true });

  const pageDetails = {};

  for (const slug of slugs) {
    console.log(`Fetching /${slug}/...`);
    try {
      const html = await fetchHtml(`https://www.wyliemechanical.com/${slug}/`);
      const $ = cheerio.load(html);
      
      let title = $('title').text().replace(' | Wylie Mechanical', '').replace('Wylie Mechanical', '').trim();
      let description = $('meta[name="description"]').attr('content') || '';
      
      // Look for the main content. Usually WordPress/Elementor uses .elementor, main, or .entry-content
      let contentHtml = '';
      if ($('.entry-content').length) {
        contentHtml = $('.entry-content').html();
      } else if ($('main').length) {
        contentHtml = $('main').html();
      } else if ($('#content').length) {
        contentHtml = $('#content').html();
      } else {
        contentHtml = '<div>No main content found</div>';
      }

      // Cleanup some script and style tags from content if needed
      const $content = cheerio.load(contentHtml);
      $content('script, style, iframe, form').remove(); 
      // We remove forms because we use our SidebarForm.
      contentHtml = $content.html();

      // Store title for InnerHero mapping
      pageDetails[`/${slug}`] = { title, description };

      // Make the directory
      const dir = path.join(innerPagesDir, slug);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

      // Build the Next.js Page
      const tsxContent = `
import { Metadata } from "next";

export const metadata: Metadata = {
  title: ${JSON.stringify(title + " | Wylie Mechanical")},
  description: ${JSON.stringify(description)},
};

export default function Page() {
  return (
    <div 
      className="prose prose-lg max-w-none text-body migrated-content" 
      dangerouslySetInnerHTML={{ __html: \`${contentHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} 
    />
  );
}
      `.trim();

      fs.writeFileSync(path.join(dir, 'page.tsx'), tsxContent);
      console.log(`-> Saved ${slug}/page.tsx`);

    } catch (e) {
      console.error(`Failed on ${slug}:`, e.message);
    }
  }

  // Generate the PAGE_DETAILS config block to paste into InnerHero.tsx or a generic data file
  fs.writeFileSync(path.join(process.cwd(), 'page-details.json'), JSON.stringify(pageDetails, null, 2));
  console.log("Done migrating pages!");
};

run();
