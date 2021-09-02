import {Request, Response} from 'express';
import db from'../../databases';
class DataController{
    public index(req: Request, res: Response ){
        db.query('DESCRIBE ventas' );
        res.json('ventas'); 
    }
}
const dataController= new DataController();
export default dataController;