// Please enable innodatabase_large_prefix config if your mysql version is under 5.7.7
// This application required larger mysql index length for store emoji characters.

// Update with your config settings.
require('babel-register');
require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_DEVELOPMEMT_HOST,
      database: process.env.DB_DEVELOPMEMT_DATABASE,
      user: process.env.DB_DEVELOPMEMT_USER,
      password: process.env.DB_DEVELOPMEMT_PASSWORD,
      charset: 'utf8mb4',
    },
    debug: false,
    seeds: {
      directory: './src/database/seeds/development',
    },
    migrations: {
      directory: './src//database/migrations',
    },
  },
  test: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
    debug: false,
    seeds: {
      directory: './src/database/seeds/test',
    },
    migrations: {
      directory: './src/database/migrations',
    },
  },
  test_mysql: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_DEVELOPMEMT_HOST,
      database: process.env.DB_DEVELOPMEMT_DATABASE,
      user: process.env.DB_DEVELOPMEMT_USER,
      password: process.env.DB_DEVELOPMEMT_PASSWORD,
      charset: 'utf8mb4',
    },
    debug: false,
    seeds: {
      directory: './src/database/seeds/test',
    },
    migrations: {
      directory: './src/database/migrations',
    },
  },
};
