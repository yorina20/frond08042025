import { Component, OnInit } from '@angular/core';
import { RouterOutlet , RouterLink, Router, NavigationEnd} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  selectedTab:number =0;
  constructor (private router:Router){}

  ngOnInit(){
    this.router.events.subscribe((event)=>{
      if( event instanceof NavigationEnd){
         this.updateSelectedTab(event.urlAfterRedirects);
      }
      
    });
  }
  navigateToTab(event:any){
    switch(event.index){
      case 0:
        this.router.navigate(['/']);
        break;
      case 1:
        this.router.navigate(['/about']);
        break;
    case 2:
        this.router.navigate(['/productos']);
    }
  }

  private updateSelectedTab (url:string){
    if(url.includes('/')){
      this.selectedTab=0;
    }else if(url.includes('/about')){
      this.selectedTab=1;
    }else if(url.includes('/productos')){
      this.selectedTab=2;
    }
  }
  
}


