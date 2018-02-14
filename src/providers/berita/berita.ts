import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable'; //
import 'rxjs/add/operator/map';

/*
  Generated class for the BeritaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeritaProvider {

  public berita = [
    {
      id: 0,
      title: "Title satu",
      photo: "https://cdn.pixabay.com/photo/2014/03/14/20/07/painting-287403__180.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
    {
      id: 1,
      title: "Title dua",
      photo: "../assets/imgs/3.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
    {
      id: 2,
      title: "Title tiga",
      photo: "../assets/imgs/2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
    {
      id: 3,
      title: "Title empat",
      photo: "../assets/imgs/1.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
    {
      id: 4,
      title: "Title lima",
      photo: "https://c1.staticflickr.com/7/6024/5965504753_675ae65210_z.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta aliquam aperiam omnis inventore sit debitis, quia, sapiente corporis ipsa perferendis fugit animi voluptatibus ut natus commodi voluptas repellendus consequuntur!"
    },
  ]

  listBerita(): Observable<any[]> {
    return new Observable((observer) => {
      observer.next(this.berita);
      observer.complete();
    })
  }

  detailBerita(id) {
    return this.berita[id]
  }

  saveBerita(dataBerita) {
    this.berita.push(dataBerita);
  }

  constructor() {
    console.log('Hello BeritaProvider Provider');
  }
}