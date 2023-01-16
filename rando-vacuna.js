const MINAGE = 6;
const MAXAGE = 65;

let age = 5;

if(age < MINAGE || age > MAXAGE){
    console.log("aceptado para vacunarse")
}else{
    console.log("denegado para vacunarse")
}