import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchesTab: any = [];
    // { id: 1, scoreOne: 2, scoreTwo: 1, teamOne: 'EST', teamTwo:'CA'},
    // { id: 2, scoreOne: 0, scoreTwo: 1, teamOne: 'JUV', teamTwo:'ROM'},
    // { id: 3, scoreOne: 3, scoreTwo: 1, teamOne: 'RMD', teamTwo:'ATM'},
    // { id: 4, scoreOne: 2, scoreTwo: 2, teamOne: 'CIT', teamTwo:'LIV'},
  
  constructor(private matchService:MatchService) { }

  ngOnInit(): void {
    this.matchService.getAllMatchs().subscribe(
      (response) => {console.log("Here response Matches from BE", response.matches);
        this.matchesTab = response.matches;
      }
    );
  }

}
