import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { ProfileDto } from './dto/profile.dto';

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

  async findAll(): Promise<ProfileDto[]> {
    const profiles = await this.repo.find({ relations: ["user"] });
    return profiles.map((profile) => new ProfileDto(profile));
  }

  async findOne(id: string): Promise<ProfileDto | null> {
    const profile = await this.findOneBy({ id }, ["user"]);
    if (profile) return new ProfileDto(profile);
    else return null;
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    return null;
  }

  async remove(id: string) {
    return null;
  }
}
