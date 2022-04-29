
   
import { Body, Controller, Get, Post, Patch } from '@nestjs/common';
import { Observable } from 'rxjs';
import { NoteI } from '../models/notes/note.interface';
import { NoteService } from './note.service';
import { CreateNoteDto, EditNoteDto, EditNoteStatusDto } from "../dto";

@Controller('notes')
export class NoteController {
    constructor(private noteService: NoteService) {}

    @Post()
    add(@Body() noteDto:CreateNoteDto): Observable<CreateNoteDto> {
        return this.noteService.add(noteDto);
    }

    @Patch()
    updateStatus(@Body() dataDto:EditNoteStatusDto): Promise<EditNoteStatusDto> {
        return this.noteService.updateStatus(dataDto);
    }

    @Patch()
    updateNote(@Body() statusDto:EditNoteDto): Promise<EditNoteDto> {
        return this.noteService.updateNote(statusDto);
    }

    @Get()
    findAll(): Observable<NoteI[]> {
        return this.noteService.findAll();
    }
}