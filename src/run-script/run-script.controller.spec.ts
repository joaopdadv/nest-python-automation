import { Test, TestingModule } from '@nestjs/testing';
import { RunScriptController } from './run-script.controller';
import { RunScriptService } from './run-script.service';

describe('RunScriptController', () => {
  let controller: RunScriptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RunScriptController],
      providers: [RunScriptService],
    }).compile();

    controller = module.get<RunScriptController>(RunScriptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
