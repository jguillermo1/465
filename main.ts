// // xhr.addEventListener("load", ()=> {
// //   //print out movies
// //   movies1=JSON.parse(xhr.responseText);

// // input1.addEventListener("input", (e) => {
// //   let target: any = e.target;
// //   let filter = target.value;

// //   //filter movies 
// //   filterMovies = movies1.filter((m) => {
// //   let title: string = m.title;
// //   return title.indexOf(filter) !== -1;
// //   });
// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
// import { Http } from '@angular/http';
// import { Title } from '@angular/platform-browser/src/browser/title';
// import { ValueTransformer } from '@angular/compiler/src/util';
// //declare var require: any;
// if (environment.production) {
//   enableProdMode();
// }
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
//   //let input = document.getElementById("filter");
// // let input = document.getElementById("input");
// // //console.log(input);
// // let filter = document.getElementById("input");

// //use new json file
// // let movie = [];
// // let moviee  :Imovie [];
// // let filterMovies: Imovie[];

// let url = './assets/movies.son';
// var xhr = new XMLHttpRequest();
// //xhr.responseType = 'json';
// xhr.open("GET",url, true);

// xhr.onload = levelRequestListener()
// xhr.send();
// //  xhr.addEventListener("Load",  () => {
// //    console.log("hello");
// //    function printMovieTitles(moviee: Imovie[]) {
// //     let table = document.getElementById("table");
// //     moviee.forEach( m => {
// //     // create new row
// //       let row = document.createElement("tr"); 
// //     //add title
// //       let title = document.createElement("td");
// //       title.innerText = m.title;
// //       row.appendChild(title);
// //     //add price
// //       let price=document.createElement("td");
// //       price.innerText = m.price;
// //       row.appendChild(price);
// //     // add Date 
// //     let date = document.createElement("td");
// //     date.innerText = m.releaseDate;
// //     row.appendChild(date);
// //     // add row to table
// //     table.appendChild(row);
// //   });

// //   }

// //  });
// // xhr.onload = function(e) {
// //   console.log('response', this.response);
// //  xhr.send();
// // }
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Http } from '@angular/http';
import { Title } from '@angular/platform-browser/src/browser/title';
import { HttpRequest } from 'selenium-webdriver/http';
declare var require: any;
if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
// let movies: Imovie[];
// let xhr = new XMLHttpRequest;
// let url = "./assets/movies.json";
// xhr.open("GET", url);
// xhr.send();
// var nameInput = document.getElementById("myInput");
// xhr.addEventListener("load", () => {
//   movies = JSON.parse(xhr.responseText);
//   printMovieTitles(movies);
// });

//  var element = document.getElementById("myInput");
//  console.log(element);
//   xhr.addEventListener("input", (e) =>{
  
//   let target: any = e.target;
//   let filter = target.value;

//     //let target: any = e.target
//     console.log("hello");
//      //let myInput = document.getElementById("myInput"); 
//     // inputTextValue=e.target.value;
//   });

// // function filter(movies:Imovie[]) {
// //   movies.forEach(e=>)
// //   let target: any = e.target;
// //   let filter = target.value;
// //   console.log(target.value);
// //   let filterMovies :Imovie[];
// //   //filter movies 
// //   filterMovies = movies.filter((m) => {
// //      let title: string = m.title;
// //      return title.indexOf(filter) !== -1;
// //      });
// //     });

// function printMovieTitles(movies: Imovie[]) {
//     let table = document.getElementById("table");
//     movies.forEach(m => {
//     //create row
//     let row = document.createElement("tr");
//     //get title
//     let title = document.createElement("td");
//     title.innerText = m.title;
//     row.appendChild(title);
//     //get price
//     let price = document.createElement("td");
//     price.innerText = m.price;
//     row.appendChild(price);
//     //add Date
    
//     let date = document.createElement("td");
//     date.innerText = m.releaseDate;
//     row.appendChild(date);
//     table.appendChild(row);
//   });

// };
// export interface Imovie{
//   uid: string,
//   title: string,
//   releaseDate: string,
//   price: string,
//   discount: number,
//   imageURL: string
// }
