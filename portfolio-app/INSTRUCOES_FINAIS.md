# 📱 Instruções Finais - Portfolio App

## ✅ O que está pronto

O aplicativo está 100% configurado com:
- ✅ 5 Telas navegáveis (Home, Sobre, Educação, Experiência, Projetos)
- ✅ Navegação com Expo Router e tabs
- ✅ Integração com Back4App configurada
- ✅ Tema claro/escuro automático
- ✅ Animações suaves
- ✅ Design moderno e responsivo
- ✅ Compatível com Expo Go

## 🚀 Como rodar AGORA

### 1. Configure o Back4App (5 minutos)

**Passo 1:** Acesse https://www.back4app.com e crie uma conta gratuita

**Passo 2:** Crie um novo app:
- Clique em "Build a new app"
- Escolha "Database Hub" → "Parse"
- Nome: "MeuPortfolio" (ou qualquer nome)

**Passo 3:** Pegue suas credenciais:
- Vá em **App Settings** → **Security & Keys**
- Copie o **Application ID** e **REST API Key**

**Passo 4:** Cole no arquivo `services/back4app.ts`:
```typescript
const BACK4APP_APP_ID = 'cole_aqui_seu_application_id';
const BACK4APP_REST_API_KEY = 'cole_aqui_sua_rest_api_key';
```

### 2. Crie as Classes no Back4App

No painel do Back4App, vá em **Database** → **Browser** e crie:

#### Classe: Profile
Clique em "+ Create a class" → Nome: "Profile"
Adicione colunas (+ Add a column):
- name (String)
- title (String)
- email (String)
- phone (String)
- location (String)
- bio (String)
- github (String)
- linkedin (String)
- portfolio (String)

#### Classe: Education
Nome: "Education"
Colunas:
- institution (String)
- degree (String)
- field (String)
- startDate (String)
- endDate (String)
- description (String)
- gpa (String)

#### Classe: Experience
Nome: "Experience"
Colunas:
- company (String)
- position (String)
- startDate (String)
- endDate (String)
- current (Boolean)
- description (String)
- technologies (Array)

#### Classe: Project
Nome: "Project"
Colunas:
- name (String)
- description (String)
- technologies (Array)
- githubUrl (String)
- liveUrl (String)
- imageUrl (String)
- featured (Boolean)

### 3. Adicione dados de teste

Para cada classe, clique em **+ Row** e adicione pelo menos um registro:

**Exemplo para Profile:**
- name: "Seu Nome"
- title: "Desenvolvedor Mobile"
- email: "seu@email.com"
- phone: "+55 11 99999-9999"
- location: "Sua Cidade, Estado"
- bio: "Seu texto sobre você..."
- github: "https://github.com/seuperfil"
- linkedin: "https://linkedin.com/in/seuperfil"

**Exemplo para Education:**
- institution: "Sua Universidade"
- degree: "Bacharelado"
- field: "Ciência da Computação"
- startDate: "2020-02-01"
- endDate: "2024-12-01"
- description: "Descrição da sua formação"
- gpa: "8.5"

**Exemplo para Experience:**
- company: "Nome da Empresa"
- position: "Cargo"
- startDate: "2023-01-01"
- endDate: "2024-12-31"
- current: true (marque o checkbox)
- description: "O que você fez..."
- technologies: Clique em "Add Item" e adicione: "React Native", "TypeScript", etc.

**Exemplo para Project:**
- name: "Meu Projeto"
- description: "Descrição do projeto"
- technologies: "React Native", "Expo" (Add Item para cada)
- githubUrl: "https://github.com/seuperfil/projeto"
- featured: true (marque o checkbox)

### 4. Rode o App

Abra o terminal nesta pasta e execute:

```bash
npm start
```

### 5. Abra no seu celular

**Android:**
1. Instale o Expo Go: https://play.google.com/store/apps/details?id=host.exp.exponent
2. Abra o Expo Go
3. Escaneie o QR Code que apareceu no terminal

**iOS:**
1. Instale o Expo Go: https://apps.apple.com/app/expo-go/id982107779
2. Abra a câmera do iPhone
3. Escaneie o QR Code
4. Toque na notificação para abrir no Expo Go

## 🎨 Personalizando

### Mudar cores
Edite `constants/Colors.ts` e altere os valores hex das cores

### Adicionar mais dados
Entre no painel do Back4App e adicione mais registros nas classes

### Modificar layout
Edite os arquivos em `app/(tabs)/` para personalizar cada tela

## 📱 Telas do App

1. **Home** - Perfil com foto, nome, contatos e links sociais
2. **Sobre** - Tecnologias usadas e funcionalidades do app
3. **Educação** - Timeline de formação acadêmica
4. **Experiência** - Histórico profissional e habilidades
5. **Projetos** - Portfólio de projetos com links

## ⚡ Funcionalidade Extra

**Sistema de Cache Inteligente:**
- Salva dados localmente com AsyncStorage
- Mostra dados em cache enquanto busca atualizações
- Permite visualização offline
- Melhora a performance

## 🐛 Resolução de Problemas

### App não conecta ao Back4App
```
1. Verifique se colocou as credenciais corretas
2. Confirme que criou as 4 classes (Profile, Education, Experience, Project)
3. Verifique se tem internet
```

### "No profile data"
```
Você precisa adicionar pelo menos um registro na classe Profile no Back4App
```

### Erro ao iniciar
```bash
# Limpe o cache e reinicie
npx expo start --clear
```

### Dependências
```bash
# Se algo não funcionar, reinstale:
rm -rf node_modules
npm install
npm start
```

## 📸 Testando Tudo

Após rodar o app:
1. ✅ Veja seu perfil na tela Home
2. ✅ Navegue pelas 5 tabs
3. ✅ Mude entre tema claro/escuro nas configurações do celular
4. ✅ Veja as animações ao rolar
5. ✅ Clique nos links (GitHub, LinkedIn, etc.)

## 🎉 Pronto para apresentar!

Seu app está completo com:
- ✅ Backend funcional
- ✅ 5 telas navegáveis
- ✅ Design profissional
- ✅ Animações
- ✅ Tema adaptável
- ✅ Funcionalidade extra (cache)

---

**Dúvidas?** Consulte o README.md ou GUIA_RAPIDO.md
