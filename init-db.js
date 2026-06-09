// init-db.js
// Execute este arquivo UMA VEZ para criar o banco de dados
// Comando: node init-db.js

const Database = require('better-sqlite3');
const path = require('path');
const bcrypt = require('bcryptjs');

// Criar banco de dados na pasta do projeto
const dbPath = path.join(__dirname, 'data.db');
const db = new Database(dbPath);

console.log('🗄️ Criando banco de dados...');

// Tabela de usuários admin
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Tabela de notícias
db.exec(`
  CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    link TEXT,
    image TEXT,
    date TEXT NOT NULL,
    published BOOLEAN DEFAULT 1,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Tabela de códigos/arquivos
db.exec(`
  CREATE TABLE IF NOT EXISTS codes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    language TEXT NOT NULL,
    fileUrl TEXT NOT NULL,
    fileName TEXT NOT NULL,
    published BOOLEAN DEFAULT 1,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Tabela de projetos para iniciantes
db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    icon TEXT NOT NULL,
    description TEXT NOT NULL,
    time TEXT NOT NULL,
    difficulty TEXT NOT NULL,
    code TEXT NOT NULL,
    published BOOLEAN DEFAULT 1,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Tabela de passos dos projetos
db.exec(`
  CREATE TABLE IF NOT EXISTS projectSteps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    projectId INTEGER NOT NULL,
    stepNumber INTEGER NOT NULL,
    title TEXT NOT NULL,
    details TEXT NOT NULL,
    FOREIGN KEY (projectId) REFERENCES projects(id) ON DELETE CASCADE
  )
`);

// Tabela de downloads dos projetos
db.exec(`
  CREATE TABLE IF NOT EXISTS projectDownloads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    projectId INTEGER NOT NULL,
    name TEXT NOT NULL,
    link TEXT NOT NULL,
    platform TEXT NOT NULL,
    instructions TEXT NOT NULL,
    FOREIGN KEY (projectId) REFERENCES projects(id) ON DELETE CASCADE
  )
`);

// Criar usuário admin padrão
const hashedPassword = bcrypt.hashSync('admin123', 10);
try {
  db.prepare(`
    INSERT INTO users (email, password, name)
    VALUES (?, ?, ?)
  `).run('admin@laboratoriodia.com', hashedPassword, 'Admin');
  console.log('✅ Usuário admin criado!');
  console.log('📧 Email: admin@laboratoriodia.com');
  console.log('🔐 Senha: admin123');
  console.log('⚠️  MUDE A SENHA DEPOIS DE FAZER LOGIN!');
} catch (e) {
  console.log('ℹ️  Usuário admin já existe');
}

console.log('✅ Banco de dados criado com sucesso!');
console.log('📁 Arquivo: data.db');
db.close();
