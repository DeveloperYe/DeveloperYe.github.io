// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 部署地址（用户站点，无需 basePath）
  site: 'https://DeveloperYe.github.io',

  // 自动生成 sitemap.xml 供搜索引擎抓取
  integrations: [sitemap()],

  // GitHub Pages 部署配置
  // 如果是用户/组织站点 (username.github.io)，basePath 不需要设置
  // 如果是项目站点 (username.github.io/repo-name)，需要设置 basePath
  build: {
    inlineStylesheets: 'auto',
  },
});
