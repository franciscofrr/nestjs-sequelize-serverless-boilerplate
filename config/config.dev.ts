import { Dialect } from 'sequelize/types';

export const config = {
    database: {
        dialect: 'mysql' as Dialect,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    }
};