import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('categories/:categori_id/products/:product_id')
  getCategories(
    @Param('categori_id') categori_id: string,
    @Param('product_id') product_id: string,
  ) {
    return `categori ${categori_id}, product: ${product_id}`;
  }
}
