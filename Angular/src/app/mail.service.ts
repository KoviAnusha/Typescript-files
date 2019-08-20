import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  public messages:any[]=[{title:'first',messagebody:'Hi,this is the first message'},
  {title:'second',messagebody:'Hi,this is the second message'}];//object array
  public SendMail(pMail:any)
  {
    return "mail sent";
  }
  constructor() { }
}
