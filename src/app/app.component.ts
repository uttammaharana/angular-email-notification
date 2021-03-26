import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NotificationMsgService } from './shared/notification-msg.service';
import { NotificationService } from './shared/notification.service';
import { User } from './shared/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent    {
  title = 'ats';

  emailNotification: FormGroup;
  titleAlert: string = 'This field is required';
  constructor(private fb: FormBuilder,
    private notificationser: NotificationService,
    private notificationmsg: NotificationMsgService) { }
  // emailNotification: any;
  user: User[];


  ngOnInit() {
    this.emailNotification = this.fb.group({
      name: ['', Validators.minLength(4)],
      email: ['', Validators.email]
    })
  }

  onFormSubmit() {

    const mailnotification = this.emailNotification.value;
    this.notifications(mailnotification);
    this.notificationmsg.success(':: Submited Successfully');
    this.resetForm()

  }

  notifications(user: User) {
    this.notificationser.sendEmail(user).subscribe(
      data => {
        let res: any = data;
        console.log(
          ` ${user.name} is successfully register and mail has been sent and the
           message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      }
    )
  }

  resetForm() {
    this.emailNotification.reset();
  }

}
