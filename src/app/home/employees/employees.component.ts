import { Component, OnInit } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Simple query
  const allTodos = API.graphql(graphqlOperation(queries.listTodos));
  console.log("all good Logs",allTodos);
  }
  

}
