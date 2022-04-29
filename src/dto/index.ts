import { IsString, isBoolean } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  id:number;
  title: string;
  text_content: string;
  isCompleted: boolean;
}

export class EditNoteDto {
  @IsString()
  id:number;
  text_content: string;
}

export class EditNoteStatusDto {
  @IsString()
  id:number;
  isCompleted: boolean;
}