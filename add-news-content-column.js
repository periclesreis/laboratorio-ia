// add-news-content-column.js
require('dotenv').config({ path: '.env.local' });

const { Pool } = require('pg');

async function main() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await pool.query(`
      ALTER TABLE news
      ADD COLUMN IF NOT EXISTS content TEXT;
    `);

    console.log('✅ Coluna content adicionada/verificada com sucesso na tabela news.');
  } catch (error) {
    console.error('❌ Erro ao adicionar coluna content:', error);
  } finally {
    await pool.end();
  }
}

main();