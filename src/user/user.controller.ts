
   
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserI } from '../models/user/user.interface';
import { UserService } from './user.service';
import { CreateUserDto } from "../dto";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    add(@Body() userDto:CreateUserDto): Observable<CreateUserDto> {
        return this.userService.add(userDto);
    }

    @Get()
    findAll(): Observable<UserI[]> {
        return this.userService.findAll();
    }
}