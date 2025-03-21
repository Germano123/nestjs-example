import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTeacherAndStudentEntity1742573201138 implements MigrationInterface {
    name = 'AddTeacherAndStudentEntity1742573201138'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" ADD "bio" character varying`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "skills" text`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "rating" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "pro" boolean DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_aba82a752f863383b6283170cc" ON "profile" ("type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_aba82a752f863383b6283170cc"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "pro"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "skills"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "bio"`);
    }

}
