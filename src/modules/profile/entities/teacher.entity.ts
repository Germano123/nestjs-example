import { ApiPropertyOptional } from "@nestjs/swagger";
import { ChildEntity, Column } from "typeorm";
import { Profile } from "./profile.entity";

@ChildEntity()
export class Teacher extends Profile {
    @ApiPropertyOptional()
    @Column('simple-array', { nullable: true })
    skills: string[];
    
    @ApiPropertyOptional()
    @Column({ nullable: true, default: 0, type: 'integer' })
    rating: number;
    
    @ApiPropertyOptional()
    @Column({ nullable: true, default: false, type: 'boolean' })
    pro: boolean;
}
