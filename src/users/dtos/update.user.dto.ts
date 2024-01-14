import { IsDateString, IsEmail, IsOptional, IsString } from "class-validator";


export class UpdateUserDto {
    
    @IsString()
    @IsOptional()
    FullName: string;

    @IsDateString()
    @IsOptional()
    DateBirth: string;

    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    password: string;


}