import { IsBoolean, IsString } from 'class-validator';

export class CategoryDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsBoolean()
  readonly status: boolean;
}
