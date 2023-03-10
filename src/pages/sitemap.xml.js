import moment from "moment";
const EXTERNAL_DATA_URL = "https://mirilo-nikola.netlify.app";
const date = moment().format("MMM Do YY");

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://mirilo-nikola.netlify.app/</loc>
       <lastmod>${date}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
     <url>
       <loc>https://mirilo-nikola.netlify.app/about</loc>
       <lastmod>${date}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>https://mirilo-nikola.netlify.app/contact</loc>
       <lastmod>${date}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/projects/${id}`}</loc>
           <lastmod>${date}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
