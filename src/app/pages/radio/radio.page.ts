import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})

export class RadioPage implements OnInit {
  //mettre la radio en pause
  isPlaying : boolean = false;

  constructor() { }

  ngOnInit() {
  }

// jouer la radio
  play(){
    this.isPlaying = true;
  }

//mettre la musique en pause
  pause(){
    this.isPlaying = false;
  }

}
