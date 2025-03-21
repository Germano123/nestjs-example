import { IntersectionType, PartialType, PickType } from "@nestjs/swagger";
import { User } from "../entities/user.entity";
import { Profile } from "src/modules/profile/entities/profile.entity";

export class CreateUserDto extends
    IntersectionType(
        PickType(User, ["email"]),
        PartialType(Profile),
    ) {}
