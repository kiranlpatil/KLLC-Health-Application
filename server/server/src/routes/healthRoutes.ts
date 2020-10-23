// Developed by KiranPatil
import { Request, Response} from "express";
import { HealthController } from "../controllers/healthController";

export class Routes {
    public healthController: HealthController = new HealthController();

    public routes(app: any): void {
        app.use((req: Request, res: Response, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
          });

        /**
         * @swagger
         * /productbytypes :
         *  get:
         *    consumes:
         *      - application/json
         *
         *    description: get products of all the medicines
         *    responses:
         *      '200':
         *        description: Swagger Running.
         */

        /**
         * @swagger
         * /userLogin :
         *  post:
         *    consumes:
         *      - application/x-www-form-urlencoded
         *
         *    parameters:
         *      - in: formData
         *        name: name
         *        required: true
         *        schema:
         *          type:string
         *        description: First name
         *
         *      - in: formData
         *        name: email
         *        required: true
         *        schema:
         *          type:string
         *        description: Email
         *
         *      - in: formData
         *        name: phoneNo
         *        required: true
         *        schema:
         *          type:string
         *        description: Phone Number
         *
         *      - in: formData
         *        name: address
         *        required: true
         *        schema:
         *          type:string
         *        description: Address
         *
         *    description: Add Users in directory
         *    responses:
         *      '200':
         *        description: Swagger Running.
         */

        /**
         * @swagger
         * /doctors :
         *  get:
         *    consumes:
         *      - application/json
         *
         *    description: get Doctors
         *    responses:
         *      '200':
         *        description: Swagger Running.
         */

        /**
         * @swagger
         * /hospitals :
         *  get:
         *    consumes:
         *      - application/json
         *
         *    description: get Hospitals
         *    responses:
         *      '200':
         *        description: Swagger Running.
         */

        // get and post request

        app.route("/userLogin")
            .post((req: Request, res: Response) => {
                this.healthController.addNewUser(req, res,(error, response) => {
                    res.json(response);
                });
            });

        app.route('/productbytypes/')
            .get((req: Request, res: Response) => {
                this.healthController.getProducts(req, res,(error, response) => {
                    res.json(response);
                });
            });

        app.route('/doctors/')
            .get((req: Request, res: Response) => {
                this.healthController.getDoctors(req, res,(error, response) => {
                    res.json(response);
                });
            });

        app.route('/hospitals/')
            .get((req: Request, res: Response) => {
                this.healthController.getHospitals(req, res,(error, response) => {
                    res.json(response);
                });
            });

        /**
         * @swagger
         * /product/{name} :
         *  get:
         *    consumes:
         *      - application/json
         *    parameters:
         *      - in: path
         *        name: name
         *        required: true
         *        schema:
         *          type:string
         *        description: Name of Medicine
         *
         *    description: Get medicine of Specific type
         *    responses:
         *      '200':
         *        description: Swagger Running.
         */

        /**
         * @swagger
         * /doctors/{name} :
         *  get:
         *    consumes:
         *      - application/json
         *    parameters:
         *      - in: path
         *        name: name
         *        required: true
         *        schema:
         *          type:string
         *        description: Range for searching doctors (check GET of doctors)
         *
         *    description: Get doctor of Specific type
         *    responses:
         *      '200':
         *        description: Swagger Running.
         */

        /**
         * @swagger
         * /hospitals/{name} :
         *  get:
         *    consumes:
         *      - application/json
         *    parameters:
         *      - in: path
         *        name: name
         *        required: true
         *        schema:
         *          type:string
         *        description: Name of a hospital
         *
         *    description: Get Hospital of Specific area
         *    responses:
         *      '200':
         *        description: Swagger Running.
         */

        app.route("/product/:name")
            .get((req: Request, res: Response) => {
                this.healthController.getProductsWithName(req, res, (error, response) => {
                    res.json(response);
                });
            });

        app.route("/doctors/:name")
            .get((req: Request, res: Response) => {
                this.healthController.getDoctorsWithName(req, res, (error, response) => {
                    res.json(response);
                });
            });

        app.route("/hospitals/:name")
            .get((req: Request, res: Response) => {
                this.healthController.getHospitalsWithName(req, res, (error, response) => {
                    res.json(response);
                });
            });
    }
}
