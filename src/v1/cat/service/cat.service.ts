import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { CatRepository } from '../repository/cat.repository';
import { CreateCatDto } from '../dto/create-cat.dto';

@Injectable()
export class CatService {
  constructor(private readonly catRepository: CatRepository) {}

  async getAllCats() {
    return await this.catRepository.findAll();
  }

  async createCat(@Body() body: CreateCatDto) {
    return await this.catRepository.create(body);
  }
}
