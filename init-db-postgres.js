// init-db-postgres.js - VERSÃO CORRIGIDA
// Execute este arquivo para criar as tabelas no PostgreSQL
// Comando: node init-db-postgres-CORRIGIDO.js

require('dotenv').config({ path: '.env.local' });

const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const connectionString = process.env.DATABASE_URL;

console.log('🔍 Verificando variáveis de ambiente...');
console.log('DATABASE_URL:', connectionString ? '✅ Encontrada' : '❌ Não encontrada');

if (!connectionString) {
  console.error('❌ DATABASE_URL não está definida em .env.local');
  console.error('');
  console.error('Verifique se o arquivo .env.local existe em D:\\DEV\\site\\');
  console.error('');
  console.error('Conteúdo esperado:');
  console.error('DATABASE_URL=postgresql://neondb_owner:npg_nfx8T4DNQmAO@ep-blue-field-aqzcbe4q.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require');
  process.exit(1);
}

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function initDatabase() {
  try {
    console.log('📚 Criando tabelas no PostgreSQL...');

    // Criar tabela de usuários
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela "users" criada');

    // Criar tabela de notícias
    await pool.query(`
      CREATE TABLE IF NOT EXISTS news (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        link VARCHAR(500),
        image VARCHAR(500),
        date VARCHAR(50),
        published BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela "news" criada');

    // Criar tabela de códigos
    await pool.query(`
      CREATE TABLE IF NOT EXISTS codes (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        language VARCHAR(100),
        fileUrl VARCHAR(500),
        fileName VARCHAR(255),
        published BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela "codes" criada');

    // Criar tabela de projetos
    await pool.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        icon VARCHAR(10),
        description TEXT NOT NULL,
        time VARCHAR(50),
        difficulty VARCHAR(50),
        code TEXT,
        published BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela "projects" criada');

    // Criar usuário admin padrão
    const adminEmail = 'admin@laboratoriodia.com';
    const adminPassword = 'admin123';
    const senhaHash = bcrypt.hashSync(adminPassword, 10);

    // Verificar se usuário já existe
    const userExists = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [adminEmail]
    );

    if (userExists.rows.length === 0) {
      await pool.query(
        'INSERT INTO users (email, password, name) VALUES ($1, $2, $3)',
        [adminEmail, senhaHash, 'Admin']
      );
      console.log('✅ Usuário admin criado');
      console.log(`   Email: ${adminEmail}`);
      console.log(`   Senha: ${adminPassword}`);
    } else {
      console.log('ℹ️  Usuário admin já existe');
    }

    console.log('\n✅ Banco de dados inicializado com sucesso!');
    console.log('🌐 Acesse http://localhost:3000/admin/login para fazer login');

  } catch (error) {
    console.error('❌ Erro ao inicializar banco de dados:', error.message);
  } finally {
    await pool.end();
  }
}

initDatabase();