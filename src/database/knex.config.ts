import * as path from 'path';
import type { Knex } from 'knex';
import * as dotenv from 'dotenv';

dotenv.config();

const rootDir = path.resolve(__dirname, '..', '..');

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      database: process.env.DB_NAME || 'task_tracker',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
    },
    migrations: {
      directory: path.join(rootDir, 'src', 'migrations'),
      extension: 'ts',
    },
    seeds: {
      directory: path.join(rootDir, 'src', 'seeds'),
      extension: 'ts',
    },
    debug: true, // logs every SQL query — very useful while learning
  },
};

export default config;
module.exports = config; // needed for Knex CLI commands
