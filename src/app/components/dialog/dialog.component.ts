import { Component, ChangeDetectionStrategy, Inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,

} from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MaterialModule, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  constructor(

    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    console.log('Received data in dialog:', data);
  }

}
