#!/usr/bin/env node

/**
 * Script para verificar se o setup está correto
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando configuração do projeto...\n');

let hasErrors = false;

// Verificar se o arquivo de configuração existe
console.log('1️⃣ Verificando arquivo de serviço Back4App...');
const back4appPath = path.join(__dirname, '../services/back4app.ts');
if (fs.existsSync(back4appPath)) {
  const content = fs.readFileSync(back4appPath, 'utf8');
  
  if (content.includes('YOUR_APP_ID') || content.includes('YOUR_REST_API_KEY')) {
    console.log('   ❌ ERRO: Credenciais do Back4App não configuradas!');
    console.log('   📝 Edite o arquivo services/back4app.ts com suas credenciais');
    hasErrors = true;
  } else {
    console.log('   ✅ Arquivo de serviço configurado');
  }
} else {
  console.log('   ❌ ERRO: Arquivo back4app.ts não encontrado!');
  hasErrors = true;
}

// Verificar se as dependências estão instaladas
console.log('\n2️⃣ Verificando dependências...');
const packagePath = path.join(__dirname, '../package.json');
const nodeModulesPath = path.join(__dirname, '../node_modules');

if (!fs.existsSync(nodeModulesPath)) {
  console.log('   ❌ ERRO: Dependências não instaladas!');
  console.log('   📝 Execute: npm install');
  hasErrors = true;
} else {
  console.log('   ✅ Dependências instaladas');
}

// Verificar telas principais
console.log('\n3️⃣ Verificando telas do app...');
const screens = ['index.tsx', 'about.tsx', 'education.tsx', 'experience.tsx', 'projects.tsx'];
const screensPath = path.join(__dirname, '../app/(tabs)');

let allScreensExist = true;
screens.forEach(screen => {
  if (!fs.existsSync(path.join(screensPath, screen))) {
    console.log(`   ❌ Faltando: ${screen}`);
    allScreensExist = false;
    hasErrors = true;
  }
});

if (allScreensExist) {
  console.log('   ✅ Todas as 5 telas criadas');
}

// Verificar componentes
console.log('\n4️⃣ Verificando componentes...');
const components = ['Card.tsx', 'LoadingScreen.tsx', 'SectionTitle.tsx', 'ThemedText.tsx', 'ThemedView.tsx'];
const componentsPath = path.join(__dirname, '../components');

let allComponentsExist = true;
components.forEach(component => {
  if (!fs.existsSync(path.join(componentsPath, component))) {
    console.log(`   ❌ Faltando: ${component}`);
    allComponentsExist = false;
    hasErrors = true;
  }
});

if (allComponentsExist) {
  console.log('   ✅ Todos os componentes criados');
}

// Resumo
console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.log('\n❌ ATENÇÃO: Alguns problemas foram encontrados!');
  console.log('📝 Corrija os erros acima antes de rodar o app.\n');
  process.exit(1);
} else {
  console.log('\n✅ Tudo pronto! O projeto está configurado corretamente.');
  console.log('\n📱 Próximos passos:');
  console.log('   1. Configure suas credenciais do Back4App');
  console.log('   2. Crie as classes no Back4App (veja INSTRUCOES_FINAIS.md)');
  console.log('   3. Execute: npm start');
  console.log('   4. Escaneie o QR Code com Expo Go\n');
}
