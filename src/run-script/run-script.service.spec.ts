import { Test, TestingModule } from '@nestjs/testing';
import { RunScriptService } from './run-script.service';

describe('RunScriptService', () => {
  let service: RunScriptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RunScriptService],
    }).compile();

    service = module.get<RunScriptService>(RunScriptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
