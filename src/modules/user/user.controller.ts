import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateStudentDto } from '../profile/student/dto/create-student.dto';
import { CreateTeacherDto } from '../profile/teacher/dto/create-teacher.dto';

@ApiTags("Users")
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-student')
  async createStudent(@Body() createUserDto: CreateStudentDto) {
    return this.userService.createStudent(createUserDto);
  }

  @Post('create-teacher')
  async createTeacher(@Body() createUserDto: CreateTeacherDto) {
    return this.userService.createTeacher(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
