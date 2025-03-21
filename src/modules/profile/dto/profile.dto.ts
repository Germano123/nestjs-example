import { AbstractDto } from "../../../common/abstract.dto";
import { Profile } from "../entities/profile.entity";
import { UserDto } from "../../user/dto/user.dto";

export class ProfileDto
extends AbstractDto {
    name: string;

    age: number;

    user: UserDto;

    constructor(entity: Profile) {
        super(entity);
        this.age = entity.age;
        this.name = entity.name;
        this.user = entity.user;
    }
}
