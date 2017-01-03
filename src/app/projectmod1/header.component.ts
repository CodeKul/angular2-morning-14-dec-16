import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx'; // Reactivex lib (rxjs), observer design pattern

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private userName: string;
  private sub : Subscription;
  private subRouter : Subscription;
  private email : string;

  constructor(private router:Router, private activatedRoute: ActivatedRoute) {
    //this.userName = activatedRoute.snapshot.params['userName']; //
    this.sub = activatedRoute.params.subscribe(params => this.userName = params['userName']);
    this.subRouter = this.router.routerState.root.queryParams.subscribe(queryParams => this.email = queryParams['email']);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
