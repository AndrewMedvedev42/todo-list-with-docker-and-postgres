import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, getConnection} from 'typeorm';
import { NoteEntity } from '../models/notes/note.entity';
import { NoteI } from "../models/notes/note.interface";
import { CreateNoteDto, EditNoteDto, EditNoteStatusDto } from "../dto";

@Injectable()
export class NoteService {

    constructor(
        @InjectRepository(NoteEntity)
        private noteRepository: Repository<NoteEntity>
    ) {}

    add(noteDto: CreateNoteDto): Observable<CreateNoteDto> {
        return from(this.noteRepository.save(noteDto));
    }

    async updateStatus(noteDto: EditNoteStatusDto): Promise<EditNoteStatusDto> {
        try {
            await getConnection()
                .createQueryBuilder()
                .update(NoteEntity)
                .set({
                    isCompleted:noteDto.isCompleted,
                })
                .where({id: noteDto.id})
                .execute(); 

            return noteDto
          } catch (error) {
              return error
          }
    }

    async updateNote(noteDto: EditNoteDto): Promise<EditNoteDto> {
        try {
            await getConnection()
                .createQueryBuilder()
                .update(NoteEntity)
                .set({
                    text_content:noteDto.text_content,
                })
                .where({id: noteDto.id})
                .execute(); 

            return noteDto
          } catch (error) {
              return error
          }
    }

    findAll(): Observable<NoteI[]> {
        return from(this.noteRepository.find());
    }

}