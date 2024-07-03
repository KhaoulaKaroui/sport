import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  teamForm!: FormGroup;
  team: any = [];
  id: any;
  constructor(
    private teamService: TeamService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.teamService.getTeamById(this.id).subscribe(
      (data) => {
        this.team = data.team;
      }
    );
  }

  editTeam() {
    console.log("here is team object", this.team);
    this.teamService.editTeam(this.team).subscribe(
      (response) => {
        console.log('Here response Edit Team from BE', response.isEdited);
        this.router.navigate(['admin']);
      }
    );

  }

}
