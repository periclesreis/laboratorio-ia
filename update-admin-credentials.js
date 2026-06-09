// update-admin-credentials.js - VERSÃO CORRIGIDA
// Execute este arquivo para atualizar as credenciais de admin
// Comando: node update-admin-credentials-CORRIGIDO.js

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
    console.log('🔐 Atualizando credenciais de admin...');

    const novoEmail = 'periclesreis@bol.com.br';
    const novaSenha = 'Ericles1@';

    const senhaHash = bcrypt.hashSync(novaSenha, 10);

    // Atualizar o usuário existente (id = 1)
    const resultado = await pool.query(
      'UPDATE users SET email = $1, password = $2 WHERE id = 1',
      [novoEmail, senhaHash]
    );

    if (resultado.rowCount > 0) {
      console.log('✅ Credenciais atualizadas com sucesso!');
    } else {
      console.log('❌ Usuário admin não encontrado');
    }

    console.log('');
    console.log('📧 Email: ' + novoEmail);
    console.log('🔐 Senha: ' + novaSenha);
    console.log('');
    console.log('🌐 Acesse http://localhost:3000/admin/login para fazer login');

  } catch (error) {
    console.error('❌ Erro ao atualizar credenciais:', error.message);
  } finally {
    await pool.end();
  }
}

updateCredentials();