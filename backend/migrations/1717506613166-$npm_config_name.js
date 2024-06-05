import typeorm from "typeorm";

const { MigrationInterface, QueryRunner } = typeorm;

export default class  $npmConfigName1717506613166 {
    name = ' $npmConfigName1717506613166'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "movies" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "title" varchar NOT NULL,
                "date" datetime NOT NULL,
                CONSTRAINT "UQ_5aa0bbd146c0082d3fc5a0ad5d8" UNIQUE ("title")
            )
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE "movies"
        `);
    }
}
