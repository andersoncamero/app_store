import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto, UpdataUserDto } from '../dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private users_service: UsersService) {}
  @Get()
  fintAll() {
    return this.users_service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.users_service.findOnd(id);
  }

  @Post()
  creat(@Body() payload: CreateUserDto) {
    return this.users_service.create(payload);
  }

  @Put(':id')
  updata(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdataUserDto,
  ) {
    return this.users_service.updata(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.users_service.delete(id);
  }
}
