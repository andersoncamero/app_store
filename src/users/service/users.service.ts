import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';

import { ProductsService } from './../../products/service/products.service';
import { CreateUserDto, UpdataUserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private products_service: ProductsService,
    private config_service: ConfigService,
  ) {}
  private conter_id = 1;
  private users: User[] = [
    {
      id: 1,
      email: 'hola',
      password: '122',
    },
  ];

  private orders: Order[] = [
    {
      data: new Date(),
      user: this.users[0],
      products: [],
    },
  ];

  findAll(): User[] {
    const apiKey = this.config_service.get('API_KEY');
    console.log(apiKey);
    return this.users;
  }

  findOnd(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return this.users.find((user) => user.id === id);
  }

  create(payload: CreateUserDto): User {
    this.conter_id += 1;
    const new_user = {
      id: this.conter_id,
      ...payload,
    };
    this.users.push(new_user);
    return new_user;
  }

  updata(id: number, payload: UpdataUserDto): User {
    const user = this.findOnd(id);
    const index = this.users.indexOf(user);
    this.users[index] = {
      ...user,
      ...payload,
    };
    return this.users[index];
  }

  delete(id: number): { message: string; id: number } | boolean {
    const user = this.findOnd(id);
    if (!user) {
      return false;
    }
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index);
    return {
      message: 'successfully delete',
      id,
    };
  }

  getOrderByUser(id: number): Order {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return {
      data: new Date(),
      user,
      products: this.products_service.find_all(),
    };
  }
}
