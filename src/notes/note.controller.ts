
   
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { NoteI } from '../models/notes/note.interface';
import { NoteService } from './note.service';
import { CreateNoteDto } from "../dto";

@Controller('notes')
export class NoteController {
    constructor(private noteService: NoteService) {}

    @Post()
    add(@Body() noteDto:CreateNoteDto): Observable<CreateNoteDto> {
        return this.noteService.add(noteDto);
    }

    @Get()
    findAll(): Observable<NoteI[]> {
        return this.noteService.findAll();
    }
}