// debug-db.js
// Script para verificar o que há no banco de dados
// Comando: node debug-db.js

require('dotenv').config({ path: '.env.local' });

const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('❌ DATABASE_URL não está definida em .env.local');
  process.exit(1);
}

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function debugDatabase() {
  try {
    console.log('🔍 Verificando banco de dados...\n');

    // Verificar usuários
    console.log('📊 USUÁRIOS:');
    const usersResult = await pool.query('SELECT * FROM users');
    console.log(`Total: ${usersResult.rows.length}`);
    usersResult.rows.forEach(user => {
      console.log(`  - ${user.email} (${user.name})`);
    });

    // Verificar notícias
    console.log('\n📰 NOTÍCIAS:');
    const newsResult = await pool.query('SELECT * FROM news');
    console.log(`Total: ${newsResult.rows.length}`);
    newsResult.rows.forEach(news => {
      console.log(`  - [${news.published ? '✅' : '❌'}] ${news.title}`);
    });

    // Verificar códigos
    console.log('\n💾 CÓDIGOS:');
    const codesResult = await pool.query('SELECT * FROM codes');
    console.log(`Total: ${codesResult.rows.length}`);
    codesResult.rows.forEach(code => {
      console.log(`  - [${code.published ? '✅' : '❌'}] ${code.title} (${code.language})`);
    });

    // Verificar projetos
    console.log('\n🚀 PROJETOS:');
    const projectsResult = await pool.query('SELECT * FROM projects');
    console.log(`Total: ${projectsResult.rows.length}`);
    projectsResult.rows.forEach(project => {
      console.log(`  - [${project.published ? '✅' : '❌'}] ${project.title}`);
    });

    console.log('\n✅ Debug concluído!');

  } catch (error) {
    console.error('❌ Erro ao verificar banco de dados:', error.message);
  } finally {
    await pool.end();
  }
}

debugDatabase();
