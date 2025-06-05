import { IsString, MinLength } from 'class-validator';

export class CreateStateDto {
  @IsString()
  @MinLength(2)
  stateName: string;
}
