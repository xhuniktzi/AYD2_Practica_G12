import { mysqlTable, int, varchar, date} from 'drizzle-orm/mysql-core';

export const clients = mysqlTable('cliente', {
    cui: varchar('CUI', { length: 20 }).primaryKey(),
    name: varchar('nombre', { length: 50 }).notNull(),
    lastName: varchar('apellido', { length: 50 }).notNull(),
    phone: int('telefono').notNull(),
    email: varchar('correo', { length: 60 }).notNull(),
    age: int('edad').notNull(),
    gender: int('codigo_Genero'),
    dateJoined: date('fecha_Ingreso').notNull(),
}); 

export const expediente = mysqlTable('expediente', {
    no_Expediente: int('no_Expediente').primaryKey().autoincrement(),
    codigo_Documento: int('codigo_Documento').notNull(),
    contenido_Documento: varchar('contenido_Documento', { length: 1000 }).notNull(),
    codigo_Estado: int('codigo_Estado').notNull(),
});

export const estado = mysqlTable('estado', {
    codigo_Estado: int('codigo_Estado').primaryKey(),
    nombre: varchar('nombre', { length: 255 }).notNull(),
});

export const tipo_documento = mysqlTable('tipo_documento', {
    codigo_Documento: int('codigo_Documento').primaryKey(),
    nombre_Tipo: varchar('nombre_Tipo', { length: 255 }).notNull(),
    extension: varchar('extension', { length: 6 }).notNull(),
});