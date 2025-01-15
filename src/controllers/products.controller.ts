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
import { ProductsService } from '../services/products.service';

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
  create(@Body() payload: any) {
    return this.product_service.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return this.product_service.updated(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.product_service.delete(+id);
  }
}
