import { Body, Controller, Post } from '@nestjs/common';
import { RunScriptService } from './run-script.service';

@Controller('/write-name')
export class RunScriptController {
  constructor(private readonly runScriptService: RunScriptService) { }

  @Post()
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
