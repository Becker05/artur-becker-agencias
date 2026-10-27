# Artur Becker — Parceria para agências

Landing page estática que adapta o design da página de diagnóstico para e-commerce ao público de donos de agências e gestores de tráfego autônomos.

## Executar

Com Node.js instalado: `npm start`. Acesse http://127.0.0.1:4173. Não exige instalação de dependências. `npm run check` verifica a sintaxe JavaScript.

## Editar

- `index.html`: copy e estrutura.
- `assets/styles.css`: design original e responsividade.
- `assets/config.js`: WhatsApp, mensagem e GTM opcional.
- `assets/main.js`: links, evento contact_click no dataLayer e animações.
- `assets/artur-becker.jpg`: foto reutilizada do repositório original.

## Hospedagem

Publique a raiz do repositório em um serviço de hospedagem estática (sem build). Para GitHub Pages, habilite Settings → Pages → Deploy from a branch → main → /(root), conforme disponibilidade do plano para repositórios privados. Nenhum domínio do projeto original foi reutilizado.

## Mensuração

O GTM começa desativado. Preencha gtmId somente com o container desta página e configure os requisitos de consentimento aplicáveis antes de ativar tags. contact_click mede o clique no WhatsApp; não comprova envio de mensagem ou geração de lead. Nenhum dado preenchido pelo visitante é coletado nesta página.

## Posicionamento

Ver docs/posicionamento.md.
