import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
//Player ID
playerForm!: FormGroup;
//Objet
player: any = {};
  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
  }
addPlayer(){
  console.log("Here is Your Player Object", this.player);
  this.playerService.addPlayer(this.player).subscribe(
    (response) => {
      console.log("Here response Add Player from BE", response.isAdded);
      this.router.navigate (['admin']) ;
      
    }
  );
  
}

}
