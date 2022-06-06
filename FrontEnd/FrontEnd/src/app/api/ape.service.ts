import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_URL = 'http://localhost:3000/persona';
  
  constructor(private http: HttpClient) { }

  getPersonas(){
    return this.http.get(this.API_URL);
  }
  setPersona(persona: any){
    return this.http.post(this.API_URL,persona);
  }
  updatePersona(persona: any){
    return this.http.put(this.API_URL,persona);
  }
  deletePersona(id: any){
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}