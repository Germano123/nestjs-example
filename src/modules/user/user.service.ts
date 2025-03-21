import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileService } from '../profile/profile.service';
import { CreateStudentDto } from '../profile/student/dto/create-student.dto';
import { RoleType } from 'src/constants/role-type.enum';
import { CreateTeacherDto } from '../profile/teacher/dto/create-teacher.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
    private readonly profileService: ProfileService,
  ) {}

  async findOneBy(
    options: Partial<User>,
    relations: string[] = []
  ): Promise<User | null> {
    return await this.repo.findOne({
      where: options,
      relations: ["profile"]
    });
  }

  async createStudent(createUserDto: CreateStudentDto) {
    let user = this.repo.create(createUserDto);
    
    user = {
      ...user,
      ...createUserDto,
    }

    await this.repo.save(user);

    // create profile
    const profile = await this.profileService.create(user, RoleType.STUDENT);
    user.profile = profile;
    await this.repo.save(user);

    return;
    user = {
      ...user,
      ...createUserDto,
      // profile
    }
    console.log(user);

    return ;
  }

  async createTeacher(createUserDto: CreateTeacherDto) {
    let user = this.repo.create(createUserDto);
    const profile = await this.profileService.create(user, RoleType.TEACHER);

    user = {
      ...user,
      ...createUserDto,
      // profile
    }
    console.log(user);

    return await this.repo.save(user);
  }

  async findAll() {
    return null;
  }

  async findOne(id: string) {
    return null;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return null;
  }

  async remove(id: string) {
    return null;
  }
}
