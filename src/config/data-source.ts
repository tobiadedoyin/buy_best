import { DataSource, DataSourceOptions } from 'typeorm';
import { EnvConfig } from './index';

export const AppDataSource: DataSourceOptions = {
  type: 'postgres',
  host: EnvConfig.DB_HOST,
  port: parseInt(EnvConfig.DB_PORT),
  username: EnvConfig.DB_USER,
  password: EnvConfig.DB_PASSWORD,
  database: EnvConfig.DB_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: [],
  logging: false,
  synchronize: true,
};

const dataSource = new DataSource(AppDataSource);

export default dataSource;
