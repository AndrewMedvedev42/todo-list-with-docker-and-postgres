import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user/user.entity';
import { UserI } from "../models/user/user.interface";
import { CreateUserDto } from "../dto";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {}

    add(userDto: CreateUserDto): Observable<CreateUserDto> {
        return from(this.userRepository.save(userDto));
    }

    findAll(): Observable<UserI[]> {
        return from(this.userRepository.find());
    }

}