// update-admin-credentials.js
// Execute este arquivo para atualizar as credenciais de admin
// Comando: node update-admin-credentials.js

const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const path = require('path');

const dbPath = path.join(__dirname, 'data.db');
const db = new Database(dbPath);

console.log('🔐 Atualizando credenciais de admin...');

const novoEmail = 'periclesreis@bol.com.br';
const novaSenha = 'Ericles1@';

const senhaHash = bcrypt.hashSync(novaSenha, 10);

try {
  // Primeiro, tenta atualizar o usuário existente
  const resultado = db.prepare(`
    UPDATE users 
    SET email = ?, password = ?
    WHERE id = 1
  `).run(novoEmail, senhaHash);

  if (resultado.changes > 0) {
    console.log('✅ Credenciais atualizadas com sucesso!');
  } else {
    // Se não existir, cria um novo
    db.prepare(`
      INSERT INTO users (email, password, name)
      VALUES (?, ?, ?)
    `).run(novoEmail, senhaHash, 'Admin');
    console.log('✅ Novo usuário admin criado!');
  }

  console.log('');
  console.log('📧 Email: ' + novoEmail);
  console.log('🔐 Senha: ' + novaSenha);
  console.log('');
  console.log('🌐 Acesse http://localhost:3000/admin/login para fazer login');
} catch (error) {
  console.error('❌ Erro ao atualizar credenciais:', error.message);
}

db.close();
