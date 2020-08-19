import { Dialect } from 'sequelize/types';

import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    database: {
        dialect: 'mysql' as Dialect,
        host: process.env.DEV_DB_HOST,
        port: parseInt(process.env.DEV_DB_PORT),
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_SCHEMA
    }
};