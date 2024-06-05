import typeorm from 'typeorm';

const Movie = new typeorm.EntitySchema({
  name: 'Movie',
  tableName: 'movies',
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true,
    },
    title: {
      type: String,
    },
    overview: {
      type: String,
    },
    release_date: {
      type: String,
    },
    vote_average: {
      type: Number,
    },
    tmdb_id: {
      type: Number,
    },
  },
  relations: {
    genres: {
      target: 'Genre',
      type: 'many-to-many',
      joinTable: true,
    },
  },
});

export default Movie;
