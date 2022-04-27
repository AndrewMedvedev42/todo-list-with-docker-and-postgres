import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { NoteEntity } from '../models/notes/note.entity';
import { NoteI } from "../models/notes/note.interface";
import { CreateNoteDto } from "../dto";

@Injectable()
export class NoteService {

    constructor(
        @InjectRepository(NoteEntity)
        private noteRepository: Repository<NoteEntity>
    ) {}

    add(noteDto: CreateNoteDto): Observable<CreateNoteDto> {
        return from(this.noteRepository.save(noteDto));
    }

    findAll(): Observable<NoteI[]> {
        return from(this.noteRepository.find());
    }

}