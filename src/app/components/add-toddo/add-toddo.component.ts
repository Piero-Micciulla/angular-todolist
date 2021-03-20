import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-toddo',
  templateUrl: './add-toddo.component.html',
  styleUrls: ['./add-toddo.component.scss'],
})
export class AddToddoComponent implements OnInit {
  @Output() addToddo: EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false,
    };

    this.addToddo.emit(todo);
  }
}
