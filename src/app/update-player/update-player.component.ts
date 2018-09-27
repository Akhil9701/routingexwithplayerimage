import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { PlayerService } from '../services/playerservice';
import { Player } from '../models/playerModel'

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {
  url: string = ''
  player: Player
  constructor(private acr: ActivatedRoute, private ps: PlayerService, private router: Router) {

    this.player = new Player();
  }

  updatePlayer(playerForm) {
    if (playerForm.valid) {
      this.player.image = this.player.image.replace('data:image/jpeg;base64,', '')
      this.player.image = this.player.image.replace('data:image/jpg;base64,', '')
      this.player.image = this.player.image.replace('data:image/png;base64,', '')
      this.ps.updatePlayer(this.player).subscribe((data) => {
        this.router.navigate(['showAllPlayers'])
      })
    }
  }
  fileSelect(event) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (ev: any) => {
        this.url = ev.target.result
        this.player.image = reader.result
      }
    }
  }
  ngOnInit() {
    let i = parseInt(this.acr.snapshot.params["id"])
    this.ps.getPlayerById(i).subscribe((data) => {
      this.player = data[0];
    })

  }

}
