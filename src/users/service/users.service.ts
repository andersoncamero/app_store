import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entiti';
import { CreateUserDto, UpdataUserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
  private conter_id = 1;
  private users: User[] = [
    {
      id: 1,
      name: 'user_1',
      email: 'hola',
      password: '122',
    },
  ];

  findAll(): User[] {
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
}
