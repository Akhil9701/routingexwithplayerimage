import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/playerservice'
import {Router} from '@angular/router'
@Component({
  selector: 'app-show-all-players',
  templateUrl: './show-all-players.component.html',
  styleUrls: ['./show-all-players.component.css']
})
export class ShowAllPlayersComponent implements OnInit {

  players:any[]=[]
  constructor(private ps: PlayerService, private rt : Router) { }

  btnDelClick(id){
    this.ps.deletePlayer(id).subscribe(
      (data)=>{alert(JSON.stringify(data))
      this.ngOnInit();
      }
      
    )
  }
  btnEditClick(id){
    this.rt.navigate(['updatePlayer/'+id])
  }
  ngOnInit() {
    this.ps.getAllPlayers().subscribe((res) => {
      console.log(res)
      this.players = res
    })
  }

}
