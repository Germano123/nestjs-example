import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TeacherService } from './teacher.service';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@ApiTags("Teacher")
@Controller('teacher')
export class TeacherController {
  constructor(private readonly service: TeacherService) {}

  @Get()
  async findAll(): Promise<any> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.service.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProfileDto: UpdateTeacherDto): Promise<any> {
    return await this.service.update(id, updateProfileDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return await this.service.remove(id);
  }

}
