import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  //Form ID
  matchForm!: FormGroup;
  //match ==> Objet
  match: any = {}
  constructor(
    private mService: MatchService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  addMatch() {
    console.log("here is your match Object", this.match);
    this.mService.addMatch(this.match).subscribe(
      (response) => {
        console.log("Here response Add Match from BE", response.isAdded);
        this.router.navigate(['admin']);

      }
    );
  }

}
