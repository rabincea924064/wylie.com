import * as cheerio from 'cheerio';
import https from 'https';

https.get('https://www.wyliemechanical.com/air-conditioning-services-cornwall-on/', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const $ = cheerio.load(data);
    console.log("ALL H1:", $('h1').text());
    
    // Find the container with the actual article text
    const mainCols = $('.elementor-column').filter((i, el) => {
       return $(el).text().includes('Air conditioning services are essential for your AC unit');
    });

    console.log("Content Column Found:", mainCols.length);
    if(mainCols.length) {
       console.log("Class:", $(mainCols[mainCols.length - 1]).attr('class'));
       // We can just dump the HTML of the innermost elementor-widget-wrap that contains the text
    }

    // Try to find the subheader and sidebar to see their classes
    console.log("Sidebar Form text found in:", $('.elementor-widget').filter((i, el) => $(el).text().includes('Send Message')).attr('class'));
    
  });
});
