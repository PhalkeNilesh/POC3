import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User} from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User =new User();

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data => 
      console.log(data), error => console.log(error)); 
      this.goToUserList(); 
  }


  goToUserList(){
    this.router.navigate(['/users']);
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
