# 🚀 Guia de Configuração EAS (Expo Application Services)

## ✅ O que foi instalado

- ✅ **eas-cli** - CLI do Expo Application Services (instalado globalmente)
- ✅ **expo-dev-client** - Cliente de desenvolvimento personalizado
- ✅ **expo-updates** - Sistema de atualizações OTA (Over-The-Air)
- ✅ **eas.json** - Arquivo de configuração do EAS criado
- ✅ **app.json** - Atualizado com configurações do EAS Update

## 📦 Dependências Adicionadas

```json
{
  "expo-dev-client": "^6.0.0",
  "expo-updates": "^1.0.0"
}
```

## 🔧 Configuração Atual

### eas.json

Três perfis de build configurados:

1. **development** - Build para desenvolvimento com dev client
2. **preview** - Build de preview (APK para Android)
3. **production** - Build de produção para lojas

### app.json

Configurações adicionadas:
- `updates.url` - URL para atualizações OTA
- `runtimeVersion` - Política de versionamento
- `ios.bundleIdentifier` - Identificador iOS
- `android.package` - Identificador Android

## 🚀 Como Usar o EAS

### 1. Login no Expo (Necessário)

Antes de usar o EAS, você precisa fazer login:

```bash
eas login
```

Ou criar uma conta:
```bash
eas register
```

### 2. Configurar o Projeto

Depois de fazer login, vincule o projeto:

```bash
cd portfolio-app
eas build:configure
```

Escolha a opção **"All"** quando perguntado sobre as plataformas.

### 3. Builds Disponíveis

#### Build de Desenvolvimento
```bash
npm run build:development
# ou
eas build --profile development --platform android
```

#### Build de Preview (APK)
```bash
npm run build:preview
# ou
eas build --profile preview --platform android
```

#### Build de Produção
```bash
npm run build:production
# ou
eas build --profile production --platform android
```

### 4. Atualizações OTA (Over-The-Air)

Depois de ter um build instalado, você pode enviar atualizações sem rebuild:

#### Atualização de Desenvolvimento
```bash
npm run update:development
```

#### Atualização de Preview
```bash
npm run update:preview
```

#### Atualização de Produção
```bash
npm run update:production
```

## 📱 Expo Dev Client

O **expo-dev-client** permite:
- Debugar com facilidade
- Usar bibliotecas nativas customizadas
- Ter um ambiente de desenvolvimento mais próximo da produção

### Como usar:

1. Faça um build de desenvolvimento:
   ```bash
   eas build --profile development --platform android
   ```

2. Instale o APK gerado no seu dispositivo

3. Inicie o servidor:
   ```bash
   npm start
   ```

4. No app instalado, escaneie o QR code ou conecte manualmente

## 🔄 EAS Update (OTA Updates)

### Vantagens:
- ✅ Atualizações instantâneas sem rebuild
- ✅ Correção rápida de bugs
- ✅ Novos recursos sem passar pela review das lojas
- ✅ Rollback fácil se necessário

### Limitações:
- ❌ Não pode alterar código nativo
- ❌ Não pode adicionar novas bibliotecas nativas
- ❌ Não pode mudar permissões do app

### Como publicar uma atualização:

1. Faça suas alterações no código

2. Publique a atualização:
   ```bash
   eas update --branch production --message "Fix: corrigido bug na tela de projetos"
   ```

3. Os usuários receberão a atualização automaticamente!

## 📝 Comandos Úteis

### Builds

```bash
# Ver status de builds
eas build:list

# Cancelar um build
eas build:cancel

# Ver logs de um build
eas build:view [BUILD_ID]

# Build para iOS e Android simultaneamente
eas build --platform all
```

### Updates

```bash
# Ver atualizações publicadas
eas update:list

# Ver detalhes de uma atualização
eas update:view [UPDATE_ID]

# Reverter para atualização anterior
eas update:rollback

# Ver qual versão está em cada branch
eas channel:list
```

### Credenciais

```bash
# Gerenciar credenciais do iOS
eas credentials

# Gerar certificados automaticamente
eas build --platform ios --auto-submit
```

## 🔐 Configurações Importantes

### Antes de Build de Produção

1. **Atualize os identificadores** em `app.json`:
   ```json
   {
     "ios": {
       "bundleIdentifier": "com.seudominio.portfolioapp"
     },
     "android": {
       "package": "com.seudominio.portfolioapp"
     }
   }
   ```

2. **Configure o Project ID** correto em `app.json`:
   - Depois de fazer login, execute `eas project:info`
   - Copie o Project ID
   - Atualize `updates.url` com o ID correto

### Configurar Credenciais

Para iOS:
```bash
eas credentials
```

Para Android, o EAS pode gerar automaticamente ou você pode fornecer:
- Keystore existente
- Gerar novo keystore

## 🌟 Workflow Recomendado

### Desenvolvimento
1. Trabalhe localmente com `npm start`
2. Teste no Expo Go ou Dev Client
3. Quando necessário, faça builds de desenvolvimento

### Preview/QA
1. Faça build de preview: `npm run build:preview`
2. Distribua APK para testers
3. Corrija bugs e faça updates OTA quando necessário

### Produção
1. Teste tudo em preview primeiro
2. Faça build de produção: `npm run build:production`
3. Submeta para as lojas
4. Use OTA updates para correções rápidas

## 📊 Diferenças entre os Perfis

| Recurso | Development | Preview | Production |
|---------|------------|---------|------------|
| Dev Client | ✅ Sim | ❌ Não | ❌ Não |
| Debugging | ✅ Fácil | ⚠️ Limitado | ❌ Não |
| Tamanho | 📦 Grande | 📦 Médio | 📦 Pequeno |
| Performance | 🐌 Mais lento | ⚡ Rápido | ⚡⚡ Otimizado |
| Distribuição | 🏠 Interna | 🏠 Interna | 🌍 Lojas |
| Update OTA | ✅ Sim | ✅ Sim | ✅ Sim |

## 🆘 Troubleshooting

### "Not logged in"
```bash
eas logout
eas login
```

### "Project not found"
```bash
eas init
```

### Build falhou
```bash
eas build:view [BUILD_ID]
# Leia os logs para identificar o problema
```

### Update não aparece no app
1. Verifique se o branch está correto
2. Confirme que o runtime version é compatível
3. Force refresh no app (sacuda o dispositivo → Reload)

## 📚 Recursos Adicionais

- [Documentação EAS Build](https://docs.expo.dev/build/introduction/)
- [Documentação EAS Update](https://docs.expo.dev/eas-update/introduction/)
- [Documentação Dev Client](https://docs.expo.dev/development/introduction/)
- [EAS Best Practices](https://docs.expo.dev/build-reference/best-practices/)

## ⚡ Quick Start

Para começar agora:

1. **Faça login**:
   ```bash
   eas login
   ```

2. **Faça seu primeiro build de preview**:
   ```bash
   cd portfolio-app
   eas build --profile preview --platform android
   ```

3. **Baixe e instale o APK quando estiver pronto**

4. **Faça uma atualização OTA**:
   ```bash
   eas update --branch preview --message "Primeira atualização"
   ```

Pronto! Você está usando o EAS! 🎉

---

**Nota**: Para usar o EAS completamente, você precisa:
1. Ter uma conta Expo (gratuita)
2. Estar logado com `eas login`
3. Ter configurado o projeto com `eas build:configure`

Tudo já está configurado neste projeto, basta fazer o login!
