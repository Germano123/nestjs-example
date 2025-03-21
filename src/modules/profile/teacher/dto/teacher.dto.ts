import { AbstractDto } from "src/common/abstract.dto";
import { UserDto } from "src/modules/user/dto/user.dto";
import { Teacher } from "../../entities/teacher.entity";

export class TeacherDto
extends AbstractDto {
    name: string;

    age: number;

    user: UserDto;

    constructor(entity: Teacher) {
        super(entity);
        this.age = entity.age;
        this.name = entity.name;
        this.user = entity.user;
    }
}
