import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{
    constructor(){}

    async get(){
        return {
            name:"aman",
            phone: "00111"
        }
    }
}