// Developed by KiranPatil

import * as mongoose from "mongoose";
import { UserSchema } from "../models/userModel";
import { Request, Response } from "express";

const Schema: any = mongoose.Schema;

export class HealthController {
    public addNewUser(req: Request, res: Response, callback: (error:any, res:any) => void) {
        const Contact: any = mongoose.model("Users", UserSchema , 'users');
        let newContact: any = new Contact(req.body);
        newContact.save((err, result) => {
            if(err) {
                callback(err, 'Not in a proper format');
            } else if (result) {
                callback(null, newContact);
            }
        });
    }

    public getProducts (req: Request, res: Response, callback: (error:any, res:any) => void) {
        const products: any = mongoose.model("Products", UserSchema , 'products');
        products.find({}, (err, result) => {
            if (err) {
                callback(err, err);
            } else if (result.length > 0) {
                callback(null, result);
            } else {
                callback(null, 'Empty Log')
            }
        });
    }

    public getProductsWithName (req: Request, res: Response, callback: (error:any, res:any) => void) {
        const products: any = mongoose.model("Products", UserSchema , 'products');
        products.findOne({p_name: req.params.name}, (err, result) => {
            if (err) {
                callback(err, 'Not Found');
            } else if (result !== null) {
                callback(null, result);
            } else {
                callback(null, 'Empty Log')
            }
        });
    }

    public getDoctorsWithName (req: Request, res: Response, callback: (error:any, res:any) => void) {
        const Doctors: any = mongoose.model("Doctors", UserSchema , 'doctors');
        Doctors.find({range: req.params.name}, (err, result) => {
            if (err) {
                callback(err, 'Not Found');
            } else if (result !== null) {
                callback(null, result);
            } else {
                callback(null, 'Empty Log')
            }
        });
    }

    public getHospitalsWithName (req: Request, res: Response, callback: (error:any, res:any) => void) {
        const Doctors: any = mongoose.model("Hospitals", UserSchema , 'hospitals');
        Doctors.find({name: req.params.name}, (err, result) => {
            if (err) {
                callback(err, 'Not Found');
            } else if (result !== null) {
                callback(null, result);
            } else {
                callback(null, 'Empty Log')
            }
        });
    }

    public getDoctors (req: Request, res: Response, callback: (error:any, res:any) => void) {
        const Doctors: any = mongoose.model("Doctors", UserSchema , 'doctors');
        Doctors.find({}, (err, result) => {
            if (err) {
                callback(err, err);
            } else if (result.length > 0) {
                callback(null, result);
            } else {
                callback(null, 'Empty Log')
            }
        });
    }

    public getHospitals (req: Request, res: Response, callback: (error:any, res:any) => void) {
        const Doctors: any = mongoose.model("Hospitals", UserSchema , 'hospitals');
        Doctors.find({}, (err, result) => {
            if (err) {
                callback(err, err);
            } else if (result.length > 0) {
                callback(null, result);
            } else {
                callback(null, 'Empty Log')
            }
        });
    }
}
