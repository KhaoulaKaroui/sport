import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-tab',
  templateUrl: './teams-tab.component.html',
  styleUrls: ['./teams-tab.component.css']
})
export class TeamsTabComponent implements OnInit {
  teamsTab: any = [
    // { id: 1, name: "CA", owner: "Med", foundation: 1920 },
    // { id: 2, name: "REAL MADRID", owner: "AZER", foundation: 1980 },
    // { id: 3, name: "BARCELONE", owner: "Carl", foundation: 1990 }
  ];
  constructor(
    private router: Router,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(
      (response) => {
        console.log("Here response Teams-Tab from BE", response.teams);
        this.teamsTab = response.teams;
      }
    );
  }
  goToTeamInfo(teamId: number) {
    this.router.navigate([`teamInfo/${teamId}`]);
  }

  goToEditTeam(teamId: number) {
    this.router.navigate([`editTeam/${teamId}`]);
  }

  deleteTeam(teamId: number) {
    // alert(teamId);
    this.teamService.deleteTeam(teamId).subscribe(
      (data) => {
        console.log("Here response Delete from BE", data.isDeleted);
        if (data.isDeleted) {
          this.teamService.getAllTeams().subscribe(
            (data) => {
              this.teamsTab = data.teams
            }
          )
        }

      });
  }
}
