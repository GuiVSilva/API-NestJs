import { MigrationInterface, QueryRunner } from "typeorm";

export class AddActiveColumnToUsers1730240138860 implements MigrationInterface {
    name = 'AddActiveColumnToUsers1730240138860'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "active" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "active"`);
    }

}
