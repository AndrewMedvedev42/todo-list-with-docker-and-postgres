import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from '../models/notes/note.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([NoteEntity])
  ],
  providers: [NoteService],
  controllers: [NoteController]
})
export class NoteModule {}
