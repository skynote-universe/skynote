import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const revisions = JSON.parse(readFileSync(join(root, 'sdk-revisions.json'), 'utf8'));
const sdkDir = join(root, 'core');
mkdirSync(sdkDir, { recursive: true });

for (const [name, revision] of Object.entries(revisions)) {
  if (!/^[a-z][a-z-]*$/.test(name) || !/^[0-9a-f]{40}$/.test(revision)) {
    throw new Error('Invalid SDK repository or revision');
  }

  const target = join(sdkDir, name);
  if (existsSync(target)) {
    if (!existsSync(join(target, '.git'))) throw new Error(`Expected a Git checkout at ${target}`);
    const head = execFileSync('git', ['-C', target, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
    console.log(head === revision ? `${name}: ${head}` : `${name}: keeping local HEAD ${head}, pinned revision is ${revision}`);
    continue;
  }

  const staging = mkdtempSync(join(sdkDir, '.checkout-'));
  try {
    const git = (...args) => execFileSync('git', ['-C', staging, ...args], { stdio: 'inherit' });
    git('init', '--quiet');
    git('remote', 'add', 'origin', `https://github.com/skynote-universe/${name}.git`);
    git('fetch', '--no-tags', '--depth=1', 'origin', revision);
    git('checkout', '--quiet', '--detach', 'FETCH_HEAD');
    renameSync(staging, target);
    console.log(`${name}: ${revision}`);
  } finally {
    rmSync(staging, { recursive: true, force: true });
  }
}
