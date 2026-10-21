# 📱 Portfolio App - React Native + Expo

Um aplicativo de portfólio/currículo profissional desenvolvido com React Native, Expo e Back4App.

## 🚀 Funcionalidades

- ✅ **5 Telas Navegáveis** usando Expo Router:
  - 🏠 **Home**: Perfil pessoal com informações de contato e links sociais
  - ℹ️ **Sobre**: Tecnologias utilizadas e funcionalidades extras
  - 🎓 **Educação**: Formação acadêmica com timeline
  - 💼 **Experiência**: Experiências profissionais e habilidades
  - 🚀 **Projetos**: Portfólio de projetos desenvolvidos

- 🎨 **Design Moderno**:
  - Tema claro e escuro (baseado nas preferências do sistema)
  - Animações suaves com React Native Animatable
  - Interface responsiva e intuitiva
  - Cards com sombras e bordas arredondadas

- ☁️ **Backend com Back4App**:
  - Integração completa com Back4App (Parse Server)
  - CRUD de dados (Perfil, Educação, Experiência, Projetos)
  - API REST para gerenciamento de conteúdo

- ⚡ **Funcionalidade Extra - Cache Local**:
  - Sistema de cache com AsyncStorage
  - Melhor performance no carregamento
  - Experiência offline básica

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Platform e toolchain
- **Expo Router** - Sistema de navegação file-based
- **TypeScript** - Tipagem estática
- **React Native Animatable** - Animações

### Backend
- **Back4App** - Backend as a Service (Parse Server)
- **Axios** - Cliente HTTP para comunicação com API

### Armazenamento
- **AsyncStorage** - Cache local e persistência de dados

## 📋 Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- Expo CLI
- Conta no Back4App (gratuita)

## 🔧 Configuração do Back4App

### 1. Criar Conta no Back4App

1. Acesse [https://www.back4app.com/](https://www.back4app.com/)
2. Crie uma conta gratuita
3. Clique em "Build a new app"
4. Escolha "Database Hub" → "Parse"
5. Dê um nome ao seu app (ex: "Portfolio App")

### 2. Obter Credenciais

1. No painel do seu app, vá em **App Settings** → **Security & Keys**
2. Copie:
   - **Application ID**
   - **REST API Key**

### 3. Configurar no Projeto

Edite o arquivo `services/back4app.ts` e substitua as credenciais:

```typescript
const BACK4APP_APP_ID = 'SUA_APPLICATION_ID_AQUI';
const BACK4APP_REST_API_KEY = 'SUA_REST_API_KEY_AQUI';
```

### 4. Criar Classes no Back4App

No painel do Back4App, vá em **Database** → **Browser** e crie as seguintes classes:

#### Profile
- name (String)
- title (String)
- email (String)
- phone (String)
- location (String)
- bio (String)
- github (String)
- linkedin (String)
- portfolio (String)

#### Education
- institution (String)
- degree (String)
- field (String)
- startDate (String)
- endDate (String)
- description (String)
- gpa (String)

#### Experience
- company (String)
- position (String)
- startDate (String)
- endDate (String)
- current (Boolean)
- description (String)
- technologies (Array)

#### Project
- name (String)
- description (String)
- technologies (Array)
- githubUrl (String)
- liveUrl (String)
- imageUrl (String)
- featured (Boolean)

## 📦 Instalação

1. **Clone o repositório** (ou navegue até a pasta do projeto):

```bash
cd portfolio-app
```

2. **Instale as dependências**:

```bash
npm install
```

3. **Configure o Back4App** (veja seção acima)

4. **Popule o banco de dados** (opcional):

Edite o arquivo `scripts/populateBack4App.ts` com seus dados e execute:

```bash
npx ts-node scripts/populateBack4App.ts
```

## 🚀 Executando o Projeto

### Modo Desenvolvimento

```bash
# Iniciar o servidor Expo
npm start

# Ou diretamente para uma plataforma específica:
npm run android  # Android
npm run ios      # iOS (apenas macOS)
npm run web      # Web
```

### Usando o Expo Go

1. Instale o app **Expo Go** no seu smartphone:
   - [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)

2. Escaneie o QR Code que aparece no terminal após executar `npm start`

## 📱 Estrutura do Projeto

```
portfolio-app/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx        # Layout das tabs
│   │   ├── index.tsx          # Home
│   │   ├── about.tsx          # Sobre
│   │   ├── education.tsx      # Educação
│   │   ├── experience.tsx     # Experiência
│   │   └── projects.tsx       # Projetos
│   └── _layout.tsx            # Layout raiz
├── components/
│   ├── Card.tsx               # Componente de card reutilizável
│   ├── LoadingScreen.tsx      # Tela de carregamento
│   ├── SectionTitle.tsx       # Título de seção
│   ├── ThemedText.tsx         # Texto com tema
│   └── ThemedView.tsx         # View com tema
├── constants/
│   └── Colors.ts              # Definição de cores
├── hooks/
│   └── useColorScheme.ts      # Hook para tema
├── services/
│   └── back4app.ts            # Serviço de API Back4App
├── scripts/
│   └── populateBack4App.ts    # Script para popular dados
└── package.json
```

## 🎨 Temas e Cores

O aplicativo suporta tema claro e escuro automaticamente baseado nas preferências do sistema.

As cores podem ser personalizadas editando `constants/Colors.ts`.

## 📝 Personalizando com Seus Dados

### Opção 1: Usar o Script de População

1. Edite `scripts/populateBack4App.ts`
2. Substitua os dados de exemplo pelos seus
3. Execute: `npx ts-node scripts/populateBack4App.ts`

### Opção 2: Adicionar Manualmente no Back4App

1. Acesse o painel do Back4App
2. Vá em **Database** → **Browser**
3. Selecione cada classe e adicione linhas com seus dados

### Opção 3: Criar Tela de Administração

Você pode criar telas adicionais no app para adicionar/editar dados diretamente.

## ⚡ Funcionalidade Extra: Sistema de Cache

O aplicativo implementa um sistema de cache local usando AsyncStorage:

- **Cache Automático**: Dados são salvos localmente após carregamento
- **Loading Inteligente**: Mostra dados em cache enquanto busca atualizações
- **Experiência Offline**: Visualização de dados mesmo sem conexão
- **Refresh Manual**: Pull-to-refresh para atualizar dados

## 🧪 Testando o App

### No Simulador/Emulador

```bash
# iOS (macOS apenas)
npm run ios

# Android
npm run android
```

### No Dispositivo Físico

1. Abra o Expo Go
2. Escaneie o QR Code
3. O app será carregado automaticamente

## 🐛 Troubleshooting

### Erro de Conexão com Back4App

- Verifique se as credenciais estão corretas
- Confirme se as classes foram criadas no Back4App
- Verifique sua conexão com internet

### App não carrega dados

- Verifique se populou o banco de dados
- Abra o console para ver erros
- Confirme se o Back4App está acessível

### Erro ao instalar dependências

```bash
# Limpe o cache e reinstale
rm -rf node_modules
npm cache clean --force
npm install
```

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

**Seu Nome**

- GitHub: [@seuusuario](https://github.com/seuusuario)
- LinkedIn: [Seu Nome](https://linkedin.com/in/seuusuario)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## ⭐ Mostre seu Apoio

Se este projeto te ajudou, dê uma ⭐️!

---

Desenvolvido com ❤️ usando React Native + Expo
