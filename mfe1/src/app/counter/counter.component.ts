import { Component } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  animal: string='trdf';
  name: string='feeeeeee';
  constructor(public dialog: MatDialog) { }
  public count = 0;
  counter() {
    this.count += 1;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: { name: this.name, animal: this.animal },
    });

  }
}
