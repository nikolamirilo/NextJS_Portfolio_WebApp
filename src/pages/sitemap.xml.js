import moment from "moment";
const EXTERNAL_DATA_URL = "https://mirilo-nikola.netlify.app/api/projects";
const date = moment().format("YYYY-MM-DDThh:mm:ssTZD");

function generateSiteMap(projects) {
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
     ${
       projects
         ? projects.allProjects
             .map((project) => {
               return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${project.id}`}</loc>
           <lastmod>${date}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
       </url>
     `;
             })
             .join("")
         : null
     }
   </urlset>
 `;
}

function SiteMap({ sitemap }) {
  return <>{sitemap}</>;
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const projects = await request.json();

  // We generate the XML sitemap with the projects data
  const sitemap = generateSiteMap(projects);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: { sitemap },
  };
}

export default SiteMap;
