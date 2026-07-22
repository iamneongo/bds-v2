import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const C = 'https://images.squarespace-cdn.com/content/v1/62d8fbfb93e6dc1389f0aac3';
// squarespace serves resized variants via ?format=
const fmt = '?format=1500w';

const assets = {
  'texasace/logo.png': `${C}/770237da-77fa-4545-9595-99c6317d2c6c/Your+paragraph+text+%281%29.png${fmt}`,
  'texasace/team-hero.jpg': `${C}/a6856c67-e056-433b-b43f-c71cf139390d/TexasAce-28.jpg${fmt}`,
  'texasace/team-wide.jpg': `${C}/ef74cadd-f0a2-4564-b4ca-4ffd28d0f213/TexasAce-1.jpg${fmt}`,
  'texasace/prop-1.jpg': `${C}/c41f5ce6-73da-4a9a-a8c9-52d55654e2d7/DSC02103+8.19.23%E2%80%AFAM.jpg${fmt}`,
  'texasace/prop-2.jpg': `${C}/a635e4f1-3b58-4e9f-b200-a3e5fe1a4f03/1600EnchantedWay22.jpg${fmt}`,
  'texasace/prop-3.webp': `${C}/c10f482f-4ce7-4798-b54d-d4323c25389a/4bb7664e2883fac938f0a8f861cccdf7l-m1969687362rd-w1280_h960.webp${fmt}`,
  'texasace/prop-4.jpg': `${C}/638a88cd-804b-4645-8ab8-d286379854bd/546877528_1350683380396042_8292395741207028318_n.jpg${fmt}`,
  'texasace/media-1.jpg': `${C}/7d77f16b-44ec-4030-99f8-42a8495fa9a6/RpeWdiFLqRw-HD.jpg${fmt}`,
  'texasace/media-2.jpg': `${C}/12fde930-f107-4a0d-877d-cf75f9a54b71/Lb4xqpRt9oo-HD.jpg${fmt}`,
  'texasace/media-3.jpg': `${C}/7626589d-cae0-47e1-bb5b-165dc8cb63e1/DrYRgiKY82o-HD.jpg${fmt}`,
  'texasace/press-1.png': `${C}/fa722491-c438-4d42-b7f6-845b23969900/Screenshot+2025-06-26+at+4.16.08%E2%80%AFAM.png?format=500w`,
  'texasace/press-2.png': `${C}/4a9c4dfd-4768-4952-ae37-804edfa5da2e/Screenshot+2025-06-26+at+4.16.16%E2%80%AFAM.png?format=500w`,
  'texasace/press-3.png': `${C}/15108be7-9924-4a00-8539-194c6f62ff87/Screenshot+2025-06-26+at+4.16.29%E2%80%AFAM.png?format=500w`,
  'texasace/press-4.png': `${C}/3ec171f8-de6a-460d-811b-170652e69eec/Screenshot+2025-06-26+at+4.08.35%E2%80%AFAM.png?format=500w`,
  'texasace/press-5.png': `${C}/d2b747e4-d88e-436c-9f48-f5bea0972488/Screenshot+2025-06-26+at+4.08.47%E2%80%AFAM.png?format=500w`,
  'texasace/press-6.png': `${C}/ebf6c9ea-26ce-4150-82aa-62f35f71d3c7/Screenshot+2025-06-26+at+4.08.56%E2%80%AFAM.png?format=500w`,
};

async function dl([rel, url]) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.texasaceteam.com/' } });
    if (!res.ok) { console.error('FAIL', res.status, rel); return; }
    const buf = Buffer.from(await res.arrayBuffer());
    const out = path.join('public', rel);
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, buf);
    console.log('OK', rel, (buf.length/1024).toFixed(0)+'KB');
  } catch (e) { console.error('ERR', rel, e.message); }
}
const entries = Object.entries(assets);
for (let i = 0; i < entries.length; i += 4) await Promise.all(entries.slice(i, i+4).map(dl));
console.log('done');
