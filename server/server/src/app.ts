// Developed by KiranPatil
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/healthRoutes";
import * as mongoose from "mongoose";
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = "mongodb+srv://khash:khash%40123@cluster0-dohjg.gcp.mongodb.net/health"

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void {
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
    }

    private config(): void {
        const swaggerOptions = {
            swaggerDefinition: {
                info: {
                    title: 'Kratin LLC Health App API (By Kiran Patil)',
                    description: 'A health app for old people above 65+',
                    contact: {
                        name: 'Kiran Patil',
                    },
                    servers: ['http://localhost:3000']
                }
            },
            apis: [
                'server/src/routes/healthRoutes.ts'
            ]
        };

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        const swaggerDoc = swaggerJsDoc(swaggerOptions);
        this.app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

    }
}

export default new App().app;
