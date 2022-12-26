import { CreateMovieDto } from './create-movie.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber } from 'class-validator';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {} //아래내용을 이렇게 표현할 수 있다. npm i @nestjs/mapped-types
//   @IsString()
//   readonly title?: string;
//   @IsNumber()
//   readonly year?: number;
//   @IsString({ each: true })
//   readonly genres?: string[];

//*유효성 검사 하는거임
