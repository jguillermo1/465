import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  constructor() { }
  imageURL = '../../assets/images/starRating.png';
  @Output() ratingClicked: EventEmitter <string> = new EventEmitter();
  //@Output() ratingClicked: EventEmitter <string>

  ngOnChanges(): void {
    //Convert star rating to px width
    this.starWidth = this.rating * 106 / 5;
  }
  onClick(): void {
    this.ratingClicked.emit("The rating " + this.rating +" was clicked!");
  }
}
