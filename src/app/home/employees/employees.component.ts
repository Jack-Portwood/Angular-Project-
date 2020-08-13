import { Component, OnInit } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import * as subscriptions from '../../../graphql/subscriptions'


  const todo = { name: 'Hello world', description: 'Info' };


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  

  constructor() { }

  allTodos: any = []

  ngOnInit(): void {

    // Simple query
    this.getAll()
  };

  async getAll(){
    const allTodos = await API.graphql(graphqlOperation(queries.listTodos));
    this.allTodos = allTodos.data.listTodos.items
    console.log(this.allTodos);
  }

  //create ToDo
  async createTodo(){
    
   await API.graphql(graphqlOperation(mutations.createTodo, { input: todo }));

  }
  
  } 


