import { Injectable, BadRequestException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tasks } from './entities/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(Tasks)
        private readonly taskRepository: Repository<Tasks>
    ){}

    async findAll() {
        const tasks = await this.taskRepository.find();
        return {
            data: tasks,
            message: 'Tasks retrieved successfully!',
            code: HttpStatus.OK
        }
    }

    async create(createTaskDto: CreateTaskDto) {
        createTaskDto.completed = createTaskDto.completed ?? false;
        const task = this.taskRepository.create(createTaskDto);
        await this.taskRepository.save(task);
        return {
            data: null,
            message: 'Task created successfully',
            code: HttpStatus.CREATED
        }
    }

    async update(updateTaskDto: UpdateTaskDto, id: string) {

        const task = await this.taskRepository.findOneBy({ id });

        if (!task) {
            throw new BadRequestException(`the task with the id ${ id } doesn´t exists`);
        }

        task.description = updateTaskDto.description ?? task.description;
        task.completed = updateTaskDto.completed ?? task.completed;

        await task.save();

        return {
            data: null,
            message: 'Task updated successfully',
            code: HttpStatus.OK
        }
    }

    async delete(id: string) {
        const task = await this.taskRepository.findOneBy({ id });

        if (!task) {
            throw new BadRequestException(`the task with the id ${ id } doesn´t exists`);
        }

        await task.remove();

        return {
            data: null,
            message: 'Task deleted successfully!',
            code: HttpStatus.OK
        }
    }
}
