import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createFolder1618949734386 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: `folder`,
            columns: [
                {
                    name: `id`,
                    type: `integer`,
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: `increment`
                },
                {
                    name: `name`,
                    type: `varchar`
                },
                {
                    name: `about`,
                    type: `text`
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable(`folder`);
        
    }

}
