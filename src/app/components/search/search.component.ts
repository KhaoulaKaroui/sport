import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultComponent } from '../result/result.component';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  T: any = [
    // { id: 1, scoreOne: 2, scoreTwo: 1, teamOne: 'EST', teamTwo: 'CA' },
    // { id: 2, scoreOne: 0, scoreTwo: 1, teamOne: 'JUV', teamTwo: 'ROM' },
    // { id: 3, scoreOne: 3, scoreTwo: 1, teamOne: 'RMD', teamTwo: 'ATM' },
    // { id: 4, scoreOne: 2, scoreTwo: 2, teamOne: 'CIT', teamTwo: 'LIV' },
  ];

  V: any[] = []; 

  searchForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private mService: MatchService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      scoreOne: ['', [Validators.required]],
      scoreTwo: ['', [Validators.required]]
    })
  }
  search() {  
    console.log('Here Object', this.searchForm.value);
    this.mService.searchMatches(this.searchForm.value).subscribe(
      (data) => {
        console.log('Here matches from BE',data.T);
        
      }
    )
}


}