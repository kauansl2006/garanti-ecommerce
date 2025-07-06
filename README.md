# garanti-ecommerce

![Logo do Projeto](/public/dark-logo.svg)

<p align="center">
    <a href="https://choosealicense.com/licenses/mit/">
        <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License">
    </a>
    <a href="https://nextjs.org/">
        <img src="https://img.shields.io/badge/Next.js-14-blue" alt="Next.js">
    </a>
    <a href="https://tailwindcss.com/">
        <img src="https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?&amp;style=flat&amp;logo=tailwind-css&amp;logoColor=white" alt="TailwindCSS">
    </a>
    <a href="https://ui.shadcn.dev/">
        <img src="https://img.shields.io/badge/Shadcn/UI-%23black?style=flat&amp;logo=vercel" alt="Shadcn/UI">
    </a>
</p>


---

## Tabela de Conteúdos

- [Sobre o Projeto](#sobre-o-projeto)  
- [Versão e Release](#versão-e-release)  
- [Páginas da Aplicação](#funcionalidades)  
- [Tecnologias Utilizadas](#tecnologias-utilizadas)  
- [Demonstração](#demonstração)  
- [Como Rodar Localmente](#como-rodar-localmente)  
- [Variáveis de Ambiente](#variáveis-de-ambiente)  
- [Estrutura de Pastas](#estrutura-de-pastas)  
- [Melhorias Planejadas](#melhorias-planejadas)  
- [Referências](#referências)  
- [Contribuindo](#contribuindo)  
- [Autor](#autor)  
- [Licença](#licença)  

---

## Sobre o Projeto

**Garanti E-commerce** é um template moderno e responsivo para lojas virtuais, desenvolvido com foco em modularidade, design escalável e experiência de usuário.  
Ideal para desenvolvedores que buscam uma base visual sólida e personalizável para e-commerces modernos.  
O projeto ainda **não possui backend funcional**, sendo focado inicialmente no **layout e navegação**.

---

## Versão e Release

**v0.1.0** — Primeira entrega com páginas estruturadas, design responsivo e navegação funcional via App Router.

## Páginas da Aplicação

### Autenticação (auth)

| Rota               | Descrição                                            |
|--------------------|------------------------------------------------------|
| `/sign-in`         | Tela de login com campos de e-mail e senha.         |
| `/sign-up`         | Tela de criação de conta com campos básicos.        |
| `/check-email`     | Confirmação de verificação de e-mail enviado.       |
| `/recover-password`| Redefinição de senha via e-mail.                    |

---

### Área do Cliente (customer)

| Rota                 | Descrição                                                                 |
|----------------------|---------------------------------------------------------------------------|
| `/dashboard`         | Painel com visão geral dos pedidos e atividades recentes.                |
| `/order-history`     | Lista de pedidos realizados.                                              |
| `/order-details`     | Detalhamento completo de um pedido específico.                           |
| `/track-order`       | Rastreamento de pedidos em tempo real.                                   |
| `/wishlist`          | Lista de desejos do cliente com produtos salvos.                         |
| `/shopping-cart`     | Carrinho com produtos selecionados e resumo de valores.                  |
| `/cards-and-address` | Gerenciamento de cartões de pagamento e endereços.                       |
| `/settings`          | Edição de perfil e preferências do usuário.                              |
| `/browsing-history`  | Histórico de navegação de produtos.                                      |
| `/compare`           | Comparador de produtos visualizado lado a lado.                          |

---

### Vitrine da Loja (store)

| Rota                   | Descrição                                                                  |
|------------------------|----------------------------------------------------------------------------|
| `/shop`                | Página de listagem dos produtos disponíveis na loja.                      |
| `/product-details`     | Página de visualização detalhada de um produto.                           |
| `/wishlist`            | Versão pública da lista de desejos (sem login).                           |
| `/compare`             | Comparação entre dois ou mais produtos da loja.                           |
| `/shopping-cart`       | Carrinho de compras com interação e checkout.                             |
| `/payment`             | Tela para inserção de dados de pagamento.                                 |
| `/payment-success`     | Confirmação de compra bem-sucedida.                                       |
| `/payment-failure`     | Falha no processamento do pagamento.                                      |
| `/track-order`         | Rastreamento por código de pedido (sem login).                            |
| `/track-order-details` | Detalhes completos do pedido rastreado.                                   |
| `/help`                | Página com perguntas frequentes e ajuda.                                  |
| `/support`             | Canal de contato com o suporte ao cliente.                                |

---

### 🌐 Páginas Gerais

| Rota         | Descrição                                                   |
|--------------|-------------------------------------------------------------|
| `/home`      | Página inicial com banners, destaques e categorias.         |
| `/not-found` | Página 404 para rotas inexistentes.                         |
| `/error`     | Página de erro genérico para exceções inesperadas.          |


## Tecnologias Utilizadas

- **Next.js 14** — App Router, SSR, metadata otimizada
- **TailwindCSS** — Estilização utilitária e responsiva
- **Shadcn/UI** — Componentes acessíveis e prontos para produção
- **Lucide** — Ícones modernos com SVG

---

## Demonstração

![Demonstração](docs/garanti.gif)

---

## Como Rodar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/garanti-ecommerce
```

2. Acesse a pasta do projeto:

```bash
cd garanti-ecommerce
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra `http://localhost:3000` no navegador para ver a aplicação rodando.

---

## Variáveis de Ambiente

Nenhuma variável de ambiente é necessária no momento.  
Futuramente, serão adicionadas para integração com APIs e serviços externos.

---

## Estrutura de Pastas

```bash
garanti-ecommerce/
│
├─ app/                    # Rotas e páginas (App Router)
│  ├─ (auth)/              # Páginas de autenticação
│  ├─ (customer)/          # Páginas de clientes autenticados
│  ├─ (store)/             # Páginas públicas da loja
│  └─ layout.tsx           # Layout global
│
├─ components/             # Componentes reutilizáveis
│  ├─ ui/                  # Baseados em Shadcn/UI
│  └─ ...                  # Header, Footer, Produtos e etc...
│
├─ public/                 # Arquivos estáticos (logo, ícones)
└─ lib/                    # Funções utilitárias
```

---

## Melhorias Planejadas

- Integração real com backend
- Autenticação segura com JWT ou NextAuth
- Carrinho e pedidos persistentes
- Pagamento com Stripe ou MercadoPago
- Dashboard administrativo
- Testes automatizados (unitários e e2e)

---

## Referências

- Design System: [Shadcn UI](https://ui.shadcn.dev)
- Documentações: [Next.js](https://nextjs.org/docs), [TailwindCSS](https://tailwindcss.com), [Lucide](https://lucide.dev)

---

## Contribuindo

Contribuições são bem-vindas!  

1. Fork este repositório  
2. Crie uma branch: `git checkout -b feature/sua-funcionalidade`  
3. Commit: `git commit -m 'feat: nova funcionalidade'`  
4. Push: `git push origin feature/sua-funcionalidade`  
5. Abra um Pull Request 🚀

---

## Autor

<table border="collapse">
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/162833715?v=4" width="100" alt="Author's photo">
      <br>
      <strong>Kauan Lima</strong>  
      <br>
      <a href="https://github.com/kauansl2006">kauansl2006</a>
    </td>
  </tr>
</table>

---

## Licença

Distribuído sob a licença [MIT](https://choosealicense.com/licenses/mit/).  
Veja o arquivo `LICENSE` para mais informações.