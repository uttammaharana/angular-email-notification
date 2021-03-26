import { Injectable } from '@angular/core';
import {MatSnackBar,MatSnackBarConfig,MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationMsgService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(public _snackBar: MatSnackBar ) { }

  config: MatSnackBarConfig={
    duration:1000,
    horizontalPosition:"right",
    verticalPosition:"top"
  }
  success(msg){
    this.config['panelClass']= ['notification', 'success' ]
    this._snackBar.open(msg, '', this.config);
    
  }
}
