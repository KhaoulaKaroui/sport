import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  matchForm!: FormGroup;
  match: any = [];
  id: any;
  constructor(
    private matchService: MatchService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        this.match = data.match ;
      }
    );
  }

  editMatch() {
    console.log("here is match object", this.match);
    this.matchService.editMatch(this.match).subscribe(
      (response) => {
        console.log('Here response Edit Match from BE', response.isEdited);
        this.router.navigate(['admin']);
      }
    );

  }


}
