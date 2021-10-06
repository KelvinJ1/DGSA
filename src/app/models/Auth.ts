export class Auth {
    //constructor
    constructor(_id="",names="", lastnames="",email="",identificacion="",NumDocumento="",birthdate="",expeditiondate="",categoria="", picture=""){
        //inicializa los valores del atributo
        this._id = _id;
        this.names=names;
        this.lastnames=lastnames;
        this.email = email;
        this.identificacion = identificacion;
        this.NumDocumento = NumDocumento;
        this.birthdate=birthdate;
        this.expeditiondate=expeditiondate;
        this.categoria=categoria;
        this.picture=picture
    }

    //atributos -  definicion
    _id:string
    names:String
    lastnames:String
    email:string
    identificacion:String
    NumDocumento:String
    birthdate:String
    expeditiondate:String
    categoria:String
    picture:String
   
   
}