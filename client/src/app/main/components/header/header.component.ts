import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { AuthService } from '../../../shared/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
/*user: FirebaseUserModel = new FirebaseUserModel();
 profileForm: FormGroup;*/

  
  constructor(/*public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location : Location,
    private fb: FormBuilder*/) { }

  ngOnInit() {
    /*this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.user = data;
        this.createForm(this.user.name);
      }
    })*/
      
  }
  /*createForm(name) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required ]
    });
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }
*/
  
}

