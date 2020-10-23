// Developed by KiranPatil
import * as mongoose from "mongoose";

const Schema: any = mongoose.Schema;

export const UserSchema: any = new Schema({
    name: {
        type: String,
        required: "Enter a name"
    },
    email: {
        type: String,
        required: "Enter an email"
    },
    phoneNo: {
         type: String,
         required: "Enter a phone number"
    },
    address: {
        type: String,
        required: "Enter an address"
    }
}, { versionKey: false }
);
