import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerUserData = {};
  constructor(public _auth: AuthService) {}

  ngOnInit() {}
  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.error(error);
      }
    );
  }
}
