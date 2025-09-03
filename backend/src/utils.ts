import { createHash } from "crypto";
import jwt from "jsonwebtoken";

export const hash = (text:string) => createHash('sha256').update(text).digest('hex');

export const create_token = (username:string, hashed_password:string) => {
    return jwt.sign(
        {
            username: username,
        },
        hashed_password + process.env.JWT_SECRET,
        {
            algorithm: 'HS256',
            expiresIn: '24h'
        }
    );
}