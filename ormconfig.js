const source = process.env.ENVIRONMENT === 'development' ? 'src' : 'dist';
const extension = process.env.ENVIRONMENT === 'development' ? 'ts' : 'js';

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [`./${source}/modules/**/infra/typeorm/entities/*.${extension}`],
  migrations: [`./${source}/shared/infra/typeorm/migrations/*.${extension}`],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};
