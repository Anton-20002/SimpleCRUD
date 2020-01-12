import { Component } from '@angular/core';
import {RequestsService} from './services/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private vara: any;
  user: User = new User();
  receivedUser: User;
  done: boolean = false;


  constructor(private request: RequestsService
  ) {
  }

  getIt(): any {
    this.request.getData().subscribe(res => {
      console.log(res);
      this.vara = res;
    });
  }

  submit(user: User) {
    this.request.postData(user)
      .subscribe(
        (data: string) => {
          this.receivedUser = JSON.parse(data[0]);
          console.log(this.receivedUser);
          this.done = true;
          console.log(data)
        },
        error => console.log(error)
      );
  }

  update(user: User) {
    this.request.putData(user)
      .subscribe(
        (data: string) => {
          console.log(data);
        }
      );
  }

  remove() {
    this.request.deleteData()
      .subscribe(
        (data: any) => {
          console.log(data.headers.get('X-Powered-By'));
        }
      );
  }
}

export interface IUser {
  name: string;
  age: number;
}



export class User implements IUser{
    name: string;
    age: number;


  get getName(): string {
    return this.name;
  }

  set setName(value: string) {
    this.name = value;
  }


  get getAge(): number {
    return this.age;
  }

  set setAge(value: number) {
    this.age = value;
  }
}
