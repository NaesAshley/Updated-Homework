import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../Dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  dashBoardList: Dashboard = {
    //dashboard is the type not variable name
    nameOfDashboard: 'The Dashboard',
    nameOfWidget: 'The Widget',
    reviewStars: 'The Star Reviews',
    nameOfCustomers: 'The Name: Naes',
    nameOfOutlineAnalysis: 'The Outline Analysis',
    nameOfSettings: 'The Settings',
  };
}
