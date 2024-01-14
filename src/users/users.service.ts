import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private repo: Repository<User>) { }


    create(FullName: string, DateBirth: string, email: string, password: string) {
        const user = this.repo.create({FullName, DateBirth, DateSign: Date.now.toString(), email, password})

        return this.repo.save(user);
    }

    findOne(id: number) {
        return this.repo.findOne({where: { id }})
    }

    find(FullName: string) {
        return this.repo.find({ where: { FullName }});
    }

    async remove(id: number) {
        const user = await this.findOne(id);

        if(!user) {
            throw new NotFoundException('not found user');
        }

        return this.repo.remove(user);
    }

    async update(id: number, attris: Partial<User>){
        const user = await this.findOne(id);

        if(!user) {
            throw new NotFoundException('not found user');
        }

        Object.assign(user, attris);
        return this.repo.save(user);
    }

}
