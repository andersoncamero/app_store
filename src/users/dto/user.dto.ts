import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEmail, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly status: boolean;

  @IsNotEmpty()
  readonly role: string;
}

export class UpdataUserDto extends PartialType(CreateUserDto) {}
