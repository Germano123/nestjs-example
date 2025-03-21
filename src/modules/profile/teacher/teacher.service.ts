import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from '../entities/teacher.entity';
import { TeacherDto } from './dto/teacher.dto';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeacherService {

  constructor(
    @InjectRepository(Teacher)
    private readonly repo: Repository<Teacher>,
  ) {}

  async findOneBy(
    options: Partial<Teacher>,
    relations: string[] = []
  ): Promise<Teacher | null> {
    return await this.repo.findOne({
      // where: options,
      relations: ["user"]
    });
  }

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return await this.repo.save(createTeacherDto);
  }

  async findAll(): Promise<TeacherDto[]> {
    const Teachers = await this.repo.find({ relations: ["user"] });
    return Teachers.map((Teacher) => new TeacherDto(Teacher));
  }

  async findOne(id: string): Promise<TeacherDto | null> {
    const Teacher = await this.findOneBy({ id }, ["user"]);
    if (Teacher) return new TeacherDto(Teacher);
    else return null;
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto) {
    return null;
  }

  async remove(id: string) {
    return null;
  }
}
