import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from '../schema/cat.schema';

@Injectable()
export class CatRepository {
  constructor(
    @InjectModel(Cat.name)
    private readonly catModel: Model<Cat>,
  ) {}

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find({});
  }

  async create(cat: Partial<Cat>) {
    return await this.catModel.create(cat);
  }
}
