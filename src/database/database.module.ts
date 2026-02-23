import Knex from 'knex';
import knexConfig from './knex.config';
import { Global, Module, Provider } from '@nestjs/common';

export const KNEX_CONNECTION = 'KNEX_CONNECTION';

const knexProvider: Provider<Knex.Knex> = {
  provide: KNEX_CONNECTION,
  useFactory: () => {
    const env = process.env.NODE_ENV || 'development';
    return Knex(knexConfig[env]);
  },
};

@Global()
@Module({
  providers: [knexProvider],
  exports: [knexProvider],
})
export class DatabaseModule {}
