import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RunScriptModule } from './run-script/run-script.module';
import { SocketModule } from './socket/socket.module';
import { NamesModule } from './names/names.module';

@Module({
  imports: [RunScriptModule, SocketModule, NamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
