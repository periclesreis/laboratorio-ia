# Guia de Design - Laboratório de IA

## 📋 Resumo das Mudanças

Este documento descreve todas as mudanças implementadas no design do site "Laboratório de IA". O novo design implementa um **tema dark/tech educacional** com cores vibrantes, tipografia moderna e componentes reutilizáveis.

---

## 🎨 Sistema de Design

### Cores

| Nome | Hex | Uso |
|------|-----|-----|
| **Roxo (IA)** | `#a855f7` | Seção de Inteligência Artificial |
| **Azul (Dev)** | `#3b82f6` | Seção de Programação |
| **Verde (Apps)** | `#10b981` | Seção de Aplicativos |
| **Fundo** | `#0f172a` | Background principal (slate-950) |
| **Card** | `#1e293b` | Background de cards (slate-800) |
| **Texto** | `#f1f5f9` | Texto principal (slate-100) |
| **Texto Secundário** | `#94a3b8` | Texto de descrição (slate-400) |

### Tipografia

- **Font Family**: Geist (já configurada no projeto)
- **Heading 1**: 2.25rem (36px) - Bold
- **Heading 2**: 1.875rem (30px) - Bold
- **Heading 3**: 1.125rem (18px) - Bold
- **Body**: 1rem (16px) - Regular
- **Small**: 0.875rem (14px) - Regular

---

## 📁 Arquivos Modificados

### 1. **globals.css**
- Adicionado sistema de design com Tailwind CSS
- Definidos tokens de cores (CSS variables)
- Criadas classes reutilizáveis: `.tag`, `.card-hover`, `.card-ia`, `.card-dev`, `.card-apps`
- Configurado tema dark com gradientes de fundo

**Mudanças principais:**
- Migração de CSS puro para Tailwind + CSS layers
- Adicionado backdrop blur e efeitos de hover
- Definidas sombras de glow para cada categoria

### 2. **layout.tsx**
- Criado **Header global** com navegação sticky
- Criado **Footer global** com 4 colunas de links
- Adicionado logo "LabIA" com gradiente
- Implementado menu responsivo

**Componentes:**
- Header: Logo, navegação, botão de contato
- Footer: Logo, descrição, links de conteúdo, links do laboratório

### 3. **page.tsx (Home)**
- Redesenhada com 5 seções principais:
  1. **Hero**: Headline com gradiente, subheadline e CTAs
  2. **Áreas de Conhecimento**: 3 cards com ícones e descrições
  3. **Projetos em Destaque**: 3 cards com projetos
  4. **Blog CTA**: Chamada para ação do blog
  5. **Background gradients**: Efeitos visuais sutis

### 4. **blog/page.tsx**
- Hero section com título e descrição
- Lista de posts com cards modernos
- Tags de categoria (IA/Programação)
- Datas de publicação
- Efeito hover com gradiente no título
- Seta de navegação interativa

### 5. **aplicativos/page.tsx**
- Hero section com título e descrição
- Grid de aplicativos com ícones
- Tags de categoria (IA/Programação)
- Descrições detalhadas
- CTA para aprender programação
- Mesmo padrão de design do blog

### 6. **ia/page.tsx**
- Hero section com gradiente roxo
- Grid 2 colunas de tópicos (6 cards)
- Ícones emoji para cada tópico
- Cards com hover interativo
- CTA com botões para blog e aplicativos

### 7. **programacao/page.tsx**
- Hero section com gradiente azul
- Grid 2 colunas de tópicos (6 cards)
- Ícones emoji para cada tópico
- Cards com hover interativo
- CTA com botões para blog e projetos

### 8. **about/page.tsx**
- Hero section
- Seções: Missão, Visão, Valores, O que oferecemos
- Grid de valores com cores diferentes
- Lista de oferecimentos com ícones
- CTA para explorar conteúdo

### 9. **contato/page.tsx**
- Hero section
- Grid 2 colunas: Email e Redes Sociais
- Formulário de contato completo
- Seção de FAQ
- Links para voltar à home

---

## 🎯 Componentes Reutilizáveis

### Classes CSS

#### `.card-hover`
Card base com border, background, e efeito hover
```html
<div class="card-hover">
  Conteúdo do card
</div>
```

#### `.card-ia`, `.card-dev`, `.card-apps`
Variações de card com cores específicas e efeitos de glow
```html
<div class="card-hover card-ia">
  Card de IA com roxo
</div>
```

#### `.tag`, `.tag-ia`, `.tag-dev`, `.tag-apps`
Tags de categoria com cores e backgrounds
```html
<span class="tag tag-ia">Inteligência Artificial</span>
```

---

## 🚀 Como Usar

### Instalação
1. Copie todos os arquivos para seu projeto
2. Certifique-se de que o Tailwind CSS está configurado
3. Execute `npm install` se necessário
4. Execute `npm run dev` para testar

### Customização

#### Mudar Cores
Edite as variáveis CSS em `globals.css`:
```css
:root {
  --ia: 262.1 83.3% 57.8%; /* Roxo */
  --dev: 199.4 95.5% 48%; /* Azul */
  --apps: 160.1 84.1% 39.4%; /* Verde */
}
```

#### Adicionar Novas Páginas
Use o padrão de estrutura das páginas existentes:
1. Hero section com título e descrição
2. Conteúdo principal com cards/grids
3. CTA ou seção de ação

#### Modificar Header/Footer
Edite `layout.tsx` para adicionar/remover links ou mudar o design

---

## 📱 Responsividade

Todas as páginas são **totalmente responsivas** com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Classes Tailwind utilizadas:
- `md:` para tablet e acima
- `flex-col md:flex-row` para layouts flexíveis
- `grid md:grid-cols-2` para grids responsivos

---

## ✨ Efeitos Visuais

### Gradientes
- **Hero**: Roxo → Azul → Verde
- **Buttons**: Roxo → Roxo escuro / Azul → Azul escuro
- **Text**: Roxo → Azul

### Hover Effects
- Cards: Border mais visível, background mais claro, sombra de glow
- Links: Mudança de cor com transição suave
- Buttons: Scale 105%, shadow aumentada

### Animações
- Ping animation no badge da home
- Transições suaves em todos os elementos
- Transform no hover de setas

---

## 🔧 Dependências

O projeto utiliza:
- **Next.js 16.2.7**
- **React 19.2.4**
- **Tailwind CSS 4**
- **TypeScript 5**

Nenhuma dependência adicional foi adicionada.

---

## 📝 Notas Importantes

1. **Tailwind CSS**: Certifique-se de que o Tailwind está configurado corretamente
2. **Dark Mode**: O site usa `dark` mode, configurado em `layout.tsx` com `className="dark"`
3. **Fonts**: Geist é importada do Google Fonts (já configurada)
4. **Responsividade**: Teste em dispositivos móveis antes de publicar
5. **Acessibilidade**: Todos os links e botões têm focus states adequados

---

## 🎓 Próximos Passos

1. Adicione conteúdo real nas páginas de blog e aplicativos
2. Implemente o formulário de contato com backend
3. Adicione imagens/ícones personalizados
4. Configure SEO (meta tags, og:image, etc)
5. Implante em produção

---

## 📞 Suporte

Para dúvidas sobre o design, consulte:
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Next.js Docs: https://nextjs.org/docs
- Este guia: DESIGN_GUIDE.md

---

**Versão**: 1.0  
**Data**: Junho 2024  
**Autor**: Manus AI
