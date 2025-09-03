import { Request, Response } from 'express';

import {Database} from "../database";
import jwt from "jsonwebtoken";
import * as process from "node:process";

export default function(req:Request, res:Response, db:Database) {
    const token = req.headers['authorization'] as string

    if(token == undefined) {
        res.json({error: 'You have to send a token.'})
        return;
    }

    const user:any = jwt.decode(token);

    if(user == null) {
        res.json({error: 'Please, send a valid token'});
        return;
    }

    const db_user = db.collection('users').find('username', user.username);

    jwt.verify(
        token,
        db_user.password + process.env.JWT_SECRET,
        (err:any, decoded:any) => {
            if(err != null) {
                res.json({error: 'Please, send a valid token'});
                return;
            }

            delete db_user.password;
            res.json(db_user);
        })

}