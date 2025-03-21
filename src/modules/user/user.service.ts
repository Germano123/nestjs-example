import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileService } from '../profile/profile.service';

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

  async create(createUserDto: CreateUserDto) {
    let user = this.repo.create(createUserDto);
    // const profile = await this.profileService.create(user);
    console.log(createUserDto);
    // user = {
    //   ...user,
    //   ...createUserDto,
    //   profile
    // }
    // console.log(user);
    return null;

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
