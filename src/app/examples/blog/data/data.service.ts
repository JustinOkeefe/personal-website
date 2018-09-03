import { Injectable } from '@angular/core';
import { Post } from '../Post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DataService {

  ELEMENT_DATA: Post[] = [
    { position: 0, title: 'File Reports', category: 'Work', date_posted: new Date(), body: 'Ugh' },
    { position: 1, title: 'Send Email to Jim', category: 'Work', date_posted: new Date(), body: 'Tomorrow' },
    { position: 2, title: 'Get Dog Food', category: 'Miscellaneous', date_posted: new Date(), body: 'Blue Buffalo' },
    { position: 3, title: 'Take Down X-Mas Lights', category: 'Home', date_posted: new Date(), body: 'Just wait' },
    { position: 4, title: 'Change Oil', category: 'Miscellaneous', date_posted: new Date(), body: 'Today' },
  ];
  categories = [
    { value: 'Work', viewValue: 'Work' },
    { value: 'Home', viewValue: 'Home' },
    { value: 'Misc', viewValue: 'Miscellaneous' }
  ];

  constructor() {
  }

  getData(): Observable<Post[]> {
    return Observable.of<Post[]>(this.ELEMENT_DATA);
  }

  getCategories() {
    return this.categories;
  }

  addPost(data) {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}