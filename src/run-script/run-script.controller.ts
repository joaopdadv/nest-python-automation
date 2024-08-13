import { Body, Controller, Get } from '@nestjs/common';
import { RunScriptService } from './run-script.service';

@Controller('run-script')
export class RunScriptController {
  constructor(private readonly runScriptService: RunScriptService) { }

  @Get('move-and-click')
  async moveAndClick(
    @Body() req: { name: string },
  ) {
    try {
      const result = await this.runScriptService.moveAndClick(req.name);
      return { result };
    } catch (error) {
      return { error: error.message };
    }
  }
}
