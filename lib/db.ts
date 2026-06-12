// lib/db.ts - PostgreSQL Version
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL não está definida nas variáveis de ambiente');
}

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function getDb() {
  return pool;
}

// ==================== USERS ====================

export async function getUserByEmail(email: string) {
  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    return result.rows[0] || null;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return null;
  }
}

export async function createUser(
  email: string,
  password: string,
  name: string = 'Admin'
) {
  try {
    const result = await pool.query(
      'INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING *',
      [email, password, name]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return null;
  }
}

// ==================== NEWS ====================

export async function getAllNews() {
  try {
    const result = await pool.query(
      'SELECT * FROM news WHERE published = true ORDER BY date DESC'
    );

    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    return [];
  }
}

export async function getAllNewsAdmin() {
  try {
    const result = await pool.query(
      'SELECT * FROM news ORDER BY date DESC'
    );

    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar notícias (admin):', error);
    return [];
  }
}

export async function getNewsById(id: number) {
  try {
    const result = await pool.query(
      'SELECT * FROM news WHERE id = $1 AND published = true',
      [id]
    );

    return result.rows[0] || null;
  } catch (error) {
    console.error('Erro ao buscar notícia por ID:', error);
    return null;
  }
}

export async function createNews(
  title: string,
  description: string,
  link: string = '',
  date: string,
  published: boolean = false,
  content: string = ''
) {
  try {
    const result = await pool.query(
      `
      INSERT INTO news (title, description, link, date, published, content)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `,
      [title, description, link, date, published, content]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Erro ao criar notícia:', error);
    return null;
  }
}

export async function updateNews(
  id: number,
  title: string,
  description: string,
  link: string = '',
  date: string,
  published: boolean = false,
  content: string = ''
) {
  try {
    const result = await pool.query(
      `
      UPDATE news
      SET title = $1,
          description = $2,
          link = $3,
          date = $4,
          published = $5,
          content = $6
      WHERE id = $7
      RETURNING *
      `,
      [title, description, link, date, published, content, id]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Erro ao atualizar notícia:', error);
    return null;
  }
}

export async function deleteNews(id: number) {
  try {
    await pool.query('DELETE FROM news WHERE id = $1', [id]);

    return true;
  } catch (error) {
    console.error('Erro ao deletar notícia:', error);
    return false;
  }
}

// ==================== CODES ====================

export async function getAllCodes() {
  try {
    const result = await pool.query(
      'SELECT * FROM codes WHERE published = true ORDER BY id DESC'
    );

    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar códigos:', error);
    return [];
  }
}

export async function getAllCodesAdmin() {
  try {
    const result = await pool.query(
      'SELECT * FROM codes ORDER BY id DESC'
    );

    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar códigos (admin):', error);
    return [];
  }
}

export async function createCode(
  title: string,
  description: string,
  language: string,
  fileUrl: string,
  fileName: string,
  published: boolean = false
) {
  try {
    const result = await pool.query(
      'INSERT INTO codes (title, description, language, fileUrl, fileName, published) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [title, description, language, fileUrl, fileName, published]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Erro ao criar código:', error);
    return null;
  }
}

export async function updateCode(
  id: number,
  title: string,
  description: string,
  language: string,
  fileUrl: string,
  fileName: string,
  published: boolean = false
) {
  try {
    const result = await pool.query(
      'UPDATE codes SET title = $1, description = $2, language = $3, fileUrl = $4, fileName = $5, published = $6 WHERE id = $7 RETURNING *',
      [title, description, language, fileUrl, fileName, published, id]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Erro ao atualizar código:', error);
    return null;
  }
}

export async function deleteCode(id: number) {
  try {
    await pool.query('DELETE FROM codes WHERE id = $1', [id]);

    return true;
  } catch (error) {
    console.error('Erro ao deletar código:', error);
    return false;
  }
}

// ==================== PROJECTS ====================

export async function getAllProjects() {
  try {
    const result = await pool.query(
      'SELECT * FROM projects WHERE published = true ORDER BY id DESC'
    );

    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    return [];
  }
}

export async function getAllProjectsAdmin() {
  try {
    const result = await pool.query(
      'SELECT * FROM projects ORDER BY id DESC'
    );

    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar projetos (admin):', error);
    return [];
  }
}

export async function createProject(
  title: string,
  icon: string,
  description: string,
  time: string,
  difficulty: string,
  code: string,
  published: boolean = false
) {
  try {
    const result = await pool.query(
      'INSERT INTO projects (title, icon, description, time, difficulty, code, published) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [title, icon, description, time, difficulty, code, published]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Erro ao criar projeto:', error);
    return null;
  }
}

export async function updateProject(
  id: number,
  title: string,
  icon: string,
  description: string,
  time: string,
  difficulty: string,
  code: string,
  published: boolean = false
) {
  try {
    const result = await pool.query(
      'UPDATE projects SET title = $1, icon = $2, description = $3, time = $4, difficulty = $5, code = $6, published = $7 WHERE id = $8 RETURNING *',
      [title, icon, description, time, difficulty, code, published, id]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Erro ao atualizar projeto:', error);
    return null;
  }
}

export async function deleteProject(id: number) {
  try {
    await pool.query('DELETE FROM projects WHERE id = $1', [id]);

    return true;
  } catch (error) {
    console.error('Erro ao deletar projeto:', error);
    return false;
  }
}
// ==================== COMMUNITY ====================

export async function getPublishedCommunityPosts() {
  try {
    const result = await pool.query(
      `
      SELECT
        p.*,
        COUNT(r.id) FILTER (WHERE r.published = true) AS replies_count
      FROM community_posts p
      LEFT JOIN community_replies r ON r.post_id = p.id
      WHERE p.published = true
      GROUP BY p.id
      ORDER BY p.created_at DESC
      `
    );

    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar publicações da comunidade:', error);
    return [];
  }
}

export async function getCommunityPostById(id: number) {
  try {
    const result = await pool.query(
      'SELECT * FROM community_posts WHERE id = $1 AND published = true',
      [id]
    );

    return result.rows[0] || null;
  } catch (error) {
    console.error('Erro ao buscar publicação da comunidade:', error);
    return null;
  }
}

export async function getPublishedCommunityReplies(postId: number) {
  try {
    const result = await pool.query(
      `
      SELECT *
      FROM community_replies
      WHERE post_id = $1 AND published = true
      ORDER BY created_at ASC
      `,
      [postId]
    );

    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar respostas da comunidade:', error);
    return [];
  }
}

export async function createCommunityPost(
  name: string,
  email: string,
  title: string,
  content: string,
  published: boolean = false
) {
  try {
    const result = await pool.query(
      `
      INSERT INTO community_posts (name, email, title, content, published)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [name, email, title, content, published]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Erro ao criar publicação da comunidade:', error);
    return null;
  }
}

export async function createCommunityReply(
  postId: number,
  name: string,
  email: string,
  content: string,
  published: boolean = false
) {
  try {
    const result = await pool.query(
      `
      INSERT INTO community_replies (post_id, name, email, content, published)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [postId, name, email, content, published]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Erro ao criar resposta da comunidade:', error);
    return null;
  }
}

export async function getAllCommunityPostsAdmin() {
  try {
    const result = await pool.query(
      `
      SELECT
        p.*,
        COUNT(r.id) AS replies_count
      FROM community_posts p
      LEFT JOIN community_replies r ON r.post_id = p.id
      GROUP BY p.id
      ORDER BY p.created_at DESC
      `
    );

    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar publicações admin:', error);
    return [];
  }
}

export async function getAllCommunityRepliesAdmin(postId: number) {
  try {
    const result = await pool.query(
      `
      SELECT *
      FROM community_replies
      WHERE post_id = $1
      ORDER BY created_at ASC
      `,
      [postId]
    );

    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar respostas admin:', error);
    return [];
  }
}

export async function updateCommunityPostPublished(
  id: number,
  published: boolean
) {
  try {
    const result = await pool.query(
      `
      UPDATE community_posts
      SET published = $1
      WHERE id = $2
      RETURNING *
      `,
      [published, id]
    );

    return result.rows[0] || null;
  } catch (error) {
    console.error('Erro ao atualizar publicação da comunidade:', error);
    return null;
  }
}

export async function updateCommunityReplyPublished(
  id: number,
  published: boolean
) {
  try {
    const result = await pool.query(
      `
      UPDATE community_replies
      SET published = $1
      WHERE id = $2
      RETURNING *
      `,
      [published, id]
    );

    return result.rows[0] || null;
  } catch (error) {
    console.error('Erro ao atualizar resposta da comunidade:', error);
    return null;
  }
}

export async function deleteCommunityPost(id: number) {
  try {
    await pool.query('DELETE FROM community_posts WHERE id = $1', [id]);
    return true;
  } catch (error) {
    console.error('Erro ao deletar publicação da comunidade:', error);
    return false;
  }
}

export async function deleteCommunityReply(id: number) {
  try {
    await pool.query('DELETE FROM community_replies WHERE id = $1', [id]);
    return true;
  } catch (error) {
    console.error('Erro ao deletar resposta da comunidade:', error);
    return false;
  }
}