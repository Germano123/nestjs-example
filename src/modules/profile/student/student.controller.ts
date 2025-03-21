import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StudentService } from './student.service';
import { UpdateStudentDto } from './dto/update-student.dto';

@ApiTags("Student")
@Controller('student')
export class StudentController {
  constructor(private readonly service: StudentService) {}

  @Get()
  async findAll(): Promise<any> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.service.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProfileDto: UpdateStudentDto): Promise<any> {
    return await this.service.update(id, updateProfileDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return await this.service.remove(id);
  }

}
