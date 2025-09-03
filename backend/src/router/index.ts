import express, { Request, Response} from 'express';

import login from "./login";
import signin from './signin';

import { Database, Collection } from "../database";
import info from "./info";

const router  = express.Router();
const db = new Database()


router.post('/login', (req:Request,res:Response) => login(req,res,db));
router.post('/signin', (req:Request, res:Response) => signin(req,res,db));
router.get('/info', (req:Request, res:Response) => info(req,res,db));

export default router;