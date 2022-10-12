import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
    <h3>
      Employees List
    </h3>
    <ul class="items">
      <li *ngFor="let employee of employees"> 
        <span class="badge">{{employee.id}}</span> {{employee.name}}
      </li>
  </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  
  public selectedId!:number;
  employees = [
    {"id": 1, "name": "Sohail"},
    {"id": 2, "name": "Nikhil"},
    {"id": 3, "name": "Deepu"},
    {"id": 4, "name": "Narayana"},
    {"id": 5, "name": "Sai"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
     // let id = parseInt(params.get('id'));
      //this.selectedId = id;
    
    } );
  }
}