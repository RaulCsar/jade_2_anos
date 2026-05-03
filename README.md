# Convite de Aniversário da Jade - 2 Aninhos 🍓

Este é um convite interativo mobile-first, desenvolvido com uma estética de scrapbook vintage inspirada na "Moranguinho" dos anos 80.

## ✨ Funcionalidades
- **Design Nostálgico**: Texturas de papel, bordas serrilhadas e fita adesiva decorativa.
- **Interatividade**: Botões com efeito "wobble" e animações de entrada ao scroll.
- **RSVP Integrado**: Formulário de confirmação pronto para integração.
- **Lista de Presentes**: Com funcionalidade de copiar chave Pix com um clique.
- **Mobile-First**: Otimizado para visualização perfeita em dispositivos móveis.

## 🛠️ Tecnologias
- HTML5 Semântico
- CSS3 (Vanilla) com Variáveis e Clip-path
- JavaScript Vanilla (Intersection Observer API)
- Node.js (para ambiente de desenvolvimento local)

> **Nota:** Arquivos de configuração interna e instruções do assistente (`gemini.md`) estão configurados no `.gitignore` e não são incluídos no repositório final.

## 💻 Desenvolvimento Local
Para rodar o projeto localmente:
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor local:
   ```bash
   npm start
   ```
O projeto estará disponível em `http://localhost:3000`.

## 🚀 Deploy Automático (CI/CD)
Para que o deploy ocorra automaticamente a cada commit na `main`:

1. **Crie um repositório** no GitHub, GitLab ou Bitbucket e faça o push do seu código.
2. **Conecte à Vercel**:
   - Vá ao [Vercel Dashboard](https://vercel.com/dashboard).
   - Clique em **"Add New"** > **"Project"**.
   - Importe o repositório que você criou.
3. **Configuração**:
   - A Vercel detectará o `package.json` e as configurações estáticas.
   - Clique em **"Deploy"**.

**Pronto!** A partir de agora, qualquer `git push origin main` disparará automaticamente uma nova build e deploy na Vercel.

## 🎨 Design System
- **Cores**: Vermelho Morango (#D63031), Verde Folha (#78E08F), Rosa Acento (#F8A5C2).
- **Tipografia**: Pacifico (Títulos), Quicksand (Subtítulos), Montserrat (Corpo).
