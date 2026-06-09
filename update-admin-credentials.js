require('dotenv').config({ path: '.env.local' });

const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

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

async function updateCredentials() {
  try {
    console.log('🔐 Criando/atualizando credenciais de admin...');

    const novoEmail = 'periclesreis@bol.com.br';
    const novaSenha = 'Ericles1@';

    const senhaHash = bcrypt.hashSync(novaSenha, 10);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        name TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const resultado = await pool.query(
      `
      INSERT INTO users (email, password, name)
      VALUES ($1, $2, $3)
      ON CONFLICT (email)
      DO UPDATE SET
        password = EXCLUDED.password,
        name = EXCLUDED.name
      RETURNING id, email, name
      `,
      [novoEmail, senhaHash, 'Administrador']
    );

    console.log('✅ Admin criado/atualizado com sucesso!');
    console.log('ID:', resultado.rows[0].id);
    console.log('Email:', resultado.rows[0].email);
    console.log('');
    console.log('Agora tente logar na Vercel usando esse email e a senha definida no script.');
  } catch (error) {
    console.error('❌ Erro ao atualizar credenciais:');
    console.error(error);
  } finally {
    await pool.end();
  }
}

updateCredentials();