// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages serves the site from /<repo>/; override with env vars for
// Azure Static Web Apps or a custom domain (e.g. SITE_BASE=/).
// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://johnlokerse.github.io',
  base: process.env.SITE_BASE ?? '/azure-bicep-users-community',
});
