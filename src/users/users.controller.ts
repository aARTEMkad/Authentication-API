import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create.user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update.user.dto';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Post('/signup')
    CreateUser(@Body() data: CreateUserDto) {
        return this.userService.create(data.FullName, data.DateBirth, data.email, data.password);
    }

    @Get('/:id')
    FindUserToID(@Param('id') id: string) {
        return this.userService.findOne(parseInt(id));
    }

    @Get()
    FindUserAll(@Query('FullName') FullName: string) {
        return this.userService.find(FullName);
    }

    @Delete('/:id')
    DeleteUser(@Param('id') id: string) {
        return this.userService.remove(parseInt(id));
    }

    @Patch('/:id')
    UpdateUser(@Param('id') id: string, @Body() data: UpdateUserDto) {
        return this.userService.update(parseInt(id), data)
    }
}
