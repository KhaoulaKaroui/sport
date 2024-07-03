import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  id: any;
  match: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        console.log("Here response Match-Info from BE", data.match);
        this.match = data.match;
      }
    );
  }

}
