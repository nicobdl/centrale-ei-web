import typeorm from 'typeorm';

const Rating = new typeorm.EntitySchema({
    name: 'Rating',
    tableName: 'ratings',
    columns: {
      id: {
        primary: true,
        type: Number,
        generated: true,
      },
      opinion: {
        type: Number,
      },
    },
    relations: {
      movie: {
        target: 'Movie',
        type: 'many-to-one',
        joinColumn: true,
        onDelete: 'CASCADE',
      },
      user: {
        target: 'User',
        type: 'many-to-one',
        joinColumn: true,
        onDelete: 'CASCADE',
      },
    },
  });

  export default Rating