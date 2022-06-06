import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from './api/ape.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'FrontEnd';
  public personas = [];

  public persona = {
    id: "",
    cedula: "",
    nombre: "",
    apellidos: ""
  };

  constructor(private api: ApiService) {
    this.getListaPersonas();
  }

  getListaPersonas() {
    this.api.getPersonas().subscribe(
      (response: any) => {
        this.personas = response;
      }
    );
  }

  addPersona() {
    if (this.persona.id == "") {
      this.api.setPersona(this.persona).subscribe(
        (response: any) => {
          alert(response);
          this.getListaPersonas();
          this.cleanPersona();
        }
      );
    } else {
      this.api.updatePersona(this.persona).subscribe(
        (response: any) => {
          alert(response);
          this.getListaPersonas();
          this.cleanPersona();
        }
      );
    }
  }

  cleanPersona() {
    this.persona = {
      id: "",
      cedula: "",
      nombre: "",
      apellidos: ""
    };
  }

  loadPersona(id: number) {
    
    var item = this.personas.filter(x => x.idPersona == id)[0];
    
    this.persona.id = item.idPersona;
    this.persona.cedula = item.cedula;
    this.persona.nombre = item.nombre;
    this.persona.apellidos = item.apellidos;
  }

  deletePersona(id: number) {
    
    this.api.deletePersona(id).subscribe(
      (response: any) => {
        alert(response);
        this.getListaPersonas();
      }
    );
  }
}
