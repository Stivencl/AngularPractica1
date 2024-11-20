import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RymService } from '../../services/rym.service';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-cardrym',
  standalone: true,
  imports: [MaterialModule, MatGridListModule],
  templateUrl: './cardrym.component.html',
  styleUrl: './cardrym.component.scss'
})

export class CardrymComponent implements OnInit {
   listaPersonajes: any[] = [];
       //readonly dialog = inject(MatDialog);
       page: number = 1;
       totalPages: number = 0;
       
  constructor(private rymService: RymService,
          private dialog: MatDialog
          
  ) { }


  ngOnInit(): void {
    this.rymService.getCharactersPagination(this.page).subscribe((data: any) => {
      this.listaPersonajes = data.results;
    });
  }

  openDialog(character: any) {
    this.dialog.open(DialogComponent, {data: {character}});
    console.log(character);
    
  }

   

}
