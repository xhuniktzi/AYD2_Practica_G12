import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

if (process.env.NODE_ENV != 'production') {
    await import('dotenv/config')
}

const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
});

export const db = drizzle(connection);
