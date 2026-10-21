/**
 * Script para popular o Back4App com dados de exemplo
 * 
 * Para usar:
 * 1. Configure suas credenciais no arquivo services/back4app.ts
 * 2. Execute: npx ts-node scripts/populateBack4App.ts
 */

import {
  createProfile,
  createEducation,
  createExperience,
  createProject,
  Profile,
  Education,
  Experience,
  Project,
} from '../services/back4app';

async function populateData() {
  try {
    console.log('🚀 Iniciando população do banco de dados...\n');

    // Criar perfil
    console.log('📝 Criando perfil...');
    const profile: Profile = {
      name: 'Seu Nome Completo',
      title: 'Desenvolvedor Full Stack',
      email: 'seuemail@example.com',
      phone: '+55 (11) 99999-9999',
      location: 'São Paulo, Brasil',
      bio: 'Desenvolvedor apaixonado por criar experiências móveis incríveis. Especializado em React Native, TypeScript e desenvolvimento de aplicações multiplataforma. Sempre buscando aprender novas tecnologias e resolver problemas complexos de forma criativa.',
      github: 'https://github.com/seuusuario',
      linkedin: 'https://linkedin.com/in/seuusuario',
      portfolio: 'https://seuportfolio.com',
    };
    await createProfile(profile);
    console.log('✅ Perfil criado com sucesso!\n');

    // Criar educação
    console.log('🎓 Criando experiências acadêmicas...');
    const education: Education[] = [
      {
        institution: 'Universidade Federal do Estado',
        degree: 'Bacharelado',
        field: 'Ciência da Computação',
        startDate: '2019-02-01',
        endDate: '2023-12-01',
        description: 'Formação sólida em algoritmos, estruturas de dados, desenvolvimento de software e engenharia de sistemas.',
        gpa: '8.5',
      },
      {
        institution: 'Curso Técnico em Informática',
        degree: 'Técnico',
        field: 'Informática',
        startDate: '2016-02-01',
        endDate: '2018-12-01',
        description: 'Fundamentos de programação, redes de computadores e manutenção de sistemas.',
      },
    ];

    for (const edu of education) {
      await createEducation(edu);
    }
    console.log('✅ Experiências acadêmicas criadas com sucesso!\n');

    // Criar experiências profissionais
    console.log('💼 Criando experiências profissionais...');
    const experiences: Experience[] = [
      {
        company: 'Tech Solutions Inc.',
        position: 'Desenvolvedor Mobile Sênior',
        startDate: '2023-03-01',
        endDate: '2024-12-31',
        current: true,
        description: 'Desenvolvimento de aplicativos móveis usando React Native e Expo. Liderança técnica em projetos de grande escala, mentoria de desenvolvedores júnior e implementação de melhores práticas.',
        technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Jest'],
      },
      {
        company: 'Startup Inovadora',
        position: 'Desenvolvedor Full Stack Júnior',
        startDate: '2021-06-01',
        endDate: '2023-02-28',
        current: false,
        description: 'Desenvolvimento de aplicações web e mobile. Trabalho com metodologias ágeis, participação em todo o ciclo de desenvolvimento de produtos.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'React Native'],
      },
    ];

    for (const exp of experiences) {
      await createExperience(exp);
    }
    console.log('✅ Experiências profissionais criadas com sucesso!\n');

    // Criar projetos
    console.log('🚀 Criando projetos...');
    const projects: Project[] = [
      {
        name: 'Portfolio App',
        description: 'Aplicativo de portfólio pessoal desenvolvido com React Native e Expo. Integração com Back4App para gerenciamento de conteúdo dinâmico.',
        technologies: ['React Native', 'Expo', 'TypeScript', 'Back4App', 'Expo Router'],
        githubUrl: 'https://github.com/seuusuario/portfolio-app',
        featured: true,
      },
      {
        name: 'E-commerce Mobile',
        description: 'Aplicativo de e-commerce completo com carrinho de compras, pagamentos integrados e sistema de avaliações.',
        technologies: ['React Native', 'Redux', 'Stripe', 'Firebase'],
        githubUrl: 'https://github.com/seuusuario/ecommerce-app',
        liveUrl: 'https://play.google.com/store/apps/details?id=com.example',
        featured: true,
      },
      {
        name: 'Task Manager',
        description: 'Gerenciador de tarefas com sincronização em tempo real e modo offline.',
        technologies: ['React Native', 'SQLite', 'AsyncStorage'],
        githubUrl: 'https://github.com/seuusuario/task-manager',
        featured: false,
      },
      {
        name: 'Weather App',
        description: 'Aplicativo de previsão do tempo com dados em tempo real e interface intuitiva.',
        technologies: ['React Native', 'OpenWeather API', 'Geolocation'],
        githubUrl: 'https://github.com/seuusuario/weather-app',
        featured: false,
      },
    ];

    for (const project of projects) {
      await createProject(project);
    }
    console.log('✅ Projetos criados com sucesso!\n');

    console.log('🎉 Banco de dados populado com sucesso!');
    console.log('Você pode agora iniciar o aplicativo e ver os dados.');
  } catch (error) {
    console.error('❌ Erro ao popular banco de dados:', error);
  }
}

// Executar o script
populateData();
