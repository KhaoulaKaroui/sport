import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  playersTab: any = [
    // { id: 1, name: "Cristiano", age: 38, number: 7, position: "Forwards"},
    // { id: 1, name: "Messi", age: 36, number: 3, position:"Forwards"},
    // { id: 1, name: "Neymar", age: 28, number: 5, position:"Forwards"},
  ]
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      (data) => {
        console.log("Here response Players from BE", data.players);
        this.playersTab = data.players;
      }
    );
  }

}
