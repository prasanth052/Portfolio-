import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  skills = [
    { name: 'Angular', percentage: 90 },
    { name: 'Typescript', percentage: 80 },
    { name: 'Node.js', percentage: 80 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'MSSQL', percentage: 85 },
    { name: 'API', percentage: 85 },
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 95 },
    { name: 'NgRX', percentage: 80 },
    { name: 'RsJx', percentage: 80 },
  ];

  skillRows: any[] = [];

  text =
    "I'm a  <b style='color:brown;'> Fullstack Web Developer </b> building and managing the Front-end of  Websites and " +
    ' Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section .  <br> ' +
    'I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. <br> ' +
    " I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. ";

  constructor() {}

  ngOnInit(): void {
    this.splitSkillsIntoRows();
  }

  splitSkillsIntoRows(): void {
    const rowSize = 2; // Change this to 3 for 3 columns per row
    this.skillRows = [];

    for (let i = 0; i < this.skills.length; i += rowSize) {
      this.skillRows.push(this.skills.slice(i, i + rowSize));
    }
  }
}
