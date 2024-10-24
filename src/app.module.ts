import { Module, Options } from '@nestjs/common';
import { UsuarioModule } from './module/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsuarioModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
