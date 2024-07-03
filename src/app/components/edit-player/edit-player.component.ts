import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerForm!: FormGroup;
  player: any = [];
  id: any;

  constructor(
    private playerService: PlayerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.playerService.getPlayerById(this.id).subscribe(
      (data) => {
        this.player = data.player;
      }
    );
  }

  editPlayer() {
    console.log("here is player object", this.player);
    this.playerService.editPlayer(this.player).subscribe(
      (response) => {
        console.log('Here response Edit Player from BE', response.isEdited);
        this.router.navigate(['admin']);
      }
    );

  }

}
