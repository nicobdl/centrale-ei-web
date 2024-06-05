import typeorm from "typeorm";

const { MigrationInterface, QueryRunner } = typeorm;

export default class  $npmConfigName1717593744926 {
    name = ' $npmConfigName1717593744926'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "genres" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "name" varchar NOT NULL
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "ratings" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "opinion" integer NOT NULL,
                "movieId" integer,
                "userId" integer
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "movies_genres_genres" (
                "moviesId" integer NOT NULL,
                "genresId" integer NOT NULL,
                PRIMARY KEY ("moviesId", "genresId")
            )
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_cb43556a8849221b82cd17461c" ON "movies_genres_genres" ("moviesId")
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_ccf6c10277da37e9fc265863fa" ON "movies_genres_genres" ("genresId")
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_movies" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "title" varchar NOT NULL,
                CONSTRAINT "UQ_5aa0bbd146c0082d3fc5a0ad5d8" UNIQUE ("title")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_movies"("id", "title")
            SELECT "id",
                "title"
            FROM "movies"
        `);
        await queryRunner.query(`
            DROP TABLE "movies"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_movies"
                RENAME TO "movies"
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_movies" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "title" varchar NOT NULL,
                "overview" varchar NOT NULL,
                "release_date" varchar NOT NULL,
                "vote_average" integer NOT NULL,
                "tmdb_id" integer NOT NULL,
                CONSTRAINT "UQ_5aa0bbd146c0082d3fc5a0ad5d8" UNIQUE ("title")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_movies"("id", "title")
            SELECT "id",
                "title"
            FROM "movies"
        `);
        await queryRunner.query(`
            DROP TABLE "movies"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_movies"
                RENAME TO "movies"
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_movies" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "title" varchar NOT NULL,
                "overview" varchar NOT NULL,
                "release_date" varchar NOT NULL,
                "vote_average" integer NOT NULL,
                "tmdb_id" integer NOT NULL,
                CONSTRAINT "UQ_5aa0bbd146c0082d3fc5a0ad5d8" UNIQUE ("title")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_movies"(
                    "id",
                    "title",
                    "overview",
                    "release_date",
                    "vote_average",
                    "tmdb_id"
                )
            SELECT "id",
                "title",
                "overview",
                "release_date",
                "vote_average",
                "tmdb_id"
            FROM "movies"
        `);
        await queryRunner.query(`
            DROP TABLE "movies"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_movies"
                RENAME TO "movies"
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_ratings" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "opinion" integer NOT NULL,
                "movieId" integer,
                "userId" integer,
                CONSTRAINT "FK_c10d219b6360c74a9f2186b76df" FOREIGN KEY ("movieId") REFERENCES "movies" ("id") ON DELETE CASCADE ON UPDATE NO ACTION,
                CONSTRAINT "FK_4d0b0e3a4c4af854d225154ba40" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_ratings"("id", "opinion", "movieId", "userId")
            SELECT "id",
                "opinion",
                "movieId",
                "userId"
            FROM "ratings"
        `);
        await queryRunner.query(`
            DROP TABLE "ratings"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_ratings"
                RENAME TO "ratings"
        `);
        await queryRunner.query(`
            DROP INDEX "IDX_cb43556a8849221b82cd17461c"
        `);
        await queryRunner.query(`
            DROP INDEX "IDX_ccf6c10277da37e9fc265863fa"
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_movies_genres_genres" (
                "moviesId" integer NOT NULL,
                "genresId" integer NOT NULL,
                CONSTRAINT "FK_cb43556a8849221b82cd17461c8" FOREIGN KEY ("moviesId") REFERENCES "movies" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
                CONSTRAINT "FK_ccf6c10277da37e9fc265863fab" FOREIGN KEY ("genresId") REFERENCES "genres" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
                PRIMARY KEY ("moviesId", "genresId")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_movies_genres_genres"("moviesId", "genresId")
            SELECT "moviesId",
                "genresId"
            FROM "movies_genres_genres"
        `);
        await queryRunner.query(`
            DROP TABLE "movies_genres_genres"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_movies_genres_genres"
                RENAME TO "movies_genres_genres"
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_cb43556a8849221b82cd17461c" ON "movies_genres_genres" ("moviesId")
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_ccf6c10277da37e9fc265863fa" ON "movies_genres_genres" ("genresId")
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            DROP INDEX "IDX_ccf6c10277da37e9fc265863fa"
        `);
        await queryRunner.query(`
            DROP INDEX "IDX_cb43556a8849221b82cd17461c"
        `);
        await queryRunner.query(`
            ALTER TABLE "movies_genres_genres"
                RENAME TO "temporary_movies_genres_genres"
        `);
        await queryRunner.query(`
            CREATE TABLE "movies_genres_genres" (
                "moviesId" integer NOT NULL,
                "genresId" integer NOT NULL,
                PRIMARY KEY ("moviesId", "genresId")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "movies_genres_genres"("moviesId", "genresId")
            SELECT "moviesId",
                "genresId"
            FROM "temporary_movies_genres_genres"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_movies_genres_genres"
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_ccf6c10277da37e9fc265863fa" ON "movies_genres_genres" ("genresId")
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_cb43556a8849221b82cd17461c" ON "movies_genres_genres" ("moviesId")
        `);
        await queryRunner.query(`
            ALTER TABLE "ratings"
                RENAME TO "temporary_ratings"
        `);
        await queryRunner.query(`
            CREATE TABLE "ratings" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "opinion" integer NOT NULL,
                "movieId" integer,
                "userId" integer
            )
        `);
        await queryRunner.query(`
            INSERT INTO "ratings"("id", "opinion", "movieId", "userId")
            SELECT "id",
                "opinion",
                "movieId",
                "userId"
            FROM "temporary_ratings"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_ratings"
        `);
        await queryRunner.query(`
            ALTER TABLE "movies"
                RENAME TO "temporary_movies"
        `);
        await queryRunner.query(`
            CREATE TABLE "movies" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "title" varchar NOT NULL,
                "overview" varchar NOT NULL,
                "release_date" varchar NOT NULL,
                "vote_average" integer NOT NULL,
                "tmdb_id" integer NOT NULL,
                CONSTRAINT "UQ_5aa0bbd146c0082d3fc5a0ad5d8" UNIQUE ("title")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "movies"(
                    "id",
                    "title",
                    "overview",
                    "release_date",
                    "vote_average",
                    "tmdb_id"
                )
            SELECT "id",
                "title",
                "overview",
                "release_date",
                "vote_average",
                "tmdb_id"
            FROM "temporary_movies"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_movies"
        `);
        await queryRunner.query(`
            ALTER TABLE "movies"
                RENAME TO "temporary_movies"
        `);
        await queryRunner.query(`
            CREATE TABLE "movies" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "title" varchar NOT NULL,
                CONSTRAINT "UQ_5aa0bbd146c0082d3fc5a0ad5d8" UNIQUE ("title")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "movies"("id", "title")
            SELECT "id",
                "title"
            FROM "temporary_movies"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_movies"
        `);
        await queryRunner.query(`
            ALTER TABLE "movies"
                RENAME TO "temporary_movies"
        `);
        await queryRunner.query(`
            CREATE TABLE "movies" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "title" varchar NOT NULL,
                "date" datetime NOT NULL,
                CONSTRAINT "UQ_5aa0bbd146c0082d3fc5a0ad5d8" UNIQUE ("title")
            )
        `);
        await queryRunner.query(`
            INSERT INTO "movies"("id", "title")
            SELECT "id",
                "title"
            FROM "temporary_movies"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_movies"
        `);
        await queryRunner.query(`
            DROP INDEX "IDX_ccf6c10277da37e9fc265863fa"
        `);
        await queryRunner.query(`
            DROP INDEX "IDX_cb43556a8849221b82cd17461c"
        `);
        await queryRunner.query(`
            DROP TABLE "movies_genres_genres"
        `);
        await queryRunner.query(`
            DROP TABLE "ratings"
        `);
        await queryRunner.query(`
            DROP TABLE "genres"
        `);
    }
}
