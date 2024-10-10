const { test, expect } = require ('@playwright/test');

// Configurações básicas e fixture
test.describe('Testes na Lojinha Web', () => {

  test.beforeEach(async ({ page }) => {
    // Acessa o site da Lojinha Web
    await page.goto('http://165.227.93.41/lojinha-web/v2/');
  });

  test('Login - Testar login com sucesso', async ({ page }) => {
    // Digita o usuário e senha nos campos
    await page.fill('#usuario', 'admin'); // substitua com o login correto
    await page.fill('#senha', 'admin'); // substitua com a senha correta

    // Clica no botão de login
    await page.click('button[type="submit"]');

    // Espera a página redirecionar e verifica se o login foi bem-sucedido
    await expect(page).toHaveURL('http://165.227.93.41/lojinha-web/v2/produto'); // ajuste a URL se necessário
  });

  test('Validar Login', async ({ page }) => {
    // Realizar login
    await page.fill('#usuario', 'admin');
    await page.fill('#senha', 'admin');
    await page.click('button[type="submit"]');
  
    // Verifica se algum elemento que só aparece para usuários logados está presente
    const mensagemBoasVindas = page.locator('text=Boas vindas,'); // Substitua pelo seletor correto
    await expect(mensagemBoasVindas).toBeVisible();
  });

  test('Adicionar um Produto', async ({ page }) => {
    // Realizar login
    await page.fill('#usuario', 'admin');
    await page.fill('#senha', 'admin');
    await page.click('button[type="submit"]');
  
    // Acessar a página de adicionar produto
    await page.click('a[href="http://165.227.93.41/lojinha-web/v2/produto/novo"]'); // Ajuste o seletor conforme necessário
  
    // Preencher os detalhes do produto
    await page.fill('#produtonome', 'Produto de Teste');
    await page.fill('#produtovalor', '199.99');
    await page.fill('#produtocores', 'Preto, Branco');
  
    // Enviar o formulário
    await page.click('button[type="submit"]');
  
    // Verificar se o produto foi adicionado com sucesso
    const mensagemSucesso = page.locator('text=Produto adicionado com sucesso');
    await expect(mensagemSucesso).toBeVisible();
  });
  
  
});
