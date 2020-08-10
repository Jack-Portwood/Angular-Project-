import { Component, OnInit } from '@angular/core';
import  data  from '../../../assets/mock_data.json';

interface DataItem {
  id:number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  employed: boolean;
}


@Component({
  selector: 'app-customers', 
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  // listData: any;
  listOfData: DataItem[];
 

  constructor() { }

  ngOnInit(): void {

    // this.listData = data;
    this.listOfData = data;

  }

}
