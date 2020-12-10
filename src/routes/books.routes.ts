import {Router} from  "express";
import {booksController} from "../controllers/books.controller";




class BooksRoutes {
    public router: Router = Router();

    constructor(){

        
        this.router.get('/', booksController.index);
        this.router.post('/',booksController.create);
        this.router.delete('/:id', booksController.delete);
        this.router.put('/:id', booksController.update);
        
          
        
    }
};
        export const booksRoutes = new BooksRoutes();