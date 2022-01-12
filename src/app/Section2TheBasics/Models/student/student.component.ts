import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[] = [];

  constructor() {
    this.students.push(new Student("John", 18, "Comp Sci"));
    this.students.push(new Student("Abz", 17, "Comp Sci"));
    this.students.push(new Student("Josh", 18, "Maths"));
   }

  ngOnInit(): void {
  }

}
