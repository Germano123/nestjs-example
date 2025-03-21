import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entities/student.entity';
import { StudentDto } from './dto/student.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {

  constructor(
    @InjectRepository(Student)
    private readonly repo: Repository<Student>,
  ) {}

  async findOneBy(
    options: Partial<Student>,
    relations: string[] = []
  ): Promise<Student | null> {
    return await this.repo.findOne({
      where: options,
      relations: ["user"]
    });
  }

  async create(createProfileDto: CreateStudentDto): Promise<Student> {
    return await this.repo.save(createProfileDto);
  }

  async findAll(): Promise<StudentDto[]> {
    const students = await this.repo.find({ relations: ["user"] });
    return students.map((student) => new StudentDto(student));
  }

  async findOne(id: string): Promise<StudentDto | null> {
    const student = await this.findOneBy({ id }, ["user"]);
    if (student) return new StudentDto(student);
    else return null;
  }

  async update(id: string, updateProfileDto: UpdateStudentDto) {
    return null;
  }

  async remove(id: string) {
    return null;
  }
}
