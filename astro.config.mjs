// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://customstickersprinting.com',
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory',
  },
});
