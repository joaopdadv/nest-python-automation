import { Controller, Get } from '@nestjs/common';
import { NamesService } from './names.service';

@Controller('names')
export class NamesController {
  constructor(private readonly namesService: NamesService) { }

  @Get()
  findAll() {
    return this.namesService.findAll();
  }
}
