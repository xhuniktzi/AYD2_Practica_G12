import { mysqlTable, int, varchar, date, bigint, time } from 'drizzle-orm/mysql-core';

export const clients = mysqlTable('cliente', {
    cui: bigint('CUI', { mode: 'bigint' }).primaryKey(),
    name: varchar('nombre', { length: 50 }).notNull(),
    lastName: varchar('apellido', { length: 50 }).notNull(),
    phone: int('telefono').notNull(),
    email: varchar('correo', { length: 60 }).notNull(),
    age: int('edad').notNull(),
    gender: int('codigo_Genero').notNull(),
    dateJoined: date('fecha_Ingreso').notNull(),
});

export const expediente = mysqlTable('expediente', {
    no_Expediente: int('no_Expediente').primaryKey(),
    codigo_Documento: int('codigo_Documento'),
    contenido_Documento: varchar('contenido_Documento', { length: 1000 }),
    codigo_Estado: int('codigo_Estado'),
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

export const citas = mysqlTable('cita', {
    codigo_Cita: int('codigo_Cita').primaryKey(),
    CUI_Cliente: bigint('CUI_Cliente', { mode: 'bigint' }),
    fecha: date('fecha').notNull(),
    hora: time('hora').notNull(),
})
