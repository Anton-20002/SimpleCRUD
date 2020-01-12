import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private url: string = "http://localhost:8080/MyJSON_war_exploded/base/users";
  private myHeaders: HttpHeaders = new HttpHeaders();

  private id: string = "/1";

   headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'

  };
   opt = { headers: this.headerDict};

  constructor(private client: HttpClient) {
    }

    getData(){
    console.log('Fetching data from the server.');
     return this.client.get(this.url );
    }

    postData(myData: User) {
      return this.client.post(this.url, myData, this.opt);
    }

    putData(myData: User) {
      return this.client.put(this.url+this.id, myData);
    }

    deleteData() {
    return this.client.delete(this.url+this.id, {observe: 'response'});
  }
}
