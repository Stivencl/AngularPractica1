import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RymService {
    private baseUrl = 'https://rickandmortyapi.com/api'

    options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }) 
    }//end of options

  constructor(private http: HttpClient) { }
  getCharacters(){
    return this.http.get(this.baseUrl + '/character', this.options)
  }//end of getCharacters
   

  getCharactersPagination(page: number){
    return this.http.get(this.baseUrl + '/character/'+'?page='+page)
  }//end of getCharactersPagination


}
