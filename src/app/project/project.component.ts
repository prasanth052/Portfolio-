import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  ErpDesc: string = '';
  FrontEnd: string = '';
  Backend: string = '';
  DevTools: string = '';
  Auth:string=''
  EComm:string=''
  ngOnInit() {
    this.ErpDesc = `ERP Foundry Management Software is a full-stack enterprise application built to streamline and digitize all operations
    within a metal casting or foundry unit. The system automates key processes such as production planning, raw material
    procurement, shift-wise scheduling, inventory management, purchase orders, quality control, dispatch tracking, and
    reporting.`;
    this.FrontEnd = `Angular, HTML, SCSS, TypeScript, Angular Material`;
    this.Backend = `Node.js (Express), MSSQL (Stored Procedures), REST APIs`;
    this.DevTools=`GitHub, VSCode, Postman, SQL Server Management Studio`
    this.Auth = `Role-based access control, JWT`;
    this.EComm = `A full-featured online shopping platform designed for users to browse products,
    add items to the cart, place orders, and make payments. Admins can manage products, categories, inventory, and view customer orders.`;
  }
}
