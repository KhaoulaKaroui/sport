import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
//team ID
teamForm! : FormGroup;
//Objet
team : any = {};
  constructor( private teamService: TeamService , private router: Router) { }

  ngOnInit(): void {
  }
addTeam(){
  console.log("Here is your team object", this.team);
  this.teamService.addTeam(this.team).subscribe(
    (response) => {
      console.log("Here response Add Team from BE", response.isAdded);
      this.router.navigate (['admin']) ;
      
    }
  );
}

}
