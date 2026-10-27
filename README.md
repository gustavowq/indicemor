# Site ÍndiceMor — Angular

Novo site institucional da **ÍndiceMor Assessoria Contábil e Financeira**, construído a partir dos mockups aprovados (versão 2).

- **Angular 22**, com componentes standalone, signals, OnPush e sem zone.js
- **Pré-renderização (SSG):** cada página é gerada como HTML estático no build. O conteúdo chega pronto para o Google e o site pode ser hospedado em qualquer servidor de arquivos.
- **SCSS** com tokens de design: cores da logo, fonte Lato e layout responsivo
- **Bibliotecas extras:** `ngx-mask` (máscara de telefone) e `@fontsource/lato` (fonte servida pelo próprio site)

## Como rodar

```bash
npm install
npm start          # ambiente de desenvolvimento em http://localhost:4200
npm run build      # gera o site estático em dist/indicemor-site/browser
npm test           # testes unitários (Vitest)
```

## Estrutura de pastas

```
src/
├── index.html                  # <head> padrão + dados estruturados (Schema.org)
├── styles.scss                 # entrada dos estilos globais
├── styles/                     # design system
│   ├── _tokens.scss            #   cores, fonte, espaçamentos, breakpoints
│   ├── _mixins.scss            #   responsividade, grade decorativa, cantoneiras da logo
│   ├── _base.scss              #   reset e tipografia
│   ├── _layout.scss            #   container, seções, grades, títulos de seção
│   ├── _components.scss        #   botões, cards, tags, chips, listas
│   └── _forms.scss             #   campos, erros, upload, mensagens de envio
├── environments/environment.ts # URL do site e endpoints dos formulários
└── app/
    ├── app.ts / app.config.ts / app.routes.ts / app.routes.server.ts
    ├── core/
    │   ├── models/             # tipos (Serviço, Prefeitura, Notícia…)
    │   ├── services/           # SeoService (meta tags) e FormSubmissionService
    │   └── validators/         # validações e mensagens de erro em português
    ├── data/                   # TODO o conteúdo do site (textos, serviços, contatos)
    ├── layout/                 # faixa superior, cabeçalho, rodapé, botão WhatsApp
    ├── shared/components/      # ícone, hero interno, CTA, card de serviço, mapa, vídeo
    └── pages/                  # uma pasta por página
        └── home/sections/      # cada seção da página inicial é um componente
```

## Como editar o conteúdo

Os textos ficam em `src/app/data/`, separados do layout:

| Arquivo | Conteúdo |
|---|---|
| `company.data.ts` | telefone, e-mail, endereço, horários, CNPJ, link de login, vídeo, redes sociais |
| `services.data.ts` | serviços (IPM-GO, IPM-MT, ITR, DITR, SIGMOP, Projeto de Fiscalização e QualyPosto) e suas categorias |
| `prefeituras.data.ts` | prefeituras atendidas e logos |
| `posts.data.ts` | notícias |
| `institutional.data.ts` | Quem Somos, missão, visão, valores e textos da página Prefeituras |
| `navigation.data.ts` | itens do menu e do rodapé |

Os títulos e descrições de SEO de cada página ficam em `src/app/app.routes.ts`.

### Pendências de conteúdo (marcadas com `TODO` no código)

1. **Projeto de Fiscalização** (`services.data.ts`): preencher `fullName`, `description`, `highlights` e `summary`, e remover `comingSoon: true`. Enquanto isso, o site mostra "Detalhes em breve".
2. **Redes sociais** (`company.data.ts`): informar os links de Instagram e LinkedIn. Os ícones só aparecem quando o link estiver preenchido.
3. **Formulários** (`environments/environment.ts`): configurar os endpoints de envio. Sem eles, o envio é apenas simulado.
4. **Logos das prefeituras:** substituir por versões em alta resolução em `public/images/prefeituras/`.

## Formulários

`FormSubmissionService` envia os dados por `POST` para os endereços em `environment.formEndpoints`:

- `quote`: Solicitar Cotação (JSON)
- `contact`: Contato (JSON)
- `career`: Trabalhe Conosco (multipart, com o currículo no campo `curriculo`)

Os endereços podem ser um formulário do WordPress (Contact Form 7 via REST API), um serviço como Formspree ou uma API própria.

## Publicação

### GitHub Pages

Site: https://gustavowq.github.io/indicemor/

O workflow `.github/workflows/deploy-pages.yml` instala as dependências, executa os
testes e publica o site automaticamente a cada push para `main`. Também é possível
executá-lo manualmente na aba **Actions** do repositório.

Nas configurações do repositório, **Settings → Pages → Source** deve estar definido
como **GitHub Actions**.

Para gerar a mesma versão localmente:

```bash
npm run build:pages
```

Essa configuração usa a base `/indicemor/`, gera as URLs de SEO do Pages e cria
`404.html` para o Angular tratar endereços inexistentes. Os arquivos publicados
ficam em `dist/indicemor-site/browser/`.

### Servidor próprio

1. Rode `npm run build`.
2. Envie o conteúdo de `dist/indicemor-site/browser/` para o servidor. As 8 páginas já saem prontas em HTML: `/`, `/quem-somos/`, `/servicos/`, …
3. Para endereços inexistentes, configure o servidor para responder com `index.csr.html`. Assim a página 404 do próprio site é exibida.
   - Apache: `ErrorDocument 404 /index.csr.html`
   - Nginx: `try_files $uri $uri/ /index.csr.html;`

## Créditos

- Ícones: [Lucide](https://lucide.dev) (licença ISC), em `shared/components/icon/icons.ts`
- Mapa do Brasil: pacote `@svg-maps/brazil` (licença CC BY 4.0)
- Fonte: Lato (SIL Open Font License), via `@fontsource/lato`
