import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NamesService {

  constructor(
    private readonly prisma: PrismaService
  ) { }

  async findAll() {
    return this.prisma.keys.findMany({
      select: {
        name: true,
      },
    }).then((keys) => keys.map((key) => key.name))
      .catch((error) => {
        throw new BadRequestException(error.message);
      });
  }
}
