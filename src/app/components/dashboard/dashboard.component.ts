import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  criterias: string[] = ["id", "nom", "prenom", "salaire"];
  
  criteria: string = "";

  listEmployes: any;

  listEmployesWithoutDuplicate: any;

  showListEmployesWithoutDuplicate: boolean = false;

  constructor(private employeService: EmployeService) { }

  ngOnInit() {
    this.employeService.getEmployes().subscribe(
      (data) => this.listEmployes = data, 
      (error) => console.log(error)
    );
  }

  processing(){
    this.showListEmployesWithoutDuplicate = true;
    this.employeService.processing(this.criteria,this.listEmployes).subscribe(
      (data) => this.listEmployesWithoutDuplicate = data,
      (error) => console.log(error)
    );
  }

}
