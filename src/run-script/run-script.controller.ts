import { Controller, Get, Query } from '@nestjs/common';
import { RunScriptService } from './run-script.service';

@Controller('run-script')
export class RunScriptController {
  constructor(private readonly runScriptService: RunScriptService) { }

  @Get('move-and-click')
  async moveAndClick(
    @Query('startX') startX: number,
    @Query('startY') startY: number,
    @Query('endX') endX: number,
    @Query('endY') endY: number,
    @Query('duration') duration: number
  ) {
    try {
      const result = await this.runScriptService.moveAndClick(startX, startY, endX, endY, duration);
      return { result };
    } catch (error) {
      return { error: error.message };
    }
  }
}
