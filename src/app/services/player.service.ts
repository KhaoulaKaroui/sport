import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerURL: string = 'http://localhost:3000/api/players';

  constructor(private http: HttpClient) { }

  addPlayer(player: any) {
    return this.http.post<{ isAdded : Boolean}>(this.playerURL, player);
  }

  editPlayer(playerObj: any) {
    return this.http.put<{ isEdited: string}>(this.playerURL, playerObj);
  }

  deletePlayer(id: any) {
    return this.http.delete<{ isDeleted: boolean}>(`${this.playerURL}/${id}`);;
  }

  getPlayerById(id: any) {
    return this.http.get<{ player: any }>(`${this.playerURL}/${id}`);
  }

  getAllPlayers() {
    return this.http.get<{ players: any}>(this.playerURL);
  }
}
