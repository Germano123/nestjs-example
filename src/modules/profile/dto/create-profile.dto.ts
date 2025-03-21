import { PartialType } from "@nestjs/swagger";
import { Profile } from "../entities/profile.entity";

export class CreateProfileDto extends PartialType(Profile) {}
