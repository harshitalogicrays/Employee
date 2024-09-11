export class Employeeclass {
    constructor( 
        public fname:string,
        public lname:string,
        public gender:string,
        public salary:number,
        public hiredate:string,
        public hra:number,
        public da:number,
        public designation:any,
        public id?:number){}

        // public getFullname(){
        //     return this.fname+" "+this.lname
        // }
}
