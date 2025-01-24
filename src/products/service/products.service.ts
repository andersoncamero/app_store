import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Injectable()
export class ProductsService {
  private conter_id = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'product_1',
      description: 'hola',
      price: 122,
      stock: 50,
      image: 'hola_',
    },
  ];

  find_all() {
    return this.products;
  }

  find_one(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.conter_id += 1;
    const new_product = {
      id: this.conter_id,
      ...payload,
    };
    this.products.push(new_product);
    return new_product;
  }

  updated(id: number, payload: UpdateProductDto) {
    const product = this.find_one(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = { ...product, ...payload };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const product = this.find_one(id);
    if (!product) {
      return null;
    }
    const index = this.products.findIndex((item) => item.id === id);
    this.products.splice(index);
    return {
      message: 'successfully delete',
      id,
    };
  }
}
