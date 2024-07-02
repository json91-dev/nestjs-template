import { Module } from '@nestjs/common';
import { CatService } from './service/cat.service';
import { CatController } from './controller/cat.controller';
import { CatRepository } from './repository/cat.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schema/cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatController],
  providers: [CatService, CatRepository],
})
export class CatModule {}
