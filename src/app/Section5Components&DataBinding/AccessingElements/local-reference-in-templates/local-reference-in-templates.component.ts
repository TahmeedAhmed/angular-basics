import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-reference-in-templates',
  templateUrl: './local-reference-in-templates.component.html',
  styleUrls: ['./local-reference-in-templates.component.css']
})
export class LocalReferenceInTemplatesComponent implements OnInit {
  name = "";
  constructor() { }

  ngOnInit(): void {
  }

  showName(inputElementName: HTMLInputElement){
    this.name = inputElementName.value;
  }
}