import typeorm from 'typeorm';

const Genre = new typeorm.EntitySchema({
    name: 'Genre',
    tableName: 'genres',
    columns: {
        id: {
        primary: true,
        type: Number,
        generated: true,
        },
        name: {
        type: String,
        },
    },
});  

export default Genre;