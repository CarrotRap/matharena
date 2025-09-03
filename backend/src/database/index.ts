import fs from 'fs';
import path from "path";

function readDB() {

}

export class Database {

    private db: any;

    constructor() {
        const raw_db = fs.readFileSync(path.resolve('./src/database/db.json'), 'utf8');
        this.db = JSON.parse(raw_db);
    }

    save() {
        fs.writeFileSync(path.resolve('./src/database/db.json'), JSON.stringify(this.db));
    }

    collection(name:string) {
        if(this.db[name] == undefined) {
            return new Collection([]);
        }
        return new Collection(this.db[name]);
    }
}

export class Collection {
    private collection: any;

    constructor(collection: any) {
        this.collection = collection
    }

    push(obj:any) {
        this.collection.push(obj);
    }

    find(key:string, value:string) {
        return this.collection.find((element:any) => element[key] == value);
    }
}