import { IsNotEmpty, IsOptional, IsInt, Min } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  duration?: number;
}
