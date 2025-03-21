import { IntersectionType, PartialType } from "@nestjs/swagger";
import { OmitType } from "@nestjs/mapped-types";
import { CreateUserDto } from "../../../user/dto/create-user.dto";
import { Teacher } from "../../entities/teacher.entity";

export class CreateTeacherDto extends
    IntersectionType(
        CreateUserDto,
        PartialType(OmitType(Teacher, ["role"])),
    ) {}
