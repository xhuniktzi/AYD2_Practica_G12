import { mysqlTable, int, varchar, date } from 'drizzle-orm/mysql-core';

export const clients = mysqlTable('cliente', {
    cui: int('CUI').primaryKey(),
    name: varchar('nombre', { length: 50 }).notNull(),
    lastName: varchar('apellido', { length: 50 }).notNull(),
    phone: int('telefono').notNull(),
    email: varchar('correo', { length: 60 }).notNull(),
    age: int('edad').notNull(),
    gender: int('codigo_Genero'),
    dateJoined: date('fecha_Ingreso').notNull(),
});
