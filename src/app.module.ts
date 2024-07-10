import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RunScriptModule } from './run-script/run-script.module';

@Module({
  imports: [RunScriptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
