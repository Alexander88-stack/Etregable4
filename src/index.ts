import express from 'express';
import dotenv from 'dotenv';
import { booksRoutes } from './routes/books.routes';

dotenv.config();

const app = express();
app.use(express.json());
app.set('port', 3000);

app.listen(app.get('port'), () => {
    console.log('Server is runing');
    
});

app.use('/books', booksRoutes.router)