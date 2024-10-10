const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'http://165.227.93.41/lojinha-web/v2/', // URL base para seus testes
    headless: false,  // para rodar os testes em um navegador visível
    viewport: { width: 1280, height: 720 },  // tamanho da tela
    screenshot: 'only-on-failure',  // tirar screenshots somente em falhas
    video: 'retain-on-failure',  // gravar vídeos das sessões somente em falhas
  },
  // configuração para rodar testes paralelos
  projects: [
    {
      name: 'chromium',  // navegador Chrome
      use: { browserName: 'chromium' },
    },
  ],
  // tempos limite
  timeout: 60000,
});