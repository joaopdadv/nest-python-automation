import { Module } from '@nestjs/common';
import { RunScriptService } from './run-script.service';
import { RunScriptController } from './run-script.controller';

@Module({
  controllers: [RunScriptController],
  providers: [RunScriptService],
})
export class RunScriptModule {}
