import { Request, Response } from 'express';
import { createHash } from 'crypto';

import { Database } from "../database";
import { hash, create_token } from "../utils";


export default function(req: Request, res: Response, db:Database) {
    const data = req.body;

    const user = db.collection('users').find('username', data.username)

    if(user == undefined) {
        res.json({error: 'Error'})
        return;
    }

    const hashed_password = hash(data.password);
    if(hashed_password != user.password) {
        res.json({error: 'Error'})
        return;
    }

    const token = create_token(user.username, hashed_password)
    res.json({token,});
}
