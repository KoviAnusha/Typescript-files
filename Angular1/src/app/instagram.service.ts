import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  public pics:string[]=['assests/a.jpg','assests/b.jpg'];
  public AddPic(pPic:string)
  {
    this.pics.push(pPic);
  }
  constructor() { }
}
