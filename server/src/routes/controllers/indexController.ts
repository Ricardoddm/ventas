import {Request, Response} from 'express';

class IndexController{
    public index(req: Request, res: Response ){
        res.send('Index')  //se puede hacer lo mismo con el objeto JSON  res.json({text:'texto'});
    }
}

export const indexController= new IndexController();