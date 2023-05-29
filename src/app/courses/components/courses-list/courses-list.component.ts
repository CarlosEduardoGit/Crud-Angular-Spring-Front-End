import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {

  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(isAsync: false);
  @Output() edit = new EventEmitter(isAsync: false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() {

  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(course: Course){
    this.add.emit(course);
  }

}
