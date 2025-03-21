import { AbstractDto } from "../../../../common/abstract.dto";
import { Student } from "../../entities/student.entity";

export class StudentDto
extends AbstractDto {

    constructor(entity: Student) {
        super(entity);
    }
}
