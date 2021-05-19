import { Component, ViewChild } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('unityView') unityView: any = null;
  baseUrl: string = 'http://localhost:4200/';
  project: string = window.location.hash.replace('#', '');

  constructor(platformLocation: PlatformLocation) {
    const location = (platformLocation as any).location;
    this.baseUrl = location.origin + location.pathname.replace('index.html', '');
    console.log('baseUrl', this.baseUrl);
  }

  load(name: string) {
    this.project = name;
    this.unityView.loadProject(`${this.baseUrl}assets/${name}/${name}.json`);
  }

  send(objectName: string, methodName: string, messageValue?: any) {
    this.unityView.sendMessageToUnity(objectName, methodName, messageValue);
  }
}
