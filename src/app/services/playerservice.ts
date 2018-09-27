import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Player } from '../models/playerModel';

import { Register } from '../models/registermodel';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  apiUrl: string = "http://localhost:4600/player";
  apiUrll: string = "http://localhost:4600/register";
  
  constructor(private ht: HttpClient ) {

   }
  getAllPlayers(): Observable<any> {
    return this.ht.get(this.apiUrl, { responseType: 'json' })
  }
  getPlayerById(i : number) : Observable<any> {
    return this.ht.get(this.apiUrl+ '/' + i,{responseType: 'json'})

  }
  deletePlayer(id: number): Observable<any> {
    return this.ht.delete(this.apiUrl + '/' + id, { responseType: 'json' })
  }
  addPlayer(pObj: Player): Observable<any> {
    const hdrOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.ht.post(this.apiUrl, JSON.stringify(pObj), hdrOptions)
  }
  updatePlayer(pObj : Player) : Observable<any>{
    const headers = {
      headers:new HttpHeaders({'content-type':'application/json'})
    }
      return this.ht.put(this.apiUrl ,JSON.stringify(pObj),headers)
  }
register(regObj:Register):Observable<any>{
  const headers={
    headers:new HttpHeaders({'content-type':'application/json'})
  }
  return this.ht.post(this.apiUrll,JSON.stringify(regObj),headers)
}


CheckLogin(ui: string, p : string) : Observable<any>{
 
  return this.ht.get('http://localhost:4600/register/'+ ui+'/'+p,{responseType:'json'});
}


}
