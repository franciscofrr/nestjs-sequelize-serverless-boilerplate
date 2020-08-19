import { Dialect } from 'sequelize/types';

import * as dotenv from 'dotenv';
dotenv.config();

export const configDev = {
    database: {
        dialect: 'mysql' as Dialect,
        host: process.env.DEV_DB_HOST,
        port: parseInt(process.env.DEV_DB_PORT),
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_SCHEMA
    }
};

export const configProd = {
    database: {
        dialect: 'mysql' as Dialect,
        host: process.env.PROD_DB_HOST,
        port: parseInt(process.env.PROD_DB_PORT),
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_SCHEMA
    }
};

export default process.env.NODE_ENV === 'production' ? configProd : configDev;