
   
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserI } from '../models/user/user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Post()
    add(@Body() user: UserI): Observable<UserI> {
        return this.userService.add(user);
    }

    @Get()
    findAll(): Observable<UserI[]> {
        return this.userService.findAll();
    }
}