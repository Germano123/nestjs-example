import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { AbstractEntity } from "../../../common/abstract.entity";
import { Profile } from "../../profile/entities/profile.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User extends AbstractEntity {
    @ApiProperty()
    @Column({ nullable: false })
    email: string;

    @OneToOne(() => Profile, (profile) => profile.user)
    @JoinColumn()
    profile: Profile;
}
