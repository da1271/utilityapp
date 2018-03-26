import { Component, HostListener } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { Router } from '@angular/router';

import '../assets/app.css';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
  // @HostListener("window:unload",["$event"])
  // private onUnload(): void {
  //     this.authService.logout();
  //     this.router.navigate(['/login']);
  // }
  constructor(public authService: AuthenticationService,
              public router:Router
                ) {
    // sharedService.loader.subscribe((bool) => {
    //   setTimeout(() => {
    //   this.loading = !this.loading;
    //   //console.log(this.loading);
    //   });
    // });
  }



}
