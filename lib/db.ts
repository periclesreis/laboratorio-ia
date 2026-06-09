// lib/db.ts
import Database from 'better-sqlite3';
import path from 'path';

let db: Database.Database | null = null;

export function getDb() {
  if (!db) {
    const dbPath = path.join(process.cwd(), 'data.db');
    db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
  }
  return db;
}

export interface News {
  id: number;
  title: string;
  description: string;
  link?: string;
  image?: string;
  date: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Code {
  id: number;
  title: string;
  description: string;
  language: string;
  fileUrl: string;
  fileName: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: number;
  title: string;
  icon: string;
  description: string;
  time: string;
  difficulty: string;
  code: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

// NEWS QUERIES
export function getAllNews(): News[] {
  const db = getDb();
  return db.prepare('SELECT * FROM news WHERE published = 1 ORDER BY date DESC').all() as News[];
}

export function getNewsById(id: number): News | undefined {
  const db = getDb();
  return db.prepare('SELECT * FROM news WHERE id = ?').get(id) as News | undefined;
}

export function createNews(data: Omit<News, 'id' | 'createdAt' | 'updatedAt'>): News {
  const db = getDb();
  const result = db.prepare(`
    INSERT INTO news (title, description, link, image, date, published)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(data.title, data.description, data.link || null, data.image || null, data.date, data.published);
  
  return getNewsById(result.lastInsertRowid as number)!;
}

export function updateNews(id: number, data: Partial<News>): News {
  const db = getDb();
  db.prepare(`
    UPDATE news 
    SET title = COALESCE(?, title),
        description = COALESCE(?, description),
        link = COALESCE(?, link),
        image = COALESCE(?, image),
        date = COALESCE(?, date),
        published = COALESCE(?, published),
        updatedAt = CURRENT_TIMESTAMP
    WHERE id = ?
  `).run(data.title, data.description, data.link, data.image, data.date, data.published, id);
  
  return getNewsById(id)!;
}

export function deleteNews(id: number): void {
  const db = getDb();
  db.prepare('DELETE FROM news WHERE id = ?').run(id);
}

// CODE QUERIES
export function getAllCodes(): Code[] {
  const db = getDb();
  return db.prepare('SELECT * FROM codes WHERE published = 1 ORDER BY createdAt DESC').all() as Code[];
}

export function getCodeById(id: number): Code | undefined {
  const db = getDb();
  return db.prepare('SELECT * FROM codes WHERE id = ?').get(id) as Code | undefined;
}

export function createCode(data: Omit<Code, 'id' | 'createdAt' | 'updatedAt'>): Code {
  const db = getDb();
  const result = db.prepare(`
    INSERT INTO codes (title, description, language, fileUrl, fileName, published)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(data.title, data.description, data.language, data.fileUrl, data.fileName, data.published);
  
  return getCodeById(result.lastInsertRowid as number)!;
}

export function updateCode(id: number, data: Partial<Code>): Code {
  const db = getDb();
  db.prepare(`
    UPDATE codes 
    SET title = COALESCE(?, title),
        description = COALESCE(?, description),
        language = COALESCE(?, language),
        fileUrl = COALESCE(?, fileUrl),
        fileName = COALESCE(?, fileName),
        published = COALESCE(?, published),
        updatedAt = CURRENT_TIMESTAMP
    WHERE id = ?
  `).run(data.title, data.description, data.language, data.fileUrl, data.fileName, data.published, id);
  
  return getCodeById(id)!;
}

export function deleteCode(id: number): void {
  const db = getDb();
  db.prepare('DELETE FROM codes WHERE id = ?').run(id);
}

// PROJECT QUERIES
export function getAllProjects(): Project[] {
  const db = getDb();
  return db.prepare('SELECT * FROM projects WHERE published = 1 ORDER BY createdAt DESC').all() as Project[];
}

export function getProjectById(id: number): Project | undefined {
  const db = getDb();
  return db.prepare('SELECT * FROM projects WHERE id = ?').get(id) as Project | undefined;
}

export function createProject(data: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
  const db = getDb();
  const result = db.prepare(`
    INSERT INTO projects (title, icon, description, time, difficulty, code, published)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(data.title, data.icon, data.description, data.time, data.difficulty, data.code, data.published);
  
  return getProjectById(result.lastInsertRowid as number)!;
}

export function updateProject(id: number, data: Partial<Project>): Project {
  const db = getDb();
  db.prepare(`
    UPDATE projects 
    SET title = COALESCE(?, title),
        icon = COALESCE(?, icon),
        description = COALESCE(?, description),
        time = COALESCE(?, time),
        difficulty = COALESCE(?, difficulty),
        code = COALESCE(?, code),
        published = COALESCE(?, published),
        updatedAt = CURRENT_TIMESTAMP
    WHERE id = ?
  `).run(data.title, data.icon, data.description, data.time, data.difficulty, data.code, data.published, id);
  
  return getProjectById(id)!;
}

export function deleteProject(id: number): void {
  const db = getDb();
  db.prepare('DELETE FROM projects WHERE id = ?').run(id);
}
