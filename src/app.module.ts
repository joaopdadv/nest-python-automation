import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RunScriptModule } from './run-script/run-script.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [RunScriptModule, SocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
