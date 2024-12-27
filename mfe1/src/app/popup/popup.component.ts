import { Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
export interface DialogData {
  name: string;
  yes: (data:any) => void;
  no: () => void;
}
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  standalone: true,
  imports:[MatCommonModule,MatDialogModule, ReactiveFormsModule]
})


export class PopupComponent {

  name: FormControl = new FormControl('tomar');
  constructor( 
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    console.log(data);
    
   }

  setValue(event: any) {
    const selectElement = event.target as HTMLSelectElement;
    this.name.setValue(selectElement.value);
  }
  ok() {
    console.log(this.name.value);
    this.data.yes(this.name.value);
    // this.dialogRef.close();
  }
  cancel(){
    this.data.no();
    // this.dialogRef.close();
  }
}
