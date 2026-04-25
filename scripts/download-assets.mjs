import { writeFile, mkdir } from "fs/promises";
import { dirname } from "path";

const BASE = "https://educalvolopez-com.vercel.app";

const assets = [
  // Avatar
  { url: `${BASE}/_next/static/media/avatar.edf051c2.png`, path: "public/images/avatar.png" },
  // Company logos
  { url: `${BASE}/_next/static/media/cineticdigital.519a3abe.svg`, path: "public/images/companies/cineticdigital.svg" },
  { url: `${BASE}/_next/static/media/adraba.f938d3f8.svg`, path: "public/images/companies/adraba.svg" },
  { url: `${BASE}/_next/static/media/tantra.009ffabc.svg`, path: "public/images/companies/tantra.svg" },
  { url: `${BASE}/_next/static/media/bdo.3294e30f.svg`, path: "public/images/companies/bdo.svg" },
  { url: `${BASE}/_next/static/media/papayagroup.508e9f2e.svg`, path: "public/images/companies/papayagroup.svg" },
  // Project covers
  { url: `${BASE}/images/proyectos/cover-lorem-ipsum.png`, path: "public/images/proyectos/cover-lorem-ipsum.png" },
  // Background gradient
  { url: `${BASE}/images/gradient2.svg`, path: "public/images/gradient2.svg" },
  // Favicon
  { url: `${BASE}/favicon.ico`, path: "public/favicon.ico" },
  // OG image
  { url: `${BASE}/og.jpg`, path: "public/og.jpg" },
  // Spotify album art (sample)
  { url: "https://i.scdn.co/image/ab67616d0000b273845cbe6f6fe468ebf2410c78", path: "public/images/spotify/album-art.jpg" },
  // Blog cover
  { url: `${BASE}/images/blog/cover-lorem-ipsum.png`, path: "public/images/blog/cover-lorem-ipsum.png" },
];

async function download(asset) {
  try {
    const dir = dirname(asset.path);
    await mkdir(dir, { recursive: true });
    const res = await fetch(asset.url);
    if (!res.ok) {
      console.error(`SKIP ${asset.url} (${res.status})`);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(asset.path, buf);
    console.info(`OK   ${asset.path} (${buf.length} bytes)`);
  } catch (err) {
    console.error(`FAIL ${asset.url}: ${err.message}`);
  }
}

// Download 4 at a time
const chunks = [];
for (let i = 0; i < assets.length; i += 4) {
  chunks.push(assets.slice(i, i + 4));
}
for (const chunk of chunks) {
  await Promise.all(chunk.map(download));
}

console.info("\nDone.");
