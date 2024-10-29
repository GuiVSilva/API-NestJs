import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../entity/**/*.entity{.js,.ts}'],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
};
console.log('Entities path:', __dirname + '/../entity/**/*.entity{.js,.ts}');

const dataSource = new DataSource(dataSourceOptions);

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source initialized');
    console.log(
      'Loaded entities:',
      dataSource.entityMetadatas.map((entity) => entity.name),
    );
  })
  .catch((error) =>
    console.log('Error during Data Source initialization:', error),
  );

export default dataSource;
