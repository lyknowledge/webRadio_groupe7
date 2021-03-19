import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

@ViewChild(IonTabs) tabs: IonTabs
selected = "";
progress = 42;
  constructor() { }

  ngOnInit() {
  }

  //Changer la couleur des boutons
  setSelectedTab(){
    this.selected = this.tabs.getSelected();
  }
}
