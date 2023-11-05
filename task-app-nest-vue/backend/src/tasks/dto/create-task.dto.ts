import { IsBoolean, IsString, IsOptional,  } from "class-validator";

export class CreateTaskDto {
    
    @IsString()
    id: string;

    @IsString()
    description: string;

    @IsBoolean()
    @IsOptional()
    completed?: boolean;

}