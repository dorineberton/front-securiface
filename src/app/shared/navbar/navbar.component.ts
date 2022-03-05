import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/interfaces/user';
import axios from 'axios';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser()
  }
  loginOut(): void {
    console.log('user', this.user)
    axios.post(
      'http://localhost:8080/logout',
      this.user
      )
      .then(response => {
      console.log('recup', response.data);
    });
  }
}
