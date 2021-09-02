import express,{Application} from 'express';
import morgan from 'morgan'; 
import cors from 'cors';
import indexroutes from './routes/indexroutes';
import dataroutes from './routes/dataroutes';
class Server{
    public app: Application;//guarda la inicializacion de express con tipo de dato Application
    constructor(){// inicializa express
        this.app=express();//inicializa express y guarda en app
        this.config();//configura app 
        this.routes();//configura app
    }
    config():void{
        this.app.set('port', process.env.PORT || 3000);// se establece el puerto 
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes(): void{
        this.app.use('/',indexroutes);
        this.app.use('/api/data',dataroutes);
    }
    start():void{// inicia el servidor 
        this.app.listen(this.app.get('port'),()=>{// se le da el puerto a escuchar 
            console.log('Server on port', this.app.get('port'));//inicia la aplicacion y manda mensaje
        });
    }
}

const server= new Server();// se guarda la inicializacion 
server.start();//se aplcia la inicializacion