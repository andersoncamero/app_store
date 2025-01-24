import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from '../service/products.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private product_service: ProductsService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  getProducts() {
    // @Query('brand') brand: string, // @Query('offset') offset = 0, // @Query('limit') limit = 100,
    // return {
    //   messages: 'successful product',
    //   product: `product  limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.product_service.find_all();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.product_service.find_one(id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.product_service.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.product_service.updated(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.product_service.delete(+id);
  }
}
