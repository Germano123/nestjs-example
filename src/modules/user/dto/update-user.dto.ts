import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherDto } from 'src/modules/profile/teacher/dto/create-teacher.dto';

export class UpdateUserDto extends PartialType(CreateTeacherDto) {}
