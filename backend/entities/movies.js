import typeorm from 'typeorm';

const Movie = new typeorm.EntitySchema({
  name: 'Movies',
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true,
    },
    title: {
      type: String,
      unique: true,
    },
    date: { type: Date },
    synopsis: {type : String},
    genres: {type : Array},
    opinion: {type: Number}
  },
});

export default Movie;
