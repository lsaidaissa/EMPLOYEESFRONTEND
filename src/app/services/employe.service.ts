import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  url = "http://localhost:8080/employes";

  constructor(private http: HttpClient) { }
  

  getEmployes(){
    return this.http.get('./assets/employes.json');
  }

  processing(criteria, response:any){
    return this.http.post(this.url+"/deleteDuplicate/"+criteria,response);  
  }

}
