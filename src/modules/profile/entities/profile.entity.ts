import { Column, Entity, OneToOne, TableInheritance } from "typeorm";
import { AbstractEntity } from "../../../common/abstract.entity";
import { User } from "../../user/entities/user.entity";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { RoleType } from "../../../constants/role-type.enum";

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Profile extends AbstractEntity {
    @ApiPropertyOptional()
    @Column({ nullable: true })
    name: string;

    @ApiPropertyOptional()
    @Column({ nullable: true })
    age: number;

    @ApiPropertyOptional()
    @Column({ enum: RoleType, default: RoleType.BLANK, nullable: false })
    role: RoleType;
    
    // relations
    @OneToOne(() => User, (user) => user.profile)
    user: User;
}
