import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval,map,Observable,of, Subject, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title='rxjs';
  active=1;
  // subscription?: Subscription;
  // data$=new Subject<number>();

  // constructor(){
  //   this.subscription=this.data$
  //   .pipe(
  //     map(value=>value*10),
  //     tap(value=>{
  //       console.log('tap',value);
  //     }),
  //   )
  //   .subscribe({
  //     next:(value)=>console.log(value),
  //     error:(error)=>console.log(error),
  //     complete:()=>console.log('done')
  //   });
  // }
  // ngOnInit(): void {
  //   this.data$.next(1);
  //   setTimeout(()=>this.data$.next(2),1000);
  // }



  // ngOnDestroy(): void {
  //   this.subscription?.unsubscribe();
  // }
}
