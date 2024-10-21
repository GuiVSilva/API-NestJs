import { Module } from '@nestjs/common';
import { UsuerioModule } from './module/usuario.module';

@Module({
  imports: [UsuerioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
