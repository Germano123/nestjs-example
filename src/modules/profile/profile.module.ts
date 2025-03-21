import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherService } from './teacher/teacher.service';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { TeacherController } from './teacher/teacher.controller';
import { Student } from './entities/student.entity';
import { Teacher } from './entities/teacher.entity';
import { Profile } from './entities/profile.entity';

const providers = [
  ProfileService,
  TeacherService,
  StudentService,
];

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile, Student, Teacher]),
  ],
  controllers: [ProfileController, StudentController, TeacherController],
  providers,
  exports: [...providers],
})
export class ProfileModule {}
