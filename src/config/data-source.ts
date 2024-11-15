import { DataSource, DataSourceOptions } from 'typeorm';
import { EnvConfig } from './index';

export const AppDataSource: DataSourceOptions = {
  type: 'postgres',
  host: EnvConfig.DB_HOST,
  port: parseInt(EnvConfig.DB_PORT),
  username: EnvConfig.DB_USER,
  password: EnvConfig.DB_PASSWORD,
  database: EnvConfig.DB_DATABASE,
  entities: [],
  migrations: [],
  logging: false,
  synchronize: false,
};

const dataSource = new DataSource(AppDataSource);

export default dataSource;
