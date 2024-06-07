import { createConnection } from 'typeorm';
import User from './entities/user.js';
import Movie from './entities/movie.js';
import Genre from './entities/genre.js';
import Rating from './entities/rating.js';

async function connectToDatabase() {
    await createConnection({
        type: 'sqlite',
        database: './database.sqlite3', 
        synchronize: true,
        logging: false,
        entities: [
            User,
            Rating,
            Movie,
            Genre
        ]
    });
    console.log('Database connection established');
}

connectToDatabase().catch(error => console.log('Database connection error:', error));