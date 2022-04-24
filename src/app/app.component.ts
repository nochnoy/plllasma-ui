import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {RestService} from "./services/rest.service";

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public router: Router,
    public authService: AuthService,
    public restService: RestService,
  ) {}

  ngOnInit(): void {

    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    //this.restService.getChannel(1, '', () => {});
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    this.authService.authorized$
      .pipe(
        tap((authorized) => {
          if (authorized) {
            this.router.navigate([''])
          } else {
            this.router.navigate(['/login'])
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

}
