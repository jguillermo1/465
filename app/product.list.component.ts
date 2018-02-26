import { Component, OnInit } from '@angular/core';
//decorator
@Component({
    //selector is like an html tag
    selector:'product-list',
    templateUrl: './product.list.component.html'
})

export class ProductListComponent implements OnInit{
    private _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(v:string) {
        this._listFilter = v;
        this.filteredMovies = this.filterMovies(this.listFilter);
    }
    movies : Imovie [] =[
        {
          "uid": "d-011",
          "title": "Shrek",
          "releaseDate": "Feb 1, 1998",
          "price": 19.99,
          "discount": 0,
          "starRating": 4,
          "imageURL": "./assets/Shrek.jpg"
        }, {
          "uid": "D-410",
          "title": "Happy Feet",
          "releaseDate": "June 1, 2005",
          "price": 16.99,
          "discount": 0,
          "starRating": 4.5,
          "imageURL": "./assets/HappyFeet.gif"
        },
        {
          "uid": "P-002",
          "title": "Toy Story",
          "releaseDate": "Jan 3, 1993",
          "price": 22.99,
          "discount": 0,
          "starRating": 5,
          "imageURL": "./assets/ToyStory.jpeg"
        },
        {
          "uid": "P-003",
          "title": "Toy Story 2",
          "releaseDate": "Nov 30, 1998",
          "price": 24.99,
          "discount": 0,
          "starRating": 5,
          "imageURL": "./assets/ToyStory2.jpg"
        },
        {
          "uid": "P-013",
          "title": "The Incredibles",
          "releaseDate": "Dec 11, 2004",
          "price": 24.99,
          "discount": 0,
          "starRating": 5,
          "imageURL": "./assets/TheIncredibles.jpg"
        }
      ];
    title: string = "Movie Database";
    constructor() {
        this.filteredMovies=this.movies;
    }

    filteredMovies :Imovie[];
   
  ngOnInit(){
  }
  onKeyup(e)    {
      console.log(this.listFilter);
  }

filterMovies(filter :string): Imovie[]    {
    return this.movies.filter((m:Imovie) =>
        m.title.indexOf(filter) !==-1
        );
    }
}


export interface Imovie{
    uid: string;
    title: string;
    releaseDate: string;
    price: number;
    discount: number;
    starRating: number;
    imageURL: string;
}

