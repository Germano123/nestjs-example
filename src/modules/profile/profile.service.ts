import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { RoleType } from '../../constants/role-type.enum';
import { TeacherService } from './teacher/teacher.service';
import { StudentService } from './student/student.service';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(Profile)
    private readonly repo: Repository<Profile>,
    private readonly studentService: StudentService,
    private readonly teacherService: TeacherService,
  ) {}

  async findOneBy(
    options: Partial<Profile>,
    relations: string[] = []
  ): Promise<Profile | null> {
    return await this.repo.findOne({
      where: options,
      relations: ["user"]
    });
  }

  async create(createProfileDto: CreateProfileDto, role: RoleType): Promise<Profile> {
    let profile;
    if (role === RoleType.STUDENT) profile = await this.studentService.create(createProfileDto);
    if (role === RoleType.TEACHER) profile = await this.teacherService.create(createProfileDto);
    profile.role = role;

    console.log(profile);
    
    return await this.repo.save(profile);
  }

  async findAll() {
    return null;
  }

  async findOne(id: string) {
    return null;
  }

  async remove(id: string) {
    return null;
  }
}
