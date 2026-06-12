// add-community-tables.js
require('dotenv').config({ path: '.env.local' });

const { Pool } = require('pg');

async function main() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS community_posts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(180),
        title VARCHAR(200) NOT NULL,
        content TEXT NOT NULL,
        published BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS community_replies (
        id SERIAL PRIMARY KEY,
        post_id INTEGER NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(180),
        content TEXT NOT NULL,
        published BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log('✅ Tabelas da comunidade criadas/verificadas com sucesso.');
  } catch (error) {
    console.error('❌ Erro ao criar tabelas da comunidade:', error);
  } finally {
    await pool.end();
  }
}

main();