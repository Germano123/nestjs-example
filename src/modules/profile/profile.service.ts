import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(Profile)
    private readonly repo: Repository<Profile>,
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

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    return await this.repo.save(createProfileDto);
  }

  async findAll() {
    return null;
  }

  async findOne(id: string) {
    return null;
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    return null;
  }

  async remove(id: string) {
    return null;
  }
}
