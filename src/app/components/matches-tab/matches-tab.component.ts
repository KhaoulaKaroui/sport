import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-tab',
  templateUrl: './matches-tab.component.html',
  styleUrls: ['./matches-tab.component.css']
})
export class MatchesTabComponent implements OnInit {
  matchesTab: any = [
    // { id: 1, scoreOne: 2, scoreTwo: 1, teamOne: 'EST', teamTwo: 'CA' },
    // { id: 2, scoreOne: 0, scoreTwo: 1, teamOne: 'JUV', teamTwo: 'ROM' },
    // { id: 3, scoreOne: 3, scoreTwo: 1, teamOne: 'RMD', teamTwo: 'ATM' },
    // { id: 4, scoreOne: 2, scoreTwo: 2, teamOne: 'CIT', teamTwo: 'LIV' },
  ];
  constructor(
    private router: Router,
    private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchService.getAllMatchs().subscribe(
      (response) => {
        console.log("Here response Matches-Tab from BE", response.matches);
        this.matchesTab = response.matches;
      }
    );
  }

  goToInfo(matchId: number) {
    this.router.navigate([`matchInfo/${matchId}`]);
  }

  goToEditMatch(matchId: number) {
    this.router.navigate([`editMatch/${matchId}`]);
  }

  deleteMatch(id: any) {
    this.matchService.deleteMatch(id).subscribe(
      (data) => {
        console.log("Here response Delete from BE", data.isDeleted);
        if (data.isDeleted) {
          this.matchService.getAllMatchs().subscribe(
            (data) => {
              this.matchesTab = data.matches
            }
          )
        }

      });
  }

  // resultColor(a: number, b: number) {
  //   if (a > b) {
  //     return 'green';
  //   } else if (a < b) {
  //     return 'red';
  //   } else {
  //     return 'blue';
  //   }
  // }
  scoreResult(a: number, b: number, team: string) {
    if (a > b) {
      return [team + " win", 'green'];
    } else if (a < b) {
      return [team + " lose", 'red'];
    } else {
      return ["score null", 'blue'];
    }
  }
}
