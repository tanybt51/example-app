import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { NavOption } from './nav.model';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  links: Array<NavOption> = []
  login_link: NavOption = new NavOption('login', 'התחבר')
  currentPage: string = 'home';
  state: string = "active";
  isNavClicked: boolean = false;
  hello: string = ' שלום ';
  title={
    menu:'תפריט',
    appName:'יהונתן אלטמן'
  }
  
  constructor(private breakpointObserver: BreakpointObserver,private userService: UserService) {}

  ngOnInit() {
    this.links =[

      new NavOption('home','בית'),
      new NavOption('customers','לקוחות'),
      new NavOption('product','מוצרים'),
      new NavOption('test','בדיקה'),
      new NavOption('about','עלינו'),
      
     
      


          ]
  }
}
