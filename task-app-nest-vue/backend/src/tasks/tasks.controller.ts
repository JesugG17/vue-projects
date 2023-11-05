import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('create')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get('all')
  findAll() {
    return this.tasksService.findAll();
  }

  @Put('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto
  ) {
    return this.tasksService.update(updateTaskDto, id);
  }

  @Delete('delete/:id') 
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
  
}
