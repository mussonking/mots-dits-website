import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const publicPaths = [
  '_headers',
  '_redirects',
  'assets',
  'conditions',
  'confidentialite',
  'don',
  'index.html',
  'manifest.json',
  'source',
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const path of publicPaths) {
  await cp(join(root, path), join(dist, path), { recursive: true });
}
