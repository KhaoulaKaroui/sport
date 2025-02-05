import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  id: any;
  player: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.playerService.getPlayerById(this.id).subscribe(
      (data) => {
        console.log("Here response Player-Info from BE", data.player);
        this.player = data.player;
      });



  }

}
