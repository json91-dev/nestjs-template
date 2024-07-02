import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatService } from '../service/cat.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCatDto } from '../dto/create-cat.dto';

@Controller({ path: 'cats', version: '1' })
@ApiTags('Cat API')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @ApiOperation({
    summary: '모든 고양이 조회',
  })
  @Get('')
  getAllCats() {
    return this.catService.getAllCats();
  }

  @ApiOperation({ summary: '고양이 추가' })
  @Post()
  create(@Body() body: CreateCatDto) {
    return this.catService.createCat(body);
  }
}
