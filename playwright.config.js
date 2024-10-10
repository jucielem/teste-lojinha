// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'http://165.227.93.41/lojinha-web/v2/',
    headless: false, // Altere para false se quiser ver o navegador aberto durante os testes
    viewport: { width: 1280, height: 720 },
    screenshot: 'on', // Captura screenshots em caso de falha
    video: 'retain-on-failure', // Grava um vídeo apenas quando os testes falharem
  },
  // Configurações globais do projeto
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
  retries: 1, // Número de tentativas em caso de falha de um teste
  timeout: 30000, // Tempo máximo de execução por teste em milissegundos
  reporter: [['list'], ['html']], // Relatórios de teste
});
