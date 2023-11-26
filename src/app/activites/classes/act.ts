import { Comite } from "./comite";

export class Act {
    static shift() {
      throw new Error('Method not implemented.');
    }
    constructor(
        public id:number ,
        public libelle: string,
        public nbP:number,
        public type:boolean,
        public comite:Comite ,
        public date:Date,
        public lieu:string[]
    ){}
}
      
    

