import { IsEmail, IsNotEmpty, IsOptional, IsInt, Min } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  age?: number;
}
