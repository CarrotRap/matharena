import { Request, Response } from 'express';
import {passwordStrength} from "check-password-strength";
import {Database} from "../database";
import {create_token, hash} from "../utils";

export default (req: Request, res: Response, db:Database) => {
    const data = req.body;

    if(data.username == undefined || data.password == undefined){
        res.json({error: 'You have to send a username and a password', error_code: 0});
        return;
    }

    if (data.username.length < 6) {
        res.json({error: 'Username is too short', error_code: 1});
        return;
    }
    if (passwordStrength(data.password).id <= 1) {
        res.json({error: 'Password is too week', error_code: 2});
        return;
    }

    const already_exists = db.collection('users').find('username', data.username)

    if(already_exists != undefined) {
        res.json({error: 'Username already exists', error_code: 3});
        return;
    }

    const hashed_password:any = hash(data.password);
    let user = {
        username: data.username,
        password: hashed_password,
    }

    db.collection('users').push(user);
    db.save();

    res.json({token: create_token(user.username, hashed_password)});
}


