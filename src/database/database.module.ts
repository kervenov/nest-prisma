import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Global()
@Module({
  exports: [DatabaseModule],
  providers: [DatabaseService]
})
export class DatabaseModule {}
