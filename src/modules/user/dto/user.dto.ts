import { AbstractDto } from "../../../common/abstract.dto";
import { User } from "../entities/user.entity";
import { ProfileDto } from "../../profile/dto/profile.dto";

export class UserDto extends AbstractDto {

    email: string;
    profile: ProfileDto;

    constructor(entity: User) {
        super(entity);
        this.email = entity.email;
        this.profile = new ProfileDto(entity.profile);
    }
}