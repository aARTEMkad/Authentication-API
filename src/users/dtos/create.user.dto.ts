import { IsEmail, isString, IsString, IsDateString } from 'class-validator'


export class CreateUserDto {

    @IsString()
    FullName: string;

    @IsDateString()
    DateBirth: string;

    // @IsDateString()
    // DateSign: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

}