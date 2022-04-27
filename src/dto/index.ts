import {IsString } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  title: string;
  text_content: string;
  isCompleted: boolean;
}