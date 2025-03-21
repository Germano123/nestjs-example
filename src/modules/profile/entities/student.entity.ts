import { ChildEntity, Column } from "typeorm";
import { Profile } from "./profile.entity";
import { ApiPropertyOptional } from "@nestjs/swagger";

@ChildEntity()
export class Student extends Profile {
    @ApiPropertyOptional()
    @Column({ nullable: true })
    bio: string;
}
