import { Module } from '@nestjs/common';
import { RunScriptService } from './run-script.service';
import { RunScriptController } from './run-script.controller';
import { SocketModule } from 'src/socket/socket.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [SocketModule, PrismaModule],
  controllers: [RunScriptController],
  providers: [RunScriptService],
})
export class RunScriptModule { }
