import { IntersectionType, PartialType } from "@nestjs/swagger";
import { CreateUserDto } from "../../../user/dto/create-user.dto";

export class CreateStudentDto extends IntersectionType(CreateUserDto) {}
