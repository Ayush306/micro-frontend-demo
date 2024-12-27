import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExposedServiceService } from 'mfe1/ExposedServiceService';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent } from 'mfe1/PopupComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private service: ExposedServiceService, 
    public dialog: MatDialog){
  }
  title = 'shell';
  animal: string='dog';
  name: string='computer';
  receviedData: string = '';
  goTo(url:any){
    this.router.navigate(['./apps',url]);
  }

  messageMfe1: string = '';

   ngOnInit() {
    this.messageMfe1 = this.service.getMessage();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: { 
        name:'string from shell',
        yes:(data:any)=>{
          console.log('i am inside shell yes: ','selected data is :',data);
          this.receviedData = data;
          dialogRef.close();
        },
        no:()=>{
          console.log('i am inside shell no');
          dialogRef.close();
        }
       },
    });

  }
}
