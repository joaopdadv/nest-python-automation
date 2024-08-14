import { Module } from '@nestjs/common';
import { NamesService } from './names.service';
import { NamesController } from './names.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NamesController],
  providers: [NamesService],
})
export class NamesModule { }
