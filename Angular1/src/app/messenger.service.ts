import { Injectable } from '@angular/core';
import {InstagramService} from './instagram.service';
import {MailService} from './mail.service';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor(public InstaSvc:InstagramService,public MailSvc:MailService) {
    //injecting a dependency
   }
   public GetInsta()
   {
      return this.InstaSvc.pics;
   }
   public GetMail()
   {
      return this.MailSvc.messages;
   }
}
