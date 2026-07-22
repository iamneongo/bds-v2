import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const A = 'https://assets.agentfire3.com/uploads/sites/2457';
const T = 'https://assets.agentfire3.com/uploads/templates';

const assets = {
  // logos & brand
  'images/logo-white-orange.png': `${A}/2025/11/Whissel-Beer-Group-Logo-02-secondary-white-orange-800xAUTO.fit.max.png`,
  'images/logomark-dune.png': `${A}/2025/10/Logomark-Primary-Dune-01.png`,
  // news logos
  'images/news/10news.png': `${A}/2025/10/10NSN-AUTOx120.fit.png`,
  'images/news/fox5.jpg': `${A}/2025/10/F5SN-AUTOx120.fit.jpg`,
  'images/news/cbs.png': `${A}/2025/10/CBSN-AUTOx120.fit.png`,
  'images/news/union-tribune.png': `${A}/2025/10/TSNUT-AUTOx120.fit.png`,
  'images/news/7sd.png': `${A}/2025/10/7SN-01-AUTOx120.fit.png`,
  'images/news/kn.png': `${A}/2025/10/KN-01-AUTOx120.fit.png`,
  // area guide images
  'images/areas/carlsbad.jpg': `${A}/2025/10/Carlsbad-Carlsbad-bluffs-in-California-overlooking-the-beach-and-Pacific-Ocean.jpg`,
  'images/areas/san-marcos.jpg': `${A}/2025/10/San-Marcos-Afternoon-view-of-Lake-San-Marcos-in-San-Marcos-California-USA.jpg`,
  'images/areas/escondido.jpg': `${A}/2025/10/Escondido-Aerial-View-of-Escondido-California-at-Dusk.jpg`,
  'images/areas/alpine.jpg': `${A}/2025/10/AlpineAutumn-landscape-in-Alpine-San-Diego-California.jpg`,
  'images/areas/san-diego-downtown.jpg': `${A}/2025/10/City-of-San-Diego-California-United-States-of-America-downtown-street.jpg`,
  'images/areas/solana-beach.jpg': `${A}/2025/10/Solana-Beach-California-USA-Pacific-Ocean-West-coast.jpg`,
  'images/areas/riverside.jpg': `${A}/2025/10/Sunset-aerial-view-of-historic-downtown-Riverside-California.jpg`,
  'images/areas/del-mar.jpg': `${A}/2025/10/Del-Mar-Big-Sky-Sunset-Del-Mar-CA.jpg`,
  'images/areas/coronado.jpg': `${A}/2025/10/Colorful-sunrise-on-Coronado-Island-San-Diego-California-USA.jpg`,
  'images/areas/mission-beach.jpg': `${A}/2025/10/A-lifeguard-tower-at-sunset-on-Mission-Beach-in-San-Diego-California.jpg`,
  'images/areas/corona-del-mar.jpg': `${A}/2025/10/Del-Mar-Houses-on-cliffs-above-Corona-Del-Mar-State-Beach-seen-from-Inspiration-Point-in-Corona-del-Mar-California.jpg`,
  'images/balboa-park.jpg': `${A}/2025/10/San-Diego-Balboa-public-park-at-sunset-in-California-USA.jpg`,
  // textures
  'images/texture-05.jpg': `${A}/2025/10/Texture-05.jpg`,
  'images/texture-09.jpg': `${A}/2025/10/Texture-09.jpg`,
  // product cards
  'images/products/sell.jpg': `${A}/2025/10/0031-Via-Trevi-11631-241202.jpg`,
  'images/products/buy.jpg': `${A}/2025/10/0004-Via-Trevi-11631-241202.jpg`,
  'images/products/home-eval.jpg': `${A}/2025/10/0039-Via-Trevi-11631-241204-2048x2048.fit.jpg`,
  'images/products/guarantee.jpg': `${A}/2025/10/Aurora-Summit-Trl-5384-01.jpg`,
  // team / about
  'images/team-cover.jpg': `${A}/2025/10/Dan-Kyle-Cover-Photo.jpg`,
  // icons
  'images/icons/phone.png': `${A}/2025/11/Phone-icon-01-80x80.fit.max.png`,
  'images/icons/email.png': `${A}/2025/11/Email-icon-01-80x80.fit.max.png`,
  'images/icons/address.png': `${A}/2025/11/Address-icon-01-80x80.fit.max.png`,
  'images/icons/arrow-left-orange.png': `${A}/2025/11/arrow-icon-left-orange.png`,
  'images/icons/arrow-right-orange.png': `${A}/2025/11/arrow-icon-right-orange.png`,
  'images/icons/search-communities.png': `${A}/2025/11/Communities-search-icon-01.png`,
  'images/icons/search-popular.png': `${A}/2025/11/Popular-searches-icon-01.png`,
  'images/icons/search-map.png': `${A}/2025/11/Map-search-icon-01.png`,
  'images/icons/5star.png': `${A}/2025/10/5star-icon-01.png`,
  'images/icons/almond-07.png': `${A}/2025/10/Icons-Almond-07.png`,
  'images/zillow-badge.png': `${A}/2025/10/Zillow-Badge-02.png`,
  // videos
  'videos/hero-san-diego.mp4': 'https://videos.agentfire3.com/whisselbeergroup.com/SanDiegoWebsiteVideo.mp4',
  'videos/testimonial-montage.mp4': 'https://assets.agentfire3.com/video/whisselbeergroup.com/TestimonialMontage01.mp4',
};

const entries = Object.entries(assets);
async function dl([rel, url]) {
  try {
    const res = await fetch(url, { headers: {
      'Referer': 'https://whisselbeergroup.com/',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'
    }});
    if (!res.ok) { console.error('FAIL', res.status, url); return; }
    const buf = Buffer.from(await res.arrayBuffer());
    const out = path.join('public', rel);
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, buf);
    console.log('OK', rel, (buf.length/1024).toFixed(0)+'KB');
  } catch (e) { console.error('ERR', url, e.message); }
}
for (let i = 0; i < entries.length; i += 4) {
  await Promise.all(entries.slice(i, i+4).map(dl));
}
console.log('done');
