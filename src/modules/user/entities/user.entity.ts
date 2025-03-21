import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { AbstractEntity } from "../../../common/abstract.entity";
import { Profile } from "../../profile/entities/profile.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from 'class-transformer';

@Entity()
export class User extends AbstractEntity {
    @ApiProperty()
    @Column({ nullable: false })
    email: string;
    
    @Exclude()
    @ApiProperty()
    @Column({ nullable: true, select: true })
    password: string;
    
    @Column({ nullable: false, default: false })
    confirmed: boolean;

    // relations
    @OneToOne(() => Profile, (profile) => profile.user)
    @JoinColumn()
    profile: Profile;
}
