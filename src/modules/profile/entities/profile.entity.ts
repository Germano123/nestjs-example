import { Column, Entity, OneToOne } from "typeorm";
import { AbstractEntity } from "../../../common/abstract.entity";
import { User } from "../../user/entities/user.entity";
import { ApiPropertyOptional } from "@nestjs/swagger";

@Entity()
export class Profile extends AbstractEntity {
    @ApiPropertyOptional()
    @Column({ nullable: true })
    name: string;

    @ApiPropertyOptional()
    @Column({ nullable: true })
    age: number;

    @OneToOne(() => User, (user) => user.profile)
    user: User;
}
