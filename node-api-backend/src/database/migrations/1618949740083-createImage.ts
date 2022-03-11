import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImage1618949740083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'image',
            columns:[
                {
                    name: `id`,
                    type: `integer`,
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: `increment`
                },
                {
                    name:"path",
                    type:"varchar"
                },
                {
                    name:"folder_id",
                    type:"integer"
                }
            ],
            foreignKeys:[
                {
                    name:"ImageFolder", 
                    columnNames:['folder_id'],
                    referencedTableName: 'folder',
                    referencedColumnNames:['id'],
                    onUpdate:"CASCADE",
                    onDelete:"CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.dropTable(`image`);

    }

}
