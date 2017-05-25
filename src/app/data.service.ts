import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
data2;
data1;
  constructor() { }
set(res){
  this.data2=res;

}
get(){

    console.log(this.data2+"service");
    return this.data2;
}
setfr(res){
  this.data1=res;
}
getfr(){
  return this.data1;
}
}
