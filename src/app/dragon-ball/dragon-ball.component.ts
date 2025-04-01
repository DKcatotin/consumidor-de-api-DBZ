import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-dragon-ball',
  templateUrl: './dragon-ball.component.html',
  imports: [CommonModule],
  styleUrls: ['./dragon-ball.component.css']
})
export class DragonBallComponent implements OnInit {

  gokuData: any = {};

  ngOnInit() {
    this.getGokuData();
  }

  getGokuData() {
    axios.get('https://dragonball-api.com/api/characters/1')
      .then(response => {
        this.gokuData = response.data;
        console.log(this.gokuData); // Aquí puedes ver los datos en la consola
      })
      .catch(error => {
        console.error('Error al obtener los datos de Goku:', error);
      });
  }
}
