# 🚀 Guia Rápido de Configuração

## Passo 1: Instalar Dependências

```bash
cd portfolio-app
npm install
```

## Passo 2: Configurar Back4App

### 2.1 - Criar Conta
1. Acesse https://www.back4app.com/
2. Clique em "Sign Up" e crie sua conta
3. Clique em "Build a new app"
4. Escolha "Database Hub" → "Parse"
5. Nomeie seu app (ex: "MeuPortfolio")

### 2.2 - Obter Credenciais
1. No painel do app, vá em **App Settings** (ícone de engrenagem)
2. Clique em **Security & Keys**
3. Copie:
   - **Application ID**
   - **REST API Key**

### 2.3 - Configurar no Projeto
Abra o arquivo `services/back4app.ts` e cole suas credenciais:

```typescript
const BACK4APP_APP_ID = 'cole_seu_application_id_aqui';
const BACK4APP_REST_API_KEY = 'cole_sua_rest_api_key_aqui';
```

## Passo 3: Criar Classes no Back4App

No painel do Back4App:

1. Vá em **Database** → **Browser**
2. Clique em **+ Create a class** para cada uma:

### Classe: Profile
Clique em "Add a column" para cada campo:
- name (String)
- title (String)
- email (String)
- phone (String)
- location (String)
- bio (String)
- github (String)
- linkedin (String)
- portfolio (String)

### Classe: Education
- institution (String)
- degree (String)
- field (String)
- startDate (String)
- endDate (String)
- description (String)
- gpa (String)

### Classe: Experience
- company (String)
- position (String)
- startDate (String)
- endDate (String)
- current (Boolean)
- description (String)
- technologies (Array)

### Classe: Project
- name (String)
- description (String)
- technologies (Array)
- githubUrl (String)
- liveUrl (String)
- imageUrl (String)
- featured (Boolean)

## Passo 4: Adicionar Dados de Exemplo

### Opção A: Via Script (Recomendado)

1. Edite o arquivo `scripts/populateBack4App.ts` com seus dados
2. Execute:
```bash
npx ts-node scripts/populateBack4App.ts
```

### Opção B: Manualmente no Back4App

1. No painel, vá em **Database** → **Browser**
2. Selecione a classe "Profile"
3. Clique em **+ Row**
4. Preencha os campos com seus dados
5. Clique em **Save**
6. Repita para Education, Experience e Project

#### Exemplo de dados para testar:

**Profile:**
- name: "João Silva"
- title: "Desenvolvedor Mobile"
- email: "joao@email.com"
- phone: "+55 11 99999-9999"
- location: "São Paulo, SP"
- bio: "Desenvolvedor apaixonado por tecnologia..."
- github: "https://github.com/joaosilva"
- linkedin: "https://linkedin.com/in/joaosilva"

**Education:**
- institution: "Universidade XYZ"
- degree: "Bacharelado"
- field: "Ciência da Computação"
- startDate: "2019-02-01"
- endDate: "2023-12-01"
- description: "Formação em desenvolvimento de software"
- gpa: "8.5"

**Experience:**
- company: "Tech Company"
- position: "Desenvolvedor React Native"
- startDate: "2023-01-01"
- endDate: "2024-12-31"
- current: true
- description: "Desenvolvimento de apps móveis"
- technologies: ["React Native", "TypeScript", "Expo"]
  - Para adicionar array: clique no campo technologies, depois "Add Item" para cada tecnologia

**Project:**
- name: "Meu App Incrível"
- description: "App de exemplo"
- technologies: ["React Native", "Expo"]
- githubUrl: "https://github.com/joao/app"
- featured: true

## Passo 5: Executar o App

```bash
npm start
```

Então:
- Pressione `a` para Android
- Pressione `i` para iOS (apenas Mac)
- Pressione `w` para Web
- Ou escaneie o QR Code com o app Expo Go

## ⚠️ Problemas Comuns

### "Error loading profile"
- Verifique se as credenciais do Back4App estão corretas
- Confirme se criou a classe "Profile" no Back4App
- Verifique se adicionou pelo menos um registro na classe Profile

### "Module not found"
```bash
rm -rf node_modules
npm install
```

### App não inicia
```bash
npx expo start --clear
```

## 📱 Testando no Celular

1. Instale o **Expo Go**:
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent
   - iOS: https://apps.apple.com/app/expo-go/id982107779

2. Escaneie o QR Code que aparece no terminal

3. O app abrirá automaticamente!

## 🎉 Pronto!

Seu app está rodando! Agora você pode:
- Navegar entre as telas usando as tabs
- Ver seus dados do Back4App
- Personalizar cores em `constants/Colors.ts`
- Adicionar mais funcionalidades

## 💡 Próximos Passos

- Adicione suas próprias fotos
- Customize as cores e o tema
- Adicione mais projetos
- Implemente mais funcionalidades

---

**Precisa de ajuda?** Consulte o README.md completo para mais detalhes!
