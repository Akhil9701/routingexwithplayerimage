import { Component, OnInit } from '@angular/core';
import {Player} from '../models/playerModel'
import { PlayerService } from '../services/playerservice';
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  url: string=''
  player: Player
  constructor(private rt: Router, private ps: PlayerService) {
    this.player = new Player();
   }

   SavePlayer(playerForm){
     if(playerForm.valid){
        this.player.image = this.player.image.replace('data:image/jpeg;base64,','')
        this.player.image = this.player.image.replace('data:image/jpg;base64,','')
        this.player.image = this.player.image.replace('data:image/png;base64,','')
      console.log(JSON.stringify(this.player))
      this.ps.addPlayer(this.player).subscribe(
        (data)=>{console.log(data);
         alert(JSON.stringify(data))
         this.rt.navigate(['showAllPlayers']) 
         }
       )
      }
   }

   fileSelect(event){
      if(event.target.files){
        var reader  = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (ev:any)=>{
          this.url = ev.target.result
          this.player.image = reader.result
        }
      }
   }
  ngOnInit() {
  }

}
