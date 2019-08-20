import { Component, OnInit } from '@angular/core';
import {MessengerService} from '../messenger.service';
@Component({
  selector: 'app-messagingapp',
  templateUrl: './messagingapp.component.html',
  styleUrls: ['./messagingapp.component.css']
})
export class MessagingappComponent implements OnInit {

  constructor(public MessengerSvc:MessengerService) { }

  GetInstaMsgs()
  {
    return this.MessengerSvc.GetInsta(); // returns pics array
  }
GetMailMsgs()
{
  return this.MessengerSvc.GetMail(); // returns messages array
}
  ngOnInit() {
  }

}
