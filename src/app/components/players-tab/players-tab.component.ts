import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-tab',
  templateUrl: './players-tab.component.html',
  styleUrls: ['./players-tab.component.css']
})
export class PlayersTabComponent implements OnInit {
  playersTab: any = [
    // { id: 1, name: "Cristiano", age: 38, number: 7, position: "Forwards"},
    // { id: 2, name: "Messi", age: 36, number: 3, position:"Forwards"},
    // { id: 3, name: "Neymar", age: 28, number: 5, position:"Forwards"},
  ];
  constructor(
    private router: Router,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      (data) => {
        console.log("Here response Players-Tab from BE", data.players);
        this.playersTab = data.players;
      }
    );
  }

  goToPlayerInfo(playerId: number) {
    this.router.navigate([`playerInfo/${playerId}`])
  }

  goToEditPlayer(playerId: number) {
    this.router.navigate([`editPlayer/${playerId}`]);
  }

  deletePlayer(id: any) {
    this.playerService.deletePlayer(id).subscribe(
      (data) => {
        console.log("Here response Delete from BE", data.isDeleted);
        if (data.isDeleted) {
          this.playerService.getAllPlayers().subscribe(
            (data) => {
              this.playersTab = data.players;
            }
          )
        }

      }
    );
  }


}
