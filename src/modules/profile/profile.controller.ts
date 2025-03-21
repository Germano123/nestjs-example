import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Profile")
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async findAll(): Promise<any> {
    return await this.profileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.profileService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return await this.profileService.remove(id);
  }
}
