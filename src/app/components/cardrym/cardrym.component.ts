import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RymService } from '../../services/rym.service';
import {MatGridListModule} from '@angular/material/grid-list';
@Component({
  selector: 'app-cardrym',
  standalone: true,
  imports: [MaterialModule, MatGridListModule],
  templateUrl: './cardrym.component.html',
  styleUrl: './cardrym.component.scss'
})
export class CardrymComponent implements OnInit {
   listaPersonajes: any[] = [];

  constructor(private rymService: RymService) { }

  ngOnInit(): void {
    this.rymService.getCharacters().subscribe((data: any) => {
      this.listaPersonajes = data.results;
    });
  }
     
}
