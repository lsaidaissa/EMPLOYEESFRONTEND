import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/services/employe.service';

import { Employe} from 'src/app/models/employe';

import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import { FlashMessagesService } from 'angular2-flash-messages';



 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


 displayedColumns: string[] = ['id', 'nom', 'prenom', 'salaire'];
 dataSource : any;
 dateSourcd_non_duplicate: any;

  criterias: string[] = ["id", "nom", "prenom", "salaire"];
  criteria: string = "";
  isDisable: boolean = true;


  listEmployesWithoutDuplicate: any;

  showListEmployesWithoutDuplicate: boolean = false;

  constructor(private employeService: EmployeService, private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.employeService.getEmployes().subscribe(
      (data) => {
                this.dataSource = data;
                }, 
      (error) => this.flashMessagesService.show('error while parsing the json file, please enter a valid json format file and retry', { cssClass: 'alert-danger', timeout: 3000 })
    );
  }

  processing(){
      this.employeService.processing(this.criteria,this.dataSource).subscribe(
        (data) => {
                  this.listEmployesWithoutDuplicate = data;
                  this.dateSourcd_non_duplicate = data;
                  this.showListEmployesWithoutDuplicate = true;
                  },
        (error) => this.flashMessagesService.show("an error occured while processing on server, please try again", { cssClass: 'alert-danger', timeout: 3000 })
      );
    
  }

  isDisbleButton(){
      this.criteria!="" ? this.isDisable = false:this.isDisable = true;
  }


}
